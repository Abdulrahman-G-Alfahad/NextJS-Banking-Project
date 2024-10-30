"use client";

import { useState } from "react";
import Dropdown from "@/app/filtering/Dropdown";
import TransactionCard from "./TransactionCard";

function FilterTransactions({ transactions, user }) {
  const [filterType, setFilterType] = useState("");

  const handleFilterChange = (selectedFilter) => {
    setFilterType(selectedFilter);
  };

  const filterTransactions = () => {
    if (filterType === "deposit") {
      return transactions.filter(
        (transaction) => transaction.type === "deposit"
      );
    } else if (filterType === "withdraw") {
      return transactions.filter(
        (transaction) => transaction.type === "withdraw"
      );
    } else if (filterType === "transfer") {
      return transactions.filter(
        (transaction) => transaction.type === "transfer"
      );
    } else {
      return transactions;
    }
  };

  const filteredTransactionsList = filterTransactions();

  return (
    <div className="flex flex-col items-center justify-center pt-15 min-h-screen">
      <Dropdown onChange={handleFilterChange} />
      <div className="w-full max-w-[90%] px-6 py-8 flex flex-col items-center">
        <h2 className="text-center text-3xl text-black font-semibold mb-6">
          Transactions
        </h2>
        <div className="flex flex-col flex-grow w-full overflow-auto border border-gray-200 rounded-lg p-4">
          {filteredTransactionsList.length > 0 ? (
            filteredTransactionsList.map((transaction, index) => (
              <TransactionCard
                key={`${transaction._id}-${index}`}
                transaction={transaction}
                user={user}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No transactions found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterTransactions;

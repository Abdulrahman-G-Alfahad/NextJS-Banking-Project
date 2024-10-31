"use client";

import { useState } from "react";
import Dropdown from "@/app/filtering/Dropdown";
import TransactionCard from "./TransactionCard";

function FilterTransactions({ transactions, user }) {
  const [filterType, setFilterType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilterChange = (selectedFilter) => {
    setFilterType(selectedFilter);
  };

  const filterTransactions = () => {
    return transactions.filter((transaction) => {
      const isTypeMatch = filterType ? transaction.type === filterType : true;
      const isWithinDateRange =
        startDate && endDate
          ? new Date(transaction.createdAt.split("T")[0]) >=
              new Date(startDate) &&
            new Date(transaction.createdAt.split("T")[0]) <= new Date(endDate)
          : true;

      return isTypeMatch && isWithinDateRange;
    });
  };

  const filteredTransactionsList = filterTransactions();

  return (
    <div className="flex flex-col items-center justify-center pt-15 min-h-screen">
      {/* Transaction Type Dropdown */}
      <Dropdown onChange={handleFilterChange} />

      {/* Date Range Filters */}
      <div className="flex space-x-4 mt-4 items-center">
        <div className="flex flex-col items-center">
          <label
            htmlFor="start-date"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            From
          </label>
          <input
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 border rounded-lg text-gray-700"
          />
        </div>
        <div className="flex flex-col items-center">
          <label
            htmlFor="end-date"
            className="text-sm font-medium text-gray-700 mb-1"
          >
            To
          </label>
          <input
            id="end-date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 border rounded-lg text-gray-700"
          />
        </div>
      </div>

      {/* Transaction List */}
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

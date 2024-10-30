"use client";

import { useState } from "react";
import TransactionList from "@/components/TransactionList/index";
import Dropdown from "@/app/filtering/Dropdown";

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

  //this supposed to filter transactions make sure it works after the filtering works :)

  //filterTransactions(transactions, filterType);

  let filteredTransactions = filterTransactions();

  // const [transactions, setTransactions] = useState([]);
  // const [filterType, setFilterType] = useState('');
  // const [filteredTransactions, setFilteredTransactions] = useState([]);

  // // const handleFilterChange = (selectedFilter) => {
  // //   setFilterType(selectedFilter);
  // // };

  console.log(filteredTransactions);

  return (
    <div className="flex flex-col items-center justify-center pt-15">
      <Dropdown onChange={handleFilterChange} />
      <div className="min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
        <div className="max-w-[90%] w-full px-6 py-8  max-h-[80%]">
          <h2 className="text-center text-3xl text-black font-semibold mb-6 ">
            Transactions
          </h2>
          <TransactionList transactions={filteredTransactions} user={user} />
        </div>
      </div>
    </div>
  );
}

export default FilterTransactions;

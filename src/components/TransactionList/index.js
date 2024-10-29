import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionList({ transactions }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 ">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction._id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;

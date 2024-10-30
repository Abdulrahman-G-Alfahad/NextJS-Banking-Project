import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionList({ transactions, user }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-1 bg-gradient-to-br from-blue-50 to-teal-50">
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction._id}
            transaction={transaction}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;

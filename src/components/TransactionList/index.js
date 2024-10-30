import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionList({ transactions, user }) {
  return (
    <div>
      <div className="flex flex-col gap-1 items-center justify-center">
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

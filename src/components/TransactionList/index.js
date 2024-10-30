import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionList({ transactions, user }) {
  console.log(transactions);
  return (
    <div>
      <div className="grid grid-cols-1 gap-1 ">
        {transactions.map((transaction, index) => (
          <TransactionCard
            key={transaction._id || index}
            transaction={transaction}
            user={user}
          />
        ))}
      </div>
    </div>
  );
}

export default TransactionList;

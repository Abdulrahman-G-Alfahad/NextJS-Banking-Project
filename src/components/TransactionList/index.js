import React from "react";
import TransactionCard from "./TransactionCard";

function TransactionList({ transactions ,user}) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-1 ">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction._id} transaction={transaction} user={user} />

        
        ))}
      </div>
    </div>
  );
}

export default TransactionList;

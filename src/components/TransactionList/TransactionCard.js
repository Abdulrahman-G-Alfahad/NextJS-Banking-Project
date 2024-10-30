function TransactionCard({ transaction, user }) {
  let amount = (
    <span className="text-green-600 font-semibold">+ {transaction.amount}</span>
  );
  const date = transaction.createdAt.split("T")[0].trim();
  const type = transaction.type;

  if (
    type === "withdraw" ||
    (transaction.from === user._id && type !== "deposit")
  ) {
    amount = (
      <span className="text-red-600 font-semibold">- {transaction.amount}</span>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center border border-gray-200 ">
      <div className="text-center w-full">
        <div className="flex text-lg text-gray-800">
          <span className="flex-1 text-left">{amount}</span>
          <span className="flex-1 text-center">{date}</span>
          <span className="flex-1 text-right capitalize">{type}</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;

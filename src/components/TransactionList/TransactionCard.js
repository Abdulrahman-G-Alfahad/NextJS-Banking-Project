function TransactionCard({ transaction, user }) {
  const isDebit =
    transaction.type === "withdraw" ||
    (transaction.from === user._id && transaction.type !== "deposit");
  const amountClass = isDebit ? "text-red-600" : "text-green-600";
  const amountPrefix = isDebit ? "- " : "+ ";
  const date = new Date(transaction.createdAt).toLocaleDateString();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full max-w-md mx-auto overflow-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              isDebit ? "bg-red-100" : "bg-green-100"
            }`}
          >
            <span className={`text-2xl ${amountClass}`}>
              {isDebit ? "↑" : "↓"}
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-800 capitalize">
              {transaction.type}
            </p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={`font-bold ${amountClass}`}>
            {amountPrefix}
            {transaction.amount} KWD
          </p>
          <p className="text-sm text-gray-500">
            Balance: {transaction.balance} KWD
          </p>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;

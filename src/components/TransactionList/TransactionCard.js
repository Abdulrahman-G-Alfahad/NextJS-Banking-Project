function TransactionCard({ transaction }) {
  return (
    <div className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center">
      <div className="text-center">
        <h3 className="text-lg text-white font-semibold mb-2">
          {transaction.amount} {transaction.createdAt} {transaction.type}
        </h3>
      </div>
    </div>
  );
}

export default TransactionCard;

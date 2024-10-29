import { getUser } from "@/lib/token";

async function TransactionCard({ transaction }) {
  let amount = <span className="text-green-600">+ {transaction.amount}</span>;
  const date = transaction.createdAt.split("T")[0].trim();
  const type = transaction.type;
  const user = await getUser();

  if (
    type === "withdraw" ||
    (transaction.from === user._id && type !== "deposit")
  ) {
    amount = <span className="text-red-600">- {transaction.amount}</span>;
  }

  return (
    <div className="bg-gray-700 p-6 rounded-sm flex flex-col items-center justify-center">
      <div className="text-center w-full">
        <div className="flex text-lg text-white font-semibold">
          <span className="flex-1 text-left">{amount}</span>
          <span className="flex-1 text-center">{date}</span>
          <span className="flex-1 text-right">{type}</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;

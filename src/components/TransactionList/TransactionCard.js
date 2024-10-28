import { getUser } from "@/actions/auth";

async function TransactionCard({ transaction }) {
  let amount = <span className="text-green-600"> {transaction.amount}</span>;
  const date = transaction.createdAt.split("T")[0];
  const type = transaction.type;
  const user = await getUser();

  if (type === "withdraw" || transaction.from === user._id) {
    amount = <span className="text-red-600"> -{transaction.amount}</span>;
  }

  return (
    <div className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center">
      <div className="text-center w-full">
        <div className="flex justify-between text-lg text-white font-semibold">
          <span>{amount}</span>
          <span>{date}</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
}

export default TransactionCard;

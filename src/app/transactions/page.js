import { getTransactions } from "@/actions/auth";
import TransactionList from "@/components/TransactionList/index";

async function Transaction() {
  const transactions = await getTransactions();

  return (
    <div className="min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-[90%] w-full px-6 py-8  max-h-[80%]">
        <h2 className="text-center text-3xl text-black font-semibold mb-6 ">
          Transactions
        </h2>
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default Transaction;

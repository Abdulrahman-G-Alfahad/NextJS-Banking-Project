//import { filteredTransactions } from "@/actions/auth";
import { getTransactions } from "@/actions/auth";
import FilterTransactions from "@/components/FilterTransactions";
import { getUser } from "@/lib/token";

async function Transaction() {
  const transactions = await getTransactions();
  const user = await getUser();

  return <FilterTransactions transactions={transactions} user={user} />;
}

export default Transaction;

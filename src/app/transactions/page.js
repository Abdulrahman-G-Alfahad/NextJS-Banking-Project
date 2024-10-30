//import { filteredTransactions } from "@/actions/auth";
import { getTransactions } from "@/actions/auth";
import FilterTransactions from "@/components/FilterTransactions";
import { getIdUser } from "@/lib/token";

async function Transaction() {
  const transactions = await getTransactions();
  const user = await getIdUser();

  return <FilterTransactions transactions={transactions} user={user} />;
}

export default Transaction;

"use client";
import { useState, useEffect } from "react";
import { getTransactions } from "@/actions/auth";
import FilterTransactions from "@/components/TransactionList/FilterTransactions";
import { getIdUser } from "@/lib/token";
import LoadingSpinner from "@/components/LoadingSpinner";

function Transaction() {
  const [transactions, setTransactions] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const fetchedTransactions = await getTransactions();
      const fetchedUser = await getIdUser();
      setTransactions(fetchedTransactions);
      setUser(fetchedUser);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow">
      <FilterTransactions transactions={transactions} user={user} />
    </div>
  );
}

export default Transaction;

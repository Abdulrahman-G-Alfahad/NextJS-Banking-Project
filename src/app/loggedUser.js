"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Deposit, getTransactions, Withdraw } from "@/actions/auth";
import DepositLink from "@/app/transfer/depositLink";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function HomeScreen({ user }) {
  const router = useRouter();
  const [amount, setAmount] = useState("");
  const [isDeposit, setIsDeposit] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    async function fetchTransactions() {
      setLoading(true); // Start loading
      const allTransactions = await getTransactions();
      setTransactions(allTransactions.slice(-5).reverse()); // Get last 5 transactions
      setLoading(false); // End loading
    }
    fetchTransactions();
  }, []);

  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleSwitchChange = () => setIsDeposit((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);
    if (!amountValue || amountValue <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (isDeposit) {
      user.balance += amountValue;
      Deposit(amountValue);
      alert(`Deposited ${amountValue} KWD. New balance: ${user.balance} KWD`);
    } else {
      if (amountValue > user.balance) {
        alert("Insufficient balance for withdrawal.");
      } else {
        user.balance -= amountValue;
        Withdraw(amountValue);
        alert(`Withdrew ${amountValue} KWD. New balance: ${user.balance} KWD`);
      }
    }
    setAmount("");
  };

  // If loading, return loading spinner
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <LoadingSpinner />
      </div>
    );
  }

  // Main content after loading
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium text-gray-600">Balance</h2>
          </div>
          <div className="text-4xl font-bold text-gray-900">
            {user.balance.toFixed(2)} KWD
          </div>
          <p className="text-xs text-gray-500">Available Balance</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <h2 className="text-xl font-semibold mb-4">Transfer Funds</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="transfer-type"
                className="text-sm font-medium text-gray-700"
              >
                {isDeposit ? "Deposit" : "Withdraw"}
              </label>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="transfer-type"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  checked={!isDeposit}
                  onChange={handleSwitchChange}
                />
                <label
                  htmlFor="transfer-type"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
                Amount
              </label>
              <input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-navy rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              {isDeposit ? "Deposit" : "Withdraw"}
            </button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {transactions.map((transaction, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`mr-2 h-4 w-4 flex items-center justify-center ${
                    transaction.type === "deposit"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type === "deposit" ? "↓" : "↑"}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {transaction.type}
                  </p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {transaction.amount.toFixed(2)} KWD
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <DepositLink user={user} />
      </div>
    </div>
  );
}

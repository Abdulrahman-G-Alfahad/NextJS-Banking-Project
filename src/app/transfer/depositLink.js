"use client";

import { useState } from "react";

export default function DepositLink({ user }) {
  const [amount, setAmount] = useState("");
  const [generatedLink, setGeneratedLink] = useState(null);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleGenerateLink = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // Generate a link with the current user's account and amount
    const link = `${window.location.origin}/transfer?account=${user.username}&amount=${amount}`;
    setGeneratedLink(link);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Generate Transfer Link
      </h2>
      <div className="flex flex-col items-center gap-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Enter Amount for Transfer Link
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          required
        />
        <button
          onClick={handleGenerateLink}
          className="w-full px-4 py-2 text-sm font-medium text-white bg-navy rounded-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          Generate Link
        </button>

        {generatedLink && (
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-2">Share this link:</p>
            <a
              href={generatedLink}
              className="text-sky-600 hover:text-sky-800 break-all"
            >
              {generatedLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

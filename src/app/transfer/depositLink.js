"use client";
import { useState } from "react";
import Input from "@/components/Input";

function DepositLink({ user }) {
  const [amount, setAmount] = useState("");
  const [generatedLink, setGeneratedLink] = useState(null);

  console.log(user);

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
    <div className="rounded-lg shadow-lg p-8 bg-white text-center flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center gap-4">
        <label
          htmlFor="amount"
          className="block text-gray-600 text-sm font-medium"
        >
          Enter Amount for Transfer Link
        </label>
        <Input
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={handleAmountChange}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          required
        />
        <button
          onClick={handleGenerateLink}
          className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors w-full"
        >
          Generate Link
        </button>

        {generatedLink && (
          <div className="mt-4 text-center">
            <p className="text-gray-600">Share this link:</p>
            <a href={generatedLink} className="text-indigo-500 break-all">
              {generatedLink}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepositLink;

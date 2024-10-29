"use client";
import { Withdraw } from "@/actions/auth";
import Input from "@/components/Input";
import { useState } from "react";

function loggedUser({ user }) {
  const [amount, setAmount] = useState("");
  const [isDeposit, setIsDeposit] = useState(true);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSwitchChange = () => {
    setIsDeposit((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);

    if (!amountValue || amountValue <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    //Should i change Alert to popup ?

    if (isDeposit) {
      user.balance += amountValue;
      //alert(`Deposited ${amountValue} KWD. New balance: ${user.balance} KWD`);
    } else {
      if (amountValue > user.balance) {
        alert("Insufficient balance for withdrawal.");
      } else {
        user.balance -= amountValue;
        Withdraw(amountValue);
        alert(`Withdrew ${amountValue} KWD. New balance: ${user.balance} KWD`);
      }
    }

    setAmount(""); // Reset amount field
  };

  return (
    <div className="flex flex-col gap-10 items-center min-h-screen justify-center bg-gray-100">
      {/* Balance Display div */}
      <div className="rounded-lg shadow-lg p-8 bg-white text-center w-[350px] h-[150px] flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg">Your Available Balance:</h1>
        <p className="text-2xl font-semibold text-gray-500">{`${user.balance} KWD`}</p>
      </div>

      {/* Amount box/submit button div */}
      <div className="rounded-lg shadow-lg p-8 bg-white text-center w-[350px] h-[250px] flex flex-col gap-4 items-center">
        <div className="flex items-center gap-4">
          <h1 className="font-semibold">Deposit</h1>

          {/* The label is the switch */}
          <label className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0 peer"
              checked={!isDeposit}
              onChange={handleSwitchChange}
            />
            <span className="absolute cursor-pointer inset-0 bg-gray-300 transition-colors duration-300 peer-checked:bg-gray-500 rounded-full"></span>
            <span className="absolute left-1 top-1 h-4 w-4 bg-white transition-transform duration-300 transform peer-checked:translate-x-6 rounded-full"></span>
          </label>

          <h1 className="font-semibold">Withdraw</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 items-center mt-4"
        >
          <label
            htmlFor="amount"
            className="block text-gray-600 text-sm font-medium"
          >
            Amount
          </label>
          <Input
            name="amount"
            placeholder="Amount"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            type="amount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default loggedUser;

import React from "react";
import { transfer } from "@/actions/auth";
import Input from "../Input";

function MoneyTransferForm({ user }) {
  return (
    <div>
      <form action={transfer}>
        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block text-white text-sm font-medium mb-2"
          >
            Amount
          </label>
          <Input name="amount" type="amount" placeholder="Amount" required />
          <Input type="hidden" name="username" value={user} />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2  text-white rounded-md bg-navy hover:bg-slate-600 transition-colors"
          >
            Transfer
          </button>
        </div>
      </form>
    </div>
  );
}

export default MoneyTransferForm;

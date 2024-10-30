"use client";
import dynamic from "next/dynamic";
import { transfer } from "@/actions/auth";
import Input from "@/components/Input";
//import { getIdUser } from "@/lib/token";
import { redirect, useSearchParams } from "next/navigation";

const getIdUser = dynamic(() =>
  import("@/lib/token").then((mod) => mod.getIdUser)
);

function page() {
  const searchParams = useSearchParams();
  const currentuser = getIdUser();

  const account = searchParams.get("account");
  const amount = searchParams.get("amount");

  if (account === currentuser._id) {
    redirect("/");
  }

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mb-6 w-3/5">
        <form
          className="flex flex-col items-center justify-center"
          action={transfer}
        >
          <h1>
            Would you like to transfer {amount} KWD to {account}
          </h1>
          <Input name="amount" type="hidden" value={amount} required />
          <Input type="hidden" name="username" value={account} />
          <button
            type="submit"
            className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-500 transition-colors justify-center items-center mt-4"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;

import { Suspense } from "react";
import { getAllUsers } from "@/actions/auth";
import UserList from "@/components/UserList";
import LoadingSpinner from "@/components/LoadingSpinner";

export default async function User() {
  const users = await getAllUsers();

  return (
    <div className="min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1] bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-[90%] w-full px-6 py-8 max-h-[80%]">
        <h2 className="text-center text-3xl text-black font-semibold mb-6">
          Users
        </h2>
        <Suspense fallback={<LoadingSpinner />}>
          <UserList users={users} />
        </Suspense>
      </div>
    </div>
  );
}

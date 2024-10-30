"use client";
import { useState, useEffect } from "react";
import { getAllUsers } from "@/actions/auth";
import UserList from "@/components/UserList";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function User() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-[90%] px-6 py-8 flex flex-col items-center">
        <h2 className="text-center text-3xl text-black font-semibold mb-6">
          Users
        </h2>
        <div className="flex-grow w-full overflow-auto border border-gray-200 rounded-lg p-4">
          <UserList users={users} />
        </div>
      </div>
    </div>
  );
}

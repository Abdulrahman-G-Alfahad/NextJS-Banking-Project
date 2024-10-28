import { getAllUsers } from "@/actions/auth";
import UserList from "@/components/UserList/index";

async function User() {
  const users = await getAllUsers();

  return (
    <div className="bg-gray-900 min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-gray-800 rounded-md shadow-md max-h-[80%]">
        <h2 className="text-3xl text-white font-semibold mb-6 ">Users</h2>
        <UserList users={users} />
      </div>
    </div>
  );
}

export default User;

import Image from "next/image";
import MoneyTransferForm from "./modal";
import { baseUrl } from "@/actions/config";

function UserCard({ user }) {
  const imageUrl = user.image
    ? `${baseUrl}/${user.image.trimEnd()}`
    : "https://humanrightsrilanka.org/wp-content/uploads/2019/04/iStock-476085198.jpg";

  return (
    <div className="bg-seasalt p-6 rounded-md flex flex-col items-center justify-center shadow-md border border-gray-200">
      <Image
        src={imageUrl}
        alt={user.name || "User"}
        width={96}
        height={96}
        className="w-24 h-24 rounded-full mb-4"
      />
      <div className="text-center">
        <h3 className="text-lg text-gray-800 font-semibold mb-2">
          {user.username}
        </h3>
        <p className="text-gray-600 mb-4">{`${user.balance} KD`}</p>{" "}
        {/* Added mb-4 for spacing */}
        <input
          type="checkbox"
          id={`modal-toggle-${user._id}`}
          className="hidden peer"
        />
        <label
          htmlFor={`modal-toggle-${user._id}`}
          className="px-4 py-2 bg-navy hover:bg-slate-600 text-white rounded-md cursor-pointer transition-colors duration-200"
        >
          Transfer
        </label>
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto">
          <div className="bg-white p-6 rounded-md shadow-md relative w-full max-w-md mx-4">
            <label
              htmlFor={`modal-toggle-${user._id}`}
              className="absolute top-2 right-2 text-red-500 cursor-pointer font-bold text-lg"
            >
              &times;
            </label>
            <MoneyTransferForm user={user.username} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;

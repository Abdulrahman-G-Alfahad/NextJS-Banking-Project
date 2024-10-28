import Image from "next/image";
import MoneyTransferForm from "./modal";

function UserCard({ user }) {
  console.log(user);
  let image = (
    <Image
      src="https://cdn.pixabay.com/photo/2024/04/28/05/16/animal-8724816_640.jpg"
      alt={`puppy ${user.name}`}
      width={96}
      height={96}
      className="w-24 h-24 rounded-full mb-4"
    />
  );
  if (user.image) {
    image = (
      <Image
        src={`/${user.image}`.trimEnd()}
        alt={user.name || "User"}
        width={96}
        height={96}
        className="w-24 h-24 rounded-full mb-4"
      />
    );
  }
  return (
    <div className="bg-gray-700 p-6 rounded-md flex flex-col items-center justify-center">
      {image}
      <div className="text-center">
        <h3 className="text-lg text-white font-semibold mb-2">
          {user.username}
        </h3>
        <p className="text-gray-300">{user.balance}</p>
        <MoneyTransferForm user={user} />
      </div>
    </div>
  );
}

export default UserCard;

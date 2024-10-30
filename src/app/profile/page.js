"use server";
import { getUser } from "@/actions/auth";
import { baseUrl } from "@/actions/config";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

async function ProfilePage() {
  const user = await getUser();

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-200 to-teal-200 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Profile Page</h1>
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-2xl p-8 mb-8 w-full max-w-md">
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          {user.username}
        </p>
        <p className="text-xl font-semibold text-gray-600">
          Balance: KWD {user.balance}
        </p>
      </div>
      <ImageUpload initialImage={`${baseUrl}/${user.image}`} />
    </div>
  );
}

export default ProfilePage;

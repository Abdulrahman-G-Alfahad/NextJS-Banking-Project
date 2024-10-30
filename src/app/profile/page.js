"use server";
import { getUser } from "@/actions/auth";
import { baseUrl } from "@/actions/config";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

async function ProfilePage() {
  const user = await getUser();

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mb-6">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
          Profile Page
        </h1>
        <div>
          <p className="text-xl font-semibold text-gray-800">{user.username}</p>
          <p className="text-xl font-semibold text-gray-600">
            Balance: ${user.balance}
          </p>
        </div>
        <ImageUpload initialImage={`${baseUrl}/${user.image}`} />
      </div>
    </div>
  );
}

export default ProfilePage;

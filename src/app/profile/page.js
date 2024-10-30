"use server";
import { getUser } from "@/actions/auth";
import { baseUrl } from "@/actions/config";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

async function ProfilePage() {
  const user = await getUser();

  return (
    <div className="flex flex-col items-center p-8 mt-16 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Welcome {user.username}
      </h1>
      <ImageUpload
        initialImage={`${baseUrl}/${user.image}`}
        balance={user.balance}
      />
    </div>
  );
}

export default ProfilePage;

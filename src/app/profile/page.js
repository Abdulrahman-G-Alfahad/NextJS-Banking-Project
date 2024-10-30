"use server";
import { getUser } from "@/actions/auth";
import { baseUrl } from "@/actions/config";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

async function ProfilePage() {
  const user = await getUser();

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold mb-5">Profile Page</h1>
      <div className="flex flex-col items-center mb-5">
        <p className="text-lg font-bold">{user.username}</p>
        <p className="text-lg font-bold">Balance: ${user.balance}</p>
      </div>
      <ImageUpload initialImage={`${baseUrl}/${user.image}`} />
    </div>
  );
}

export default ProfilePage;

//"use client";
// //import { useState } from "react";

// import Image from "next/image";
// import { getUser } from "@/actions/auth";
// import { baseUrl } from "@/actions/config";

// async function ProfilePage() {
//   //   const [profileName, setProfileName] = useState("");
//   //   const [balance, setBalance] = useState([]);
//   //   const [profilePicture, setProfilePicture] = useState(null);
//   //const [showPicture, setShowPicture] = useState(true);
//   const user = await getUser();

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setProfilePicture(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };
//   const handleSave = () => {
//     alert("Profile saved!");
//   };

//   return (
//     <div className="flex flex-col items-center p-5">
//       <h1 className="text-2xl font-bold mb-5">Profile Page</h1>
//       <div className="flex flex-col items-center mb-5">
//         {/* <h2 className="text-xl font-bold">{profileName}</h2> */}
//         <p className="text-lg font-bold">{user.username}</p>
//         <p className="text-lg font-bold">Balance: ${user.balance}</p>
//       </div>
//       <div className="flex flex-col items-center">
//         <div className="mt-4 mb-5">
//           {showPicture && user.image ? (
//             <img
//               src={`${baseUrl}/ ${user.image}`}
//               alt="Profile Picture"
//               className="w-36 h-36 rounded-full"
//             />
//           ) : (
//             <div className="w-36 h-36 rounded-full bg-gray-300" />
//           )}
//         </div>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           accept="image/*"
//           className="mt-4 border border-gray-300 rounded p-2 cursor-pointer w-48"
//         />
//         <button
//           onClick={handleSave}
//           className="mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;
 "use server";
import { getUser } from "@/actions/auth";
import { baseUrl } from "@/actions/config";
import ImageUpload from "@/components/ImageUpload/ImageUpload";

async function ProfilePage() {
  const user = await getUser();

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-100 to-teal-100 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
        Profile Page
      </h1>
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mb-6">
        <p className="text-xl font-semibold text-gray-800">{user.username}</p>
        <p className="text-xl font-semibold text-gray-600">
          Balance: ${user.balance}
        </p>
      </div>
      <ImageUpload initialImage={`${baseUrl}/${user.image}`} />
    </div>
  );
}

export default ProfilePage;

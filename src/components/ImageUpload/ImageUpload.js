"use client";
import { UploadImage } from "@/actions/auth";
import Input from "@/components/Input";
//import { useState } from "react";
function ImageUpload({ initialImage }) {
  //const [profilePicture, setProfilePicture] = useState(initialImage);
  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => setProfilePicture(reader.result);
  //     reader.readAsDataURL(file);
  //     setProfilePicture(file);
  //   }
  // };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 mb-5">
        {initialImage ? (
          <img
            src={initialImage}
            alt="Profile"
            className="w-36 h-36 rounded-full"
          />
        ) : (
          <div className="w-36 h-36 rounded-full bg-gray-300" />
        )}
      </div>
      <form action={UploadImage}>
        <Input
          type="file"
          name="image"
          className="mt-4 border border-gray-300 rounded p-2 cursor-pointer w-48"
          required
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default ImageUpload;

"use client";
import { UploadImage } from "@/actions/auth";
import Input from "@/components/Input";

function ImageUpload({ initialImage, balance }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-xs w-full">
      <p className="text-xl font-semibold text-gray-600">
        Balance: KWD {balance}
      </p>
      <div className="mt-4 mb-5">
        {initialImage ? (
          <img
            src={initialImage}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover shadow-md"
          />
        ) : (
          <div className="w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center shadow-md" />
        )}
      </div>
      <form action={UploadImage} className="flex flex-col items-center w-full">
        <Input
          type="file"
          name="image"
          className="mt-2 border border-gray-300 rounded-md p-2 cursor-pointer w-full text-gray-700 file:bg-blue-500 file:text-white file:rounded file:px-4 file:py-2"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-navy hover:bg-slate-600 text-white rounded-md p-2 cursor-pointer w-full transition duration-300 "
        >
          save
        </button>
      </form>
    </div>
  );
}

export default ImageUpload;

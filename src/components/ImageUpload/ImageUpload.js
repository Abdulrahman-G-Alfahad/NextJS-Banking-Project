"use client";
import { getUser, ImageUpload } from "@/actions/auth";
async function ImageUpload() {
  const user = await getUser();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
      ImageUpload(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 mb-5">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Profile"
            className="w-36 h-36 rounded-full"
          />
        ) : (
          <div className="w-36 h-36 rounded-full bg-gray-300" />
        )}
      </div>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="mt-4 border border-gray-300 rounded p-2 cursor-pointer w-48"
      />
    </div>
  );
}

export default ImageUpload;

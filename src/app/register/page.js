import { register } from "@/actions/auth";
import Input from "@/components/Input";

function Register() {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
        <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
        <form action={register}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm font-medium mb-2"
            >
              User Name
            </label>
            <Input type="username" name="username" required />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-2"
            >
              Password
            </label>
            <Input type="password" name="password" required />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-white text-sm font-medium mb-2"
            >
              Profile Image
            </label>
            <input
              type="file"
              name="image"
              className="w-full py-2 text-white rounded-md"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

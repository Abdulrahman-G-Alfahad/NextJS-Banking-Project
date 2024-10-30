//"use client";
// import { useFormState, useFormStatus } from "react-dom";
// import { register } from "@/actions/auth";
// import Input from "@/components/Input";

// function Register() {
//   const [state, action] = useFormState(register, undefined);

//   return (
//     <div className="bg-slate-100 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
//       <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
//         <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
//         <form action={register}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-white text-sm font-medium mb-2"
//             >
//               User Name
//             </label>
//             <Input type="username" name="username" required />
//           </div>
//           {state?.errors?.username && <p>{state.errors.name}</p>}

//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-white text-sm font-medium mb-2"
//             >
//               Password
//             </label>
//             <Input type="password" name="password" required />
//           </div>
//           {state?.errors?.password && (
//             <div>
//               <p>Password must:</p>
//               <ul>
//                 {state.errors.password.map((error) => (
//                   <li key={error}>- {error}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <div className="mb-6">
//             <label
//               htmlFor="image"
//               className="block text-white text-sm font-medium mb-2"
//             >
//               Profile Image
//             </label>
//             <input
//               type="file"
//               name="image"
//               className="w-full py-2 text-white rounded-md"
//               required
//             />
//           </div>
//           {state?.errors?.image && (
//             <div>
//               <p>Image must:</p>
//               <ul>
//                 {state.errors.image.map((error) => (
//                   <li key={error}>- {error}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           <div className="flex justify-center">
//             <SubmitButton />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

// function SubmitButton() {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       disabled={pending}
//       type="submit"
//       className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
//     >
//       Register
//     </button>
//   );
// }

// import { useActionState } from "react-dom";
// import { register } from "@/actions/auth";
// import Input from "@/components/Input";

// function Register() {
//   const [state] = useActionState(register);

//   return (
//     <div className="bg-slate-100 min-h-screen flex items-center justify-center absolute inset-0 z-[-1]">
//       <div className="max-w-md w-full px-6 py-8 bg-gray-800 rounded-md shadow-md">
//         <h2 className="text-3xl text-white font-semibold mb-6">Register</h2>
//         <form action={register}>
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-white text-sm font-medium mb-2"
//             >
//               User Name
//             </label>
//             <Input type="text" name="username" required />
//           </div>
//           {state?.errors?.username && (
//             <p className="text-red-500">{state.errors.username}</p>
//           )}

//           <div className="mb-4">
//             <label
//               htmlFor="password"
//               className="block text-white text-sm font-medium mb-2"
//             >
//               Password
//             </label>
//             <Input type="password" name="password" required />
//           </div>
//           {state?.errors?.password && (
//             <div className="text-red-500">
//               <p>Password must:</p>
//               <ul>
//                 {state.errors.password.map((error) => (
//                   <li key={error}>- {error}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <div className="mb-6">
//             <label
//               htmlFor="image"
//               className="block text-white text-sm font-medium mb-2"
//             >
//               Profile Image
//             </label>
//             <input
//               type="file"
//               name="image"
//               className="w-full py-2 text-white rounded-md"
//               required
//             />
//           </div>
//           {state?.errors?.image && (
//             <div className="text-red-500">
//               <p>Image must:</p>
//               <ul>
//                 {state.errors.image.map((error) => (
//                   <li key={error}>- {error}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           <div className="flex justify-center">
//             <SubmitButton />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;

//Original no zod
import { register } from "@/actions/auth";
import Input from "@/components/Input";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-6 py-8 bg-seasalt rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-3xl text-gray-800 font-semibold mb-6 text-center">
          Register
        </h2>
        <form action={register}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              User Name
            </label>
            <Input type="text" name="username" required />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Password
            </label>
            <Input type="password" name="password" required />
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              Profile Image
            </label>
            <input
              type="file"
              name="image"
              className="w-full py-2 text-gray-800 bg-white rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
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

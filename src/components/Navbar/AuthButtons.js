import { getUser } from "@/lib/token";
import NavLink from "./NavLink.js";
import { logout } from "@/actions/auth";

async function AuthButtons() {
  const user = await getUser();

  if (user)
    return (
      <button
        type="button"
        onClick={logout}
        className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    );

  return (
    <>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </>
  );
}

export default AuthButtons;

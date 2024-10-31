import { useState, useEffect } from "react";
import { getIdUser } from "@/lib/token";
import NavLink from "./NavLink.js";
import { logout } from "@/actions/auth";

function AuthButtons() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const fetchedUser = await getIdUser();
    setUser(fetchedUser);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    fetchUser();
  };

  return user ? (
    <button
      type="button"
      onClick={handleLogout}
      className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
    >
      Logout
    </button>
  ) : (
    <>
      <NavLink href="/login">Login</NavLink>
      <NavLink href="/register">Register</NavLink>
    </>
  );
}

export default AuthButtons;

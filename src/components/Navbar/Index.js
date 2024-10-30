import Link from "next/link";
import AuthButtons from "./AuthButtons";
import NavLink from "./NavLink";

async function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-gray-300 to-gray-100 shadow-lg py-4 sticky top-0 z-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="font-bold text-2xl text-indigo-600">NAS</span>
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="flex space-x-6">
              <NavLink href="/" className="rounded-lg px-4 py-2">
                Home
              </NavLink>
              <NavLink href="/transactions" className="rounded-lg px-4 py-2">
                Transactions
              </NavLink>
              <NavLink href="/users" className="rounded-lg px-4 py-2">
                Users
              </NavLink>
              <NavLink href="/profile" className="rounded-lg px-4 py-2">
                Profile
              </NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <AuthButtons />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ children, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        isActive
          ? "text-indigo-600 bg-indigo-100"
          : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
      } px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}

export default NavLink;

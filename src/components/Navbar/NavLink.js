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
          ? "text-navy bg-slate-100"
          : "text-gray-700 hover:bg-slate-200 hover:text-navy"
      } px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}

export default NavLink;

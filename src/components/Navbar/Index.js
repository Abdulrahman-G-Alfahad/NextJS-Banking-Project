"use client";
import { useState } from "react";
import Link from "next/link";
import AuthButtons from "./AuthButtons";
import NavLink from "./NavLink";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-gray-300 to-gray-100 shadow-lg sticky top-0 z-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <span className="font-bold text-2xl text-goldenrod">NAS</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-6">
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

          {/* Auth Buttons and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <AuthButtons />
            </div>
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-1">
            <NavLink
              href="/"
              className="block rounded-lg px-4 py-2 text-center"
            >
              Home
            </NavLink>
            <NavLink
              href="/transactions"
              className="block rounded-lg px-4 py-2 text-center"
            >
              Transactions
            </NavLink>
            <NavLink
              href="/users"
              className="block rounded-lg px-4 py-2 text-center"
            >
              Users
            </NavLink>
            <NavLink
              href="/profile"
              className="block rounded-lg px-4 py-2 text-center"
            >
              Profile
            </NavLink>
            <div className="flex justify-center mt-4">
              <AuthButtons />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

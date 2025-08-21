import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / Brand */}
      <Link href="/" className="text-xl font-bold">
        Glamorous Make-up By Achol
      </Link>

      {/* Links */}
      <div className="flex space-x-6 items-center">
        <Link href="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-400">
          Products
        </Link>
        <Link href="/login" className="hover:text-blue-400">
          Log-in{" "}
        </Link>
        {/* {session && (
          <Link href="/dashboard/add-product" className="hover:text-blue-400">
            Add Product
          </Link>
        )} */}
      </div>

      {/* Auth Section
      <div>
        {session ? (
          <div className="flex items-center space-x-3">
            <span className="text-sm">Hi, {session.user?.name}</span>
            <button
              onClick={() => signOut()}
              className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500"
          >
            Login
          </button>
        )}
      </div> */}
    </nav>
  );
}

"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const isUser = !!session;

  // console.log(isUser);

  return (
    <div>
      <header className="sticky top-0 z-50 px-4 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 shadow-lg text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <Link href="/">
              <img
                className="w-14 rounded-full border-2 border-white"
                src="/logo.png"
                alt="Logo"
              />{" "}
            </Link>
            <h1 className="font-bold text-2xl">Fruit Store</h1>
          </div>
          <div className="flex items-center space-x-5 font-semibold">
            <Link
              href="/"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-yellow-300 transition-colors duration-300"
            >
              Products
            </Link>
            {isUser && (
              <>
                <Link
                  href="/dashboard/add-product"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold transition-all duration-300"
                >
                  Sign Out
                </button>
              </>
            )}

            {!isUser && (
              <>
                <Link
                  href="/login"
                  className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-lg font-bold transition-all duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-lg font-bold transition-all duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

"use client";
import React from "react";
import Link from "next/link";

export default function No_Data() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      {/* Cute Illustration */}
      <img
        src="/no-data.png" // Use any cute image or emoji
        alt="No Data Found"
        className="w-64 mb-6 animate-bounce"
      />

      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
        Oops! Nothing Here
      </h1>

      <p className="text-gray-600 text-center mb-6 max-w-md">
        We couldn't find any products right now. Please check back later or
        explore other categories.
      </p>

      <Link
        href="/"
        className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
}

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-white">MyStore</h2>
          <p className="text-sm mt-3">
            Your trusted store for amazing products. Browse, buy, and manage
            with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-400">
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/add-product"
                className="hover:text-blue-400"
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-400">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="text-sm mt-3">Email: support@mystore.com</p>
          <div className="flex space-x-4 mt-3">
            <Link href="#" className="hover:text-blue-400">
              Twitter
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Facebook
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}

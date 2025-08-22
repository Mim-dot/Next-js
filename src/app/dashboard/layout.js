import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="">
      <div className="grid grid-cols-12 mx-auto ">
        <div className="col-span-2 bg-gray-300 p-10">
          <Link
            className="font-bold text-2xl underline"
            href="/dashboard/add-product"
          >
            Add Product
          </Link>
        </div>
        <div className="col-span-9 p-10">{children}</div>
      </div>
    </div>
  );
}

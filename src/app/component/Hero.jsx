import React from "react";

export default function Hero() {
  return (
    <div>
      <section className="h-[50vh] flex items-center justify-center bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">
          Welcome to Glamorous Make-up By Achol
        </h1>
      </section>

      {/* Product Highlights */}
      <section className="p-10 grid grid-cols-3 gap-4">
        <div className="p-4 border rounded">Fast Delivery</div>
        <div className="p-4 border rounded">Top Products</div>
        <div className="p-4 border rounded">Secure Checkout</div>
      </section>
    </div>
  );
}

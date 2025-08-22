"use client";

import Loader from "@/app/components/Loader";
import No_Data from "@/app/components/No_Data";
import React, { useEffect, useState } from "react";

export default function SingleProduct({ params: paramsProp }) {
  // Unwrap params if it's a promise
  const params = React.use(paramsProp);
  const { id } = params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError("");
      try {
        // Use relative API route or env variable
        const API_URL = process.env.NEXTAUTH_URL || ""; // e.g., https://your-backend.com
        const res = await fetch(`${API_URL}/api/product/${id}`, {
          cache: "no-store",
        });

        if (!res.ok) {
          setError("Product not found!");
          setProduct(null);
          return;
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError("Failed to fetch product.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error)
    return <div className="text-center mt-20 text-gray-700">{error}</div>;
  if (!product) return <No_Data />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full overflow-hidden">
        {/* Product Image */}
        <div className="h-64 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-gray-600 text-sm line-clamp-3">
            {product.description}
          </p>
          <p className="text-gray-500 text-sm">Category: {product.category}</p>
          <p className="text-green-600 font-semibold text-lg">
            ${product.price}
          </p>

          {/* Features */}
          {product.features?.length > 0 && (
            <div>
              <h2 className="text-gray-700 font-semibold text-sm mb-1">
                Features:
              </h2>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {product.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Back Button */}
          <a
            href="/products"
            className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center font-medium transition"
          >
            Back to Products
          </a>
        </div>
      </div>
    </div>
  );
}

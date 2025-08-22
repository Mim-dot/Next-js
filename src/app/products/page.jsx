"use client";
import { getMethod } from "@/services/product";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "@/app/components/Loader"; // Your loader component
import No_Data from "@/app/components/No_Data"; // Your cute no data component

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const data = await getMethod();
        if (!data || data.length === 0) {
          setProducts([]);
        } else {
          setProducts(data);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <Loader />;
  if (error)
    return <div className="text-center mt-20 text-gray-700">{error}</div>;
  if (products.length === 0) return <No_Data />;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Product List Page
      </h2>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-3xl shadow-md p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          >
            {/* Product Image */}
            <div className="overflow-hidden rounded-2xl mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Info */}
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {product.name}
            </h2>
            <p className="text-gray-600 mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-lg font-bold text-green-600 mb-4">
              ${product.price}
            </p>

            {/* View More Button */}
            <Link
              href={`/products/${product._id}`}
              className="inline-block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

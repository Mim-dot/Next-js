"use client";
import { getMethod } from "@/services/product";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Loader from "@/app/components/Loader"; // Your Loader component

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loader state
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const data = await getMethod();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <Loader />; // Show loader while fetching
  if (error)
    return <div className="text-center mt-20 text-gray-700">{error}</div>;
  if (!products || products.length === 0)
    return (
      <div className="text-center mt-20 text-gray-700">No Products Found!</div>
    );

  return (
    <div className="p-6">
      {/* Section Header */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Product Highlights
      </motion.h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            {/* Product Info */}
            <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-500 text-sm mt-1">
              Category: {product.category}
            </p>
            <p className="text-lg font-semibold text-green-600 mt-2">
              ${product.price}
            </p>

            {/* Features */}
            <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
              {product.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            {/* View more button */}
            <Link
              href={`/products/${product._id}`}
              className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              View More
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

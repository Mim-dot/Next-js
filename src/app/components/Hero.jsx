"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="relative max-w-7xl mx-auto px-4 py-14 bg-gradient-to-r from-green-400 via-yellow-300 to-red-400 text-white rounded-xl overflow-hidden"
      style={{ height: "70vh" }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/banneeerr.jpg')] bg-center bg-cover opacity-30"></div>

      {/* Centered frosted glass text */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          className="bg-white bg-opacity-30 backdrop-blur-lg px-10 py-8 rounded-2xl border border-white border-opacity-20 max-w-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 drop-shadow-sm">
            Fresh & Juicy Fruits
          </h1>
          <p className="text-lg md:text-2xl mb-6 text-gray-800 drop-shadow-sm">
            Discover the best quality fruits at unbeatable prices
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg hover:bg-green-700 transition duration-300"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

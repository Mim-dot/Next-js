"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import addProduct from "@/services/product";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/register");
    }
  }, [status, router]);

  if (status === "loading")
    return <p className="text-center mt-10">Loading...</p>;

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const productData = {
        ...data,
        features: data.features
          .split("\n")
          .map((f) => f.trim())
          .filter((f) => f.length > 0),
      };

      await addProduct(productData);

      Swal.fire({
        icon: "success",
        title: "Product added!",
        text: "Your product has been added successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      reset();
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to add product.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-gray-900 rounded-3xl shadow-2xl text-white mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block mb-2 font-medium">Product Name</label>
          <input
            type="text"
            {...register("name", { required: "Product name is required" })}
            className={`w-full p-3 rounded-xl bg-gray-800 border focus:border-blue-500 focus:ring focus:ring-blue-300 outline-none ${
              errors.name ? "border-red-500" : "border-gray-700"
            }`}
            placeholder="Enter product name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className={`w-full p-3 rounded-xl bg-gray-800 border focus:border-blue-500 focus:ring focus:ring-blue-300 outline-none ${
              errors.description ? "border-red-500" : "border-gray-700"
            }`}
            placeholder="Enter product description"
            rows={4}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Price & Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Price ($)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price must be positive" },
              })}
              className={`w-full p-3 rounded-xl bg-gray-800 border focus:border-blue-500 focus:ring focus:ring-blue-300 outline-none ${
                errors.price ? "border-red-500" : "border-gray-700"
              }`}
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Category</label>
            <input
              type="text"
              {...register("category")}
              className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-300 outline-none"
              placeholder="Enter category"
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-medium">Image URL</label>
          <input
            type="url"
            {...register("image")}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-300 outline-none"
            placeholder="Enter image URL"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block mb-2 font-medium">
            Product Features (one per line)
          </label>
          <textarea
            {...register("features")}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-300 outline-none"
            placeholder={`e.g.\n- Lightweight design\n- Waterproof\n- 2 year warranty`}
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-2xl font-semibold shadow-lg transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}

// import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";
// import React from "react";

// export default async function page({ params }) {
//   const p = await params;
//   //console.log(p);
//   const servicesCollection = await dbConnect(
//     collectionNamesObj.servicesCollection
//   );
//   const product = await servicesCollection.find({ _id: new ObjectId(p._id) });
//   console.log(product);
//   return (
//     <div className="product-details">
//       <h1>{product.name}</h1>
//       <p>
//         <strong>Brand:</strong> {product.brand}
//       </p>
//       <p>
//         <strong>Price:</strong> ${product.price}
//       </p>
//       <p>
//         <strong>Weight:</strong> {product.weight_gm} gm
//       </p>
//       <p>
//         <strong>Expiring Date:</strong>{" "}
//         {new Date(product.expiring_date).toLocaleDateString()}
//       </p>
//       <img src={product.image} alt={product.name} width={200} />
//       <p>
//         <strong>Created At:</strong>{" "}
//         {new Date(product.createdAt).toLocaleString()}
//       </p>
//       <p>
//         <strong>Updated At:</strong>{" "}
//         {new Date(product.updatedAt).toLocaleString()}
//       </p>
//     </div>
//   );
// }
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

export default async function page({ params }) {
  const { id } = params; // route param
  const servicesCollection = await dbConnect(
    collectionNamesObj.servicesCollection
  );

  // Find one product
  const product = await servicesCollection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex justify-center items-start mt-10 px-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/3 rounded-lg object-cover shadow-md"
        />

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {product.name}
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Price:</span> ${product.price}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Weight:</span> {product.weight_gm}{" "}
            gm
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Expiring Date:</span>{" "}
            {new Date(product.expiring_date).toLocaleDateString()}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Created At:</span>{" "}
            {new Date(product.createdAt).toLocaleString()}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Updated At:</span>{" "}
            {new Date(product.updatedAt).toLocaleString()}
          </p>

          <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

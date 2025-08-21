// import dbConnect from "@/lib/dbConnect";
// import React from "react";

// export default async function Page() {
//   const productsCollection = await dbConnect("products");
//   const products = await productsCollection.find({}).toArray();

//   console.log(products); // check in terminal

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <ul className="space-y-3">
//         {products.map((p) => (
//           <li key={p._id} className="border p-4 rounded">
//             <h2 className="text-lg font-semibold">{p.name}</h2>
//             <p>💰 ${p.price}</p>
//             <p>📅 Expiring: {p.expiring_date}</p>
//             <p>⚖️ {p.weight_gm} gm</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import React from "react";
import { format } from "date-fns"; // to format dates nicely
import Link from "next/link";

export default async function Page() {
  // const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
  // const products = await servicesCollection.find({}).toArray();
  // Add `await` here!
  const servicesCollection = await dbConnect(
    collectionNamesObj.servicesCollection
  );

  // Now .find() works
  const products = await servicesCollection.find({}).toArray();
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Products</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li
            key={product._id}
            className="border shadow-md rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-700 mb-2">
                {product.description || "No description available."}
              </p>
              <p className="text-gray-800 font-medium mb-1">
                💰 Price: ${product.price}
              </p>
              <p className="text-gray-600 mb-1">
                ⚖️ Weight: {product.weight_gm} gm
              </p>
              <p className="text-gray-600 mb-1">
                📅 Expiring:{" "}
                {product.expiring_date
                  ? format(new Date(product.expiring_date), "dd MMM yyyy")
                  : "N/A"}
              </p>
              <p
                className={`font-semibold ${
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.stock > 0
                  ? `In Stock: ${product.stock}`
                  : "Out of Stock"}
              </p>
            </div>
            <Link
              href={`/product/${product._id}`}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

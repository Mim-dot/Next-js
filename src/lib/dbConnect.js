import { MongoClient, ServerApiVersion } from "mongodb";
export const collectionNamesObj = { servicesCollection: "products" };
const uri = process.env.MONGOURI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// Use a global variable to cache the connection
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

// default export
export default async function dbConnect(collectionName) {
  const client = await clientPromise;
  return client.db(process.env.DB_NAME).collection(collectionName);
}

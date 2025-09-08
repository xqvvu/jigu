import type { Document } from "mongodb";
import type { CollectionName } from "@/libs/collection-names";
import consola from "consola";
import { MongoClient } from "mongodb";
import { MONGO_COLLECTION_NAMES } from "@/libs/collection-names";

let mongoClient: MongoClient | null = null;

export async function connectMongo() {
  try {
    if (!Bun.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is required");
    }

    if (mongoClient) {
      return mongoClient;
    }

    mongoClient = new MongoClient(Bun.env.MONGODB_URI);
    await mongoClient.connect();
    consola.success("MongoDB has been connected");

    return mongoClient;
  }
  catch (error) {
    consola.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export function getMongo(): MongoClient {
  if (!mongoClient) {
    throw new Error("MongoDB client is not initialized. Please call initializeDatabase() first");
  }

  return mongoClient;
}

export function getDb() {
  return getMongo().db();
}

export function getCollection<T extends Document = Document>(name: CollectionName) {
  return getDb().collection<T>(MONGO_COLLECTION_NAMES[name]);
}

export async function closeMongoClient() {
  if (mongoClient) {
    try {
      await mongoClient.close();
      mongoClient = null;
      consola.success("MongoDB client has been closed");
    }
    catch (error) {
      consola.error("Failed to close MongoDB client:", error);
      throw error;
    }
  }
}

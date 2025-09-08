export const MONGO_COLLECTION_NAMES = {
  scripts: "scripts",
} as const;

export type CollectionName = keyof typeof MONGO_COLLECTION_NAMES;

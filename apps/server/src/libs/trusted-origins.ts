import consola from "consola";

export function parseTrustedOrigins(): string[] {
  if (!Bun.env.TRUSTED_ORIGINS) {
    throw new Error("TRUSTED_ORIGINS is required");
  }

  try {
    return JSON.parse(Bun.env.TRUSTED_ORIGINS) as string[];
  }
  catch (error) {
    consola.error("Failed to parse trusted origins:", error);
    throw error;
  }
}

export const trustedOrigins = parseTrustedOrigins();

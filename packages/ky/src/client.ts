import type { KyInstance } from "ky";
import ky from "ky";
import { beforeRequestCheckToken } from "./hooks";

/**
 * @default prefixUrl "/api"
 * @param prefixUrl Base URL
 * @returns ky instance
 */
export function createKyClient(prefixUrl?: string): KyInstance {
  return ky.extend({
    prefixUrl: prefixUrl || "/api",
    hooks: {
      beforeRequest: [beforeRequestCheckToken],
    },
  });
}

import type { KyInstance } from "ky";
import ky from "ky";
import { DEFAULT_PREFIX_URL, TIMEOUT } from "@/constants";
import { beforeRequestCheckToken } from "@/hooks";

/**
 * @default prefixUrl "/api"
 * @param prefixUrl Base URL
 * @returns ky instance
 */
export function createWebKy(prefixUrl?: string): KyInstance {
  return ky.extend({
    prefixUrl: prefixUrl || DEFAULT_PREFIX_URL,
    hooks: {
      beforeRequest: [beforeRequestCheckToken],
    },
    timeout: TIMEOUT,
    retry: 0, // Retry will rely on Tanstack Query
  });
}

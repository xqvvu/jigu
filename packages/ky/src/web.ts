import type { KyInstance } from "ky";
import ky from "ky";
import { DEFAULT_PREFIX_URL, TIMEOUT } from "@/constants";
import {
  afterResponseDestructureResult,
  beforeRequestCheckToken,
} from "@/hooks";

/**
 * @default prefixUrl "/api"
 * @param prefixUrl Base URL
 * @returns `ky` instance
 */
export function createWebKy(prefixUrl?: string): KyInstance {
  return ky.extend({
    prefixUrl: prefixUrl || DEFAULT_PREFIX_URL,
    hooks: {
      beforeRequest: [beforeRequestCheckToken],
      afterResponse: [afterResponseDestructureResult],
    },
    timeout: TIMEOUT,
    retry: 0, // Retry will rely on Tanstack Query
  });
}

export type { Result } from "@/types";

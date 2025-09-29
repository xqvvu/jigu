import { type Result } from "@jigu/ky/server";

/**
 * Result helper
 */
export const R = {
  /**
   * Success result
   */
  ok<T = unknown>(
    data: T,
    code: number = 0,
    message: string = "success",
  ): Result<T> {
    return {
      status: "ok",
      message,
      code,
      data,
    };
  },

  /**
   * Error result
   */
  fail(errcode: number = -1, errmsg = "unknown error"): Result {
    return {
      status: "fail",
      errcode,
      errmsg,
    };
  },
};

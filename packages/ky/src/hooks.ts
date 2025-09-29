import type { AfterResponseHook, BeforeRequestHook } from "ky";
import type { Result } from "@/types";

export const beforeRequestCheckToken: BeforeRequestHook = () => {
  // TODO: check token
};

export const afterResponseDestructureResult: AfterResponseHook = async (
  _request,
  _options,
  response,
) => {
  if (
    response.status === 204 ||
    !response.headers.get("content-type")?.includes("application/json")
  ) {
    return response;
  }

  // biome-ignore lint/suspicious/noExplicitAny: any data type is acceptable
  const result: Result<any> = await response.json(); // `.json()` will consume the response's body
  if (result.status === "ok") {
    return new Response(JSON.stringify(result.data), {
      status: response.status,
      statusText: response.statusText,
      headers: new Headers(response.headers),
    });
  }
};

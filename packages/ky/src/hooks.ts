import type { BeforeRequestHook } from "ky";

export const beforeRequestCheckToken: BeforeRequestHook = () => {
  // TODO: check token
};

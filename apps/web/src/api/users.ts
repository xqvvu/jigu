import { ky } from "@/src/utils/ky";

export function fetchUsers() {
  return ky("users").json();
}

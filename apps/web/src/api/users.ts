import type { User } from "@jigu/shared/schema/user";
import { ky } from "@/utils/ky";

export function fetchUsers() {
  return ky("users").json<User[]>();
}

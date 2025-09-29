import type { User } from "@jigu/shared/schema/user";
import { ky } from "@/lib/ky";

export function fetchUsers() {
  return ky<User[]>("users").json();
}

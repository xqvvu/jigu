import type { IUser } from "@jigu/shared/schema/users";
import { ky } from "@/lib/ky";

export function fetchUsers() {
  return ky<IUser[]>("users").json();
}

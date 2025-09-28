import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/src/api/users";

export function useUsers() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return { users };
}

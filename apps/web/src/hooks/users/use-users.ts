import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@/api/users";

export function useUsers() {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  console.log(users);

  return { users };
}

"use client";

import { useUsers } from "@/hooks/users/use-users";

export default function Home() {
  const { users } = useUsers();

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li
              className="text-sky-500 font-semibold"
              key={user.id}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}

      {users.length === 0 && <span>Loading...</span>}
    </div>
  );
}

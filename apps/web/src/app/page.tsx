"use client";

import { Button } from "@heroui/react";
import { useUsers } from "@/hooks/users/use-users";

export default function Home() {
  const { users } = useUsers();

  return (
    <div>
      <div>
        <Button
          color="primary"
          startContent={<div className="icon-[devicon--bun]"></div>}
        >
          Click me
        </Button>
      </div>

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

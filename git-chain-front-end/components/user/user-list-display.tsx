"use client";

import { User } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@heroui/button";
import { useRouter } from "next/navigation";

import { TUser } from "@/types/user";

export default function UserListDisplay({
  admin = false,
}: {
  admin?: boolean;
}) {
  const [users, setUsers] = useState<TUser[]>([]);
  const [loading, setLoading] = useState(true);

  const route = useRouter();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data || []);
        setLoading(false);
      })
      .catch((_) => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Loading users...</div>;

  if (users.length == 0)
    return <div className="text-center p-4">No users founded.</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1">
        {users
          .filter((user) => !user.bot)
          .filter((user) => user.is_admin == admin)
          .map((user) => (
            <div
              key={user.id}
              className="border rounded-xl p-4 flex items-center space-x-4"
            >
              <div className="flex-shrink-0">
                {user.avatar_url ? (
                  <img
                    alt={user.name}
                    className="h-16 w-16 rounded-full border-2 p-1 border-black dark:border-white"
                    src={user.avatar_url}
                  />
                ) : (
                  <User className="h-12 w-12 p-2 bg-gray-100 rounded-full" />
                )}
              </div>
              <div className="flex-1">
                <h2 className="font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
                <p className="text-sm text-gray-400">@{user.username}</p>
              </div>
              <Button
                color="primary"
                size="sm"
                onPress={() => route.push("/user/" + user.id)}
              >
                View Profile
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}

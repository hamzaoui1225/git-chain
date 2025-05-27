"use client";

import { use, useEffect, useState } from "react";

import { TUser } from "@/types/user";

export default function UserInformationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [user, setUser] = useState<TUser>();

  useEffect(() => {
    fetch("/api/users?userId=" + id)
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  if (!user)
    return (
      <div className="w-full h-96 flex justify-center items-center ">
        <img alt="loading" className="h-16 w-16" src="/loading.gif" />
      </div>
    );

  return (
    <div>
      <div className="flex gap-3">
        <img
          alt={user.name}
          className="rounded-full border-4 border-primary p-1"
          src={user.avatar_url}
        />
        <div className="flex flex-col justify-center p-3">
          <h1 className="font-bold text-2xl">{user.name}</h1>
          <h4 className="text-lg">@{user.username}</h4>
        </div>
      </div>
    </div>
  );
}

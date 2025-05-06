"use client";

import { getUserById } from "@/lib/services/gitlab/user";
import { TUserInfo } from "@/types/user";
import { use, useEffect, useState } from "react";

export default function Repository({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

    const [user, setUser] = useState<TUserInfo>();

    useEffect(() => {
        getUserById(id).then((data) => {
            setUser(data);
        });
    }, []);

  return (
    <div className="space-y-5">
        {user?.name}
    </div>
  );
}

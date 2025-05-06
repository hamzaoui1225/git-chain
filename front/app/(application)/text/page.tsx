"use client";

import { useUser } from "@/lib/providers/UserContent";

export default function TEST() {

  const { user } = useUser();

  return <>{JSON.stringify(user)}</>;
}

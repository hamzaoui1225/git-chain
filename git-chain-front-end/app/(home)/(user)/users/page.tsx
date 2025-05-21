"use client";

import { Button } from "@heroui/react";
import { Plus } from "lucide-react";

import UserListDisplay from "@/components/user/user-list-display";

export default function Users() {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-between mx-4 pt-10">
        <h2 className="font-bold text-3xl">Users list</h2>
        <Button color="primary">
          <Plus size={18} />
        </Button>
      </div>
      <UserListDisplay />
    </div>
  );
}

"use client";

import { Button } from "@heroui/react";
import { Plus } from "lucide-react";
import { Card, CardBody, CardHeader } from "@heroui/card";

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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 pt-5">
        <Card>
          <CardHeader>
            <h1 className="font-bold text-lg text-center flex justify-center pt-4 w-full">
              Admin Users
            </h1>
          </CardHeader>
          <CardBody>
            <UserListDisplay admin={true} />
          </CardBody>
        </Card>
          <Card>
              <CardHeader>
                  <h1 className="font-bold text-lg text-center flex justify-center pt-4 w-full">
                      Users
                  </h1>
              </CardHeader>
              <CardBody>
                  <UserListDisplay admin={false} />
              </CardBody>
          </Card>
      </div>
    </div>
  );
}

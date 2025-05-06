"use client";

import { getAllUsers } from "@/lib/services/gitlab/user";
import { TUser } from "@/types/user";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image, Input, Link } from "@heroui/react";
import { Globe, Lock, LockIcon, Plus, SearchIcon, WholeWord, WholeWordIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Users() {

    const [users, setUsers] = useState<TUser[]>([]);

    useEffect(() => {
        getAllUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (<div>
        <div className="flex justify-between mb-3">
            <Input
                classNames={{
                    base: "w-96 h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper:
                        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
            />
            <Button color="primary">
                <Plus size={18} />
                <span className="font-bold">New</span>
            </Button>
        </div>
        {users?.filter((data) => !data.bot).map((user, index) =>
                <Card key={index}>
                    <Link color="foreground" href={`/user/${user.id}`}>
                        <CardBody>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                    <Image className="rounded-full" src={user.avatar_url} width={84} height={84} />
                                    <div className="flex flex-col text-start justify-center">
                                        <span className="font-bold text-lg">{user.name}</span>
                                        <span className="font-thin -translate-y-2">@{user.username}</span>
                                        <span className="pt-1 font-thin">{user.created_at}</span>
                                    </div>
                                </div>
                                <div className="flex items-center pr-3">
                                    { user.is_admin ? <Lock size={28} /> : <Globe size={28} /> }
                                </div>
                            </div>
                        </CardBody>
                    </Link>
                </Card>
        )}
    </div>
    )
}

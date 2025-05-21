import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import { Image } from "@heroui/image";

import { deleteUserFromRepository, getRepositoryMembers } from "@/libs/services/gitlab/repository";
import { EyeIcon, LogOut } from "lucide-react";

const privileges = [
  'guest', // 0.2
  'reporter', // 0.4
  'developer', // 0.5
  'maintainer', // 0.6
  'owner' // 0.9
]

export default function RepositoryMembersDisplayer({
  repositoryId,
}: {
  repositoryId: string;
}) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    refreshMemberList();
  }, []);

  const refreshMemberList = () => {
    getRepositoryMembers(repositoryId).then((data) => {
      setInfo(data);
    });
  }


  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader>
        <TableColumn key="name" align="center">Name</TableColumn>
        <TableColumn key="username" align="center">Username</TableColumn>
        <TableColumn key="join" align="center">Joined</TableColumn>
        <TableColumn key="access" align="center">Access</TableColumn>
        <TableColumn key="action" align="center">Action</TableColumn>
      </TableHeader>
      <TableBody items={info}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex gap-3">
                <Image
                  className="rounded-full"
                  height={28}
                  src={item.avatar_url}
                  width={28}
                />
                <div className="flex items-center">{item.name}</div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-1 font-thin">
                @{item.name}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-1 font-thin">
                {item.created_at}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-1 font-thin">
                {privileges[(item.access_level / 10) - 1]}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-2 font-thin">
                <LogOut onClick={() => { deleteUserFromRepository(item.id, repositoryId).then(_=> {refreshMemberList()}) }} size={18} className="text-red-500" />
                <EyeIcon size={18} className="text-blue-400" />
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

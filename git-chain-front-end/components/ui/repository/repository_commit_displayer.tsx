import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

import { getRepositoryCommits } from "@/libs/services/gitlab/repository";

export default function RepositoryCommitDisplayer({
  repositoryId,
}: {
  repositoryId: string;
}) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getRepositoryCommits(repositoryId).then((data) => {
      setInfo(data);
    });
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader>
        <TableColumn key="id" align="center">Id</TableColumn>
        <TableColumn key="title" align="center">Title</TableColumn>
        <TableColumn key="description" align="center">Description</TableColumn>
        <TableColumn key="author" align="center">Author</TableColumn>
        <TableColumn key="created" align="center">Created</TableColumn>
      </TableHeader>
      <TableBody items={info}>
        {(item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-3">
                {item.short_id}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-1 font-thin">
                {item.title}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-1 font-thin">
                {item.message}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-1 font-thin">
                {item.author_name}
              </div>
            </TableCell>
            <TableCell>
              <div className="flex text-center justify-center items-center gap-1 font-thin">
                {item.created_at}
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

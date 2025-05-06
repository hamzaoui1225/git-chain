"use client";

import { useEffect, useState } from "react";
import { Tab, Tabs } from "@heroui/tabs";
import { Code, GitPullRequestArrow, Users } from "lucide-react";
import { Card, CardBody } from "@heroui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { TableColumn } from "@heroui/react";

import FileExplorer from "@/components/ui/code/FileExplorer";
import {
  fetchRepositoryById,
  getRepositoryCommits,
  getRepositoryMembers,
} from "@/lib/services/gitlab/repository";
import UserTable from "@/components/ui/UserTable";

export default function Repository({ params }: { params?: { id: string } }) {
  const [loading, setLoading] = useState(true);
  const [repository, setRepository] = useState({});
  const [member, setMember] = useState([]);
  const [commit, setCommit] = useState([]);

  useEffect(() => {
    Promise.all([
      fetchRepositoryById(params?.id).then((res) => {
        setRepository(res);
      }),
      getRepositoryMembers(params?.id).then((res) => {
        setMember(res);
      }),
      getRepositoryCommits(params?.id).then((res) => {
        setCommit(res);
      }),
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) return <h1 className="text-4xl text-center">Loading...</h1>;

  return (
    <>
      <div className="flex gap-4 pb-10 items-center">
    <div className="w-40 h-40 rounded-full bg-amber-900 overflow-hidden border-4 border-blue-600">
    <div>
      <img
        alt={"repo image"}
  height={500}
  src={repository?.namespace?.avatar_url}
  width={500}
  />
  </div>
  </div>
  <div>
  <span className="font-extrabold text-4xl">{repository.name}</span>
    <h6>{repository.created_at}</h6>
    </div>
    </div>

    <div className="flex w-full flex-col">
  <Tabs aria-label="Options" color="primary" variant="bordered">
  <Tab
    key="photos"
  title={
    <div className="flex items-center space-x-2">
    <Code />
    <span>Code</span>
    </div>
}
>
  <FileExplorer />
  </Tab>
  <Tab
  key="music"
  title={
    <div className="flex items-center space-x-2">
    <Users />
    <span>Members ({member.length})</span>
    </div>
}
>
  <Card>
    <CardBody>
      <UserTable users={member} />
  </CardBody>
  </Card>
  </Tab>
  <Tab
  key="contribution"
  title={
    <div className="flex items-center space-x-2">
    <GitPullRequestArrow />
    <span>Contribution</span>
    </div>
}
>
  <Card>
    <CardBody>
      <Table>
        <TableHeader>
          <TableColumn>Commit ID</TableColumn>
  <TableColumn>Message</TableColumn>
  <TableColumn>Author</TableColumn>
  <TableColumn>Date</TableColumn>
  </TableHeader>
  <TableBody>
  {commit && commit.length > 0 ? (
    commit.map((c, index) => (
      <TableRow key={index}>
        <TableCell>{c.short_id}</TableCell>
        <TableCell>{c.message}</TableCell>
        <TableCell>{c.author_name}</TableCell>
        <TableCell>{c.committed_date}</TableCell>
        </TableRow>
    ))
  ) : (
    <></>
  )}
  </TableBody>
  </Table>
  </CardBody>
  </Card>
  </Tab>
  </Tabs>
  </div>
  </>
);
}

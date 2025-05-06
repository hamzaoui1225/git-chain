"use client";

import { use } from "react";
import { Tab, Tabs } from "@heroui/tabs";
import { Code, GitCommitHorizontal, UserPlus2, Users } from "lucide-react";

import { RepositoryInfoDisplay } from "@/components/ui/repository/repository_info_displayer";
import RepositoryCommitDisplayer from "@/components/ui/repository/repository_commit_displayer";
import RepositoryMembersDisplayer from "@/components/ui/repository/repository_members_displayer copy";
import FileExplorer from "@/components/ui/code/FileExplorer";
import { useUser } from "@/lib/providers/UserContent";
import JoinRequestTable from "@/components/ui/repository/request/join_request_display";

export default function Repository({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { user } = useUser();

  return (
    <div className="space-y-5">
      <RepositoryInfoDisplay repositoryId={id} />
      <div>

        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" color="primary" >
            <Tab
              key="code"
              title={
                <div className="flex items-center space-x-2 ">
                  <Code />
                  <span>Code</span>
                </div>
              }
            >
              {id && <FileExplorer projectId={id} />}
            </Tab>
            <Tab
              key="members"
              title={
                <div className="flex items-center space-x-2">
                  <Users />
                  <span>Members</span>
                </div>
              }>
              <RepositoryMembersDisplayer repositoryId={id} />
            </Tab>
            <Tab
              key="commit"
              title={
                <div className="flex items-center space-x-2">
                  <GitCommitHorizontal />
                  <span>Commit</span>
                </div>
              }
            >
              <RepositoryCommitDisplayer repositoryId={id} />
            </Tab>
            {user.role == 'admin' &&
              <Tab
                key="join"
                title={
                  <div className="flex items-center space-x-2">
                    <UserPlus2 />
                    <span>Join Request</span>
                  </div>
                }
              >
                <JoinRequestTable projectId={id} />
              </Tab>
            }
          </Tabs>
        </div>

      </div>
    </div>
  );
}

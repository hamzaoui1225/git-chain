"use client";

import { useEffect, useState } from "react";
import { GitFork, Sparkles } from "lucide-react";

import {
  fetchNameSpaces,
  fetchRepositoryById,
} from "@/lib/services/gitlab/repository";
import { TProject } from "@/types/project";

export function RepositoryInfoDisplay({
  repositoryId,
}: {
  repositoryId: string;
}) {
  const [info, setInfo] = useState<TProject>();

  useEffect(() => {
    fetchRepositoryById(repositoryId).then((data) => {
      setInfo(data);
    });
  }, []);

  if (!info) return <h1>Loading...</h1>;

  return (
    <div className="flex gap-3">
      <div>
        <div className=" rounded-full p-10 bg-gray-800 border-2 border-white">
          <span className="text-5xl font-bold">
            {info.name[0].toUpperCase()}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold">{info.name}</span>
          <span className="font-thin">
            {info.description ? info.description : "<NO DESCRIPTION>"}
          </span>
        </div>

      <div className="flex gap-2">
        <div>
          <div className="rounded-2xl bg-gray-800 p-2 pr-5 border-1 border-white ">
            <div className="flex items-center text-center gap-4">
              <Sparkles />
              <h1>{info.star_count}</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-2xl bg-gray-800 p-2 pr-5 border-1 border-white">
            <div className="flex items-center text-center gap-4">
              <GitFork />
              <h1>{info.forks_count}</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

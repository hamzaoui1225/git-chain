"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/button";
import { Globe, GlobeLock } from "lucide-react";
import { useRouter } from "next/navigation";

import { GITLAB_ENDPOINT_PROJECTS, GITLAB_HEADER } from "@/config/gitlab";

interface Repository {
  id: number;
  name: string;
  description: string;
  web_url: string;
  created_at: string;
  visibility: string;
}

export default function ProjectsListDisplay({
  privateRepositories = "public",
}: {
  privateRepositories?: string;
}) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const route = useRouter();

  useEffect(() => {
    fetch(GITLAB_ENDPOINT_PROJECTS, { headers: GITLAB_HEADER })
      .then((res) => res.json())
      .then((data) => {
        setRepositories(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (loading) return <div>Loading repositories...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid gap-4 grid-cols-1">
        {repositories.map(
          (project) =>
            project.visibility === privateRepositories && (
              <div
                key={project.id}
                className="border-2 rounded-xl p-4 flex items-center space-x-4"
              >
                <div className="flex-shrink-0">
                  {project.visibility === "public" ? (
                    <Globe className="h-12 w-12 p-2 bg-gray-100 dark:bg-gray-800 dark:text-white text-black rounded-full" />
                  ) : (
                    <GlobeLock className="h-12 w-12 p-2 bg-gray-100 dark:bg-gray-800 dark:text-white text-black rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold">{project.name}</h2>
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
                <Button
                  color="success"
                  size="sm"
                  onPress={() => {}}
                >
                  join
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  onPress={() => route.push("/project/" + project.id)}
                >
                  View Project
                </Button>
              </div>
            ),
        )}
      </div>
    </div>
  );
}

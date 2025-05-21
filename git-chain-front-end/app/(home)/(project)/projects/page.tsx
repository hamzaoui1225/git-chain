"use client";

import { Button } from "@heroui/react";
import { Plus } from "lucide-react";

import ProjectsListDisplay from "@/components/project/projects-list-display";

export default function ProjectsListPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mx-4 pt-10">
        <h2 className="font-bold text-3xl">Projects list</h2>
        <Button color="primary">
          <Plus size={18} />
        </Button>
      </div>
      <ProjectsListDisplay />
    </div>
  );
}

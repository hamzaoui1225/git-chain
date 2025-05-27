"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2 pt-5">
        <Card>
          <CardHeader>
            <h1 className="font-bold text-lg text-center flex justify-center pt-4 w-full">
              Public Projects
            </h1>
          </CardHeader>
          <CardBody>
            <ProjectsListDisplay />
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h1 className="font-bold text-lg text-center flex justify-center pt-4 w-full">
              Private Projects
            </h1>
          </CardHeader>
          <CardBody>
            <ProjectsListDisplay privateRepositories="private" />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

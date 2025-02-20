"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { useContext } from "react";

import RenderTree from "@/components/ui/code/RenderTree";
import CodePreview from "@/components/ui/code/CodePreview";
import { FileContext } from "@/components/ui/code/FileContext";

export default function FileExplorer() {
  const { data } = useContext(FileContext);

  return (
    <div className="flex gap-2">
      <Card className="w-[35rem] h-full">
        <CardBody>
          <RenderTree path={""} />
        </CardBody>
      </Card>
      <Card className="w-full">
        <CardHeader />
        <CardHeader>
          <h1>{data}</h1>
        </CardHeader>
        <CardBody>
          <div className="m-2 p-2">
            {data != "" && <CodePreview path={data} />}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

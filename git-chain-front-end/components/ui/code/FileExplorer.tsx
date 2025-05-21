"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { useState } from "react";

import RenderTree from "@/components/ui/code/RenderTree";
import CodePreview from "@/components/ui/code/CodePreview";

export default function FileExplorer( {projectId} : { projectId: string} ) {

  const [ file, setFile ] = useState<string>();

  return (
    <div className="flex gap-2">
      <Card className="w-[35rem] h-[28rem] overflow-y-scroll">
        <CardBody>
          <RenderTree setFile={setFile} projectId={projectId} path={""} />
        </CardBody>
      </Card>
      <Card className="w-full">
        <CardBody>
            { file && <CodePreview filePath={file} /> }
        </CardBody>
      </Card>
    </div>
  );
}

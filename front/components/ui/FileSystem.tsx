"use client";

import { useState } from "react";
import { ChevronRightIcon, FileText, FolderIcon } from "lucide-react";

type Node = {
  name: string;
  nodes?: Node[];
};

export default function FileSystem() {
  const nodes: Node[] = [
    {
      name: "Main",
      nodes: [],
    },
    {
      name: "Code",
      nodes: [{ name: ".env" }],
    },
    {
      name: "Home",
      nodes: [
        {
          name: "Movies",
          nodes: [
            {
              name: "Action",
              nodes: [
                {
                  name: "2000s",
                  nodes: [
                    { name: "Gladiator.mp4" },
                    { name: "The-Dark-Knight.mp4" },
                  ],
                },
                { name: "2010s", nodes: [] },
              ],
            },
            {
              name: "Comedy",
              nodes: [{ name: "2000s", nodes: [{ name: "Superbad.mp4" }] }],
            },
            {
              name: "Drama",
              nodes: [
                { name: "2000s", nodes: [{ name: "American-Beauty.mp4" }] },
              ],
            },
          ],
        },
        {
          name: "Music",
          nodes: [
            { name: "Rock", nodes: [] },
            { name: "Classical", nodes: [] },
          ],
        },
        { name: "Pictures", nodes: [] },
        {
          name: "Documents",
          nodes: [],
        },
        { name: "passwords.txt" },
      ],
    },
      { name: "docker-compose.yml" },
      { name: "Dockerfile" },
  ];

  return (
    <ul>
      {nodes.map((data: Node, key) => (
        <FilesystemItem key={key} node={data} />
      ))}
    </ul>
  );
}

function FilesystemItem({ node }: { node: Node }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <li key={node.name}>
      <span className="flex items-center gap-1.5 py-1">
        {node.nodes && node.nodes.length > 0 && (
          <button className="p-1 -m-1" onClick={() => setIsOpen(!isOpen)}>
            <ChevronRightIcon
              className={`size-4 text-gray-500 ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        )}

        {node.nodes ? (
          <FolderIcon
            className={`size-6 text-sky-500 ${
              node.nodes.length === 0 ? "ml-[22px]" : ""
            }`}
          />
        ) : (
          <FileText className="ml-[22px] size-6 text-white" />
        )}
        {node.name}
      </span>

      {isOpen && (
        <ul className="pl-6">
          {node.nodes?.map((node) => (
            <FilesystemItem key={node.name} node={node} />
          ))}
        </ul>
      )}
    </li>
  );
}

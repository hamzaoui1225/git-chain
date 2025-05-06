"use client";

import { getAllProjects } from "@/lib/services/gitlab/repository";
import { TProject, TRepositoryInfo } from "@/types/project";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Image, Input, Link } from "@heroui/react";
import { info } from "console";
import { GitFork, Globe, Lock, Plus, SearchIcon, Sparkles, WholeWord, WholeWordIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Repository() {

    const [projects, setProjects] = useState<TRepositoryInfo[]>([]);

    useEffect(() => {
        getAllProjects().then((data) => {
            setProjects(data);
        });
    }, []);

    return (<div>
        <div className="flex justify-between mb-3">
            <Input
                classNames={{
                    base: "w-96 h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper:
                        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<SearchIcon size={18} />}
                type="search"
            />
            <Button color="primary">
                <Plus size={18} />
                <span className="font-bold">New</span>
            </Button>
        </div>
        {projects?.map((project, index) =>
                <Card key={index}>
                    <Link color="foreground" href={`/repository/${project.id}`}>
                        <CardBody>
                            <div className="flex justify-between">
                                <div className="flex gap-4">
                                <div>
                                <div className="rounded-full p-8 bg-gray-800 border-2 border-white">
                                <span className="text-5xl font-bold">
                                    {project.name[0].toUpperCase()}
                                </span>
                                </div>
                                                </div>
                                    <div className="flex flex-col text-start justify-center">
                                        <span className="font-bold text-lg">{project.name}</span>
                                        <span className="font-thin -translate-y-2">@{project.path}</span>
                                        <div className="flex gap-2">
                                    <div>
                                    <div className="rounded-xl bg-gray-800 pl-2 pr-2 border-1 border-white ">
                                        <div className="flex items-center text-center gap-4">
                                        <Sparkles size={18} />
                                        <h1>{project.star_count}</h1>
                                        </div>
                                    </div>
                                    </div>
                                    <div>
                                    <div className="rounded-xl bg-gray-800 pl-2 pr-2 border-1 border-white">
                                        <div className="flex items-center text-center gap-4">
                                        <GitFork size={18} />
                                        <h1>{project.forks_count}</h1>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                        <span className="pt-1 font-thin">{project.created_at}</span>
                                    </div>
                                </div>
                                <div className="flex items-center pr-3">
                                    { project.visibility == "public" ? <Globe size={28} /> : <Lock size={28} />}
                                </div>
                            </div>
                        </CardBody>
                    </Link>
                </Card>
        )}
    </div>
    )
}

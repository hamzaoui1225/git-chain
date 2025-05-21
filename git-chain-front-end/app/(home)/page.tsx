"use client";

import { Tabs, Tab } from "@heroui/react";
import { GithubIcon, SearchIcon, User } from "lucide-react";
import { Card, CardBody } from "@heroui/card";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";

import UserListDisplay from "@/components/user/user-list-display";
import ProjectsListDisplay from "@/components/project/projects-list-display";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="inline-block max-w-screen-lg text-center justify-center">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white bg-opacity-25 rounded-2xl flex justify-center items-center">
            <Input
              aria-label="Search"
              className="w-96"
              classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
              }}
              endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                  Enter
                </Kbd>
              }
              labelPlacement="outside"
              placeholder="Search..."
              startContent={
                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
              }
              type="search"
            />
          </div>
          <img alt="background" className="rounded-xl" src="/bg.webp" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 pt-10">
          <div className="items-start flex flex-col">
            <Tabs aria-label="Options" color="primary" variant="bordered">
              <Tab
                key="photos"
                title={
                  <div className="flex items-center space-x-2">
                    <GithubIcon className="h-6 w-6" />
                    <span>Repositories</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>
                    <ProjectsListDisplay />
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
          <div className="items-start flex flex-col">
            <Tabs aria-label="Options" color="primary" variant="light">
              <Tab
                key="photos"
                title={
                  <div className="flex items-center space-x-2">
                    <User className="h-6 w-6" />
                    <span>Users</span>
                  </div>
                }
              >
                <Card>
                  <CardBody>
                    <UserListDisplay />
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

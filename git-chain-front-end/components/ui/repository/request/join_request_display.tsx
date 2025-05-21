"use client";

import { addUserToRepository, getPrivilegeFromScore } from "@/libs/services/gitlab/repository";
import { Progress, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { Bot, Check, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";


const privileges = [
    'guest', // 0.2
    'reporter', // 0.4
    'developer', // 0.5
    'maintainer', // 0.6
    'owner' // 0.9
  ]

export default function JoinRequestTable({ projectId }: { projectId: string }) {

    const [request, setRequest] = useState<[]>();
    const fetchAllRequest = async () => await fetch("/api/users/request?projectId=1").then(data => data.json());

    useEffect(() => {
        fetchAllRequest().then(data => setRequest(data.data));
    }, []);


    const updateRequestStatus = ( userId, projectId, status ) => {
        const update = async () => { 
            await fetch("/api/users/request", {
                method: "POST",
                body: JSON.stringify({
                    userId, projectId, status
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            })
        }
        update();
        fetchAllRequest().then(data => setRequest(data.data));

    }

    if (request == undefined) return <h1>Loading...</h1>;
    if (request.length == 0) return <h1>No Request Found</h1>

    return <>
        <Table aria-label="Example table with custom cells">
            <TableHeader>
                <TableColumn key="id" align="center">Id</TableColumn>
                <TableColumn key="name" align="center">Name</TableColumn>
                <TableColumn key="score" align="center">Score</TableColumn>
                <TableColumn key="role" align="center">Future role</TableColumn>
                <TableColumn key="description" align="center">Date</TableColumn>
                <TableColumn key="actions" align="center">Actions</TableColumn>
            </TableHeader>
            <TableBody items={request}>
                {(item) => (
                    <TableRow key={item._id}>
                        <TableCell>
                            <div className="flex text-center justify-center items-center gap-3">
                                {item.userId}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex text-center justify-center items-center gap-1 font-thin">
                                {item.name}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex text-center justify-center items-center gap-1 font-thin">
                                <Progress color="primary" value={item.score * 100} />
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex text-center justify-center items-center gap-1 font-thin">
                                {privileges[(getPrivilegeFromScore(item.score) / 10) - 1] }
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex text-center justify-center items-center gap-1 font-thin">
                                {item.date}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex text-center justify-center items-center gap-2 font-thin">
                                <Bot size={18} className="text-blue-500" />
                                <Trash2 onClick={() => { updateRequestStatus(item.userId, item.projectId, "reject"); }} size={18} className="text-red-500" />
                                <Check onClick={() => { addUserToRepository(item.userId, item.projectId, item.score); updateRequestStatus(item.userId, item.projectId, "accept"); }} size={18} className="text-green-500" />
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    </>
}
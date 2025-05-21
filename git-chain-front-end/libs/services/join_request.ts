import {getCollection} from "@/libs/db";

const repository_collection = "join_request";

const repository = async () => await getCollection(repository_collection);

export async function getJoinRequests(projectId: number) {
    return (await repository()).find({ projectId: projectId , status: "pending"}).toArray();
}

export async function updateJoinRequest(projectId: number, userId: number, status: string) {
    return (await repository()).updateMany({ userId: userId, projectId: projectId , status: "pending"}, { $set: { status: status } });
}

export async function createJoinRequest(projectId: number, userId: number, score: number) {
    return (await repository()).insertOne({
        userId: userId,
        projectId: projectId,
        status: "pending",
        score: score,
        date: new Date()
    });
}
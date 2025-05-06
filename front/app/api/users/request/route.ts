import { createJoinRequest, getJoinRequests, updateJoinRequest } from "@/lib/repository/join_request";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    return Response.json({
        data: await getJoinRequests(Number(request.nextUrl.searchParams.get("projectId"))),
        success: true,
    });
}

export async function POST(request: NextRequest) {
    const { userId, projectId, status } = await request.json();
    
    return Response.json({
        data: await updateJoinRequest(projectId, userId, status),
        success: true,
    });
}

export async function PUT(request: NextRequest) {
    const { userId, projectId, score } = await request.json();

    return Response.json({
        data: await createJoinRequest(projectId, userId, score),
        success: true,
    });
}


import { findRepositoryById } from "@/lib/repository/repository/Repositories";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  return Response.json(await findRepositoryById(id));
}

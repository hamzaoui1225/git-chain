import { addUser, getUsers } from "@/lib/repository/user/User";

export async function POST(request: Request) {
  const { name, surname, email } = await request.json();

  return Response.json({
    message: "",
    success: true,
  });
}
export async function GET() {
  return Response.json({
    data: await getUsers(),
    success: true,
  });
}

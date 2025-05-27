import { GITLAB_ENDPOINT_USERS, GITLAB_HEADER } from "@/config/gitlab";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  let url = GITLAB_ENDPOINT_USERS;
  const id = searchParams.get("userId");

  if (id != null) url += "/" + id;
  else url += "s";

  const data = await fetch(url, {
    headers: GITLAB_HEADER,
  }).then((res) => res.json());

  return Response.json(data);
}

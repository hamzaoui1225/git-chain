import { NextRequest, NextResponse } from "next/server";

import {
  GITLAB_CLIENT_ID,
  GITLAB_CLIENT_SECRET,
    GITLAB_ENDPOINT_AUTH,
} from "@/libs/config";
import {encrypt} from "@/libs/auth/sessions";
import {cookies} from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 },
      );
    }

    // For OAuth authentication
    const params = new URLSearchParams();

    params.append("grant_type", "password");
    params.append("username", username);
    params.append("password", password);
    params.append("client_id", GITLAB_CLIENT_ID);
    params.append("client_secret", GITLAB_CLIENT_SECRET);
    params.append("scope", "api read_user");

    const response = await fetch(GITLAB_ENDPOINT_AUTH, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error_description || "GitLab authentication failed" },
        { status: response.status },
      );
    }
     const userInfo = await fetch("http://localhost:3000/api/users?userId=" + "next").then((data) => data.json());

    console.log(userInfo);

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({
      userId: userInfo.email,
      expiresAt,
  });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
      httpOnly: true,
      secure: true,
      expires: expiresAt,
      sameSite: "lax",
      path: "/",
  });

    return NextResponse.redirect("/");
  } catch (error) {
    console.error("GitLab auth error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

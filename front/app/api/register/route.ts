import { registerGitlabUser } from "@/lib/user/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    
    try {
      const { email, password, username, name } = await request.json();
  
      if (!username || !password || !email || !name ) {
        return NextResponse.json(
          { error: 'Username, Email, Name and Password are required' },
          { status: 400 }
        );
      }

      return NextResponse.json(await registerGitlabUser(email, password, username,name));
    } catch (error) {
      console.error('GitLab register error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }
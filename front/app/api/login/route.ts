import { NextRequest, NextResponse } from "next/server";

const GITLAB_CLIENT_ID="13f5b9a8c78a49922577b4682e8338577f6cea5ec23b7bd7ba614949cdfcc65e"
const GITLAB_CLIENT_SECRET="gloas-a4aff9ff7a75c2b51f1e4a10d645b3e250f877d4e9a6d092daac4fe2f9ce0837"

export async function POST(request: NextRequest) {
    const GITLAB_URL = 'http://192.168.1.26:8080';
    
    try {
      const { username, password } = await request.json();
  
      if (!username || !password) {
        return NextResponse.json(
          { error: 'Username and password are required' },
          { status: 400 }
        );
      }
  
      // For OAuth authentication
      const params = new URLSearchParams();
      params.append('grant_type', 'password');
      params.append('username', username);
      params.append('password', password);
      params.append('client_id', GITLAB_CLIENT_ID);
      params.append('client_secret', GITLAB_CLIENT_SECRET);
      params.append('scope', 'api read_user');
  
      const response = await fetch(`${GITLAB_URL}/oauth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return NextResponse.json(
          { error: data.error_description || 'GitLab authentication failed' },
          { status: response.status }
        );
      }
    
      return NextResponse.json(data);
    } catch (error) {
      console.error('GitLab auth error:', error);
      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      );
    }
  }
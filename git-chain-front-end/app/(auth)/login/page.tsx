"use client";

import { Button } from "@heroui/button";
import { LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

export default function LoginComponents() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const login = async () => {
    await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (!data?.error) {
          setError("");
          router.push("/");
        } else {
          setError("Username or Password is uncorrect");
        }
      })
      .catch((_) => {
        setError("Username or Password is uncorrect");
      });
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="border-2 border-white rounded-xl px-16 p-10">
        <h1 className="text-center m-4 font-bold text-3xl">LOGIN</h1>
        {error && error != "" && (
          <h1 className="font-bold p-3 text-white bg-red-700 rounded-md">
            {error}
          </h1>
        )}
        <table>
          <tbody>
            <tr>
              <td>
                <h1 className="font-bold">UserName</h1>
              </td>
              <td className="p-2">
                <Input
                  placeholder="Type your username or email..."
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>
                <h1 className="font-bold">Password</h1>
              </td>
              <td className="p-2">
                <Input
                  placeholder="Type your username"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="pt-3 font-sans">
          You don&#39;t have an account?{" "}
          <Link className="underline text-blue-600 font-bold" href="/register">
            Register
          </Link>
        </div>
        <div className="flex justify-end pt-5 pr-2">
          <Button color="primary" onPress={login}>
            <LogInIcon /> Login
          </Button>
        </div>
      </div>
    </div>
  );
}

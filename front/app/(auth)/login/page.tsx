"use client";

import { useUser } from "@/lib/providers/UserContent";
import { Button } from "@heroui/button";
import { Input, Link } from "@heroui/react";
import { LogInIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginCompoents() {

    const [ error, setError ] = useState("");
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const { setUser } = useUser()
    const router = useRouter();

    const login = async () => {
        await fetch("/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        .then((data) => data.json())
        .then(data => {
            if (!data?.error) {
                setError("");
                setUser(data.access_token); window.localStorage.setItem("token", data.access_token);
                router.push("/text");
            }
            else {setError("Username or Password is uncorrect");}
        })
        .catch(_ => { setError("Username or Password is uncorrect") })
    }

    return <div className="flex items-center justify-center w-screen h-screen">
            <div className="border-2 border-white rounded-xl px-16 p-10">
                <h1 className="text-center m-4 font-bold text-3xl">LOGIN</h1>
            { error && error != "" && <h1 className="font-bold p-3 text-white bg-red-700 rounded-md">{error}</h1> }
            <table>
                <tr>
                    <td><h1 className="font-bold">UserName</h1></td>
                    <td className="p-2"><Input placeholder="Type your username or email..." onChange={(e) => { setUsername(e.target.value) }} /></td>
                </tr>

                <tr>
                    <td><h1 className="font-bold">Password</h1></td>
                    <td className="p-2"><Input type="password" placeholder="Type your username" onChange={(e) => { setPassword(e.target.value) }} /></td>
                </tr>
            </table>
            <div className="pt-3 font-sans">You don't have an account? <Link className="underline text-blue-600 font-bold" href="/register">Register</Link></div>
            <div className="flex justify-end pt-5 pr-2"><Button color="primary" onPress={login}><LogInIcon/> Login</Button></div>
        </div>
    </div>
} 
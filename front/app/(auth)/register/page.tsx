"use client";

import { POST } from "@/lib/utils";
import { Button, Input, Link } from "@heroui/react";
import { LogInIcon, PersonStandingIcon, User } from "lucide-react";
import { ChangeEventHandler, useState } from "react";


export default function RegisterPage() {

    const [error, setError] = useState("");
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [password, setPassword] = useState("")

    const checkForm = () => {
        if (!username && !password && !rePassword && !name) 
        {
            setError("All field must present");
            return;
        }
            
        if (rePassword != password) {
            setError("Password doesn't match");
            return;
        }

        POST("/api/register", { username, password, name, email })
    }

    return <div className="flex items-center justify-center w-screen h-screen">
        <div className="border-2 border-white rounded-xl px-16 p-10">
            <h1 className="text-center m-4 font-bold text-3xl">REGISTER</h1>
            {error && error != "" && <h1 className="font-bold p-3 text-white bg-red-700 rounded-md">{error}</h1>}
            <table>
                <tr>
                    <td><h1 className="font-bold">Email</h1></td>
                    <td className="p-2"><Input required placeholder="Type your email..." onChange={(e) => { setEmail(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td><h1 className="font-bold">Name</h1></td>
                    <td className="p-2"><Input required placeholder="Type your name..." onChange={(e) => { setName(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td><h1 className="font-bold">UserName</h1></td>
                    <td className="p-2"><Input required placeholder="Type your username or email..." onChange={(e) => { setUsername(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td><h1 className="font-bold">Password</h1></td>
                    <td className="p-2"><Input required type="password" placeholder="Type your password" onChange={(e) => { setPassword(e.target.value) }} /></td>
                </tr>

                <tr>
                    <td><h1 className="font-bold">Re-Password</h1></td>
                    <td className="p-2"><Input required type="password" placeholder="Re-type your password" onChange={(e) => { setRePassword(e.target.value) }} /></td>
                </tr>
            </table>
            <div className="pt-3 font-sans">You already have an account? <Link className="underline text-blue-600 font-bold" href="/login">Login</Link></div>
            <div className="flex justify-end pt-5 pr-2"><Button onPress={checkForm} color="primary"><User /> Register</Button></div>
        </div>
    </div>
}
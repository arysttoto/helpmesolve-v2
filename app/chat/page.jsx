import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

import Chat from "@/components/Chat"; 

import { redirect } from 'next/navigation'


export default async function ChatPage () { 
    const session = await getServerSession(authOptions); 

    if (!session) {
        redirect("/?signedIn=false"); 
    } 

    return (
        <>
        <Chat />  
        </> 
    );  
}   
 
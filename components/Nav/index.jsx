import Header from "../Header";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import axios from "axios";

export default async function Nav() {
  const session = await getServerSession(authOptions);  

  return(
    <Header session={ session } />
  );   
}   
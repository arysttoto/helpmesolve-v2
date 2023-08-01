import ProblemInfo from "@/components/ProblemInfo"; 
import getProblemById from "./getProblemById"; 
import Footer from "@/components/Footer";
 
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";


export default async function Problem({ params }) {
    const id = params.id;
    const session = await getServerSession(authOptions); 

    const problem = await getProblemById(id, session.user.accessToken); 
    
    return (
        <>
        <ProblemInfo problem={ problem }/> 
        <Footer /> 
        </>
    );
}

import Breadcrumb from "@/components/Common/Breadcrumb";
import SolveProblemForm from "@/components/SolveProblem";
import Footer from "@/components/Footer";

import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

import { redirect } from "next/navigation";

async function SolveProblem() {
    const session = await getServerSession(authOptions); 
    if (!session) {
        redirect("/?signedIn=false"); 
    } 

    return ( 
        <>
        {/* <Breadcrumb
        pageName="Solve Problem Page"
        description="Need a step by step solution and a code to solve your problem?"
        />  */}
        <SolveProblemForm session={ session }/>
        <Footer /> 
        </>
      );
}

export default SolveProblem; 
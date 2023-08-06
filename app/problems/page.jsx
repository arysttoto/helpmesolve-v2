import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";

import { redirect } from "next/navigation";
import ProblemsPage from "@/components/ProblemsPage"; 

export default async function Problems () {
  const session = await getServerSession(authOptions); 
  
  if (!session) {
    redirect("/?signedIn=false"); 
  } 

  // console.log(problems); 
  return (
    <>
    <Breadcrumb
      pageName="Problems Collection"
      description="We collect all answers to your questions, so that you could always recall them." />
    <ProblemsPage session = { session }/> 
    <Footer /> 
    </>
  );
};

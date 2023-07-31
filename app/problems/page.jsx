import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

import getProblemsPage from "./getProblemsPage"; 
import Breadcrumb from "@/components/Common/Breadcrumb";
import Footer from "@/components/Footer";

import { redirect } from "next/navigation";
import ProblemsPage from "@/components/ProblemsPage"; 

export default async function Problems ({ searchParams }) {
  const session = await getServerSession(authOptions); 
  
  if (!session) {
    redirect("/?signedIn=false"); 
  } 

  if (!searchParams?.page) { 
    redirect("/problems?page=1"); 
  } 
  const problems = await getProblemsPage(searchParams.page, session.user.accessToken); 
  console.log(problems); 
  return (
    <>
    <Breadcrumb
      pageName="Your Problems"
      description="We collect all answers to your questions, so that you could always recall them." />
    <ProblemsPage problems={ problems }/> 
    <Footer /> 
    </>
  );
};

// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
'use client'
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

import { toast } from "react-hot-toast";
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); 
  const searchParams = useSearchParams();
 
  const signedIn = searchParams.get('signedIn') 
  
  if (signedIn) {  
    router.push("/");
    toast.error("Sign In please!"); 
  } 

  return (
    <> 
      <ScrollUp />
      <Hero /> 
      <Features />
      {/* <Video />
      <Brands />  */}
      {/* <AboutSectionOne />
      <AboutSectionTwo /> */}
      {/* <Testimonials /> */} 
      {/* <Pricing /> */}
      {/* <Blog />  */}
      <Contact /> 
      <Footer />  
    </>
  );
}

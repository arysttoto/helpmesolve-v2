"use client";
import { ThemeProvider } from "next-themes";
import toast, { Toaster } from 'react-hot-toast';
// import ChatWidget from "@/components/ChatWidget"; 


export function Providers({ children }) {

  return (
    <>
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children} 
    </ThemeProvider> 
    {/* chat widget */} 
    {/* <ChatWidget />  */} 
    {/* chat widget */} 
    <Toaster /> 
    </>
  );
} 

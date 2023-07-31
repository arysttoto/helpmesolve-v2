"use client";
import { ThemeProvider } from "next-themes";
import toast, { Toaster } from 'react-hot-toast';


export function Providers({ children }) {
  return (
    <>
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider> 
    <Toaster /> 
    </>
  );
} 

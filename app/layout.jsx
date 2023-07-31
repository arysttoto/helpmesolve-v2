
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Nav from "@/components/Nav";
import { Suspense } from "react";


export default function RootLayout({ children }) {
  return (                
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head /> 

      <body className="dark:bg-black">
        <Providers> 
          <Suspense fallback="..."> 
            <Nav />  
          </Suspense> 
          <main className="">{children}</main>    
          <ScrollToTop /> 
        </Providers>
      </body> 
    </html>
  );
}

import { Providers } from "./providers";

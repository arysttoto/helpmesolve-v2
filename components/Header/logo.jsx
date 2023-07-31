import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return(
        <>
        <Link href="/" className="flex items-center font-display text-2xl"> 
            <Image
              src="/favicon.ico"
              alt="helpmesolve-logo"
              width="40"
              height="40"       
              className="mr-2 rounded-sm"
            ></Image>
            <p className="hidden md:block text-2xl text-gray-900 dark:text-white">HelpMeSolve</p> 
        </Link>  
        </>
    );
} 
export default Logo; 
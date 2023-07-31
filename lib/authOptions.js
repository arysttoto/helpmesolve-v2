import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { signOut } from "next-auth/react";
import hasExpired from "./expirationCheck"

export const authOptions = {
  providers: [  
    CredentialsProvider({ 
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'HelpMeSolve', 
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.  
      credentials: {    
        email: { label: "Email", type: "text", placeholder: "monkeypox123@mail.com", required: true},  
        password: { label: "Password", type: "password", required: true}    
      }, 
      async authorize(credentials, req) { 
        console.log(credentials); 
        const res = await fetch(process.env.BACKEND_URL + "/auth/signin", {  
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
          }, 
          body: JSON.stringify({ 
            email: credentials?.email,
            password: credentials?.password,
          }),   
        });
        if (res.status === 401) {
          return 
        } 
        const user = await res.json();
        return user; 
      }  
    }),
  ],
  session: { 
    strategy: "jwt"
  }, 
  callbacks: { 
    async jwt({ token, user }) { 
      // this function is being called every time the session is accessed, for me it is accessed by getServerSession in nav Component 
      // the token consists of data provided by user at authorization and user is provided only at first time when user just logins, so at this time 
      // i set the accessToken to token and return it. 
      if (user) {      
        token.accessToken = user.access_token;                         
      }      
      // Check if expires in less than 12 hours or has expired already.
      const expired = hasExpired(token.exp); 
      if (expired) {
        await signOut(); 
      } 
      return token; 
    }, // half day check 
    async session({ session, token, user }) {   
      // session is also called whenever the session is accessed and is called after the jwt so token could be accessed in the function...
      // here we set the sessions user to token and return the session... 
      session.user = token;         
      // console.log(session);        
      return session;        
    } 
  },
   
  // providers: [
  //   GoogleProvider({ 
  //     clientId: process.env.GOOGLE_CLIENT_ID,
  //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //   }), 
  // ],
  pages: {
    signIn: '/auth/signin', 
  }
};              
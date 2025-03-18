// import { auth } from "@/auth"

import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes } from "./route";
const {auth}=NextAuth(authConfig);


export default auth((req) => {
  // const isLoggedIn= !!req.auth // adding !! makes it an boolean variable
  // console.log("ROUTE- ",req.nextUrl.pathname);
  // console.log("Is Logged in ",isLoggedIn)

  const isLoggedIn=!!req.auth;
  const routepath=req.nextUrl.pathname;

  const isApiAuthRoute=routepath.startsWith(apiAuthPrefix);
  const isAuthRoute=authRoutes.includes(routepath);
  const isPublicRoute=publicRoutes.includes(routepath);

  if(isApiAuthRoute){
    return undefined;
  }

  if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT,req.nextUrl))
    }
    return undefined;
  }

  if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL('/auth/login',req.nextUrl))
  }

  return undefined
})

//  we will be using the route path + isLoggedin Paramater to determine what has to be done with
// the Current Route on which the user in RN


// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }
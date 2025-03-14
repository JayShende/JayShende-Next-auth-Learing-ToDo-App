"use client";

import { Poppins } from "next/font/google";
import CardWrapper from "./card-wrapper";
const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const LoginForm = () => {
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400">

        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't Have a Account"
        backButtonUrl="/auth/signup"
        showSocial
        >
            <p>h</p>
        </CardWrapper>
        
    </div>
  );
};

export default LoginForm;

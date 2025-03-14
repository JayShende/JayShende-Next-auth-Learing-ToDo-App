"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LoginButtonProps{
    children:ReactNode
}

const LoginButton=({
    children
}:LoginButtonProps)=>{

    const router=useRouter();

    function loginPage(){
        router.push('/auth/login')
    }
    return(
        <span onClick={loginPage}>
            {children}
        </span>
    );
}

export default LoginButton;
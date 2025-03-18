"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface FooterProps{
    label:string;
    url:string;
}

const Footer=({
    label,
    url
}:FooterProps)=>{

    const router=useRouter();
    const onclickFun=()=>{
        router.push(url)
    }
    return(
        <div className="w-full flex flex-col items-center">
           <Button variant="link" className="text-sm text-muted-foreground" onClick={onclickFun}>
            {label}
           </Button>
        </div>
    )
}

export default Footer;


import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google"
import { FaUserCircle } from "react-icons/fa";

const poppinsFont=Poppins({
    subsets:['latin'],
    weight:['700']
});
interface HeaderProps{
    label:string
}

const Header=({
    label
}:HeaderProps)=>{

    return(
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex gap-x-3 items-center">
            <FaUserCircle className="text-2xl" />
                <span className={cn("text-2xl",poppinsFont.className)}>
                  Login
                </span>
            </div>
            <p className="mt-3 text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    )
}

export default Header;
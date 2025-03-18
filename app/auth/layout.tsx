import { ReactNode } from "react"
import { Toaster } from "@/components/ui/sonner"
export default function Layout({children}:{
    children:ReactNode
}){

    return(
        <div className=" w-screen h-screen flex items-center justify-center bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400">
            {children}
           <div>
           <Toaster />
           </div>
        </div>
    )
}
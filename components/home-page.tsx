import { SiFsecure } from "react-icons/si";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"; // Import your cn function
import { Button } from "./ui/button";
import LoginButton from "./auth/login-button";

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export default function HomeComponent() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-400">
      <div className="flex flex-col items-center justify-center bg-white w-[350px] h-[300px] rounded-md drop-shadow-xl ">
        <div className={cn("gap-x-5 flex", poppinsFont.className)}>
          <SiFsecure className="text-3xl" />
          <span className="text-2xl font-semibold">Secure ToDo App</span>
        </div>
       <LoginButton>
       <Button variant="default" className="mt-3">Sign in</Button>
       </LoginButton>
      </div>
      
      
    </div>
  );
}

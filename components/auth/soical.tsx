
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
const Social=()=>{


    return(
        <div className="w-full flex gap-x-2">
            <Button 
            variant="outline" 
            className="drop-shadow-xl w-[50%]"
            onClick={()=>{}}
            >
                <FcGoogle/>
            </Button>

            <Button 
            variant="outline" 
            className="drop-shadow-xl w-[50%]"
            onClick={()=>{}}
            >
                <FaGithub/>
            </Button>
        </div>
    )
}

export default Social;
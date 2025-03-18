import { FaTriangleExclamation } from "react-icons/fa6";

interface FormErrorProps{
  message?:string;
}

const FormError = ({
  message
}:FormErrorProps) => {
  if(!message) return null;
  
  return (
    <div className="w-full bg-destructive/15 p-4 rounded-md flex gap-x-4 items-center text-destructive">
      <FaTriangleExclamation />
      <div>
      {message}
      </div>
    </div>
  )
};

export default FormError;

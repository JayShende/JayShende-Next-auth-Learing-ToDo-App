"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod"

export const registerAction=async(values:z.infer<typeof RegisterSchema>)=>{
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log(values);

    return{error:"Values Logged Check The Console"};
}
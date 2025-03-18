"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  const result = LoginSchema.safeParse(values);
    await new Promise((resolve)=>setTimeout(resolve,5000));
  if (result.success == false) {
    return { error: "Invalid Inputs" };
  }
  return { error: "Invalid Inputs" };
//   return {
//     success: "Email Sent",
//   };
};

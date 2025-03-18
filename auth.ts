import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"

import authConfig from "./auth.config"

// we also need to import the prisma client
import {client} from "@/app/lib/index"


export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter:PrismaAdapter(client),
    session:{strategy:"jwt"},
 ...authConfig
})
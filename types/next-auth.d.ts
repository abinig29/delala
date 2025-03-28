import NextAuth from "next-auth";
import { User } from "./interface";


declare module "next-auth" {
    interface Session {
        user: User;
    }
}
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    interface JWT {
        user: User
    }
}

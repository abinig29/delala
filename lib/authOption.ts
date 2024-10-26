import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import axios from "axios";


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {},
            async authorize(credentials, req) {
                if (req.body) {
                    return JSON.parse(req.body.data);
                }
            },
        }),
      


    ],
    callbacks: {
        async jwt({ token, user, trigger, session }) {
            if (trigger === "update") {
                return { ...token, user: session.user };
            }
            if (user) return { ...token, user };
            return token;

        },
        async session({ session, token, user }) {
            session.user = token.user;
            return session;
        },
    },

    pages: {
        signIn: "/login",
    },
};
export default NextAuth(authOptions);
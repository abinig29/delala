import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";


export default withAuth(
    function middleware(req) {
        const usr = req.nextauth.token?.user;
        console.log({ usr })
        if (!usr || !usr.userData) {
            return NextResponse.rewrite(
                new URL("/login?message=You Are Not Authorized!", req.url),
            );
        }
        // if (req.nextUrl.pathname.startsWith("/dashboard") && !roles.some(a => a === usr?.user?.role)) {
        //     return NextResponse.rewrite(
        //         new URL("/login?message=You Are Not Authorized!", req.url),
        //     );
        // }
        // if (req.nextUrl.pathname.startsWith("/dashboard/users") && usr?.user?.role === "ADMIN") {
        //     return NextResponse.rewrite(
        //         new URL("/auth/login?message=You Are Not Authorized!", req.url),
        //     );
        // }
        // if (req.nextUrl.pathname.match("/dashboard") && usr.user.role === "ADMIN" && usr.user.firstTimeLogin) {
        //     return NextResponse.rewrite(
        //         new URL("/auth/password-change", req.url),
        //     );
        // }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    },
);


export const config = {
    matcher: [
        // "/",
        "/dashboard/:path*",
        // "/auth/password-change"
    ],
};

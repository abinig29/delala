import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import LoginForm from "../_component/user-auth"
import { CustomGoogleButton } from "../_component/google-button"

export default function Login() {




    return (
        <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-2 text-center">
                <div className="flex gap-2 items-center justify-center w-full">
                    <h2 className="text-2xl font-semibold">Welcome Back to</h2>
                    <h1 className="text-2xl font-bold text-main">Delala</h1>
                </div>
                <p className="text-sm text-gray-500">Please sign in to your account</p>
            </div>
            <LoginForm />
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
            </div>
            <CustomGoogleButton />
            <div className="flex items-center justify-between text-sm">
                <Link className="text-emerald-500 hover:underline" href="/password-reset">
                    Forgot Password?
                </Link>
                <div>
                    No Account?{" "}
                    <Link className="text-emerald-500 hover:underline" href="/signup">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}
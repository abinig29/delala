"use client"
import { useEffect } from 'react';
import Link from "next/link"
import LoginForm from "../_component/user-auth"
import { CustomGoogleButton } from "../_component/google-button"
import Script from "next/script"
import { signIn } from "next-auth/react"
import TelegramSignInButton from "../_component/telegram-button"
import styles from './TelegramLogin.module.css';
export default function Login({ searchParams }: { searchParams: { from: string } }) {

    const handleTelegramLogin = () => {
        signIn('telegram');
    }

    return (
        <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-2 text-center">
                <div className="flex gap-2 items-center justify-center w-full">
                    <h2 className="text-2xl font-semibold">Welcome Back to</h2>
                    <h1 className="text-2xl font-bold text-main">Delala</h1>
                </div>
                <p className="text-sm text-gray-500">Please sign in to your account</p>
            </div>
            <LoginForm searchParams={searchParams} />
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
            </div>
            <div className=" space-y-4">
                <CustomGoogleButton searchParams={searchParams} />
                <TelegramLogin />
            </div>
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





function TelegramLogin() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;
        script.setAttribute('data-telegram-login', 'AbelDelalaBot');
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-radius', '4');
        script.setAttribute('data-auth-url', '/api/telegram-auth');
        script.setAttribute('data-request-access', 'write');
        document?.getElementById('telegram-login-container')?.appendChild(script);
    }, []);

    return <div id='telegram' className={styles.telegramContainer}>
        <div id="telegram-login-container" className='w-full'></div>
    </div>
}

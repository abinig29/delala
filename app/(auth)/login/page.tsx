"use client"
import { useEffect } from 'react';
import Link from "next/link"
import LoginForm from "../_component/user-auth"
import { CustomGoogleButton } from "../_component/google-button"
import Script from "next/script"
import { signIn } from "next-auth/react"
import TelegramSignInButton from "../_component/telegram-button"
import styles from './TelegramLogin.module.css';
import { Button } from '@/components/ui/button';
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
        script.setAttribute('data-userpic', 'false');
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-radius', '4');
        script.setAttribute('data-auth-url', 'http://localhost:5000/api/auth/telegram/callback');
        script.setAttribute('data-request-access', 'write');
        document?.getElementById('telegram-login-container')?.appendChild(script);

        script.onload = () => {
            const style = document.createElement('style');
            style.innerHTML = `
                .tgme_widget_login_button {
                    background-color: black !important;
                    color: white !important;
                    border-radius: 8px !important;
                    padding: 10px 20px !important;
                    font-size: 16px !important;
                }
            `;
            document.head.appendChild(style);
        };
    }, []);



    const handleLogin = () => {
        const link = "https://oauth.telegram.org/auth?bot_id=7658339527&origin=https%3A%2F%2Fdelala.vercel.app&embed=1&request_access=write&return_to=https%3A%2F%2Fdelala.vercel.app%2Flogin"
        window.location.href = link;
    }
    return <div id='telegram' >
        <div id="telegram-login-container" style={{ display: "none" }}></div>
        <Button
            onClick={handleLogin}
            className="w-full" variant="outline">
            <svg
                width="24px"
                height="24px"
                viewBox="0 0 48 48"
                className='mr-2'
                fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="#000000">
                </path> </g></svg>
            Sign in with Telegram
        </Button>
    </div>
}

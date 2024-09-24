"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFetchData } from '@/hooks/use-query';
import { KY } from '@/lib/constant';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const AuthenticatingPage = ({ searchParams }: { searchParams: { token?: string, email: string } }) => {
    const { isLoading, data, error, isSuccess } = useFetchData(
        [KY.auth],
        `auth/google/checkToken?email=${searchParams?.email}&token=${searchParams?.token}`,
    );

    useEffect(() => {
        const authenticateUser = async () => {
            signIn("credentials", {
                data: JSON.stringify(data),
                redirect: true,
                callbackUrl: "/dashboard"
            });
        }

        if (!isLoading && isSuccess)
            authenticateUser();


    }, [isLoading, isSuccess]);

    return <div className='bg-white fixed inset-0 p-0 top-0 left-0'>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Welcome Back to <span className="text-emerald-500">Delala</span></h2>
                <p className="text-gray-600">
                    {error ? 'Authentication Error' : 'Please wait while we verify your account'}
                </p>
            </div>
            {error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{error?.message}</span>
                </div>
            ) : (
                <div className="relative">
                    <div className="w-20 h-20 border-t-4 border-b-4 border-emerald-500 border-solid rounded-full animate-spin"></div>
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-emerald-500 border-solid rounded-full animate-ping opacity-20"></div>
                </div>
            )}
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                    Having trouble? <a href="#" className="text-emerald-500 hover:underline">Contact support</a>
                </p>
            </div>
            {error && (
                <Link
                    href="/login"
                    className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition-colors"
                >
                    Back to Login
                </Link>
            )}
        </div>
    </div>;

};

export default AuthenticatingPage;

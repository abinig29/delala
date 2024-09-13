import React from 'react'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/login.png?height=1080&width=1920')" }}>
            <div className="flex flex-col justify-center w-full min-h-screen bg-black bg-opacity-20">
                <div className="flex justify-end px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </div>
        </div>
    )
}

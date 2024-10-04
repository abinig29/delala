import Link from 'next/link'
import React from 'react'

const Logo = ({ isHome }: { isHome?: boolean }) => {
    return (
        <Link href={'/'}>
            <img
                src="/logo.png"
                className={`w-20 ${isHome ? "h-10" : "h-20"} object-contain`}
                alt="" />
        </Link>
    )
}

export default Logo
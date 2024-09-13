import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href={'/'}>
            <img src="/logo.png" className="w-20 h-20 object-contain" alt="" />
        </Link>
    )
}

export default Logo
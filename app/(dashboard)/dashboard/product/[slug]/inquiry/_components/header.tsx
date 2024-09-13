import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center w-full '>
            <Link
                href={"/dashboard/product"}
            >
                <Button variant={"ghost"} className=' gap-2'>
                    <Icons.arrorLeft size={15} />
                    Back
                </Button>
            </Link>
            <Link
                href={`/dashboard/product/001/`}
            >
                <Button className=' bg-main hover:bg-main/80'>
                    Edit Product
                </Button>
            </Link>
        </div>
    )
}

export default Header
import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Header = ({ isPending, isCreate }: { isPending: boolean, isCreate: boolean }) => {
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
            <Button
                isLoading={isPending}
                type='submit'
                className=' bg-main hover:bg-main/80'>
                {isCreate ? "Save" : "Edit"} Product
            </Button>
        </div>
    )
}

export default Header
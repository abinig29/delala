import { Icons } from '@/components/common/icons'
import { Button } from '@/components/ui/button'
import React from 'react'

const Notification = () => {
    return (
        <div
            className='rounded-full p-2 cursor-pointer border'>
            <Icons.notification size={15} />
        </div>
    )
}

export default Notification
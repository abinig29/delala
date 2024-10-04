import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const ContactForm = () => {
    return (
        <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Contact Seller</h3>
            <form className="space-y-4">
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Phone number" />
                <Textarea placeholder="Message" />
                <Button className="w-full bg-main hover:bg-main/80">Send</Button>
            </form>
        </div>
    )
}

export default ContactForm
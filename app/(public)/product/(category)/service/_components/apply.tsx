'use client'

import { useState } from 'react'
import { Wrench, MapPin, DollarSign, Clock, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from '@/components/ui/badge'

const service = {
    id: "1",
    productId: "prod1",
    name: "Premium House Cleaning",
    serviceName: "Cleaning Services",
    description: "Our Premium House Cleaning service offers a thorough, top-to-bottom cleaning of your home. Our experienced professionals use eco-friendly products to ensure a spotless and healthy environment.",
    features: [
        "Deep cleaning of all rooms",
        "Kitchen and bathroom sanitization",
        "Dusting and vacuuming",
        "Window and mirror cleaning"
    ],
    price: 150,
    duration: "4 hours",
    rating: 4.8
}

export default function ServiceBookingButton() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <SheetTrigger asChild>
                <Button className=''>Book Now</Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[400px] sm:w-[540px] overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>{service.name}</SheetTitle>
                    <SheetDescription className='flex items-center justify-between'>
                        <Badge>{service.serviceName}</Badge>
                        <Badge variant="secondary">${service.price}</Badge>
                    </SheetDescription>
                </SheetHeader>
                <div className="py-4">

                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Service Description</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Features</h3>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {service.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your full name" required />
                        </div>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your email address" required />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" placeholder="Your phone number" required />
                        </div>

                        <div>
                            <Label htmlFor="note">Special Instructions</Label>
                            <Textarea id="note" placeholder="Any additional information or special requests" rows={4} />
                        </div>
                        <Button type="submit" className="w-full">Book Service</Button>
                    </form>
                </div>
            </SheetContent>
        </Sheet>
    )
}
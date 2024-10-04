"use client"
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ContactModal from './contact-modal'
import FavoriteButton from '@/components/favorite-button'
import { Phone, Send } from "lucide-react"
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const ProductCard = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Card className="flex-shrink-0 w-72  overflow-hidden border border-black/10 group cursor-pointer">
            <CardHeader className="p-0">
                <div className="relative ">
                    <img
                        src="/headset.png"
                        alt="Wireless Headphones"
                        className="w-full h-[200px] object-contain group-hover:scale-105 transition-all delay-75"
                    />
                    <FavoriteButton />
                </div>
            </CardHeader>
            <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                    <CardTitle className=" hover:underline">Wireless Headphones</CardTitle>
                    <Badge className="">Electronics</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                    High-quality wireless headphones with noise cancellation
                </p>
                <p className="text-lg font-semibold">$360</p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
                <ContactModal />
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex-1">
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" w-32 p-2">
                        <DropdownMenuItem asChild>
                            <Button variant="ghost" className="w-full justify-start">
                                <Send className="w-4 h-4 mr-2" />
                                Telegram
                            </Button>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Button variant="ghost" className="w-full justify-start">
                                <Phone className="w-4 h-4 mr-2" />
                                Phone
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardFooter>
        </Card>
    )
}

export default ProductCard
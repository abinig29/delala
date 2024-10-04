"use client"
import { useState } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from 'lucide-react'
import ContactModal from '@/components/contact-modal'
import { BreadcrumbCustom } from '@/components/common/breadcrumb-custom'
import ServiceFilter from './_components/filter'
import ServiceBookingButton from './_components/apply'

const services = [
    {
        name: "Computer Repair",
        price: "$50/hour",
        services: ["Virus Removal"],
        description: "Expert computer repair services for all your tech needs.",
        image: "/service.png"
    },
    {
        name: "Appliance Repair",
        price: "$75/hour",
        services: ["Refrigerator",],
        description: "Quick and reliable appliance repair to keep your home running smoothly.",
        image: "/service.png"
    },
    {
        name: "Auto Mechanic",
        price: "$100/hour",
        services: ["Oil Change"],
        description: "Professional auto repair services to keep your vehicle in top condition.",
        image: "/service.png"
    },
    {
        name: "Cleaning Service",
        price: "$30/hour",
        services: ["House Cleaning"],
        description: "Thorough cleaning services for a spotless home or office.",
        image: "/service.png"
    },
    {
        name: "Furniture Assembly",
        price: "$40/hour",
        services: ["IKEA Assembly"],
        description: "Expert furniture assembly to save you time and hassle.",
        image: "/service.png"
    },
    {
        name: "Home Maintenance",
        price: "$60/hour",
        services: ["Painting",],
        description: "Comprehensive home maintenance services for all your household needs.",
        image: "/service.png"
    },
    {
        name: "Mobile Phone Repair",
        price: "$45/hour",
        services: ["Screen Replacement"],
        description: "Fast and reliable mobile phone repair services to get you reconnected.",
        image: "/service.png"
    }
]

export default function ServicePage() {
    const links = [
        { name: "Products", href: "/product" },
    ];



    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-between mb-6">
                <div className="text-sm breadcrumbs">
                    <BreadcrumbCustom links={links} currentPage='Service' />
                </div>
            </div>
            <div className='flex items-start gap-4'>
                <ServiceFilter />
                <div className="grid gap-6 flex-[4]">
                    {services.map((service, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 relative">
                                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 bg-primary text-primary-foreground p-2 rounded-br-lg">
                                    </div>
                                </div>
                                <CardContent className="flex-1 p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold">{service.name}</h2>
                                            <p className=" font-semibold text-primary">{service.price}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.services.map((item, i) => (
                                            <Badge key={i} variant="secondary">{item}</Badge>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-4">{service.description}</p>
                                    <ServiceBookingButton />
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
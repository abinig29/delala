"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Camera, Heart, } from 'lucide-react'
import { BreadcrumbCustom } from '@/components/common/breadcrumb-custom'
import Link from 'next/link'

const searchResults = [
    {
        id: 1,
        title: "BICYCLE MACHINE EXERCISE CARDIO",
        category: ["Sports & Hobbies", "Gym & Fitness"],
        image: "/classified.webp",
        updatedTime: "2 hours ago",
        price: 600,
        location: "Doha",
        seller: "cookie14445",
    },
    {
        id: 2,
        title: "Treadmill for sale..!",
        category: ["Sports & Hobbies", "Gym & Fitness",],
        image: "/classified.webp",
        updatedTime: "3 hours ago",
        price: 1300,
        location: "Abu Hamour",
        seller: "Priyadharshne",
    },
    {
        id: 3,
        title: "BICYCLE MACHINE EXERCISE CARDIO",
        category: ["Sports & Hobbies", "Gym & Fitness",],
        image: "/classified.webp",
        updatedTime: "2 hours ago",
        price: 600,
        location: "Doha",
        seller: "cookie14445",
    },
    {
        id: 4,
        title: "Treadmill for sale..!",
        category: ["Sports & Hobbies", "Gym & Fitness",],
        image: "/classified.webp",
        updatedTime: "3 hours ago",
        price: 1300,
        location: "Abu Hamour",
        seller: "Priyadharshne",
    },
    {
        id: 5,
        title: "BICYCLE MACHINE EXERCISE CARDIO",
        category: ["Sports & Hobbies", "Gym & Fitness",],
        image: "/classified.webp",
        updatedTime: "2 hours ago",
        price: 600,
        location: "Doha",
        seller: "cookie14445",
    },
    {
        id: 6,
        title: "Treadmill for sale..!",
        category: ["Sports & Hobbies", "Gym & Fitness",],
        image: "/classified.webp",
        updatedTime: "3 hours ago",
        price: 1300,
        location: "Abu Hamour",
        seller: "Priyadharshne",
    },
    {
        id: 7,
        title: "BICYCLE MACHINE EXERCISE CARDIO",
        category: ["Sports & Hobbies", "Gym & Fitness"],
        image: "/classified.webp",
        updatedTime: "2 hours ago",
        price: 600,
        location: "Doha",
        seller: "cookie14445",
    },
    {
        id: 8,
        title: "Treadmill for sale..!",
        category: ["Sports & Hobbies", "Gym & Fitness"],
        image: "/classified.webp",
        updatedTime: "3 hours ago",
        price: 1300,
        location: "Abu Hamour",
        seller: "Priyadharshne",
    },
]

export default function FilterProduct() {
    const [hideSold, setHideSold] = useState(false)
    const [brandNewOnly, setBrandNewOnly] = useState(false)
    const [sortBy, setSortBy] = useState("default")

    const links = [
        { name: "Products", href: "/product" },
        { name: "Classified", href: "/classified" },

    ];



    return (
        <div className="container mx-auto px-4 flex flex-col gap-6 mt-6 ">
            <div className="text-sm ">
                <BreadcrumbCustom
                    links={links}
                    currentPage='Electronics' />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {searchResults.map((item) => (
                    <Link href='/product/classified/electronics/123'>
                        <Card key={item.id} className="group overflow-hidden transition-shadow rounded-sm">
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                />
                                <Button size="icon" className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Heart className="h-4 w-4" />
                                </Button>
                                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                                    <Camera className="h-3 w-3" />
                                    <span>1/5</span>
                                </div>
                            </div>
                            <CardContent className="p-4">
                                <div className="flex items-center space-x-2 text-xs  text-muted-foreground mb-2">
                                    {item.category.map((cat, index) => (
                                        <span key={index}>
                                            {cat}
                                            {index < item.category.length - 1 && " > "}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm  mb-2">{item.price} Birr</p>
                                <h2 className="font-semibold line-clamp-2 mb-2">{item.title}</h2>
                                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    {/* <Clock size={14} /> */}
                                    {/* <span>Updated {item.updatedTime}</span> */}
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 pt-0 flex flex-col space-y-3">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center space-x-2">
                                        <MapPin size={14} className="text-muted-foreground" />
                                        <span className="text-sm text-muted-foreground">{item.location}</span>
                                    </div>
                                    <Badge variant="secondary" className="text-xs">{item.seller}</Badge>
                                </div>
                                {/* <Button className="w-full">Contact</Button> */}
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
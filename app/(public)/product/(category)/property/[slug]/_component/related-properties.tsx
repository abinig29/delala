import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Property {
    id: string
    image: string
    title: string
    year: number
    type: string
    size: number
    price: number
}

const properties: Property[] = [
    {
        id: "1",

        image: "/home.jpeg",
        title: "Modern Apartment in Downtown",
        year: 2023,
        type: "Apartment",
        size: 120,
        price: 500000,
    },
    {
        id: "2",
        image: "/home.jpeg",
        title: "Cozy Suburban House",
        year: 2019,
        type: "House",
        size: 200,
        price: 450000,
    },
    {
        id: "3",
        image: "/home.jpeg",
        title: "Spacious Family Home",
        year: 2015,
        type: "House",
        size: 250,
        price: 600000,
    },
    {
        id: "4",
        image: "/home.jpeg",
        title: "Luxury Penthouse with View",
        year: 2020,
        type: "Penthouse",
        size: 180,
        price: 800000,
    },
]

export default function SimilarProperties() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Similar Properties</h2>
                <Link href="/product/property" className="text-primary hover:underline">View all</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {properties.map((property) => (
                    <Link href={"/product/property/123"}>
                        <Card key={property.id} className="overflow-hidden">
                            <div className="relative">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    width={200}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-bold  mb-2">{property.title}</h3>
                                <div className="flex justify-between text-sm text-gray-600 mb-2">
                                    <span>{property.type}</span>
                                    <span>{property.size} m²</span>
                                </div>
                                <p className="font-bold">${property.price.toLocaleString()}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
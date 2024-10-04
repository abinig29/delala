import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Fuel, Gauge } from 'lucide-react'
import Link from 'next/link'

interface Vehicle {
    id: string
    image: string
    makeId: string
    carMake: string
    model: string
    year: number | null
    price: number
    fuelType: string | null
    transmission: string | null
    mileage: number | null
    condition: string | null
}

const similarVehicles: Vehicle[] = [
    {
        id: '1',
        image: '/redcar.png',
        makeId: 'land-rover',
        carMake: 'Land Rover',
        model: 'Range Rover Vogue HSE',
        year: 2023,
        price: 560000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 19000,
        condition: 'New',
    },
    {
        id: '2',
        image: '/redcar.png',
        makeId: 'land-rover',
        carMake: 'Land Rover',
        model: 'Range Rover Vogue Autobiography',
        year: 2019,
        price: 219000,
        fuelType: 'Diesel',
        transmission: 'Automatic',
        mileage: 66945,
        condition: 'Used',
    },
    {
        id: '3',
        image: '/redcar.png',
        makeId: 'land-rover',
        carMake: 'Land Rover',
        model: 'Evoque Dynamic Plus',
        year: 2014,
        price: 53000,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        mileage: 114000,
        condition: 'Used',
    },
    {
        id: '4',
        image: '/redcar.png',
        makeId: 'land-rover',
        carMake: 'Land Rover',
        model: 'Evoque Dynamic Plus',
        year: 2016,
        price: 59000,
        fuelType: 'Diesel',
        transmission: 'Automatic',
        mileage: 143000,
        condition: 'Used',
    },
]

export default function SimilarVehicles() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Similar Vehicles</h2>
                    <Link href="/product/vehicle" className="text-primary hover:underline">View all</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {similarVehicles.map((vehicle) => (
                        <Link href={"/product/property/123"}>
                            <Card key={vehicle.id} className="overflow-hidden">
                                <div className="relative">
                                    <Image
                                        src={vehicle.image}
                                        alt={`${vehicle.carMake} ${vehicle.model}`}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    {vehicle.condition && (
                                        <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                                            {vehicle.condition}
                                        </Badge>
                                    )}
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-semibold">{vehicle.carMake} {vehicle.model}</h3>
                                    <p className="text-sm text-muted-foreground">{vehicle.year}</p>
                                    <div className="flex items-center mt-2">
                                        <Fuel className="w-4 h-4 mr-1" />
                                        <span className="text-sm text-muted-foreground mr-2">{vehicle.fuelType}</span>
                                        <Gauge className="w-4 h-4 mr-1" />
                                        <span className="text-sm text-muted-foreground">
                                            {vehicle.mileage ? `${vehicle.mileage.toLocaleString()} km` : 'N/A'}
                                        </span>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-4 pt-0">
                                    <p className=" font-semibold">{vehicle.price.toLocaleString()} </p>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
import { Heart, Users, Gauge, Fuel } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import FavoriteButton from "@/components/favorite-button"

interface VehicleCardProps {
    type: string
    make: string
    model: string
    year: number
    price: number
    fuelType?: string
    transmission?: string
    mileage?: number
    condition?: string
    seats?: number
}

export default function VehicleCard({
    type,
    make,
    model,
    year,
    price,
    fuelType,
    transmission,
    mileage,
    condition,
    seats,
}: VehicleCardProps) {
    return (
        <Link href={"/product/vehicle/123"}>
            <Card className="w-full max-w-sm overflow-hidden group">
                <div className="relative">
                    <img
                        src="/redcar.png"
                        alt="Apartment interior"
                        className="w-full h-48 object-cover group-hover:scale-105 transition-all delay-100"
                    />
                    <FavoriteButton />
                </div>

                <CardContent className="pt-4">
                    <CardTitle className=" font-bold mb-2">{make} {model}</CardTitle>
                    <p className="text-sm text-gray-500 mb-4">{type} • {year}</p>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-sm font-semibold">${price.toLocaleString()}</p>
                        <Badge variant="default">{condition}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Gauge size={14} />
                            <span>{transmission}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Fuel size={14} />
                            <span>{fuelType}</span>
                        </div>
                    </div>
                    {mileage && (
                        <p className="text-sm text-gray-500 mt-4">Mileage: {mileage.toLocaleString()} miles</p>
                    )}
                </CardContent>
            </Card>
        </Link>

    )
}
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function PropertyCard() {
    return (
        <Link href={"/product/property/123"}>
            <Card className="w-full max-w-sm overflow-hidden rounded-xl">
                <div className="relative">
                    <img
                        src="/home.jpeg"
                        alt="Apartment interior"
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                        {/* <Badge className="bg-primary text-primary-foreground">For Rent</Badge> */}
                    </div>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 text-primary-foreground hover:text-primary hover:bg-primary-foreground"
                    >
                        <Heart className="h-5 w-5" />
                    </Button>
                </div>
                <CardContent className="p-4">
                    <h2 className="font-bold mb-2">Luxury Villa</h2>
                    <p className="text-muted-foreground flex items-center mb-4 text-xs">
                        <MapPin className="h-4 w-4 mr-1 " />
                        123 Example Street, City, State
                    </p>
                    <div className="flex justify-between items-center mb-4">
                        <span className=" font-semibold text-primary text-sm">$850</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span className="flex items-center">
                            <Bed className="h-4 w-4 mr-1" /> 4 Beds
                        </span>
                        <span className="flex items-center">
                            <Bath className="h-4 w-4 mr-1" /> 2 Baths
                        </span>
                        <span className="flex items-center">
                            <Square className="h-4 w-4 mr-1" /> 460 sqft
                        </span>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                    {/* <Button className="w-full bg-main hover:bg-main/60">Contact</Button> */}
                </CardFooter>
            </Card>
        </Link>
    )
}
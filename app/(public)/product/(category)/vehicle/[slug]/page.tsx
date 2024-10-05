
import { ArrowLeft, Heart, MapPin, Bed, Bath, Square, Calendar, Home, Car, Fuel, Gauge } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ContactForm from '../../_components/contact-form'
import ImageSection from './_component/image-section'
import Back from '@/app/(public)/product/(category)/_components/back'
import FavoriteShareButtons from '../../_components/action-button'
import { Badge } from '@/components/ui/badge'
import SimilarVehicles from './_component/simmilar'
import SellerInfo from '../../_components/seller-info'

const vehicleData = {
    name: "2020 Tesla Model 3 Long Range",
    type: "Electric",
    makeId: "tesla",
    carMake: "Tesla",
    model: "Model 3",
    year: 2020,
    price: 45000,
    fuelType: "Electric",
    transmission: "Automatic",
    mileage: 25000,
    condition: "Used",
    description: "Welcome to the future of driving! This stunning 2020 Tesla Model 3 Long Range has been meticulously maintained and is ready for its new owner. With its sleek design and cutting-edge technology, this electric vehicle offers an unparalleled driving experience.",
    features: ["Autopilot", "Premium Interior", " Aero Wheels, All-Glass Roof", " Heated Front and Rear Seats", "Premium Audio System"],
    totalViews: 1337
}

export default function PropertyDetailPage() {
    return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className='flex items-center justify-between'>
                    <Back />
                    <FavoriteShareButtons />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        <ImageSection />
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{vehicleData?.name}</h2>
                            <Badge>For Sell</Badge>
                            <div className="flex space-x-4 text-sm mt-4 text-muted-foreground">
                                <div className="flex items-center text-sm">
                                    <Car className="h-4 w-4 mr-2" />
                                    <span>Year: {vehicleData.year}</span></div>
                                <div className="flex items-center text-sm">
                                    <Fuel className="h-4 w-4 mr-2" />
                                    <span>Fuel: {vehicleData.fuelType}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Gauge className="h-4 w-4 mr-2" />
                                    <span>Mileage: {vehicleData.mileage.toLocaleString()} miles</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Car className="h-4 w-4 mr-2" />
                                    <span>Transmission: {vehicleData.transmission}</span>
                                </div>

                            </div>
                            <div className="mt-4 text-sm text-muted-foreground">
                                <span>2,207 views</span> | <span>134 saves</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-muted-foreground">
                                {vehicleData?.description}
                            </p>
                        </div>
                        <SellerInfo />

                        {/* <div>
                            <h3 className="text-xl font-semibold mb-4">Location</h3>
                            <Image
                                src="/map.jpg"
                                alt="Location Map"
                                width={800}
                                height={300}
                                className="rounded-lg w-full h-[300px] object-cover"
                            />
                        </div> */}

                        {/* <div>
                            <h3 className="text-xl font-semibold mb-4">Features</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Bedrooms: 3</li>
                                        <li>Bathrooms: 2</li>
                                        <li>Full bathrooms: 2</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>No Carport</li>
                                        <li>Garage</li>
                                        <li>Attached Garage</li>
                                    </ul>
                                </div>

                            </div>
                        </div> */}
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-white p-6 rounded-lg sticky top-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-2xl font-bold">$850<span className="text-sm font-normal">/month</span></span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center text-sm">
                                    <Car className="h-4 w-4 mr-2" />
                                    <span>Year: {vehicleData.year}</span></div>
                                <div className="flex items-center text-sm">
                                    <Fuel className="h-4 w-4 mr-2" />
                                    <span>Fuel: {vehicleData.fuelType}</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Gauge className="h-4 w-4 mr-2" />
                                    <span>Mileage: {vehicleData.mileage.toLocaleString()} miles</span>
                                </div>
                                <div className="flex items-center text-sm">
                                    <Car className="h-4 w-4 mr-2" />
                                    <span>Transmission: {vehicleData.transmission}</span>
                                </div>

                            </div>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2">What is special</h4>
                                <div className="flex flex-wrap gap-2">
                                    {vehicleData?.features?.map((feature, index) => (
                                        <span key={index} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">{feature}</span>
                                    ))}
                                </div>
                            </div>
                            <ContactForm />

                        </div>
                    </div>
                </div>
                <SimilarVehicles />
            </main>
        </div>
    )
}
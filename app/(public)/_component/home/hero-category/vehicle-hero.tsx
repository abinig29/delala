"use client"
import { useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from '@/components/ui/label'

export default function VehicleSearch() {
    const [selectedTab, setSelectedTab] = useState("sell");
    const vehicleTypes = [
        "Motor Car (Passenger Car)",
        "Motorcycle",
        "Truck",
        "Light Truck",
        "Heavy Truck",
        "Bus",
        "SUV (Sport Utility Vehicle)",
        "Van",
        "Bicycle",
        "Electric Vehicle (EV)",
        "Scooter",
        "ATV (All-Terrain Vehicle)",
        "Tractor",
        "Trailer"
    ];


    const fuelType = [
        "Diesel",
        "Electric",
        "Hybrid",
        "Hybrid Plugin",
        "Petrol",
        "Other",
    ]


    return (
        <div className="relative w-full h-[calc(100vh-70px)] bg-gray-200">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/herocar.jpeg"
                    alt="Background"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 text-white">
                <div className="bg-white bg-opacity-10 backdrop-blur-2xl rounded p-3 px-10">
                    <h1 className="text-5xl font-bold text-center">
                        Your Next <span className="text-main">Ride</span>  is a Click Away
                    </h1>
                </div>
                <div className='max-w-5xl'>
                    <div className="flex space-x-4 w-fit rounded-lg ">
                        <button
                            onClick={() => setSelectedTab("sell")}
                            className={`px-4 py-1 rounded-t-md ${selectedTab === "sell" ? "bg-main" : "bg-white text-black"
                                }`}
                        >
                            For sell
                        </button>
                        <button
                            onClick={() => setSelectedTab("rent")}
                            className={`px-4 py-1 rounded-t-md ${selectedTab === "rent" ? "bg-main" : "bg-white text-black"
                                }`}
                        >
                            For rent
                        </button>
                    </div>

                    <div className="bg-white bg-opacity-20 backdrop-blur-3xl   p-4 rounded-b-xl rounded-tr-xl shadow-lg  max-w-4xl">
                        <div className="flex gap-4 items-center">
                            <div className="space-y-2 border-r border-black/70 pr-2 w-[200px]">
                                <Label className='text-black/70'>
                                    Vehicle Type
                                </Label>
                                <Select>
                                    <SelectTrigger className="bg-white/50 text-gray-800">
                                        <SelectValue placeholder="Select  Vehicle type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            vehicleTypes?.map(vt => {
                                                return <SelectItem key={vt} value={vt}>{vt}</SelectItem>
                                            })
                                        }
                                    </SelectContent>
                                </Select>

                            </div>
                            <div className="space-y-2 border-r border-black/70 pr-2 w-[200px]">
                                <Label className='text-black/70'>
                                    Fuel Type
                                </Label>
                                <Select>
                                    <SelectTrigger className="bg-white/50 text-gray-800">
                                        <SelectValue placeholder="Select Fuel Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            fuelType?.map(ft => {
                                                return <SelectItem key={ft} value={ft}>{ft}</SelectItem>
                                            })
                                        }
                                    </SelectContent>
                                </Select>

                            </div>
                            <div className="space-y-2 w-[200px]">
                                <Label className='text-black/70'>
                                    Price Range
                                </Label>
                                <Select>
                                    <SelectTrigger className="bg-white/50 text-gray-800">
                                        <SelectValue placeholder="Choose Price Range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0-100000">$0 - $100,000</SelectItem>
                                        <SelectItem value="100000-250000">$100,000 - $250,000</SelectItem>
                                        <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
                                        <SelectItem value="500000-1000000">$500,000 - $1,000,000</SelectItem>
                                        <SelectItem value="1000000+">$1,000,000+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button className="w-fit bg-emerald-500 hover:bg-emerald-600">
                                <Search size={15} />
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}



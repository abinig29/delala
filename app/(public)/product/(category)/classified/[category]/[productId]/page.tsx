"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Share2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import FavoriteShareButtons from '../../../_components/action-button'
import Back from '../../../_components/back'
import ContactForm from '../../../_components/contact-form'
import SellerInfo from '../../../_components/seller-info'

export default function ProductDetail() {
    const [currentImage, setCurrentImage] = useState(0)
    const images = [
        '/classified.webp',
        '/classified.webp',
        '/classified.webp',
        '/classified.webp',
        '/classified.webp'
    ]

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className='flex items-center justify-between'>
                <Back />
                <FavoriteShareButtons />
            </div>

            <div className="grid md:grid-cols-2 gap-8 ">
                <div className="space-y-4">
                    <div className="relative h-[500px] rounded-lg overflow-hidden">
                        <Image
                            src={images[currentImage]}
                            alt="Product image"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg h-full"
                        />
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button>
                    </div>
                    <div className="flex space-x-2 ">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={` w-20 h-20 rounded-md  ${index === currentImage ? 'ring-2 ring-emerald-500' : ''
                                    }`}
                            >
                                <Image src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className=' object-cover rounded-md h-full w-full'
                                />
                            </button>
                        ))}
                    </div>
                    <div>
                        <h1 className="font-semibold mb-2">Bicycle Machine</h1>
                        <Badge>Used</Badge>
                        {/* <div className="flex items-center text-muted-foreground mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>42 Avenue G Brooklyn</span>
                        </div> */}
                        <div className="mt-4 text-sm text-muted-foreground">
                            <span>2,207 views</span> | <span>134 saves</span>
                        </div>
                    </div>
                    <p className="text-gray-600">
                        This high-quality bicycle machine is perfect for your cardio workouts. It features adjustable resistance
                        levels, a comfortable seat, and a digital display to track your progress. Ideal for home use or small gyms.
                    </p>

                    <SellerInfo />
                </div>

                <div className="space-y-6 bg-white p-6 rounded h-fit">
                    <div>
                        <p className=" font-semibold ">600 Birr</p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Badge variant="secondary">Sports & Hobbies</Badge>
                        <Badge variant="secondary">Gym & Fitness</Badge>
                        <Badge variant="secondary">Cardio Equipment</Badge>
                    </div>



                    <div className="space-y-2">
                        <h2 className="">What's special</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Adjustable resistance levels</li>
                            <li>Digital display for tracking progress</li>
                            <li>Comfortable padded seat</li>
                            <li>Sturdy steel frame</li>
                            <li>Compact design for easy storage</li>
                        </ul>
                    </div>

                    <ContactForm />
                </div>
            </div>


            <div className="mt-12 space-y-6">
                <h2 className="text-2xl font-semibold">Similar Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className=" shadow-sm rounded-lg overflow-hidden  ">
                            <Image
                                src="/classified.webp"
                                alt={`Related product ${item}`}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4 space-y-2 bg-white">
                                <h3 className="font-semibold ">Related Exercise Equipment</h3>
                                <Badge variant="secondary">Sports & Hobbies</Badge>
                                <p className=" font-semibold">500 Birr</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
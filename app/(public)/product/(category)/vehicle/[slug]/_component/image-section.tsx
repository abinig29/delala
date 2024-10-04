"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageSection = () => {
    const [currentImage, setCurrentImage] = useState(0)
    const images = [
        '/redcar.png',
        '/redcar.png',
        '/redcar.png',
        '/redcar.png',
        '/redcar.png'
    ]

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
    }
    return (
        <div className='space-y-4'>
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
        </div>
    )
}

export default ImageSection
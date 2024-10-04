"use client"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/common/icons"
import ProductCard from "./product-card"

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 360,
        image: "/headset.png",
        description: "High-quality wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Gaming Keyboard",
        price: 360,
        image: "/headset.png",
        description: "Mechanical gaming keyboard with RGB backlight"
    },
    {
        id: 3,
        name: "Wireless Mouse",
        price: 360,
        image: "/headset.png",
        description: "Ergonomic wireless mouse with adjustable DPI"
    },
    {
        id: 4,
        name: "Studio Headphones",
        price: 360,
        image: "/headset.png",
        description: "Professional studio headphones for audio production"
    },
    {
        id: 5,
        name: "Gaming Keyboard",
        price: 360,
        image: "/headset.png",
        description: "Mechanical gaming keyboard with RGB backlight"
    },
    {
        id: 6,
        name: "Wireless Mouse",
        price: 360,
        image: "/headset.png",
        description: "Ergonomic wireless mouse with adjustable DPI"
    },
    {
        id: 7,
        name: "Studio Headphones",
        price: 360,
        image: "/headset.png",
        description: "Professional studio headphones for audio production"
    },
]

export default function ExploreProducts() {
    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Explore Products</h2>
                    <Button variant={"outline"} className="bg-transparent gap-1">
                        View All
                        <Icons.arrowRight size={13} />
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard
                        // product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
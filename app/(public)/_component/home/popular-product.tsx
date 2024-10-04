"use client"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "./product-card"
import { useRef } from "react"

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
        name: "Studio Headphones",
        price: 360,
        image: "/headset.png",
        description: "Professional studio headphones for audio production"
    },
    {
        id: 6,
        name: "Studio Headphones",
        price: 360,
        image: "/headset.png",
        description: "Professional studio headphones for audio production"
    },
]

export default function PopularProducts() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const { scrollLeft, clientWidth } = scrollContainer;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollContainer.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="py-12 px-4 md:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold">Popular Products</h2>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full" onClick={() => scroll("left")}>
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous products</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full" onClick={() => scroll("right")}>
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Next products</span>
                        </Button>
                    </div>
                </div>
                <div
                    className="flex gap-6 overflow-x-auto"
                    ref={scrollContainerRef}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

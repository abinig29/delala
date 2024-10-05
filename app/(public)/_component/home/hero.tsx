"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import PropertySearch from "./hero-category/property-hero";
import VehicleSearch from "./hero-category/vehicle-hero";
import ClassifiedSearch from "./hero-category/classified-hero";
export default function HeroSection() {
    const Categories = [
        PropertySearch,
        VehicleSearch,
        ClassifiedSearch

    ]
    return (
        <Carousel className=" w-full" orientation='horizontal'>
            <CarouselContent>

                {
                    Categories?.map((Category, index) => {
                        return <CarouselItem
                            key={index}>
                            <Category />
                        </CarouselItem>
                    })
                }
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}



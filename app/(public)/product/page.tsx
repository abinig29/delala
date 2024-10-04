import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const categories = [
    {
        id: 'vehicle',
        name: 'Vehicles',
        products: [
            { name: 'Tesla Model 3', price: '$41,190', image: "/redcar.png", details: 'Electric • 2023 • Autopilot' },
            { name: 'Toyota Camry', price: '$25,295', image: "/redcar.png", details: 'Hybrid • 2023 • Fuel Efficient' },
            { name: 'Ford F-150', price: '$29,990', image: "/redcar.png", details: 'Truck • 2023 • Towing Capacity' },
            { name: 'Honda Civic', price: '$21,700', image: "/redcar.png", details: 'Sedan • 2023 • Reliable' },
            { name: 'BMW X5', price: '$59,400', image: "/redcar.png", details: 'SUV • 2023 • Luxury' },
            { name: 'Chevrolet Silverado', price: '$29,300', image: "/redcar.png", details: 'Truck • 2023 • Heavy Duty' },
        ]
    },
    {
        id: 'property',
        name: 'Properties',
        products: [
            { name: 'Downtown Condo', price: '$299,000', image: '/home.jpeg', details: '2 bed • 2 bath • City View' },
            { name: 'Suburban House', price: '$450,000', image: '/home.jpeg', details: '4 bed • 3 bath • Large Yard' },
            { name: 'Beach Villa', price: '$1,200,000', image: '/home.jpeg', details: '5 bed • 4 bath • Oceanfront' },
            { name: 'Mountain Cabin', price: '$180,000', image: '/home.jpeg', details: '2 bed • 1 bath • Scenic' },
            { name: 'City Apartment', price: '$220,000', image: '/home.jpeg', details: '1 bed • 1 bath • Modern' },
            { name: 'Country Estate', price: '$850,000', image: '/home.jpeg', details: '6 bed • 5 bath • Acreage' },
        ]
    },
    {
        id: 'jobs',
        name: 'Jobs',
        products: [
            { name: 'Software Engineer', price: '$120k/year', image: '/job.jpeg', details: 'Full-time • Remote • Senior' },
            { name: 'Marketing Manager', price: '$80k/year', image: '/job.jpeg', details: 'Full-time • On-site • 5+ years exp' },
            { name: 'Data Analyst', price: '$75k/year', image: '/job.jpeg', details: 'Full-time • Hybrid • Entry-level' },
            { name: 'UX Designer', price: '$90k/year', image: '/job.jpeg', details: 'Contract • Remote • Mid-level' },
            { name: 'Product Manager', price: '$110k/year', image: '/job.jpeg', details: 'Full-time • On-site • 3+ years exp' },
            { name: 'Sales Representative', price: '$60k/year + commission', image: '/job.jpeg', details: 'Full-time • Field • Entry-level' },
        ]
    },
    {
        id: 'classifieds',
        name: 'Classifieds',
        products: [
            { name: 'Vintage Guitar', price: '$800', image: '/classified.webp', details: 'Used • 1970s Fender Stratocaster' },
            { name: 'Mountain Bike', price: '$350', image: '/classified.webp', details: 'Used • Giant Brand • 21-speed' },
            { name: 'Antique Clock', price: '$200', image: '/classified.webp', details: 'Vintage • Pendulum • Working condition' },
            { name: 'Designer Handbag', price: '$500', image: '/classified.webp', details: 'Like New • Gucci • Limited Edition' },
            { name: 'Drone', price: '$400', image: '/classified.webp', details: 'Used • DJI Mavic Air 2 • 4K Camera' },
            { name: 'Vinyl Record Collection', price: '$150', image: '/classified.webp', details: 'Used • 100+ Records • Various Genres' },
        ]
    },
    {
        id: 'service',
        name: 'Services',
        products: [
            { name: 'Home Cleaning', price: '$80/hr', image: '/service.png', details: 'Professional • Eco-friendly products' },
            { name: 'Personal Trainer', price: '$60/session', image: '/service.png', details: 'Certified • In-person or virtual' },
            { name: 'Web Design', price: '$500/project', image: '/service.png', details: 'Custom • Responsive • SEO-friendly' },
            { name: 'Dog Walking', price: '$20/walk', image: '/service.png', details: 'Insured • 30 or 60 min walks' },
            { name: 'Tutoring', price: '$40/hr', image: '/service.png', details: 'Math • Science • Test Prep' },
            { name: 'Car Detailing', price: '$150/service', image: '/service.png', details: 'Interior & Exterior • Mobile service' },
        ]
    },
]

export default function Product() {
    return (
        <div className="container mx-auto p-4 space-y-12">
            {categories.map((category) => (
                <section key={category.id} className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">{category.name}</h2>
                        <Link href={`/product/${category.id}`} className="text-primary hover:underline flex items-center gap-1">
                            View All <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="flex overflow-x-auto pb-4 -mx-4 px-4 space-x-4 scrollbar-hide">
                            {category.products.map((product, index) => (
                                <Card key={index} className="flex-none w-64 overflow-hidden hover:shadow transition-shadow duration-300">
                                    <CardContent className="p-0">
                                        <div className={`h-40  `}>
                                            <img src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover " />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold mb-1 truncate">{product.name}</h3>
                                            <Badge variant="secondary" className="mb-2">{product.price}</Badge>
                                            <p className="text-sm text-gray-600 line-clamp-2">{product.details}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}
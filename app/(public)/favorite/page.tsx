"use client"
import { useState } from 'react'
import { Heart, Trash2, Car, Home, Briefcase, Package } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FavoriteItem {
    id: string
    title: string
    category: 'vehicle' | 'property' | 'job' | 'classified'
    details: string
    price: number
    imageUrl: string
}

export default function ModernFavoritesPage() {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([
        {
            id: '1',
            title: 'Tesla Model 3',
            category: 'vehicle',
            details: 'Electric • 2023 • Autopilot',
            price: 45000,
            imageUrl: '/redcar.png'
        },
        {
            id: '2',
            title: 'Modern Loft Apartment',
            category: 'property',
            details: '2 Beds • 2 Baths • 1200 sqft',
            price: 2500,
            imageUrl: '/redcar.png'
        },
        {
            id: '3',
            title: 'UX/UI Designer',
            category: 'job',
            details: 'Remote • Senior Level',
            price: 120000,
            imageUrl: '/redcar.png'
        },
        {
            id: '4',
            title: 'MacBook Pro M1',
            category: 'classified',
            details: '16" • 1TB SSD • 32GB RAM',
            price: 2200,
            imageUrl: '/redcar.png'
        },
    ])

    const removeFavorite = (id: string) => {
        setFavorites(favorites.filter(item => item.id !== id))
    }

    const getCategoryIcon = (category: FavoriteItem['category']) => {
        switch (category) {
            case 'vehicle':
                return <Car className="h-5 w-5" />
            case 'property':
                return <Home className="h-5 w-5" />
            case 'job':
                return <Briefcase className="h-5 w-5" />
            case 'classified':
                return <Package className="h-5 w-5" />
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {favorites.map((item) => (
                        <div key={item.id} className="bg-white rounded shadow-sm overflow-hidden transition-all duration-300 hover:shadow">
                            <div className="relative">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
                                <Badge className="absolute top-3 left-3 bg-white text-gray-800 font-semibold">
                                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                                </Badge>
                                <Button
                                    variant="default"
                                    size="icon"
                                    className="absolute top-3 right-3 bg-white transition-all duration-300 p-2"
                                    onClick={() => removeFavorite(item.id)}
                                >
                                    <Trash2 className="h-4 w-4 text-gray-600" />
                                </Button>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h2 className=" font-semibold text-gray-800 truncate">{item.title}</h2>
                                    {getCategoryIcon(item.category)}
                                </div>
                                <p className="text-sm text-gray-600 mb-3">{item.details}</p>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-bold text-gray-800">
                                        {item.category === 'job'
                                            ? `$${item.price.toLocaleString()}/year`
                                            : item.category === 'property'
                                                ? `$${item.price.toLocaleString()}/month`
                                                : `$${item.price.toLocaleString()}`
                                        }
                                    </p>
                                    <Button variant="outline" size="sm" className="text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                                        View Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {favorites.length === 0 && (
                    <div className="text-center py-16">
                        <Heart className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800">No favorites yet</h2>
                        <p className="text-gray-500 max-w-md mx-auto">
                            Start adding items to your favorites to see them here. Discover great deals across various categories!
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
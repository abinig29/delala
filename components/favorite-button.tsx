import React, { useState } from 'react'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'

const FavoriteButton = () => {
    const [isFavorite, setIsFavorite] = useState(false)


    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white bg-opacity-50 hover:bg-opacity-100 transition-all duration-200"
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
        >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </Button>
    )
}

export default FavoriteButton
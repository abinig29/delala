"use client"
import { Heart, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import ShareModal from '@/components/common/share-modal'
import { useState } from 'react'

interface ActionButtonProps {
    icon: React.ReactNode
    label: string
    onClick: () => void
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, label, onClick }) => (
    <Button
        variant="outline"
        className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white  rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        onClick={onClick}
    >
        {icon}
        {label}
    </Button>
)

export default function FavoriteShareButtons() {
    const [open, setOpen] = useState(false)
    const handleFavorite = () => {
        console.log('Favorite clicked')
        // Add your favorite logic here
    }

    const handleShare = () => {
        setOpen(true)
    }

    return (
        <div className="flex gap-4">
            <ShareModal open={open} setOpen={setOpen} />
            <ActionButton
                icon={<Heart className="w-4 h-4" />}
                label="Favorite"
                onClick={handleFavorite}
            />
            <ActionButton
                icon={<Share2 className="w-4 h-4" />}
                label="Share"
                onClick={handleShare}
            />
        </div>
    )
}
"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Back = () => {
    const router = useRouter()
    return (
        <Button
            onClick={() => router?.back()}
            variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
        </Button>
    )
}

export default Back
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'

// Mock data for recent contacts
const recentContacts = [
    {
        id: 1,
        userName: "John Doe",
        productName: "Wireless Headphones",
        productImage: "/placeholder.svg?height=40&width=40",
        date: "15 Jun 2023",
        status: "Pending"
    },
    {
        id: 2,
        userName: "Jane Smith",
        productName: "Smart Watch",
        productImage: "/placeholder.svg?height=40&width=40",
        date: "14 Jun 2023",
        status: "Pending"
    },
    {
        id: 3,
        userName: "Alice Johnson",
        productName: "Laptop",
        productImage: "/placeholder.svg?height=40&width=40",
        date: "13 Jun 2023",
        status: "Pending"
    },
    {
        id: 4,
        userName: "Alice Johnson",
        productName: "Laptop",
        productImage: "/placeholder.svg?height=40&width=40",
        date: "13 Jun 2023",
        status: "Pending"
    },
    {
        id: 5,
        userName: "Alice Johnson",
        productName: "Laptop",
        productImage: "/placeholder.svg?height=40&width=40",
        date: "13 Jun 2023",
        status: "Pending"
    },
    // Add more mock data as needed
]

export default function RecentContacts() {
    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Recent Contacts</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {recentContacts.map((contact) => (
                        <li key={contact.id} className="flex items-center space-x-4 bg-muted/40  rounded-lg">
                            <img src="/6.png" className=" h-10 w-10 rounded object-cover" alt="" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                    {contact.userName}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                    {contact.productName}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {contact.date}
                                </p>
                            </div>
                            <Button size="sm" className="flex-shrink-0 bg-main hover:bg-main/80">
                                <Phone className="h-4 w-4 mr-2" />
                                Call
                            </Button>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
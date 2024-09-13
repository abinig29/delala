import React from 'react'
import { Eye, Users, Phone, Heart, Mail, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function ProductAnalytics() {
    // Mock data - replace with actual data in a real application
    const engagementMetrics = [
        { icon: Eye, label: 'Total Views', value: 1234 },
        { icon: Users, label: 'Unique Visitors', value: 987 },
        { icon: Phone, label: 'Contact Attempts', value: 56 },
        { icon: Heart, label: 'Contact Rate', value: `15%` },
    ]



    return (
        <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {engagementMetrics.map((metric, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {metric.label}
                            </CardTitle>
                            <div className='h-8 w-8 text-muted-foreground bg-green-400/30 rounded-sm grid place-content-center'>
                                <metric.icon size={18} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xl font-semibold">{metric.value}</div>
                        </CardContent>
                    </Card>
                ))}

            </div>
        </div>
    )
}
import { Bell, Search, Heart, MessageCircle, FileText } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationPanel({}) {
    return (
        <Card className="w-full max-w-sm mx-auto shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                <Button variant="ghost" size="sm">
                    Mark all as Read
                </Button>
            </CardHeader>
            <CardContent className="space-y-4 py-8">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                    <div className="relative">
                        <div className="absolute -left-12 -top-6">
                            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                                <div className="h-4 w-1 bg-green-400 rounded-full transform rotate-12"></div>
                            </div>
                        </div>
                        <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center">
                            <Bell className="h-10 w-10 text-gray-400" />
                        </div>
                        <div className="absolute -right-12 -bottom-6">
                            <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                                <div className="h-4 w-1 bg-green-400 rounded-full transform -rotate-12"></div>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-xl font-semibold">No notifications...yet!</h3>
                    <p className="text-sm text-muted-foreground">
                        View ad recommendations and news by dubizzle, etc..
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" variant="outline">
                    View All Notifications
                </Button>
            </CardFooter>
        </Card>
    )
}
import { Bell, CheckCircle, DivideCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
    const notifications = [
        {
            id: 1,
            type: "inquiry",
            title: "New Product Inquiry",
            description: "You have received a new inquiry about your product \"Vintage Camera\". The potential buyer has questions about its condition and shipping options.",
            time: "2 minutes ago",
            action: "View Inquiry",
        },
        {
            id: 2,
            type: "approval",
            title: "Product Listing Approved",
            description: "Great news! Your product \"Handmade Pottery Set\" has been approved and is now live on our marketplace. Start promoting it to increase your sales!",
            time: "1 hour ago",
            action: "View Listing",
        },
        {
            id: 3,
            type: "approval",
            title: "Product Listing Approved",
            description: "Great news! Your product \"Handmade Pottery Set\" has been approved and is now live on our marketplace. Start promoting it to increase your sales!",
            time: "1 hour ago",
            action: "View Listing",
        },
    ]

    return (
        <div className="w-full max-w-3xl mx-auto min-h-screen pt-10">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-xl font-semibold"> Notifications</div>
                <Button variant="outline" size="sm">
                    Mark all as read
                </Button>
            </div>
            <div className="  mt-6">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 bg-white shadow-sm border p-4 rounded-lg">
                        {notification.type === "inquiry" ? (
                            <MessageCircle className="  text-blue-500" size={16} />
                        ) : (
                            <CheckCircle className="  text-green-500" size={16} />
                        )}
                        <div className="space-y-1">
                            <p className="text-sm font-medium leading-none">{notification.title}</p>
                            <p className="text-sm text-muted-foreground">{notification.description}</p>
                            <div className="flex items-center pt-2">
                                <span className="text-xs text-muted-foreground">{notification.time}</span>
                                <Button variant="link" size="sm" className="ml-auto">
                                    {notification.action}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
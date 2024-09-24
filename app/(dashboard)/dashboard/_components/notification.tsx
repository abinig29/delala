import { Icons } from '@/components/common/icons'
import { useState } from 'react'
import { Bell } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import React from 'react'
import { INotification } from '@/types/db'

const Notification = () => {
    const [notifications, setNotifications] = useState<INotification[]>([
        { id: 1, title: "New message", description: "You have a new message from John", time: "2 min ago" },
        { id: 2, title: "Meeting reminder", description: "Team meeting in 30 minutes", time: "30 min ago" },
        { id: 3, title: "Task completed", description: "Project X has been marked as complete", time: "1 hour ago" },
    ])
    return (


        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="relative w-8 h-8 rounded-full">
                    <Icons.notification size={12} />
                    {notifications.length > 0 && (
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                    )}
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Notifications</h2>
                    <Button variant="ghost" size="sm" onClick={() => setNotifications([])}>
                        Clear all
                    </Button>
                </div>
                <ScrollArea className="h-[300px]">
                    {notifications.length === 0 ? (
                        <p className="text-center text-muted-foreground">No new notifications</p>
                    ) : (
                        notifications.map((notification) => (
                            <div key={notification.id} className="mb-4 last:mb-0">
                                <h3 className="text-sm font-medium">{notification.title}</h3>
                                <p className="text-sm text-muted-foreground">{notification.description}</p>
                                <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                            </div>
                        ))
                    )}
                </ScrollArea>
            </PopoverContent>
        </Popover>
    )
}

export default Notification




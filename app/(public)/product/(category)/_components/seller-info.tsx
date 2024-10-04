import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon, MapPinIcon, Send, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'


const userProfile = {
  name: "John Doe",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, Anytown, USA",
  avatar: "/placeholder.svg"
}
const SellerInfo = () => {
  return (
    <div>
      <Card className='bg-bgPrimary shadow-none'>
        <CardContent className="flex items-start space-x-4 p-0">

          <div>
            <div className='flex gap-2 items-center'>
              <Avatar className="h-10 w-10">
                <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
                <AvatarFallback>{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xs font-semibold">{userProfile.name}</h3>
            </div>
            {/* <div className="flex items-center text-muted-foreground text-xs">
              <PhoneIcon className="h-3 w-3 mr-2" />
              <span>{userProfile.phone}</span>
            </div> */}
            <div className="flex items-center text-muted-foreground text-xs">
              <MapPinIcon className="h-3 w-3 mr-2" />
              <span>{userProfile.address}</span>
            </div>
            <div className="mt-2 flex space-x-2">
              <Button variant="outline" size="sm" className="rounded text-sm">
                <Phone className=" mr-2" size={13} />
                +1 (555) 123-4567
              </Button>
              <Button variant="outline" size="sm" className="rounded text-sm">
                <Send className=" mr-2" size={13} />
                @johndoe
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SellerInfo
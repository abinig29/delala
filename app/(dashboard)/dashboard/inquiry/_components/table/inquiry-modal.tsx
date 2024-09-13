import { Modal } from '@/components/ui/modal'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon } from "lucide-react"

const InquiryModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title='Inquiry Detail'
            >
                <div>

                </div>
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="+251 92341 8132" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select defaultValue="pending">
                                <SelectTrigger id="status">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="processing">Processing</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="inquiry-date">Inquiry date</Label>
                            <Input id="inquiry-date" type="date" defaultValue="2023-08-22" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="product-name">Product name</Label>
                        <Input id="product-name" placeholder="Acme Prism T-Shirt" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="note">Note</Label>
                        <Textarea
                            id="note"
                            placeholder="I'm interested in the Prism T-Shirt and would like to know more about the sizing and available colors."
                            className="min-h-[100px]"
                        />
                    </div>
                </form>
                <div className="flex justify-end mt-4 gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button className="bg-main hover:bg-main">
                        <PhoneIcon className="mr-2 h-4 w-4" />
                        Call to customer
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default InquiryModal
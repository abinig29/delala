import { Modal } from '@/components/ui/modal'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon } from "lucide-react"
import { IInquiry, InquiryStatus } from '@/types/db'
import { formatDate } from '@/lib/util/utils'
import useMutationFunc from '@/hooks/use-mutation'
import useSuccessToasts from '@/hooks/use-customToast'
import { KY, MTD } from '@/lib/constant'
import { updateLocalData } from '@/lib/util/updateLocal'
import useCustomSearchParams from '@/hooks/use-as'
import { useQueryClient } from '@tanstack/react-query'


const InquiryModal = ({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: IInquiry }) => {

    const { errorNoAction } = useSuccessToasts()
    const [status, setStatus] = useState<InquiryStatus>(data?.status)
    const queryClient = useQueryClient()
    const { query } = useCustomSearchParams("name")
    const {
        isPending,
        mutateAsync } = useMutationFunc({
            onSuccess: (newData: IInquiry) => {
                onClose()
                updateLocalData<IInquiry>(
                    MTD.PATCH,
                    KY.inquiry,
                    query,
                    queryClient,
                    newData,
                    data.id,
                )
            },
            onError: (data) => {
                errorNoAction(data?.message)
            },
        });

    const onSubmit = async () => {
        const dataToBeSent = {
            status
        };
        try {
            await mutateAsync({
                url: `inquiry/${data?.id}/status`,
                method: MTD.PATCH,
                body: dataToBeSent,

            });
        } catch (e: any) {
            console.log(e.message);
        }
    };

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title='Inquiry Detail'
            >
                <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                disabled
                                value={data?.name}
                                id="name"
                                placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                disabled
                                value={data?.phone}
                                id="phone"
                                placeholder="+251 92341 8132" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="status">Status</Label>
                            <Select
                                value={status}
                                onValueChange={(value) => setStatus(value as InquiryStatus)}
                            >
                                <SelectTrigger id="status">
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value={InquiryStatus?.ANSWERED}>{InquiryStatus?.ANSWERED}</SelectItem>
                                    <SelectItem value={InquiryStatus?.PENDING}>{InquiryStatus?.PENDING}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="inquiry-date">Inquiry date</Label>
                            <Input
                                disabled
                                id="inquiry-date"
                                value={formatDate(data?.createdAt)} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="product-name">Product name</Label>
                        <Input
                            disabled
                            id="product-name"
                            placeholder="Acme Prism T-Shirt"
                            value={data?.product?.name}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="note">Note</Label>
                        <Textarea
                            disabled
                            id="note"
                            value={data?.note}
                            className="min-h-[100px]"
                        />
                    </div>
                </form>
                <div className="flex justify-end mt-4 gap-2">
                    <Button
                        disabled={isPending}
                        variant="outline">Cancel</Button>
                    <Button
                        onClick={onSubmit}
                        isLoading={isPending}
                        className="bg-main hover:bg-main">
                        Update Status
                    </Button>
                </div>
            </Modal>
        </div >
    )
}

export default InquiryModal
"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send } from "lucide-react"
import { motion } from "framer-motion"

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Please enter a valid phone number.",
    }),
    note: z.string().max(500, {
        message: "Note must not exceed 500 characters.",
    }),
})

const AnimatedSendIcon = () => (
    <motion.div
        animate={{
            x: [0, 5, 0],
            rotate: [0, -10, 10, -10, 0],
        }}
        transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
        }}
    >
        <Send className="h-4 w-4" />
    </motion.div>
)

export default function ContactModal() {
    const [open, setOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            note: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="flex-1 mr-2 text-sm gap-2 bg-main hover:bg-main/60">
                    <MessageCircle className="w-4 h-4" />
                    Contact
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact Information</DialogTitle>
                    <DialogDescription>
                        Please provide your contact details.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="johndoe@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+1234567890" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="note"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Note</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Add any additional information here..." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Max 500 characters.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <motion.div
                            initial={false}
                            animate={isSubmitting ? "submitting" : "idle"}
                        >
                            <motion.button
                                className="w-full bg-emerald-500 text-white py-2 px-4 rounded-md font-medium relative overflow-hidden"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                variants={{
                                    idle: { scale: 1 },
                                    submitting: { scale: 0.95 }
                                }}
                            >
                                <motion.span
                                    className="flex items-center justify-center"
                                    variants={{
                                        idle: { opacity: 1 },
                                        submitting: { opacity: 0 }
                                    }}
                                >
                                    Submit
                                    <motion.div
                                        className="ml-2"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <AnimatedSendIcon />
                                    </motion.div>
                                </motion.span>
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    variants={{
                                        idle: { opacity: 0 },
                                        submitting: { opacity: 1 }
                                    }}
                                >
                                    <motion.span
                                        className="block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                </motion.div>
                            </motion.button>
                        </motion.div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
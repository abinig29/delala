'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ShoppingBag, Sparkles, ChevronRight, Gift, Tag } from 'lucide-react'

export default function EnhancedModernBanner() {
    const [isVisible, setIsVisible] = useState(false)
    const controls = useAnimation()

    useEffect(() => {
        setIsVisible(true)
        controls.start(i => ({
            y: [0, -10, 0],
            transition: { repeat: Infinity, repeatType: "reverse", duration: 1, delay: i * 0.1 }
        }))
    }, [controls])

    return (
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 mt-20 shadow-lg overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-white opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
            </div>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 md:mb-0 md:mr-6 relative"
                >
                    <ShoppingBag className="w-24 h-24 text-white" />
                    <motion.div
                        animate={controls}
                        custom={0}
                        className="absolute -top-4 -right-4"
                    >
                        <Tag className="w-8 h-8 text-yellow-300" />
                    </motion.div>
                </motion.div>
                <div className="flex-1 text-white">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold mb-2"
                    >
                        Hundreds of
                    </motion.h2>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl md:text-3xl  font-bold mb-4"
                    >
                        New lower prices!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-lg mb-6"
                    >
                        It's more affordable than ever to give every room in your home a stylish makeover
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-emerald-600 px-6 py-3 rounded-full  flex items-center transition-colors duration-300 hover:bg-emerald-100 group"
                    >
                        Contact us
                        <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="hidden md:block relative"
                >
                    <Gift className="w-32 h-32 text-white" />
                    <motion.div
                        animate={controls}
                        custom={1}
                        className="absolute -top-4 -right-4"
                    >
                        <Sparkles className="w-8 h-8 text-yellow-300" />
                    </motion.div>
                </motion.div>
            </div>
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 2 + Math.random() * 2,
                        delay: i * 0.2,
                    }}
                >
                    <div className="w-2 h-2 bg-white rounded-full" />
                </motion.div>
            ))}
        </div>
    )
}
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PropertyTabs() {
    const [activeTab, setActiveTab] = useState<'rent' | 'sell'>('rent')

    return (
        <div className="relative inline-flex bg-white rounded-full p-1 font-medium text-sm">
            <button
                onClick={() => setActiveTab('rent')}
                className={`relative z-10 px-6 py-2 rounded-full transition-colors duration-300 ${activeTab === 'rent' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}
                role="tab"
                aria-selected={activeTab === 'rent'}
                aria-controls="rent-panel"
                id="rent-tab"
            >
                For Rent
            </button>
            <button
                onClick={() => setActiveTab('sell')}
                className={`relative z-10 px-6 py-2 rounded-full transition-colors duration-300 ${activeTab === 'sell' ? 'text-white' : 'text-gray-700 hover:text-gray-900'
                    }`}
                role="tab"
                aria-selected={activeTab === 'sell'}
                aria-controls="sell-panel"
                id="sell-tab"
            >
                For Sale
            </button>
            <motion.div
                className="absolute inset-0 z-0 rounded-full bg-emerald-500"
                initial={false}
                animate={{
                    x: activeTab === 'rent' ? 0 : '100%',
                    width: '50%',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
        </div>
    )
}
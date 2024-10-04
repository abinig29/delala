"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'



const navItems = [
    {
        name: 'Vehicle',
        href: '#',
        dropdown: [
            {
                title: 'Used Cars for Sale',
                items: ['Cars by Make', 'Cars by Body Type', 'Cars by Price']
            },
            {
                title: 'Motorcycles',
                items: ['Motorcycles for Sale', 'Motorcycle Accessories']
            },
            {
                title: 'Heavy Vehicles',
                items: ['Trucks', 'Construction Vehicles', 'Buses']
            },
        ]
    },
    {
        name: 'Property',
        href: '#',
        isNew: true,
        dropdown: [
            {
                title: 'Properties for Sale',
                items: ['Apartment', 'House', 'Land', 'Commercial', "Villa"]
            },
            {
                title: 'Properties for Rent',
                items: ['Apartment', 'House', 'Land', 'Commercial', "Villa"]
            },
        ]
    },
    {
        name: 'Jobs',
        href: '#',
        dropdown: [
            {
                title: 'Jobs Seekers',
                items: ['Jobs by Categories', 'Jobs by Types', 'Jobs by Qualifications']
            },
            {
                title: 'Recruiters',
                items: ['Jobs Seeker by Categories', 'Jobs Seeker by Types', 'Jobs Seeker by Qualifications']
            },
            {
                title: 'Hire with Us',
                items: []
            },
        ]
    },
    {
        name: 'Classifieds',
        href: '#',
        dropdown: [
            { title: 'Electronics', items: ['Mobiles', 'Tablets', 'Laptops'] },
            { title: 'Home & Garden', items: ['Furniture', 'Home Decor', 'Garden Supplies'] },
        ]
    },
    {
        name: 'Service',
        href: '#',
        dropdown: [
            { title: 'Furniture', items: ['Living Room', 'Bedroom', 'Dining Room'] },
            { title: 'Garden', items: ['Outdoor Furniture', 'Plants', 'Garden Tools'] },
        ]
    },

]

export default function CategoryHeader() {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    return (
        <header className="bg-white shadow-sm border-y">
            <nav className="container mx-auto px-4">
                <ul className="flex justify-between items-center h-16">
                    {navItems.map((item) => (
                        <li key={item.name} className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}>
                            <Link href={item.href} className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                                {item.name}
                                {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                            </Link>
                            {item.dropdown && activeDropdown === item.name && (
                                <div className="absolute left-0 -mt-1 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                    <div className="py-1">
                                        {item.dropdown.map((section) => (
                                            <div key={section.title} className="px-4 py-2">
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{section.title}</p>
                                                {section.items.map((subItem) => (
                                                    <Link key={subItem} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 capitalize">
                                                        {subItem}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
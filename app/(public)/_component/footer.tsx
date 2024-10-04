import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-white py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Properties</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Apartment</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Shared Accommodation</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Villa</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Commercial</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicles</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">4x4/SUV</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Car/Sedan</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Car rentals</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Showrooms</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Classifieds</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Furniture</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Electronics</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Fashion & Beauty</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Phones & Tablets</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Labor & Moving</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Household Services</Link></li>
                        <li><Link href="#" className="text-gray-600 hover:text-gray-900">Cleaning Services</Link></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-200 pt-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl font-bold">D</span>
                        </div>
                        <div className="text-gray-600">
                            © 2024 Delala. All rights reserved.
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
                        <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center">
                            <Mail className="h-3 w-3 mr-2" />
                            contact@qatarliving.com
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900 flex items-center text-sm">
                            <Phone className="h-3 w-3 mr-2" />
                            +974 1234 5678
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
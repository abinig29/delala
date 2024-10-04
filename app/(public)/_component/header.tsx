import Logo from "@/components/common/logo"
import { Bell, Heart, LogIn, Package, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProductModal from "../../../components/product-upload"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        // <header className="bg-white shadow-sm h-[70px]">
        //     <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        //         <Logo isHome />
        //         <nav className="hidden md:flex items-center space-x-10">
        //             <Link href="/product" className="flex items-center space-x-1 text-gray-600 hover:text-teal-500 transition-colors">
        //                 <svg
        //                     className=" w-5 h-5"
        //                     fill="none"
        //                     height="24"
        //                     stroke="currentColor"
        //                     strokeLinecap="round"
        //                     strokeLinejoin="round"
        //                     strokeWidth="2"
        //                     viewBox="0 0 24 24"
        //                     width="24"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                 >
        //                     <path d="m7.5 4.27 9 5.15" />
        //                     <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        //                     <path d="m3.3 7 8.7 5 8.7-5" />
        //                     <path d="M12 22V12" />
        //                 </svg>
        //                 <span>Products</span>
        //             </Link>
        //             <Link href="/notification" className="flex items-center space-x-1 text-gray-600 hover:text-teal-500 transition-colors">
        //                 <Bell className="w-4 h-4" />
        //                 <span>Notification</span>
        //             </Link>
        //             <Link href="/favorites" className="flex items-center space-x-1 text-gray-600 hover:text-teal-500 transition-colors">
        //                 <Heart className="w-4 h-4" />
        //                 <span>Favorite</span>
        //             </Link>
        //         </nav>
        //         <div className="flex items-center space-x-4">
        //             <Link
        //                 href={"/login"}
        //                 className="text-gray-600 hover:text-teal-500 transition-colors">
        //                 <LogIn className="w-5 h-5" />
        //                 <span className="sr-only">Login</span>
        //             </Link>
        //             <ProductModal />
        //         </div>
        //     </div>
        // </header>

        <header className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4  py-4 flex items-center justify-between">
                <div className="flex items-center">
                    <Logo isHome />
                    <nav className="hidden md:flex space-x-8 text-[16px] ml-4">
                        <Link href="/product/vehicle" className="text-gray-800 hover:text-main">Vehicle</Link>
                        <Link href="/product/property" className="text-gray-800 hover:text-main">Property</Link>
                        <Link href="/product/job" className="text-gray-800 hover:text-main">Jobs</Link>
                        <Link href="/product/classified" className="text-gray-800 hover:text-main">Classifieds</Link>
                        <Link href="/product/service" className="text-gray-800 hover:text-main">Service</Link>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href={"/notification"}>
                        <Button variant="outline" size="icon" className="hover:bg-slate-300/40 hover:text-main">
                            <Bell className="h-4 w-4" />
                        </Button>
                    </Link>
                    <Link href={"/favorite"}>
                        <Button variant="outline" size="icon" className="hover:bg-slate-300/40 hover:text-main"  >
                            <Heart className="h-4 w-4 " />
                        </Button>
                    </Link>
                    <Link href={"/login"}>
                        <Button variant="outline" size="icon" className="hover:bg-slate-300/40 hover:text-main">
                            <LogIn className="h-4 w-4" />
                        </Button>
                    </Link>
                    <ProductModal />
                </div >
            </div >
        </header >
    )
}
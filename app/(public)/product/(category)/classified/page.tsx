import { BreadcrumbCustom } from "@/components/common/breadcrumb-custom"
import { Card, CardContent } from "@/components/ui/card"
import { Tv, Smartphone, Home, Shirt, Baby, Cat, Sofa } from "lucide-react"
import Link from "next/link"
import GlobalFilter from "./_component/global-filter"
import SubProductCatalog from "./_component/sub-category"

const categories = [
    { name: "Furniture & Decor", icon: Sofa, count: 22822 },
    { name: "Electronics", icon: Tv, count: 23349 },
    { name: "Mobile Phones & Tablets", icon: Smartphone, count: 10698 },
    { name: "Home & Office Essentials", icon: Home, count: 3448 },
    { name: "Fashion & Beauty", icon: Shirt, count: 6637 },
    { name: "Kids & Toys", icon: Baby, count: 6484 },
    { name: "Pets & Pet Care", icon: Cat, count: 2027 },
]

export default function CategorySelector() {
    const totalAds = categories.reduce((sum, category) => sum + category.count, 0)
    const links = [
        { name: "Products", href: "/product" },
    ];
    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <div className="flex items-center justify-between mb-6">
                <div className="text-sm breadcrumbs">
                    <BreadcrumbCustom links={links} currentPage='Classified' />
                </div>
            </div>
            <GlobalFilter />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categories.map((category) => (
                    <Link key={category?.name} href={"/product/classified/electronics"}>
                        <Card key={category.name} className=" transition-shadow duration-300">
                            <CardContent className="flex flex-col items-center justify-center p-6">
                                <div className="bg-main rounded-full p-4 mb-4 text-white">
                                    <category.icon className="h-8 w-8 " />
                                </div>
                                <h2 className="text-lg  text-center mb-2">{category.name}</h2>
                                <p className="text-gray-500">{category.count.toLocaleString()}</p>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
            <SubProductCatalog />
        </div>
    )
}
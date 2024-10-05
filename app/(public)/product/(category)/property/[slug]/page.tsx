
import { ArrowLeft, Heart, MapPin, Bed, Bath, Square, Calendar, Home } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ImageSection from './_component/image-section'
import { Badge } from '@/components/ui/badge'
import Back from '../../_components/back'
import ContactForm from '../../_components/contact-form'
import FavoriteShareButtons from '../../_components/action-button'
import SellerInfo from '../../_components/seller-info'
import SimilarProperties from './_component/related-properties'

export default function PropertyDetailPage() {
    return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className='flex items-center justify-between'>
                    <Back />
                    <FavoriteShareButtons />
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-6">
                        <ImageSection />
                        <div>
                            <h2 className="text-2xl font-bold mb-2">New Apartment Nice View</h2>
                            <Badge>For Sell</Badge>
                            <div className="flex items-center text-muted-foreground mb-4">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>42 Avenue G Brooklyn</span>
                            </div>
                            <div className="flex space-x-4 text-sm">
                                <span className="flex items-center"><Bed className="h-4 w-4 mr-1" /> 4</span>
                                <span className="flex items-center"><Bath className="h-4 w-4 mr-1" /> 1</span>
                                <span className="flex items-center"><Square className="h-4 w-4 mr-1" /> 460</span>
                            </div>
                            <div className="mt-4 text-sm text-muted-foreground">
                                <span>2,207 views</span> | <span>134 saves</span>
                            </div>
                        </div>

                        <div>
                            <p className="text-muted-foreground">
                                Welcome to your beautifully renovated dream home! This stunning property has been meticulously
                                upgraded with attention to every detail. From the moment you arrive, you will notice the care taken
                                to enhance every aspect of this home. Be the envy of your neighbors! This home boasts an oversized lot -
                                much larger than the neighbors that offers 50 additional square feet others do! Outside, the exterior
                                has been revitalized with fresh paint and new house numbers and exterior lights that not only add curb
                                appeal but also ensure a warm welcome. A brand-new front door and garage man door provide both
                                security and style, while the deck offers a perfect spot for outdoor relaxation. Inside, prepare to be
                                impressed by the thoughtful updates throughout.
                            </p>
                        </div>
                        <SellerInfo />
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Location</h3>
                            <Image
                                src="/map.jpg"
                                alt="Location Map"
                                width={800}
                                height={300}
                                className="rounded-lg w-full h-[300px] object-cover"
                            />
                        </div>

                        {/* <div>
                            <h3 className="text-xl font-semibold mb-4">Features</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>Bedrooms: 3</li>
                                        <li>Bathrooms: 2</li>
                                        <li>Full bathrooms: 2</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                        <li>No Carport</li>
                                        <li>Garage</li>
                                        <li>Attached Garage</li>
                                    </ul>
                                </div>

                            </div>
                        </div> */}
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-white p-6 rounded-lg sticky top-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-2xl font-bold">$850<span className="text-sm font-normal">/month</span></span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center text-sm"><Calendar className="h-4 w-4 mr-2" /> Built in 2020</div>
                                <div className="flex items-center text-sm"><Bed className="h-4 w-4 mr-2" /> 3 beds</div>
                                <div className="flex items-center text-sm"><Square className="h-4 w-4 mr-2" /> $756 per sqft</div>
                            </div>
                            <div className="mb-4">
                                <h4 className="font-medium mb-2">What is special</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["stylish tile backsplash", "garage man door", "chrome shower trim kits", "luxurious quartz countertops", "new house numbers", "oversized lot"].map((feature, index) => (
                                        <span key={index} className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">{feature}</span>
                                    ))}
                                </div>
                            </div>
                            <ContactForm />

                        </div>
                    </div>
                </div>
                <SimilarProperties />
            </main>
        </div>
    )
}
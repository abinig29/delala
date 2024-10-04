import { Icons } from "@/components/common/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductGrid() {
    return (
        <div className="container  p-4 lg:py-24 py-20 mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="md:row-span-2 border group">
                    <CardHeader>
                        <CardTitle>Mercedes Car</CardTitle>
                        <CardDescription>Silver sedan with red lights parked on the port</CardDescription>
                        <Button
                            className="w-fit mt-3 gap-2 hover:gap-4 transition-all delay-100 hover:scale-105"
                            variant="outline"
                            size={"sm"}
                        >
                            View All
                            <Icons.arrowRight />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <img
                            src="/car.png"
                            alt="Mercedes Car"
                            className="w-full h-96 object-cover rounded-md group-hover:scale-105 transition-all delay-100"
                        />
                    </CardContent>

                </Card>
                <Card className="border group">
                    <CardHeader>
                        <CardTitle>Samsung Headset</CardTitle>
                        <CardDescription>Dark Mobile Device Mockup</CardDescription>
                        <Button
                            className="w-fit mt-3 gap-2 hover:gap-4 transition-all delay-100 hover:scale-105"
                            variant="outline"
                            size={"sm"}
                        >
                            View All
                            <Icons.arrowRight />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <img
                            src="/headset.png"
                            alt="Samsung Headset"
                            className=" w-32 h-32 object-contain group-hover:scale-105 transition-all delay-100"
                        />
                    </CardContent>

                </Card>
                <Card className="border group">
                    <CardHeader>
                        <CardTitle>Perfume</CardTitle>
                        <CardDescription>A front view black fragrance designed with gold cap</CardDescription>
                        <Button
                            className="w-fit mt-3 gap-2 hover:gap-4 transition-all delay-100 hover:scale-105"
                            variant="outline"
                            size={"sm"}
                        >
                            View All
                            <Icons.arrowRight />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <img
                            src="/perfume.png"
                            alt="Perfume"
                            className="w-32 h-32 object-contain group-hover:scale-105 transition-all delay-100"
                        />
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}
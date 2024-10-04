import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Banner() {
    return (
        <section className="w-full py-6 md:py-16  max-w-7xl mx-auto">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_200px] lg:gap-12 xl:grid-cols-[1fr_800px]">
                    <Image
                        alt="Promotional illustration of a person popping out of a gift box"
                        className="mx-auto  overflow-hidden rounded-xl object-cover sm:w-full "
                        height="600"
                        src="/banner.png"
                        width="600"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold   lg:text-3xl">
                                Hundreds of
                                <br />
                                New lower prices!
                            </h2>
                            <p className="max-w-[600px] text-gray-500  dark:text-gray-400">
                                It&apos;s more affordable than ever to give every room in your home a stylish makeover
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button
                                className=" bg-main hover:bg-main/60"
                            >
                                Contact us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
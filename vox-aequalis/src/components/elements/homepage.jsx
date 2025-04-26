"use client"
import React from "react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "motion/react"
import { Button } from "../ui/button"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  import { Card, CardContent } from "@/components/ui/card"
export default function Homepage(className, ...props) {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )

      const caroselImg = [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.png",
        "/images/image4.png",
      ]
    return (
        <>
            <div className="w-full h-auto m-5">
                <div className="flex flex-col flex-1 items-center justify-center text-center p-5 m-5">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-black dark:text-white mb-5 text-6xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-400">
                                Vox Aequalis {" "}
                            </span>
                            <br />
                        <TypeAnimation 
                            sequence={[
                                "Seek",
                                1500,
                                "Apply, Learn",
                                1500,
                                "Seek, Apply, Learn",
                                1500,
                                "Apply, Learn",
                                1500,
                                "",
                                1500
                            ]}
                            wrapper="span"
                            style={{ fontSize: "0.5em"}}
                            className="text-rose-950 dark:text-rose-200"
                            speed={70}
                            repeat={Infinity}
                        />
                        </h3>
                        <p className="text-rose dark:text-rose-100 text-center">
                        "Where every ability finds its place."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-row gap-5 items-center justify-center m-5 p-2">
                            <Button>
                                <Link href={"#"}>
                                    Button
                                </Link>
                            </Button>
                            <Button>
                                <Link href={"#"}>
                                    Button
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="w-full z-[-1]">
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className={"w-full"}
                    plugins={[plugin.current]}
                    orientation="horizontal"
                >

                </Carousel>
                <Carousel
                    opts={{
                        align: 'start',
                        loop: true,
                    }}
                    className={"w-full"}
                    plugins={[plugin.current]}
                    orientation="vertical"
                >
                <CarouselContent className="-mt-1 h-[300px]">
                    {caroselImg.map((image, index) => (
                        <CarouselItem key={index} className="pt-1 md:basis-1/2">
                        <div className="p-1">
                            <Card>
                            <CardContent className="flex items-center justify-center p-6">
                                <div className="relative w-full h-[150px] rounded-lg overflow-hidden">
                                <img
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                />
                                </div>
                            </CardContent>
                            </Card>
                        </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                </Carousel>
            </div>

        </>
    )
}
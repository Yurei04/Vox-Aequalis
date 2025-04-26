"use client"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"
import { motion } from "motion/react"
import { Button } from "../ui/button"

export default function Homepage() {
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
        </>
    )
}
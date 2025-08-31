"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import googlePlay from "@/assets/google-play-store.png";
import appleStore from "@/assets/apple.png";
import brand03 from "@/assets/brand03.jpg";

export default function GTBSSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 text-center overflow-hidden">
                {/* Brand Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <Image
                        src={brand03}
                        alt="Brand03"
                        width={150}
                        height={150}
                        className="mx-auto rounded-full"
                    />
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
                        GARMENTS TECHNOLOGY BUSINESS SOLUTIONS
                    </h3>
                    <hr className="mt-4 border-t-4 border-blue-600 w-24 mx-auto" />
                </motion.div>

                {/* App Info Section */}
                <div className="flex flex-col lg:flex-row items-center gap-8 overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-center"
                    >
                        <Image
                            src={brand03}
                            alt="GTBS App"
                            className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <h2 className="text-3xl font-semibold text-orange-600 mb-4">
                            Get GTBS App
                        </h2>
                        <p className="mb-4 font-medium">
                            <strong>
                                Download free GTBS app and get 5% additional discount on all
                                products/services of GTBS and connect with verified sellers on
                                the go!
                            </strong>
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start mt-4">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.app.gtbs"
                                target="_blank"
                            >
                                <Image src={googlePlay} alt="Google Play" className="max-w-full h-auto" />
                            </a>
                            <a
                                href="https://apps.apple.com/in/app/gtbs/id1533408217"
                                target="_blank"
                            >
                                <Image src={appleStore} alt="Apple Store" className="max-w-full h-auto" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

    );
}

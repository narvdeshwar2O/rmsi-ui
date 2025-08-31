"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { brand01, slideron1, slideron2, slideron3, slideron4, slideron5, slideron6, slideron7, slideron8 } from "@/assets";

const products = [
    { name: "Center Table", img: slideron1, link: "busbud.aspx" },
    { name: "Cutting Table", img: slideron2, link: "cuttingtable.aspx" },
    { name: "Finishing Table", img: slideron3, link: "busbud.aspx" },
    { name: "Racking System", img: slideron4, link: "rackingsystem.aspx" },
    { name: "Trolly", img: slideron5, link: "Trolly.aspx" },
    { name: "Stool System", img: slideron6, link: "Stool.aspx" },
    { name: "Electrical & Panel System", img: slideron7, link: "Stool.aspx" },
    { name: "Other Products", img: slideron8, link: "Stool.aspx" },
];

export default function ProductSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <Image
                        src={brand01}
                        alt="Brand"
                        width={150}
                        height={150}
                        className="mx-auto rounded-full"
                    />
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
                        Germents Industry Furniture Manufacture &amp; Electrical Solutions
                    </h3>
                    <hr className="mt-4 border-t-4 border-blue-600 w-24 mx-auto" />
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
                    {products.map((product, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <Link href={product.link}>
                                {/* Gradient border container */}
                                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full">
                                    {/* Gradient border overlay */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                                    {/* Inner white circle */}
                                    <div className="absolute inset-0 m-1 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
                                        <Image
                                            src={product.img}
                                            alt={product.name}
                                            width={250}
                                            height={200}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <span className="mt-2 text-base md:text-lg font-medium text-blue-800">
                                    {product.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

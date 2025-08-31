"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { brand02, mac01, mac02, mac03 } from "@/assets"; // Import your images

const machineProducts = [
    { name: "Fabric Inspection Machine", img: mac01, link: "Stool.aspx" },
    { name: "Fusing Machine", img: mac02, link: "Stool.aspx" },
    { name: "Fabric Spreading Machine", img: mac03, link: "Stool.aspx" },
];

export default function MachineSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 text-center">
                {/* Header */}
                <Image
                    src={brand02}
                    alt="Garments Machine"
                    width={150}
                    height={150}
                    className="mx-auto rounded-full"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
                    GARMENTS MACHINE MANUFACTURING
                </h3>
                <hr className="mt-4 border-t-4 border-blue-600 w-24 mx-auto" />

                {/* Products Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {machineProducts.map((product, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }} // animate every time
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <Link href={product.link}>
                                <div className="relative w-72 h-48 rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={product.img}
                                        alt={product.name}
                                        width={300}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <span className="mt-3 text-lg font-semibold text-blue-800">
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

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = Array.from({ length: 20 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0"); // 01, 02, 03 ... 20
    return `https://rsmiglobal.com/clientlist/${num}.jpg`;
});

export default function Page() {
    return (
        <main role="main" className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen">


            {/* Clients Section */}
            <div className="container mx-auto px-4 py-16">
                {/* Heading */}
                <div className="text-center mb-14 mt-10">
                    <h3 className="text-4xl font-extrabold text-gray-900">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            Our Clients
                        </span>
                    </h3>
                    <p className="mt-3 text-gray-600 text-lg">
                        Trusted by leading brands and businesses across industries
                    </p>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Grid of Clients */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.07 } },
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-[90%] mx-auto"
                >
                    {clients.map((client, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
                            className="rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:border-blue-500 transition-all duration-300"
                        >
                            <Image
                                src={client}
                                alt={`Client ${idx + 1}`}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </motion.div>

                    ))}
                </motion.div>
            </div>
        </main>
    );
}

"use client";

import { Device, strategy, planning, work, deliver1, deliver2, deliver3 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WorkProcess() {
    const processSteps = [
        { title: "Strategy", img: strategy, desc: "We analyze your needs and build a solid foundation for success." },
        { title: "Planning", img: planning, desc: "Our experts create structured roadmaps for smooth execution." },
        { title: "Work", img: work, desc: "We execute with precision and ensure top-notch quality." },
    ];

    const deliverables = [deliver1, deliver2, deliver3];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % deliverables.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [deliverables.length]);

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                            Our <span className="text-blue-600">Work Process</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            Rsmi Global Pvt Ltd is Incorporated in 2010, we are a professionally
                            managed, Complete Management Consulting Company based in New Delhi (NCR).
                            We specialize in Executive Search & Recruitment Services, HR Audit,
                            Payroll & Recruitment Process Outsourcing, Project Consulting & Compliance,
                            Corporate Gifting Solutions & Print solutions.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            With our industry expertise, we understand that companies today require
                            more than skilled candidates; they seek employees who are productive,
                            positive, and able to integrate seamlessly into their teams. Our approach
                            is tailor-made to meet these needs.
                        </p>
                        <Link
                            href="/CompanyCatalog"
                            target="_blank"
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
                        >
                            Explore Our Catalog
                        </Link>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="flex justify-center">
                        <Link href="/CompanyCatalog" target="_blank">
                            <Image
                                src={Device}
                                alt="Work Process"
                                width={500}
                                height={400}
                                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </motion.div>
                </div>

               
                {/* Process Timeline */}
                <div className="mt-24 relative">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative text-center">
                        {/* Connecting Line (behind circles, centered) */}
                        <div className="absolute top-16 left-0 w-full h-1 bg-gray-200 hidden lg:block"></div>

                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="relative z-10 flex flex-col items-center max-w-xs"
                            >
                                {/* Circle Image */}
                                <div className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-100 flex items-center justify-center overflow-hidden bg-white relative z-20">
                                    <Image
                                        src={step.img}
                                        alt={step.title}
                                        width={160}
                                        height={160}
                                        className="object-contain"
                                    />
                                </div>

                                {/* Step Number */}
                                <span className="mt-4 text-blue-600 text-lg font-bold">Step {i + 1}</span>

                                {/* Title */}
                                <strong className="mt-1 text-xl font-semibold text-gray-800">
                                    {step.title}
                                </strong>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}

                        {/* Deliverables */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="relative z-10 flex flex-col items-center max-w-xs text-center"
                        >
                            <div className="w-40 h-40 rounded-full shadow-xl border-4 border-blue-100 flex items-center justify-center overflow-hidden bg-white relative z-20">
                                {deliverables.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: idx === current ? 1 : 0, scale: idx === current ? 1 : 0.8 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Image
                                            src={img}
                                            alt={`Deliverable ${idx + 1}`}
                                            width={160}
                                            height={160}
                                            className="object-cover"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Step Number */}
                            <span className="mt-4 text-blue-600 text-lg font-bold">Step 4</span>

                            <strong className="mt-1 text-xl font-semibold text-gray-800">
                                Deliverables
                            </strong>

                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                Final outputs delivered with quality assurance and ongoing support.
                            </p>

                            {/* Dots */}
                            <div className="flex gap-2 mt-3">
                                {deliverables.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className={`w-2.5 h-2.5 rounded-full transition ${current === idx ? "bg-blue-600" : "bg-gray-300"}`}
                                    ></span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}

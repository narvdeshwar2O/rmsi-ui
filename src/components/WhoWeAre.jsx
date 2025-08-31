"use client";
import React from "react";
import Image from "next/image";
import {
    brand01,
    brand02,
    brand03,
    brand04,
} from "@/assets";

const WhoWeAre = () => {
    const brands = [brand01, brand02, brand03, brand04];

    return (
        <section className="relative bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#294B7E] uppercase tracking-wide">
                    Who We Are
                </h2>
                <div className="w-28 h-1 bg-[#294B7E] mx-auto mt-4 rounded-full"></div>

                {/* Description */}
                <p className="mt-8 text-gray-700 max-w-4xl mx-auto leading-relaxed text-lg md:text-xl">
                    <span className="font-semibold text-[#294B7E]">
                        KUMAR ELECTRICALS WORKS &amp; RSMI GLOBAL PVT. LTD
                    </span>{" "}
                    has been a trusted name in{" "}
                    <span className="font-medium">industrial garments furniture</span> and{" "}
                    <span className="font-medium">electrical works</span> since{" "}
                    <em className="font-semibold not-italic text-[#294B7E]">2005</em>.
                    <br /> <br />
                    With <strong>400+ clients</strong>,{" "}
                    <strong>1000+ sewing machine capacity</strong>, and a long list of
                    exporters, we deliver innovative, durable, and safe solutions
                    nationwide.
                </p>

                {/* Feature Highlights */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#294B7E] mb-2">
                            Quality Materials
                        </h4>
                        <p className="text-gray-600 text-sm">
                            LED lighting, ISI-marked plywood, stainless steel & powder-coated
                            M.S steel for durability and sleek design.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#294B7E] mb-2">
                            Nationwide Reach
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Serving garment industries across Delhi NCR and beyond with trust
                            and reliability.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <h4 className="text-lg font-semibold text-[#294B7E] mb-2">
                            Client Satisfaction
                        </h4>
                        <p className="text-gray-600 text-sm">
                            Over 400 satisfied clients, ensuring top-notch furniture and
                            electrical solutions tailored to their needs.
                        </p>
                    </div>
                </div>

                {/* Brand Logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 items-center justify-center">
                    {brands.map((brand, idx) => (
                        <a
                            key={idx}
                            href="/about"
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={brand}
                                alt={`Brand ${idx + 1}`}
                                className="rounded-xl shadow-md hover:scale-110 transition-transform duration-300 ease-out"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;

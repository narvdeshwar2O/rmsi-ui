"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const portfolioItems = Array.from({ length: 24 }, (_, i) => {
  const num = i + 1;
  return {
    id: num,
    img: `https://rsmiglobal.com/images/portfolio0${num}.jpeg`,
    link: "https://rsmiglobal.com/img/RsmiGlobal_Profile.pdf",
  };
});

export default function page() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 py-16">
      <div className="container mx-auto px-4 w-[90%]">
        {/* Title */}
        <div className="text-center mb-12 mt-10">
          <h2 className="text-4xl font-bold text-white mb-2">
            Company Portfolio
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Explore our diverse portfolio showcasing our expertise across
            industries. Click to view details in PDF.
          </p>
          <hr className="border-gray-200 mt-6 w-24 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              className="group relative block rounded-xl overflow-hidden shadow-lg bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={item.img}
                alt={`Portfolio ${item.id}`}
                width={400}
                height={350}
                className="object-cover w-full h-[250px] sm:h-[300px] lg:h-[250px] transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-xl font-semibold tracking-wide">
                  View Portfolio
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

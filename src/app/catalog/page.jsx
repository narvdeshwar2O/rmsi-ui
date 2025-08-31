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


export default function Portfolio() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 w-[90%]">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 mt-4">Company Portfolio</h2>
        <hr className="border-gray-300 mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, idx) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              className="group relative block rounded-xl overflow-hidden shadow-lg"
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
              <div className="absolute inset-0 bg-red-400 bg-opacity-40 opacity-0 group-hover:opacity-50 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white text-2xl">
                  <i className="fa fa-link"></i>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

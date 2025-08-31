"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import brand04 from "@/assets/brand04.jpg";

export default function Brand04Section() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // animate every time it comes into view
          transition={{ duration: 0.8 }}
        >
          <Image
            src={brand04}
            alt="Brand04"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
            MADE IN INDIA MACHINE MANUFACTURING
          </h3>
          <hr className="mt-4 border-t-4 border-blue-600 w-24 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}

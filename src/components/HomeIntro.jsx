"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeIntro() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-2/3"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            <span className="font-semibold text-gray-900">
              KUMAR ELECTRICALS WORKS &amp; RSMI GLOBAL PVT LTD
            </span>{" "}
            is a trusted industrial all types garments furniture manufacturing
            supplier and electricals works since{" "}
            <em className="font-semibold text-blue-600">2005</em>.{" "}
            <span className="block mt-2 text-gray-600">
              Industrial furniture for the garment industry of Delhi NCR.
            </span>
          </p>
        </motion.div>

        {/* Right Button */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/3 flex justify-center md:justify-end"
        >
          <Link
            href="/contact"
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-md transition-all"
          >
            Contact Now!
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

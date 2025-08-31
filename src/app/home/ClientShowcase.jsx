"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Generate image URLs correctly (01, 02, 03 ... 9, 10, 11 ...)
const clients = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  const formatted = num < 10 ? `0${num}` : `${num}`;
  return `https://rsmiglobal.com/clientlist/${formatted}.jpg`;
});

export default function ClientShowcase() {
  // Word rotator state
  const words = ["excited", "happy", "satisfied"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Word Rotator Heading */}
        <motion.h2
          key={currentWord}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          We're only ones <strong>{words[currentWord]}</strong> about RSMI Global...
        </motion.h2>
        <p className="text-lg md:text-xl mb-12">
          10,000+ customers across PAN India under one roof for complete garment industry solutions.
        </p>

        {/* Infinite Scrolling Client Carousel */}
        <div className="overflow-hidden relative w-[90%] mx-auto">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-36 h-36 rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={client}
                  alt={`Client ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

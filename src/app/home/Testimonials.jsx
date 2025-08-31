"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Hello, I want to thank you for creating a great template and for the excellent and quick support and help that you have been providing to me as I begin to work with it.",
    author: "Joe Doe",
  },
  {
    text: "Just want to say Okler RULES. Provide great tech service for each template and allows me to become more knowledgeable as a designer.",
    author: "Edward Chelton",
  },
  {
    text: "Just came here to say a big thank you to the author of this template. It works amazingly well, the documentation is top-notch, and the theme looks beautiful.",
    author: "Bruce Ericson",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/img/slides/men-in-black.jpg')" }}
    >
      {/* Multi-color Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-red-500/40"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0 }}
            animate={{
              y: "-10%",
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            className={`w-2 h-2 rounded-full bg-white/50 absolute`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h4 className="text-3xl font-semibold text-white mb-4">Our Client Say's</h4>
        <hr className="w-32 mx-auto border-t-4 border-white/50 mb-12" />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {testimonials.map((t, idx) =>
              idx === current ? (
                <motion.blockquote
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                  className="text-white text-lg md:text-xl font-medium mb-6 relative"
                >
                  <p className="mb-4 relative before:content-['“'] before:text-5xl before:absolute before:-left-8 before:top-0">
                    {t.text}
                  </p>
                  <span className="block mt-2 text-yellow-300 font-semibold">- {t.author}</span>
                </motion.blockquote>
              ) : null
            )}
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  idx === current ? "bg-yellow-400" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

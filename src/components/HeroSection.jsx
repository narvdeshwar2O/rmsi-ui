"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  brand01, brand02, brand03, brand04,
  slideron1, slideron2, slideron3,
  slideron4, slideron5, slideron6,
  Hero
} from "@/assets";

const slides = [
  {
    id: 1,
    bg: Hero,
    title: "Our Company & Brand",
    subtitle: "",
    items: [
      { name: "Kumar Electricals", img: brand01, link: "FurnitureelectricalsSystem.aspx" },
      { name: "Rsmi Global", img: brand02, link: "About.aspx" },
      { name: "GTBS", img: brand03, link: "About.aspx" },
      { name: "SUTBAL", img: brand04, link: "About.aspx" },
    ],
  },
  {
    id: 2,
    bg: Hero,
    title: "RSMI GLOBAL PVT LTD",
    subtitle: "GARMENTS FURNITURE MANUFACTURING SUPPLIER",
    items: [
      { name: "Furniture & Electricals", img: slideron1, link: "FurnitureelectricalsSystem.aspx" },
      { name: "Cutting Table", img: slideron2, link: "cuttingtable.aspx" },
      { name: "Busbur", img: slideron3, link: "busbud.aspx" },
      { name: "Racking System", img: slideron4, link: "rackingsystem.aspx" },
      { name: "Trolly", img: slideron5, link: "Trolly.aspx" },
      { name: "Stool System", img: slideron6, link: "Stool.aspx" },
    ],
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={Hero}
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Slide Background */}
          <Image
            src={slides[current].bg}
            alt="slide background"
            fill
            className="object-cover"
          />

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0  animate-gradient"></div>

          {/* Content Section */}
          {/* Content Section */}
          <div className="absolute inset-0 flex flex-col items-center justify-start lg:flex-row lg:justify-center text-white px-4 sm:px-6 md:px-20 gap-8 py-10 lg:py-0">
            {/* Left Side (Text) */}
            <div className="flex-1 text-center lg:text-left mt-14">
              {slides[current].subtitle && (
                <motion.h4
                  className="text-[clamp(14px,5v,22px)] font-light tracking-widest text-purple-200"
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[current].subtitle}
                </motion.h4>
              )}

              <motion.h2
                className="text-xl text-[clamp(20px,5vw,36px)] font-extrabold drop-shadow-lg mt-4 leading-snug"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[current].title}
              </motion.h2>
            </div>

            {/* Right Side (Cards) */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 flex-1 w-full max-w-lg lg:max-w-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {slides[current].items.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="backdrop-blur-md bg-white/10 rounded-xl shadow-lg p-3 sm:p-4 flex flex-col items-center hover:scale-105 transition"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={80}
                    height={70}
                    className="rounded-lg"
                  />
                  <span className="mt-2 text-xs sm:text-sm md:text-base font-medium text-center">
                    {item.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white backdrop-blur-sm"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full text-white backdrop-blur-sm"
      >
        <ChevronRight size={16} />
      </button>

      {/* Progress Bullets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 w-10 rounded-full overflow-hidden bg-white/30`}
          >
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: idx === current ? "100%" : "0%" }}
              transition={{ duration: 9, ease: "linear" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

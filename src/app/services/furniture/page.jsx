"use client";

import Image from "next/image";

const imagePath = "https://rsmiglobal.com/img/s00.jpg";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-red-500 flex items-center justify-center px-6 py-16">
      <section className="max-w-5xl w-full">
        {/* Title */}
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-100">
            Delivering <span className="font-semibold text-yellow-200">furniture & electrical solutions{" "}</span>  
            tailored for the <span className="text-blue-200">Garments Industry</span>.
          </p>
        </div>

        {/* Image Card */}
        <div className="flex justify-center">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden max-w-[99%]">
            <Image
              src={imagePath}
              alt="Furniture Electricals System"
              width={1200}
              height={500}
              className="rounded-2xl"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Furniture Electricals System
              </h3>
              <p className="text-gray-200 text-sm md:text-base">
                Reliable, modern, and sustainable manufacturing solutions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 rounded-xl bg-yellow-400 text-gray-900 font-semibold shadow-lg hover:bg-yellow-300 transition-all duration-300">
            Explore More Services
          </button>
        </div>
      </section>
    </main>
  );
}

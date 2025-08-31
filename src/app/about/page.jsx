// components/AboutUs.tsx
"use client";

import { business, who, workprocess } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: "Who We Are",
    content: [
      "Rsmi Global Pvt Ltd is Incorporated in 2010, we are professionally managed, Complete Management Consulting Company based in New Delhi (NCR). We are specialized in Executive Search & Recruitment Services, HR Audit, Payroll & Recruitment Process Outsourcing , Project Consulting & Compliance, Corporate Gifting Solutions & Print solutions. We, at Rsmi Global Pvt Ltd, acknowledge and understand that every industry vertical has its own subtleties in terms of hiring process, management style, compensation norms, etc. This has helped us to delight our clients by providing them with specialized and value added recruiting solutions that are tailor-made for each vertical and sometimes aimed at a specific organization within a vertical.",
    ],
    img: who,
    bg: "bg-indigo-50",
  },
  {
    title: "Our Business Approach",
    content: [
      "Our streamlined methodology ensures apt manpower according to client requirements. Our experienced staff handles testing, interviewing, and assessment efficiently.",
      "We provide timely solutions for your recruitment needs with industry-specific expertise.",
    ],
    img: business,
    bg: "bg-purple-50",
  },
  {
    title: "Our Work Process",
    content: [
      "We proactively tap the market for excellent candidates.",
      "Identified candidates undergo in-depth interviews covering education, experience, career goals, personality traits, and compensation.",
    ],
    img: workprocess,
    bg: "bg-green-50",
  },
];

const timeline = [
  {
    year: "2012",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.",
  },
  {
    year: "2010",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut nulla at nunc vehicula lacinia.",
  },
  {
    year: "2005",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque neque eget diam posuere porta.",
  },
  {
    year: "2000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin adipiscing porta tellus.",
  },
];

export default function AboutUs() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">About Proliant</h1>

        </div>
      </section>

      {/* Alternating Sections */}
      <div className="space-y-3 py-3 container mx-auto px-4 w-[95%]">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-around gap-3 ${sec.bg} rounded-xl p-10 shadow-lg`}
          >
            {idx % 2 === 0 ? (
              <>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{sec.title}</h2>
                  {sec.content.map((p, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-2">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="md:w-1/2 flex justify-end">
                  <Image
                    src={sec.img}
                    alt={sec.title}
                    width={500}
                    height={350}
                    className="rounded-xl object-cover shadow-lg"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="md:w-1/2 order-2 md:order-1">
                  <Image
                    src={sec.img}
                    alt={sec.title}
                    width={500}
                    height={350}
                    className="rounded-xl object-cover shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4">{sec.title}</h2>
                  {sec.content.map((p, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-2">
                      {p}
                    </p>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Timeline */}
      <section className="container mx-auto px-8 py-16 w-[90%]">
        <h2 className="text-4xl font-bold text-center mb-12">Our History</h2>
        <div className="relative border-l-2 border-gray-300 ml-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-8 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="absolute -left-6 top-0 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-lg"></div>
              <h3 className="text-xl font-semibold mb-1">{item.year}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

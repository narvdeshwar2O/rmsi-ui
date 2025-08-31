"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CareerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Career Hero */}
      <section className="container mx-auto px-4 text-center pt-24 w-[90%]">
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Better Career with{" "}
          <span className="text-blue-600">Rsmi Global</span>!
        </motion.h3>

        <motion.hr
          className="my-6 border-t-2 border-blue-500 w-24 mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.p
          className="text-gray-700 leading-relaxed text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          At <strong>Rsmi Global Pvt. Ltd.</strong>, we welcome innovative
          thinkers, problem solvers, and passionate professionals. If you’re
          ready to take initiative and grow with us, send your resume to{" "}
          <a
            href="mailto:hr@rsmiglobal.com"
            className="text-blue-600 font-medium hover:underline"
          >
            hr@rsmiglobal.com
          </a>
          . We’ll get back to you within <strong>48 hours</strong>.
        </motion.p>
      </section>

      {/* Why Join Us */}
      <section className="bg-gray-50 py-16 w-[90%] mx-auto">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Why Work With Us?
          </h3>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            A workplace where innovation, collaboration, and growth thrive.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Growth Opportunities",
                desc: "We provide learning and development programs to help you grow.",
              },
              {
                title: "Collaborative Culture",
                desc: "Work with passionate people who support and inspire you.",
              },
              {
                title: "Work-Life Balance",
                desc: "Flexible work environment that values both career and personal life.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <h4 className="text-lg font-semibold text-blue-600">
                  {item.title}
                </h4>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h3 className="text-2xl md:text-3xl font-bold">
          Ready to Build Your Future?
        </h3>
        <p className="mt-2 text-lg opacity-90">
          Join us and be part of a global journey.
        </p>
        <Link
          href="mailto:hr@rsmiglobal.com"
          className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
        >
          Apply Now
        </Link>
      </section>
    </main>
  );
}

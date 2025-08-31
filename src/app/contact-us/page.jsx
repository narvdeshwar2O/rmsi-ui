"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function page() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-white to-gray-100 min-h-screen py-20">
      {/* Header Section */}
      <section className="text-center mb-16 pt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Contact <span className="text-blue-600">Us</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          We’d love to hear from you. Fill out the form and our team will get
          back to you shortly.
        </p>
      </section>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 w-[90%]">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h3>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 mt-1" />
              <p>
                <strong>Address:</strong> Khasra No - 489, 436, 495, Vill Pawala
                Khasupur, Near Baba Prakashpuri Mandir, New Palam Vihar,
                Gurgaon, Haryana (INDIA)
              </p>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6" />
              <p>
                <strong>Phone:</strong> +91-6262888555
              </p>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6" />
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@rsmiglobal.com" className="underline">
                  info@rsmiglobal.com
                </a>
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
}

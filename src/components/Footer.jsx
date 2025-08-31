"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 relative">
      <div className="container mx-auto px-4">
        {/* Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 px-6 py-2 rounded-full font-semibold"
        >
          Get in Touch
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Link</h4>
            <ul className="space-y-2">
              <li><Link href="/About.aspx" className="hover:underline">About RSMI GLOBAL</Link></li>
              <li><Link href="/Services.aspx" className="hover:underline">Our Services</Link></li>
              <li><Link href="/Career.aspx" className="hover:underline">Career</Link></li>
              <li><Link href="/Our-Clients.aspx" className="hover:underline">Our Clients</Link></li>
              <li><Link href="/Contact.aspx" className="hover:underline">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Head Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Head Office</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Rsmi Global Private Limited</strong></li>
              <li><strong>Kumar Electricals Works</strong></li>
              <li>Pawala Khasupur, Near Baba Prakashpuri Mandir, New Palam Vihar, Gurgaon, Haryana (INDIA)</li>
              <li>Phone: +91-6262888555</li>
              <li>Email: <a href="mailto:info@rsmiglobal.com" className="underline">info@rsmiglobal.com</a></li>
            </ul>
          </motion.div>

          {/* Branch Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Branch Office</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Rsmi Global Private Limited</strong></li>
              <li><strong>Kumar Electricals Works</strong></li>
              <li>Shop No 12, Asmeeta Industrial Estate, Kongain, Kalyan Bhiwandi Thane, Mumbai (INDIA)</li>
              <li>Phone: +91-6262888555</li>
              <li>Email: <a href="mailto:info@rsmiglobal.com" className="underline">info@rsmiglobal.com</a></li>
            </ul>
          </motion.div>

          {/* Channel Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-4">Channel Partner</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <strong>Guruji Sales Corporation</strong>
                <p>Electric Zone J-396, Near Chitrala Circle Sitapura, Jaipur, Rajasthan</p>
              </li>
              <li>
                <strong>Mandakini Trading Co.</strong>
                <p>Shankar Chowk Road, Near Indian Overseas Bank, Dundahera, Gurugram, Haryana</p>
              </li>
              <li>
                <strong>Shree Shakti Steel Furniture</strong>
                <p>14 Bhairav Dutta Lane, Nandi Bag, Salakia, Hawarah - 711106</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gray-800 mt-10 py-4"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© Copyright 2021 Rsmi Global Pvt. Ltd. All Rights Reserved.</p>
          <nav className="mt-2 md:mt-0">
            <ul className="flex gap-4">
              <li><Link href="/About.aspx" className="hover:underline">About us</Link></li>
              <li><Link href="/PrivacyPolicy.aspx" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/Contact.aspx" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </motion.div>
    </footer>
  );
}

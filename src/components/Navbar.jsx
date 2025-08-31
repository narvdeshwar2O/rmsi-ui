"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo.png"
import Image from "next/image";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Company Catalog", href: "/catalog" },
        { name: "Career", href: "/career" },
        { name: "Our Clients", href: "/clients" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-50  h-24 flex items-center">
            <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 gap-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={Logo}
                            alt="RSMI Logo"
                            width={100}
                            height={100}
                            className="rounded-md z-100"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-6 bg-white p-3 rounded-full shadow-sm">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-gray-700 hover:text-blue-600 transition"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button (separate) */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block"
                    >
                        <Link
                            href="/contact-us"
                            className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md text-nowrap"
                        >
                            Contact Us
                        </Link>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} className="text-red-700"/>}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Framer Motion */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="md:hidden bg-white shadow-md px-4 py-6 space-y-6 fixed inset-0 top-24 z-40"
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    className="block text-gray-700 hover:text-blue-600 transition text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: navLinks.length * 0.1 }}
                        >
                            <Link
                                href="/contact-us"
                                className="block px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition text-center shadow-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

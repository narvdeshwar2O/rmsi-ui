"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Services", href: "/services", dropdown: true },
    { name: "Company Catalog", href: "/catalog" },
    { name: "Career", href: "/career" },
    { name: "Our Clients", href: "/clients" },
  ];

  const serviceItems = [
    { name: "Furniture & Electricals", href: "/services/furniture" },
    { name: "Cutting Table", href: "/services/cutting-table" },
    { name: "Busbar", href: "/services/busbar" },
    { name: "Racking System", href: "/services/racking" },
    { name: "Trolley", href: "/services/trolley" },
    { name: "Stool", href: "/services/stool" },
    { name: "All Type Furniture System", href: "/services/all-furniture" },
  ];

  // Function to check if route is active
  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 h-24 flex items-center">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={Logo}
              alt="RSMI Logo"
              width={100}
              height={100}
              className="rounded-md"
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
                  className="relative"
                >
                  {link.dropdown ? (
                    <div
                      className="group relative cursor-pointer"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <div
                        className={`flex items-center gap-1 transition ${
                          isActive("/services")
                            ? "text-blue-600 font-semibold"
                            : "text-gray-700 hover:text-blue-600"
                        }`}
                      >
                        {link.name} <ChevronDown size={16} />
                      </div>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-56 z-50"
                          >
                            {serviceItems.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`block px-4 py-2 transition ${
                                  isActive(item.href)
                                    ? "bg-blue-50 text-blue-600 font-semibold"
                                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                }`}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`transition ${
                        isActive(link.href)
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              href="/contact-us"
              className={`px-4 py-2 rounded-full shadow-md text-nowrap transition ${
                isActive("/contact-us")
                  ? "bg-blue-700 text-white"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Contact Us
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} className="text-red-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-md px-4 py-6 space-y-6 fixed inset-0 top-24 z-40 overflow-y-auto"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.dropdown ? (
                  <div>
                    <button
                      className={`flex items-center justify-between w-full text-left transition text-lg ${
                        isActive("/services")
                          ? "text-blue-600 font-semibold"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.name} <ChevronDown size={18} />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {serviceItems.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`block text-base transition ${
                                isActive(item.href)
                                  ? "text-blue-600 font-semibold"
                                  : "text-gray-600 hover:text-blue-600"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block text-lg transition ${
                      isActive(link.href)
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link
                href="/contact-us"
                className={`block px-4 py-2 rounded-full shadow-md text-center transition ${
                  isActive("/contact-us")
                    ? "bg-blue-700 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
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

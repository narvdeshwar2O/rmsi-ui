// src/app/layout.js
import { Inter } from "next/font/google";
import "@/stylus/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // improves performance
});

export const metadata = {
  title: "RSMI GLOBAL PVT LTD ! GARMENTS FURNITURE MANUFACTRING SUPPLIER",
  description:
    "RSMI GLOBAL PVT LTD ! GARMENTS FURNITURE MANUFACTRING SUPPLIER",
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gray-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

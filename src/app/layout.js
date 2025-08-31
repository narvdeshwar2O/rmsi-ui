import { Geist, Geist_Mono } from "next/font/google";
import "@/stylus/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RSMI GLOBAL PVT LTD ! GARMENTS FURNITURE MANUFACTRING SUPPLIER",
  description: "RSMI GLOBAL PVT LTD ! GARMENTS FURNITURE MANUFACTRING SUPPLIER",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-200`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import elipse from "../assets/Ellipse-navbar.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" id="style-3">
      <body className="bg-[#010101]">
        <div className="relative w-full flex items-center justify-center">
          <div
            className="absolute bg-[radial-gradient(46.67%_52.09%_at_50%_50%,rgba(0,89,255,0.37)_0%,rgba(1,1,1,0.32)_100%)] bg-no-repeat bg-center bg-cover md:w-[43rem] sm:w-[30rem] w-[20rem] h-[30rem]"
          >
            <Navbar />
          </div>
        </div>
        {children}
          <Footer />
      </body>
    </html>
  );
}

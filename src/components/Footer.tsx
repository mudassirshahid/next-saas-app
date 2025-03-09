import Image from "next/image";
import React from "react";
import footerlogo from "../assets/Footer-logo.png";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative z-50 border-t border-transparent bg-[linear-gradient(180deg,#0B0E15_0%,#010101_100%)] text-white font-medium px-4 py-12 overflow-hidden"
      style={{
        borderImageSource:
          "linear-gradient(90deg, #192235 0%, #0059FF 40%, #6FADFF 50%, #0059FF 60%, #192235 100%)",
        borderImageSlice: 1,
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-12 sm:gap-8 gap-8 px-4 sm:px-6 lg:px-8">
        {/* About Us Section (Takes 4 columns) */}
        <div className="col-span-12 lg:col-span-6 md:col-span-5">
          <div className="flex flex-col gap-6">
            <Image src={footerlogo} alt="footer logo" unoptimized />
            <ul className="flex flex-col flex-wrap gap-3">
              <li>
                1234 Innovation Blvd, Suite 567
                <br className="lg:block" /> Tech City, TC 98765, United States.
              </li>
              <li>(555) 123-4567</li>
              <li>contact@animify.com</li>
            </ul>
          </div>
        </div>

        {/* Quick Links Section (Takes 2 columns) */}
        <div className="col-span-12 md:col-span-2">
          <h2 className="text-white text-lg font-semibold mb-4">Home</h2>
          <ul className="space-y-5">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                404
              </a>
            </li>
          </ul>
        </div>

        {/* Other Pages Section (Takes 3 columns) */}
        <div className="col-span-12 lg:col-span-2 md:col-span-3">
          <h2 className="text-white text-lg font-semibold mb-4">Other Pages</h2>
          <div className="flex flex-col space-y-5">
            <a href="#" className="hover:text-white">
              Log In
            </a>
            <a href="#" className="hover:text-white">
              Forgot Password
            </a>
            <a href="#" className="hover:text-white">
              Terms & Services
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* My Work Section (Takes 3 columns) */}
        <div className="col-span-12 md:col-span-2">
          <h2 className="text-white text-lg font-semibold mb-4">My Work</h2>
          <ul className="space-y-5">
            <li>Dribbble</li>
            <li>Upwork</li>
            <li>Awwwards</li>
            <li>X</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

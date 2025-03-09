"use client";
import Image from "next/image";
import React from "react";
import logo1 from "../assets/Frame.png";
import logo2 from "../assets/Frame (1).svg";
import logo3 from "../assets/logo-70.svg";
import logo4 from "../assets/logo-85.svg";
import logo5 from "../assets/logo-87.svg";
import logo6 from "../assets/logo.svg";
import { motion } from "framer-motion";

const logos = [logo2, logo3, logo4, logo5, logo6, logo1];

const LogoTicker = () => {
  return (
    <div className="pb-8 overflow-hidden relative">
      <div className="container mx-auto sm:mt-0 mt-10 sm:px-20 px-5">
        <h2 className="text-xl font-medium text-center mb-10 text-[#BEBEBE]">
          Our Clients
        </h2>
        <div className="flex overflow-hidden relative">
          <motion.div
            className="flex gap-[4rem] min-w-max" // Ensure logos span the full width
            animate={{ x: ["0%", "-100%"] }} // Slide fully to the left
            transition={{
              duration: 30, // Adjust speed
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="client logo"
                unoptimized
                className="w-40 h-10 sm:h-14 object-contain"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;

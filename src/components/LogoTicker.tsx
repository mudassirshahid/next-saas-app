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
import { fadeIn } from '../variants'

const logos = [logo2, logo3, logo4, logo5, logo6, logo1]; // Original images

const LogoTicker = () => {
  return (
    <div className="pb-8 overflow-hidden relative">
      <div
       className="container mx-auto sm:mt-0 mt-10 sm:px-32 px-5">
        <h2 className="text-xl font-medium text-center mb-10 text-[#BEBEBE]">Our Clients</h2>
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-[7rem] justify-center items-center flex-none w-full"
            animate={{ x: ["0%", "-70%"] }} // Move from 0% to -100% smoothly
            transition={{
              duration: 10, // Adjust speed
              repeat: Infinity, // Infinite loop
              ease: "linear", // Smooth continuous motion
            }}
          >
            {/* Duplicate images for smooth looping */}
            {[...logos, ...logos].map((logo, index) => (
              <Image key={index} src={logo} alt="client logo" className="logo-ticker-image" />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;

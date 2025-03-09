"use client";
import React from "react";
import ellipse from "../assets/Ellipse-light.png";
import { motion } from "framer-motion";
import vector from "../assets/Vector.svg";
import vector1 from "../assets/Vector (1).svg";
import vector2 from "../assets/Document.svg";
import vector3 from "../assets/message-text.svg";
import vector4 from "../assets/Shield Done.svg";
import vector5 from "../assets/Upload.svg";

const ChooseUs = () => {
  const features = [
    {
      icon: <img src={vector.src} alt="Icon" className="w-[7rem] h-[7rem]" />,
      title: "Intuitive User Experience",
      desc: "Start a quick with a user-friendly interface designed for maximum easy and efficiency.",
    },
    {
      icon: <img src={vector1.src} alt="Icon" className="w-[7rem] h-[7rem]" />,
      title: "Boost Productivity",
      desc: "Use pre-default transitions to save time and productivity.",
    },
    {
      icon: <img src={vector2.src} alt="Icon" className="w-[7rem] h-[7rem]" />,
      title: "Customizable Templates",
      desc: "Get ready made customizable templates for your projects.",
    },
    {
      icon: <img src={vector3.src} alt="Icon" className="w-[7rem] h-[7rem]" />,
      title: "24/7 Support",
      desc: "Get instant assistance anytime with our intelligent, always available assistant.",
    },
    {
      icon: <img src={vector4.src} alt="Icon" className="w-[7rem] h-[7rem]" />,
      title: "Data Security & Compliance",
      desc: "Safeguard your operations with industry-leading standards.",
    },
    {
      icon: <img src={vector5.src} alt="Icon" className="w-[7rem] h-[7rem]" />,
      title: "High-Quality Export",
      desc: "High-quality export options allow users to download their content in formats",
    },
  ];
  return (
    <>
      <div className="relative xl:max-w-7xl lg:max-w-4xl max-w-xl mx-auto md:my-20 md:py-14 py-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="p-4 relative z-10 w-full text-center my-10"
        >
          <h3 className="mt-10 md:mt-0 text-4xl md:text-5xl md:leading-[71px] font-medium  bg-clip-text text-transparent bg-[linear-gradient(90deg,#989CA5_0%,#FFFFFF_30.4%,#FFFFFF_62.9%,#989CA5_100%)]">
            Why choose us
          </h3>
          <p className="mt-3 font-medium text-center text-lg md:text-lg text-[#BEBEBE]">
            Unlock the full potential of your business with exceptional features
            <br className="hidden sm:block" />
            and unmatched performance.
          </p>
        </motion.div>
        <div>
          <div
            className="w-[100%] h-[100%] absolute top-24  bg-no-repeat bg-[length:100%_100%] bg-[50%_10%] bg-opacity-50"
            style={{
              backgroundImage: `url(${ellipse.src})`,
            }}
          ></div>
          <div className="relative sm:px-10 px-8">
            <section className="relative sm:px-12 px-10 lg:py-18 sm:py-12 py-10 border border-white border-opacity-20 rounded-2xl bg-gradient-to-r from-[#0D0B14E6] to-[#0B1014E6] backdrop-blur-[16px]">
              <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <div className="">
                  <ul className="grid lg:grid-cols-3 gap-[0%_12%]">
                    {features.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex flex-col justify-center items-center text-center my-4"
                      >
                        {item.icon}
                        <div className="-translate-y-7">
                          <h4 className="text-xl text-white font-bold">
                            {item.title}
                          </h4>
                          <p className="mt-3 font-normal text-xs text-[#BEBEBE]">
                            {item.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;

"use client";
import React from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <>
    <section id="getstarted"></section>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
        className="p-10 pb-0 relative z-10 w-full text-center"
      >
        <motion.h3 className="relative z-50 mt-20 md:mt-0 text-4xl md:text-6xl md:leading-[71px] font-medium  text-white">
          Get Started
        </motion.h3>
        <p className="font-medium text-center text-lg md:text-lg text-[#BEBEBE]">
          Holds no opinions on what’s and how’s. Build whatever
          <br className="hidden sm:block" />
          makes sense to you.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 1.2 } },
          }}
          className="mb-7 relative mt-6 flex sm:flex-row flex-col justify-center items-center gap-3"
        >
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
            }}
            className="z-50 border-[#0099FF] rounded-2xl text-white text-[14px] font-semibold px-5 py-3 shadow-[inset_0px_0px_8px_0px_#0099FF] bg-[#03263D]"
          >
            Try it now
          </motion.button>
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="z-50 border-transparent bg-clip-border rounded-md text-white text-[14px] font-semibold px-5 py-2 bg-[linear-gradient(249.49deg,#1F1F1F_8.6%,#191919_19.56%,#0F0F0F_44.25%)]"
            style={{
              borderImageSource:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.12) 100%)",
              borderImageSlice: 1,
            }}
          >
            Book your demo
          </motion.button>
        </motion.div>
        <div className="absolute top-0 right-0 left-0 bg-[radial-gradient(46.67%_52.09%_at_50%_50%,rgba(0,89,255,0.37)_0%,rgba(1,1,1,0.32)_100%)] bg-no-repeat bg-[0rem_3rem] bg-cover w-[100%] h-[25rem] overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 sm:top-8 top-[4.5rem] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:70px_70px] sm:[mask-image:radial-gradient(ellipse_50%_100%_at_55%_70%,#000_40%,transparent_100%)] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_10%,#000_50%,transparent_100%)]"></div>
        </div>
      </motion.div>
    </>
  );
};

export default GetStarted;

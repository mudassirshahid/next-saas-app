"use client";
import Image from "next/image";
import React from "react";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <>
    <section id="features">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
        className="lg:mt-32 mt-10"
      >
        <motion.div
          className="flex sm:flex-row flex-col justify-center items-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.button
            style={{
              background:
                "radial-gradient(77.66% 77.66% at 50% 50%, #181620 15.9%, #1E1930 50.9%, #332C4F 100%)",
            }}
            className="z-0 border-[#0099FF] rounded-full text-white text-[14px] font-medium px-5 py-3 shadow-[inset_0px_-4px_12px_0px_#6B49FF99,0px_16px_32px_0px_#00000033] bg-[#03263D]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Amazing
          </motion.button>
        </motion.div>

        <motion.div
          className="py-4 px-8 relative z-10 w-full text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <h3 className="text-4xl md:text-5xl md:leading-[71px] font-medium bg-clip-text text-transparent bg-[linear-gradient(90deg,#989CA5_0%,#FFFFFF_30.4%,#FFFFFF_62.9%,#989CA5_100%)]">
            Features and benefits
          </h3>
          <p className="mt-3 font-medium text-center text-lg md:text-lg text-[#BEBEBE]">
            Create, customize, and collaborate effortlessly with our intuitive
            platform.
            <br className="hidden sm:block" />
            From simple edits to complex designs, bring your vision to life in
            no time.
          </p>
        </motion.div>
      </motion.div>

      <div className="my-10 overflow-hidden sm:px-0 px-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex xl:flex-row flex-col justify-center items-center xl:gap-3 gap-8"
        >
          <Image src={f2} alt="features" unoptimized />
          <Image src={f4} alt="features" unoptimized />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex xl:flex-row flex-col justify-center items-center xl:mt-4 mt-8 xl:gap-3 gap-8"
        >
          <Image src={f1} alt="features" unoptimized />
          <Image src={f3} alt="features" unoptimized />
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default Features;

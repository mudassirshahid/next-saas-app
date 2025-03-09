"use client";
import Image from "next/image";
import frame from "../assets/hero-Frame.png";
import ellipse from "../assets/Ellipse-light.png";
import { motion } from "framer-motion";
function HeroSection() {
  return (
    <>
    <section id="home">
      <div className="relative w-full bg-slate-950h-auto xl:h-[80rem] lg:h-[74rem] md:h-[70rem] sm:h-[55rem] h-[50rem] rounded-md flex flex-col items-center justify-center overflow-hidden mx-auto pt-10 md-py-0">
        <div className="absolute bottom-0 left-0 right-0 sm:-top-8 top-[4.5rem] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:70px_70px] sm:[mask-image:radial-gradient(ellipse_30%_50%_at_50%_10%,#000_10%,transparent_100%)] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_10%,#000_50%,transparent_100%)]"></div>
        {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false }}
          className="xl:pt-32 sm:pt-24 px-4 pb-0 relative z-10 w-full text-center"
        >
          <motion.h1 className="mt-20 md:mt-0 text-4xl md:text-6xl md:leading-[71px] font-medium bg-clip-text text-transparent bg-[linear-gradient(90deg,#989CA5_0%,#FFFFFF_30.4%,#FFFFFF_62.9%,#989CA5_100%)]">
            Transform Concepts into,
            <br className="hidden sm:block" />{" "}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(95.52deg,#00AEFF_2.2%,#1778FF_96%)]">
              Dynamic
            </span>{" "}
            Animations
          </motion.h1>
          <p className="mt-5 font-medium text-center text-base md:text-lg text-[#BEBEBE]">
            Unleash your creativity with our intuitive animation tool. Create
            stunning
            <br className="hidden sm:block" /> videos and bring your vision to
            life in just a few clicks!
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 1.2 },
              },
            }}
            className="mt-6 flex sm:flex-row flex-col justify-center items-center gap-3"
          >
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
              }}
              className="border-[#0099FF] rounded-2xl text-white text-[14px] font-semibold px-5 py-3 shadow-[inset_0px_0px_8px_0px_#0099FF] bg-[#03263D]"
            >
              Try it now
            </motion.button>
            <motion.button
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className=" border-transparent bg-clip-border rounded-md text-white text-[14px] font-semibold px-5 py-3 bg-[linear-gradient(249.49deg,#1F1F1F_8.6%,#191919_19.56%,#0F0F0F_44.25%)]"
              style={{
                borderImageSource:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.12) 100%)",
                borderImageSlice: 1,
              }}
            >
              Book your demo
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="xl:left-[3%] left-[4%] relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-[100%] h-[100%]  bg-no-repeat xl:bg-[length:68rem_54rem] xl:bg-[20%_50%] md:bg-[50%_50%] md:bg-[length:40rem_27rem] sm:bg-[50%_50%] sm:bg-[length:20rem_20rem] bg-[50%_50%] bg-[length:0rem_0rem]"
            style={{
              backgroundImage: `url(${ellipse.src})`,
            }}
          >
            <div className="flex justify-center items-center">
              <Image src={frame} alt="Hero frame" unoptimized />
            </div>
          </motion.div>
        </div>
      </div>
      </section>
    </>
  );
}

export default HeroSection;

"use client";
import React from "react";
import check from "../assets/check-circle.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <>
    <section id="pricing">
      <div className="container mx-auto md:my-28 my-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="relative z-10 w-full text-center mt-10"
        >
          <div className="md:bg-[radial-gradient(18%_64%_at_50%_54%,rgba(132,81,215,0.47)_0%,rgba(1,1,1,0.32)_100%)] bg-[radial-gradient(32%_64%_at_50%_54%,rgba(132,81,215,0.47)_0%,rgba(1,1,1,0.32)_100%)] bg-no-repeat bg-center bg-cover">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_20%_100%_at_50%_60%,#000_60%,transparent_100%)]"></div>
            <h3 className="p-10 mt-20 md:mt-0 text-4xl md:text-5xl md:leading-[71px] font-medium  bg-clip-text text-transparent bg-[linear-gradient(90deg,#989CA5_0%,#FFFFFF_30.4%,#FFFFFF_62.9%,#989CA5_100%)]">
              Explore all plans
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="px-8 md:px-6  lg:px-8"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.8 },
              },
            }}
            className="grid grid-cols-1 gap-4 sm:items-stretch lg:grid-cols-3 md:gap-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="lg:text-left text-center border-t border-transparent bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#10141A_0%,#0C121C_50%,#0A1017_100%)] text-white font-medium pt-5 pb-10"
              style={{
                borderImageSource:
                  "linear-gradient(90deg, #192235 0%, #0059FF 40%, #6FADFF 50%, #0059FF 60%, #192235 100%)",
                borderImageSlice: 1,
              }}
            >
              <div className="p-6 sm:px-8">
                <h2 className="text-xl font-medium text-white">
                  Starter
                  <span className="sr-only">Plan</span>
                </h2>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-4xl font-medium text-white sm:text-4xl">
                    {" "}
                    0${" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-200">
                    /monthly
                  </span>
                </p>
                <p className="mt-2 text-white text-sm font-normal">
                  Perfect for custom animation and motion graphics.
                </p>

                <a
                  className="mt-4 block rounded-xl bg-white xl:px-12 px-5 py-3 text-center sm:text-sm text-[12px] font-bold text-[#010101] focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Sign Up with Enterprise
                </a>
              </div>

              <div className="sm:px-8">
                <ul className="space-y-4">
                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>
                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="lg:text-left text-center border-t border-transparent bg-[linear-gradient(180deg,#1B1430_0%,#0F0D16_50%,#1B1430_100%)] text-white font-medium pt-5 pb-10"
              style={{
                borderImageSource:
                  "linear-gradient(90deg, #0D0F15 0%, #9A56FF 36.4%, #E5D3FF 50%, #9A56FF 63.9%, #0D0F15 100%)",
                borderImageSlice: 1,
              }}
            >
              <div className="p-6 pt-2 sm:px-8">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-3">
                  <h2 className="text-xl font-medium text-white">
                    Professional
                    <span className="sr-only">Plan</span>
                  </h2>
                  <button
                    style={{
                      background:
                        "radial-gradient(77.66% 77.66% at 50% 50%, #181620 15.9%, #1E1930 50.9%, #332C4F 100%)",
                    }}
                    className="z-0 border-[#0099FF] rounded-full text-white text-[12px] font-medium px-5 py-3 shadow-[inset_0px_-4px_12px_0px_#6B49FF99,0px_16px_32px_0px_#00000033] bg-[#03263D]"
                  >
                    Popular
                  </button>
                </div>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-4xl font-medium text-white sm:text-4xl">
                    {" "}
                    20${" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-200">
                    /monthly
                  </span>
                </p>
                <p className="mt-2 text-white text-sm font-normal">
                  Perfect for custom animation and motion graphics.
                </p>

                <a
                  className="mt-4 block rounded-xl bg-white xl:px-12 px-5 py-3 text-center sm:text-sm text-[12px] font-bold text-[#010101] focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Sign Up with Professional
                </a>
              </div>

              <div className="sm:px-8">
                <ul className="space-y-4">
                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>
                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="lg:text-left text-center border-t border-transparent bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#10141A_0%,#0C121C_50%,#0A1017_100%)] text-white font-medium pt-5 pb-10"
              style={{
                borderImageSource:
                  "linear-gradient(90deg, #192235 0%, #0059FF 40%, #6FADFF 50%, #0059FF 60%, #192235 100%)",
                borderImageSlice: 1,
              }}
            >
              <div className="p-6 sm:px-8">
                <h2 className="text-xl font-mediu text-white">
                  Enterprise
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-4xl font-medium text-white sm:text-4xl">
                    {" "}
                    Custom{" "}
                  </strong>
                </p>
                <p className="mt-2 text-white text-sm font-normal">
                  Perfect for custom animation and motion graphics.
                </p>

                <a
                  className="mt-4 block rounded-xl bg-white xl:px-12 px-5 py-3 text-center sm:text-sm text-[12px] font-bold text-[#010101] focus:ring-3 focus:outline-hidden sm:mt-6"
                  href="#"
                >
                  Let’s Chat!
                </a>
              </div>

              <div className="sm:px-8">
                <ul className="space-y-4">
                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>
                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>

                  <li className="flex lg:justify-start justify-center items-center gap-2">
                    <Image src={check} alt="check-circle" />
                    <span className="text-white font-medium text-sm">
                      {" "}
                      Unlimited files{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </section>
    </>
  );
};

export default Pricing;

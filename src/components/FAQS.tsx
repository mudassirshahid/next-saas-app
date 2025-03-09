"use client";
import React from "react";
import ellipsefaq from "../assets/Ellipsefaq.png";
import { motion } from "framer-motion";

const FAQS = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="my-8 py-5 lg:max-w-4xl max-w-2xl mx-auto bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))]"
        style={{
          backgroundImage: `url(${ellipsefaq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "50% 100%",
        }}
      >
        <div className="p-4 relative z-10 w-full text-center my-5">
          <h3 className="mt-20 md:mt-0 text-4xl md:text-5xl md:leading-[71px] font-medium  bg-clip-text text-transparent bg-[linear-gradient(90deg,#989CA5_0%,#FFFFFF_30.4%,#FFFFFF_62.9%,#989CA5_100%)]">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="flex flex-col justify-center md:px-6 px-8 py-2">
          <div className="space-y-4">
            <details
              className="rounded-xl group [&_summary::-webkit-details-marker]:hidden bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#10141A_0%,#0C1018_50%,#0A1017_100%)] 
                border border-transparent 
                [border-image-source:radial-gradient(100%_100%_at_50%_0%,rgba(104,114,131,0.4)_0%,rgba(104,114,131,0.2)_100%)] 
"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-white">
                <h2 className="font-medium">Can I use Animify for free?</h2>

                <span className="relative size-7 shrink-0">
                  {/* Plus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-6-6h12"
                    />
                  </svg>

                  {/* Minus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12h12"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>

            <details
              className="rounded-xl group [&_summary::-webkit-details-marker]:hidden bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#13101A_0%,#0F0C18_50%,#0D0A17_100%)] 
                border border-transparent 
                [border-image-source:radial-gradient(100%_100%_at_50%_0%,rgba(124,119,148,0.4)_0%,rgba(124,119,148,0.2)_100%)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-white">
                <h2 className="font-medium">
                  Why should I upgrade to the Starter plan?
                </h2>

                <span className="relative size-7 shrink-0">
                  {/* Plus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-6-6h12"
                    />
                  </svg>

                  {/* Minus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12h12"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
            <details
              className="rounded-xl group [&_summary::-webkit-details-marker]:hidden bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#10141A_0%,#0C1018_50%,#0A1017_100%)] 
                border border-transparent 
                [border-image-source:radial-gradient(100%_100%_at_50%_0%,rgba(104,114,131,0.4)_0%,rgba(104,114,131,0.2)_100%)] 
"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-white">
                <h2 className="font-medium">Can I use Animify for free?</h2>

                <span className="relative size-7 shrink-0">
                  {/* Plus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-6-6h12"
                    />
                  </svg>

                  {/* Minus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12h12"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>

            <details
              className="rounded-xl group [&_summary::-webkit-details-marker]:hidden bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#13101A_0%,#0F0C18_50%,#0D0A17_100%)] 
                border border-transparent 
                [border-image-source:radial-gradient(100%_100%_at_50%_0%,rgba(124,119,148,0.4)_0%,rgba(124,119,148,0.2)_100%)]"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-white">
                <h2 className="font-medium">
                  Why should I upgrade to the Starter plan?
                </h2>

                <span className="relative size-7 shrink-0">
                  {/* Plus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-6-6h12"
                    />
                  </svg>

                  {/* Minus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12h12"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
            <details
              className="rounded-xl group [&_summary::-webkit-details-marker]:hidden bg-[radial-gradient(43.69%_75.71%_at_50%_44.52%,#10141A_0%,#0C1018_50%,#0A1017_100%)] 
                border border-transparent 
                [border-image-source:radial-gradient(100%_100%_at_50%_0%,rgba(104,114,131,0.4)_0%,rgba(104,114,131,0.2)_100%)] 
"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg p-4 text-white">
                <h2 className="font-medium">Can I use Animify for free?</h2>

                <span className="relative size-7 shrink-0">
                  {/* Plus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-6-6h12"
                    />
                  </svg>

                  {/* Minus Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12h12"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 px-4 leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                veritatis molestias culpa in, recusandae laboriosam neque
                aliquid libero nesciunt voluptate dicta quo officiis explicabo
                consequuntur distinctio corporis earum similique!
              </p>
            </details>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FAQS;

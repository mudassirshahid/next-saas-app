"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    avatar: string; 
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 pb-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
          className="backdrop-blur-[16px] w-[350px] max-w-full relative rounded-2xl border-b-0 flex-shrink-0 border-[0.8px] border-transparent 
                [border-image-source:linear-gradient(180deg,#3F325F_0%,rgba(63,50,95,0)_100%)] 
 px-8 py-6 md:w-[450px]"
          style={{
            background:
            "linear-gradient(180deg, #0F0C18 0%, #0D0A17 50%, #110828 100%)",
          }}
          key={item.name}
        >
          <blockquote>
            <div className="relative z-20 mt-6 mb-2 flex flex-row items-center gap-4">
              {/* Avatar Image */}
              <img
                src={item.avatar} 
                alt={item.name} 
                className="w-14 h-14 rounded-full object-cover border border-gray-500"
              />
              <span className="flex flex-col gap-1">
                <span className="text-base leading-[1.6] text-white font-medium">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-[#868392] font-medium">
                  {item.title}
                </span>
              </span>
            </div>
            <div className="my-5">
            <span className="relative z-20 text-base leading-[1.6] text-[#ACA7BD] font-medium">
              {item.quote}
            </span>
            </div>
          </blockquote>
        </li>
        
        ))}
      </ul>
    </div>
  );
};

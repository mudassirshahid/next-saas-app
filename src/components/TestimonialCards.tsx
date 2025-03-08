"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import heart from "../assets/heart-rounded.png";
import {motion} from 'framer-motion'

const testimonials = [
  {
    avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    name: "Martin escobar",
    title: "Founder of meta",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Angela stian",
    title: "Product designer",
    quote:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Karim ahmed",
    title: "DevOp engineer",
    quote:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
  },
];

function TestimonialCards() {
  return (
    <div className="h-auto w-full relative flex flex-col items-center overflow-hidden lg:my-24 my-12">
      <div
        className="bg-no-repeat bg-[50%_-68px] "
        style={{ backgroundImage: `url(${heart.src})` }}
      >
                    <div className="absolute bottom-0 left-0 right-0 top-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_20%_50%_at_50%_5%,#000_55%,transparent_10%)]"></div>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
        className="relative z-10 w-full text-center md:pt-24 pt-10 pb-10 md:bg-[radial-gradient(18%_50%_at_50%_55%,rgba(132,81,215,0.47)_0%,rgba(1,1,1,0.32)_80%)] bg-[radial-gradient(18%_64%_at_50%_55%,rgba(132,81,215,0.47)_0%,rgba(1,1,1,0.32)_80%)] bg-no-repeat bg-center bg-cover">
          
          <div className="">

            <h3 className="mt-20 md:mt-0 text-4xl md:text-5xl md:leading-[71px] font-medium">
              Our Customers
            </h3>
            <p className="font-medium text-lg text-center">
              What people say about us
            </p>
          </div>
        </motion.div>
        {/* <div>
        <Image src={heart} alt="heart" />
          <h2 className="text-5xl font-medium text-center mb-4 px-3 sm:px-0 z-10 bg-clip-text text-transparent bg-[linear-gradient(90deg,#989CA5_0%,#FFFFFF_30.4%,#FFFFFF_62.9%,#989CA5_100%)]">Our Customers</h2>
          <p className="font-medium text-lg text-center">What people say about us</p>
        </div> */}

        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 mb-5">
          <div className="w-full max-w-6xl">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;

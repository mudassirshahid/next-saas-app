import ChooseUs from "@/components/ChooseUs";
import FAQS from "@/components/FAQS";
import FeaturedCourses from "@/components/FeaturedCourses";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import LogoTicker from "@/components/LogoTicker";
import OurClients from "@/components/OurClients";
import Pricing from "@/components/Pricing";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
   <>
       <HeroSection />
       <LogoTicker />
       <Features /> 
       <ChooseUs />
       <Pricing />
       <FAQS />
       {/* <FeaturedCourses /> */}
       {/* <WhyChooseUs /> */}
       <TestimonialCards />
       <GetStarted />
       {/* <UpcomingWebinars /> */}
       {/* <Instructors /> */}
   
       </>
  );
}

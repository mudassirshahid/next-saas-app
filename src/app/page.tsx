import ChooseUs from "@/components/ChooseUs";
import FAQS from "@/components/FAQS";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import Pricing from "@/components/Pricing";
import TestimonialCards from "@/components/TestimonialCards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoTicker />
      <Features />
      <ChooseUs />
      <Pricing />
      <FAQS />
      <TestimonialCards />
      <GetStarted />
    </>
  );
}

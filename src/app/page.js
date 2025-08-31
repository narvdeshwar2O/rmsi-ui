import HeroSection from "@/app/home/HeroSection";
import HomeIntro from "@/app/home/HomeIntro";
import WhoWeAre from "@/app/home/WhoWeAre";
import WorkProcess from "@/app/home/WorkProcess";
import ProductSection from "./home/ProductSection";
import MachineSection from "./home/MachineSection";
import GTBSSection from "./home/GTBSSection";
import Brand04Section from "./home/Brand04Section";
import Testimonials from "./home/Testimonials";
import ClientShowcase from "./home/ClientShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeIntro />
      <WhoWeAre />
      <WorkProcess />
      <ProductSection />
      <MachineSection />
      <GTBSSection />
      <Brand04Section />
      <ClientShowcase />
      <Testimonials />
    </>
  );
}

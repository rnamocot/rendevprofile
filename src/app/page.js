import HeroSection from "./components/section/HeroSection";
import AboutSection from "./components/section/AboutSection";
import ServicesSection from "./components/section/ServicesSection";
import PortfolioSection from "./components/section/PortfolioSection";
import TechnologiesSection from "./components/section/TechnologiesSection";
import ContactSection from "./components/section/ContactSection";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}

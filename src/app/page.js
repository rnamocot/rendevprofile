import HeroSection from "./components/section/HeroSection";
import AboutSection from "./components/section/AboutSection";
import ServicesSection from "./components/section/ServicesSection";
import PortfolioSection from "./components/section/PortfolioSection";
import TechnologiesSection from "./components/section/TechnologiesSection";
import TestimonialsSection from "./components/section/TestimonialsSection";
import BlogPostsSection from "./components/section/BlogPostsSection";
import NewsletterSection from "./components/section/NewsletterSection";
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
      <TestimonialsSection />
      <BlogPostsSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </>
  );
}

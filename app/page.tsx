import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MissionSection from "@/components/missionSection";
import ServicesSection from "@/components/servicesSection";
import PhotoGallerySection from "@/components/photoGallerySection";
import BenefitsSection from "@/components/benefitsSection";
import TestimonialsSection from "@/components/testimonialsSection";
import ContactSection from "@/components/contactSection";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <MissionSection />
      <ServicesSection />
      <PhotoGallerySection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;

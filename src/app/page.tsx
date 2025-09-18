import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Hero from "@/components/Hero";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import EditorialSection from "@/components/EditorialSection";

export default function Home() {
  return (
    <main>
      <Hero />  
      <AboutSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      {/* <EditorialSection /> */}
    </main>
  );
}

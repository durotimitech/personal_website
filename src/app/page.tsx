import Hero from '@/components/Hero';
import EditorialSection from '@/components/EditorialSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WorksSection from '@/components/WorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <EditorialSection />
      <ProcessSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

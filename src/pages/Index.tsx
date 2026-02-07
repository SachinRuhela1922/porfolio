import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;

import { useEffect } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Internships from '@/components/Internships';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Qualifications from '@/components/Qualifications';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      const viewportBottom = window.innerHeight - 80;

      elements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        if (top < viewportBottom) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08090E] text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300">
      <Header />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Internships />
        <Projects />
        <Skills />
        <Qualifications />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

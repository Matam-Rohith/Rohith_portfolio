
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Qualifications from '@/components/Qualifications';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll:not(.visible)');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <ThemeToggle />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

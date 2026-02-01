import { useState, useEffect } from 'react';
import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-xl animate-bounce-subtle"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200/30 dark:bg-pink-500/20 rounded-full blur-xl animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 min-h-screen">
          {/* Image */}
          <div className={`lg:w-1/2 w-full flex justify-center transition-all duration-1000 ${isVisible ? 'animate-scale-in' : ''}`}>
            <div className="w-80 h-[480px] lg:w-[380px] lg:h-[500px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 overflow-hidden">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src="/lovable-uploads/white profile.jpg"
                  alt="Matam Rohith"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 10%' }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`lg:w-1/2 w-full text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-in' : ''}`}>
            <h3 className="text-blue-600 dark:text-blue-400 mb-2">Hello, I'm</h3>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Matam <span className="text-gradient">Rohith</span>
            </h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Computer Science Engineering Student
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-xl">
              Computer Science Engineering student focused on machine learning and web development, with hands-on project experience and a strong desire to build practical, scalable solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg text-sm"
              >
                Get In Touch
              </Button>

              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg text-sm"
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1wQJNyAuuA6tbAlyeS4c0HW4Q2RRjCYJO/view?usp=sharing',
                    '_blank'
                  )
                }
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Socials */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://github.com/Matam-Rohith" target="_blank" rel="noopener noreferrer"
                 className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/" target="_blank" rel="noopener noreferrer"
                 className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow hover:scale-110">
                <Linkedin className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

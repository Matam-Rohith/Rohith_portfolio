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
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-bounce-subtle"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200/30 dark:bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 min-h-screen">
          {/* Profile Image - Left Side */}
          <div className={`lg:w-1/2 w-full flex items-center justify-center transition-all duration-1000 ${isVisible ? 'animate-scale-in' : ''} order-1 lg:order-1`} style={{ animationDelay: '0.3s' }}>
            <div className="w-80 h-[400px] lg:w-[360px] lg:h-[450px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-3">
              <img
                src="/lovable-uploads/profile copy copy.png"
                alt="Matam Rohith"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Content - Right Side */}
          <div className={`lg:w-1/2 w-full text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-in' : ''} order-2 lg:order-2`}>
            <div className="mb-4">
              <h3 className="text-base md:text-lg text-blue-600 dark:text-blue-400 font-medium mb-2 animate-fade-in">
                Hello, I'm
              </h3>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-3 animate-fade-in whitespace-nowrap" style={{ animationDelay: '0.2s' }}>
                Matam <span className="text-gradient">Rohith</span>
              </h1>
              <h2 className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Computer Science Engineering Student
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 max-w-2xl lg:max-w-none animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Passionate about technology, machine learning, and web development. 
                Always eager to learn and contribute to innovative projects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-5 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 text-sm"
                onClick={() => window.open('https://drive.google.com/file/d/1vgDO3YO2rEnL5xV7ZVZlFvnhe7Leh7T4/view?usp=sharing', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1s' }}>
              <a 
                href="https://github.com/Matam-Rohith" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-1.5 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "ML & AI Enthusiast",
  "QA Automation (SDET)",
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1600);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/20 rounded-full blur-xl animate-bounce-subtle"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200/30 dark:bg-pink-500/20 rounded-full blur-xl animate-bounce-subtle" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 min-h-screen py-20">
          {/* Profile Image */}
          <div className={`lg:w-1/2 w-full flex justify-center transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="relative w-72 h-[420px] lg:w-[360px] lg:h-[460px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-3 opacity-30"></div>
              <div className="relative w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-3 overflow-hidden">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src="/lovable-uploads/white profile.jpg"
                    alt="Matam Rohith"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 10%' }}
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg px-3 py-2 border border-blue-100 dark:border-gray-700">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">Open to Work 🚀</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`lg:w-1/2 w-full text-center lg:text-left transition-all duration-1000 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 tracking-wide">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">
              Matam <span className="text-gradient">Rohith</span>
            </h1>

            {/* Typewriter Role */}
            <div className="h-8 mb-4">
              <span className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400">
                {displayed}<span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-xl leading-relaxed">
              Recent CSE graduate passionate about building scalable full-stack applications, 
              intelligent AI/ML solutions, and automated test frameworks. Turning ideas into 
              production-ready software.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-lg text-sm font-semibold"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-2.5 rounded-full hover:scale-105 hover:shadow-lg text-sm font-semibold"
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/1IHhigEf20VwwlGz5HloihiHKQpQZWBpU/view?usp=sharing',
                    '_blank'
                  )
                }
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="https://github.com/Matam-Rohith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-full shadow hover:scale-105 transition-transform text-xs font-medium"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-full shadow hover:scale-105 transition-transform text-xs font-medium"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Mail, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

const roles = [
  "Software Engineer",
  "QA / SDET Automation",
  "Data Analyst",
  "Business Analyst",
  "Full-Stack Developer",
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => { setTimeout(() => setIsVisible(true), 100); }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-gradient-primary relative overflow-hidden">

      {/* ── Floating orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-16 left-[10%] w-80 h-80 bg-violet-400/20 dark:bg-violet-600/15 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-[8%] w-72 h-72 bg-blue-400/20 dark:bg-blue-600/15 rounded-full blur-3xl animate-float2" />
        <div className="absolute bottom-16 left-1/3 w-96 h-96 bg-cyan-400/15 dark:bg-cyan-600/10 rounded-full blur-3xl animate-float3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/10 dark:bg-pink-600/10 rounded-full blur-3xl animate-float" style={{animationDelay:'3s'}} />
      </div>

      {/* ── Grid pattern overlay ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.06]"
        style={{ backgroundImage: 'linear-gradient(#6366f1 1px,transparent 1px),linear-gradient(90deg,#6366f1 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[88vh]">

          {/* ── Profile card ── */}
          <div className={`lg:w-1/2 w-full flex justify-center transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="relative">
              {/* Rotating gradient ring */}
              <div className="absolute -inset-3 bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 rounded-3xl blur-sm opacity-40 animate-pulse" />
              <div className="relative w-72 h-[420px] lg:w-[350px] lg:h-[460px] glass-card rounded-3xl p-3">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/lovable-uploads/white profile.jpg"
                    alt="Matam Rohith"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 10%' }}
                  />
                </div>
              </div>

              {/* Open to Work badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass rounded-2xl shadow-xl px-4 py-2.5 border border-emerald-200/60 dark:border-emerald-400/20 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 whitespace-nowrap">Open to Work — 2026</span>
              </div>

              {/* Floating stat chips */}
              <div className="absolute -right-6 top-16 glass rounded-xl shadow-lg px-3 py-2 text-center border border-violet-200/40 dark:border-violet-400/10">
                <div className="text-lg font-extrabold text-gradient">15+</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="absolute -left-6 bottom-24 glass rounded-xl shadow-lg px-3 py-2 text-center border border-blue-200/40 dark:border-blue-400/10">
                <div className="text-lg font-extrabold text-gradient">7.30</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">CGPA</div>
              </div>
            </div>
          </div>

          {/* ── Content ── */}
          <div className={`lg:w-1/2 w-full text-center lg:text-left transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-5 border border-violet-200/50 dark:border-violet-400/20">
              <span className="w-2 h-2 bg-violet-500 rounded-full" />
              <span className="text-xs font-semibold text-violet-700 dark:text-violet-300 tracking-wider uppercase">Available for Opportunities</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 leading-none tracking-tight">
              Matam
              <br />
              <span className="text-gradient">Rohith</span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 mb-5 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-2xl font-bold text-violet-600 dark:text-violet-400">
                {displayed}
              </span>
              <span className="ml-0.5 w-0.5 h-7 bg-violet-500 animate-pulse inline-block rounded-full" />
            </div>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              Recent CSE graduate seeking roles in <strong className="text-gray-800 dark:text-gray-200">Software Engineering</strong>,{' '}
              <strong className="text-gray-800 dark:text-gray-200">QA / SDET Automation</strong>,{' '}
              <strong className="text-gray-800 dark:text-gray-200">Data Analytics</strong>, and{' '}
              <strong className="text-gray-800 dark:text-gray-200">Business Analysis</strong>.{' '}
              Passionate about building scalable apps, intelligent ML pipelines, and quality-first software.
            </p>

            {/* Target roles pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {['SDE / SWE', 'QA / SDET', 'Data Analyst', 'Business Analyst', 'Full-Stack Dev'].map(r => (
                <span key={r} className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border border-violet-200/50 dark:border-violet-400/20 hover:scale-105 transition-transform cursor-default">
                  {r}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-7">
              <Button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white px-7 py-2.5 rounded-full shadow-lg hover:shadow-violet-500/30 hover:scale-105 text-sm font-bold transition-all duration-200"
              >
                <Mail className="w-4 h-4 mr-2" /> Hire Me
              </Button>
              <Button
                variant="outline"
                className="border-violet-400 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 px-7 py-2.5 rounded-full hover:scale-105 text-sm font-bold transition-all duration-200"
                onClick={() => window.open('https://drive.google.com/file/d/1IHhigEf20VwwlGz5HloihiHKQpQZWBpU/view?usp=sharing', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" /> Resume
              </Button>
            </div>

            {/* Socials */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <a href="https://github.com/Matam-Rohith" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-full shadow-md hover:shadow-gray-900/30 hover:scale-105 transition-all text-xs font-semibold border border-gray-700">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-full shadow-md hover:shadow-[#0A66C2]/40 hover:scale-105 transition-all text-xs font-semibold">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <button onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-gray-400 hover:text-violet-500 transition-colors animate-bounce">
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;

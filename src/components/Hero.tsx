import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, Terminal, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const roles = [
  "Software Development Engineer (SDE)",
  "QA / SDET Automation Engineer",
  "LLM & Applied AI Practitioner",
  "Data & Analytics Engineer",
  "Full-Stack Web Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === currentRole) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#08090E] dark:via-[#0B0D15] dark:to-[#08090E]"
    >
      {/* Ambient background glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="glow-mesh top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15" />
      <div className="glow-mesh bottom-10 right-0 w-[30rem] h-[30rem] bg-sky-500/10 dark:bg-sky-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typographic Pitch (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-slate-600 dark:text-slate-400">Computer Science Engineering Graduate</span>
              <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">Class of 2026</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] font-display">
                Engineering <br className="hidden sm:inline" />
                <span className="text-gradient">Intelligent Systems</span>
                <br />
                & Robust Applications.
              </h1>
            </div>

            {/* Dynamic Role Rotator */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 min-h-[32px]">
              <span className="text-slate-400 dark:text-slate-500 text-sm font-mono tracking-wider">FOCUS /</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{displayText}</span>
              <span className="w-0.5 h-5 bg-indigo-500 animate-pulse" />
            </div>

            {/* Concise Bio Pitch */}
            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              I build scalable full-stack applications, enterprise APIs, test automation pipelines, and generative AI solutions. Bridging clean software engineering rigor with practical machine learning and data intelligence.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                onClick={() => scrollTo('projects')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollTo('contact')}
                className="border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm px-5 py-2.5 rounded-xl"
              >
                <Mail className="w-4 h-4 mr-2 text-indigo-500" />
                Get In Touch
              </Button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href="https://github.com/Matam-Rohith"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-all hover:scale-105 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 transition-all hover:scale-105 shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quantitative Proof Ribbon (tabular numerals, anti-slop rigor) */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                  15<span className="text-indigo-500">+</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Projects Built</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                  7.26
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">B.Tech CGPA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                  35<span className="text-indigo-500">+</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Certifications</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                  3<span className="text-indigo-500">x</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Internships</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Subtle ambient halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/20 via-sky-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-70" />

              {/* Main Card Frame */}
              <div className="relative glass-card rounded-2xl p-3.5 border border-slate-200 dark:border-slate-700/60 shadow-2xl">
                
                {/* Image Container with subtle gradient border */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900">
                  <img
                    src="/lovable-uploads/white profile.jpg"
                    alt="Matam Rohith"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark overlay gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Badges embedded inside image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <div>
                      <div className="text-xs font-semibold text-white/90">Matam Rohith</div>
                      <div className="text-[11px] text-indigo-300">SR University · Telangana</div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-[10px] font-medium text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Open to Work
                    </div>
                  </div>
                </div>

                {/* Micro tech stack carousel / pills beneath profile */}
                <div className="mt-3 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Code2 className="w-3.5 h-3.5 text-indigo-500" />
                      Core Stack
                    </span>
                    <span className="font-mono text-[10px] text-slate-400">TypeScript · C# · Python</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['ASP.NET Core', 'React', 'Node.js', 'Selenium', 'SQL Server', 'LLMs'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating micro card 1: Active LLM Experience */}
              <div className="hidden sm:flex absolute -left-6 -bottom-5 p-3 rounded-xl glass-card border border-indigo-200 dark:border-indigo-500/20 shadow-xl items-center gap-3 animate-float">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">LLM Intern @ Ethara.ai</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">GenAI & Prompt Engineering</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useEffect, useRef } from 'react';
import { MapPin, GraduationCap, Briefcase, Target, CheckCircle2 } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: '15+', label: 'Projects Built' },
    { value: '7.26', label: 'CGPA' },
    { value: '5+', label: 'Tech Stacks' },
    { value: 'Jun 2026', label: 'Graduated' },
  ];

  const highlights = [
    { icon: GraduationCap, color: 'violet', title: 'B.Tech — CSE', sub: 'CGPA 7.26 | Graduated June 2026' },
    { icon: MapPin,        color: 'blue',   title: 'Location', sub: 'Telangana, India' },
    { icon: Briefcase,     color: 'cyan',   title: 'Portfolio', sub: '15+ Projects across Web, ML & IoT' },
    { icon: Target,        color: 'rose',   title: 'Target Roles', sub: 'SDE · QA/SDET · Data Analyst · BA' },
  ];

  const seeking = ['Software Engineer (SDE)', 'QA / SDET Automation', 'Data Analyst', 'Business Analyst', 'Full-Stack Developer'];

  const colorMap: Record<string, { ring: string; bg: string; icon: string }> = {
    violet: { ring: 'border-violet-300 dark:border-violet-500/40', bg: 'bg-violet-100 dark:bg-violet-900/30', icon: 'text-violet-600 dark:text-violet-400' },
    blue:   { ring: 'border-blue-300 dark:border-blue-500/40',     bg: 'bg-blue-100 dark:bg-blue-900/30',     icon: 'text-blue-600 dark:text-blue-400' },
    cyan:   { ring: 'border-cyan-300 dark:border-cyan-500/40',     bg: 'bg-cyan-100 dark:bg-cyan-900/30',     icon: 'text-cyan-600 dark:text-cyan-400' },
    rose:   { ring: 'border-rose-300 dark:border-rose-500/40',     bg: 'bg-rose-100 dark:bg-rose-900/30',     icon: 'text-rose-600 dark:text-rose-400' },
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-[#080812] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100/60 dark:bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/60 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-violet-500 mb-3">Who I am</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="section-divider" />
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 animate-on-scroll">
            {stats.map(s => (
              <div key={s.label} className="glass-card rounded-2xl p-5 text-center hover-lift">
                <div className="text-3xl font-extrabold text-gradient mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left — Bio */}
            <div className="animate-on-scroll space-y-5">
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  I'm <span className="font-bold text-gray-900 dark:text-white">Matam Rohith</span>, a CSE graduate from Telangana (June 2026) passionate about crafting end-to-end digital solutions — from intuitive React interfaces to robust REST APIs, ML models, and data pipelines.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  My work spans full-stack web development, automated QA testing, data analysis, and AI/ML applications. I thrive at the intersection of engineering and insight — whether it's a smart IoT system, a NLP classifier, or an analytics dashboard.
                </p>
              </div>

              {/* Seeking roles */}
              <div className="glass-card rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-500 mb-4">🎯 Currently Seeking</p>
                <div className="space-y-2">
                  {seeking.map(role => (
                    <div key={role} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Highlights */}
            <div className="animate-on-scroll space-y-3" style={{animationDelay:'0.2s'}}>
              {highlights.map(({ icon: Icon, color, title, sub }) => (
                <div key={title} className={`flex items-center gap-4 p-4 glass-card rounded-2xl border ${colorMap[color].ring} hover-lift`}>
                  <div className={`w-11 h-11 ${colorMap[color].bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${colorMap[color].icon}`} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-sm">{title}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{sub}</div>
                  </div>
                </div>
              ))}

              {/* Core focus tags */}
              <div className="glass-card rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Core Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {['React','Node.js','Java','Python','MySQL','REST APIs','Selenium','ML/AI','SQL','C#','Git'].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-50 to-blue-50 dark:from-violet-900/20 dark:to-blue-900/20 text-violet-700 dark:text-violet-300 border border-violet-200/60 dark:border-violet-400/15 hover:scale-105 transition-transform cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

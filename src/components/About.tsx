import { useEffect, useRef } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Briefcase, 
  Target, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Code, 
  TestTube, 
  BarChart2, 
  Bot 
} from 'lucide-react';

const focusAreas = [
  {
    title: 'Software Development Engineering',
    role: 'SDE / Full-Stack',
    description: 'Architecting scalable web applications, RESTful APIs, and database systems with ASP.NET Core 8, React, Node.js, and SQL Server.',
    icon: Code,
    color: 'indigo'
  },
  {
    title: 'Quality Assurance & SDET',
    role: 'Test Automation',
    description: 'Designing automated testing frameworks, end-to-end regression suites, test plan documentation, and bug lifecycle tracking with Selenium & JIRA.',
    icon: TestTube,
    color: 'sky'
  },
  {
    title: 'Data & Business Intelligence',
    role: 'Analytics & Insights',
    description: 'Transforming raw transactional datasets into predictive models, RFM cohort analyses, interactive visual dashboards, and actionable business metrics.',
    icon: BarChart2,
    color: 'teal'
  },
  {
    title: 'Applied AI & LLM Systems',
    role: 'Generative AI',
    description: 'Fine-tuning prompt engineering workflows, integrating LLM APIs, building semantic search interfaces, and evaluating model accuracy.',
    icon: Bot,
    color: 'violet'
  }
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white dark:bg-[#090A10] relative overflow-hidden border-t border-slate-100 dark:border-slate-800/60">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            A versatile engineer driven by <span className="text-gradient">precision & problem solving</span>.
          </h2>
        </div>

        {/* 2-Column Story & Capabilities */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Bio & Fast Facts (6 cols) */}
          <div className="lg:col-span-6 space-y-6 animate-on-scroll">
            
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <p>
                I am <strong className="text-slate-900 dark:text-white">Matam Rohith</strong>, an engineering graduate from SR University, Telangana (Graduation: June 2026). My approach blends foundational computer science principles with modern full-stack implementation, automated quality assurance, and practical artificial intelligence.
              </p>
              <p>
                Over the course of my degree, I have delivered over 15 distinct software projects ranging from distributed ASP.NET Core APIs and real-time analytical dashboards to automated test suites and IoT embedded prototypes. I believe exceptional software must be both technically resilient and user-intuitive.
              </p>
              <p>
                Currently interning as an LLM Engineer at Ethara.ai, I actively explore prompt architecture, generative AI workflows, and model integration into enterprise applications.
              </p>
            </div>

            {/* Structured At-a-Glance Info Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  <span>Education</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">B.Tech in CSE</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">SR University · 7.26 CGPA</div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <MapPin className="w-4 h-4 text-sky-500" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Telangana, India</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Open to Relocation & Remote</div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                  <span>Current Experience</span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">LLM Intern</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Ethara.ai (Remote)</div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800/80">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <Target className="w-4 h-4 text-violet-500" />
                  <span>Availability</span>
                </div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Immediate Placement</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Full-Time 2026 Roles</div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Focus Disciplines (6 cols) */}
          <div className="lg:col-span-6 space-y-4 animate-on-scroll">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Primary Competencies
            </div>

            <div className="space-y-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 group hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                            {area.title}
                          </h3>
                          <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">
                            {area.role}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

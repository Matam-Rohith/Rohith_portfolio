import { useEffect, useRef } from 'react';
import { Code, Database, Globe, Cpu, TestTube, GitBranch, BarChart2, Search } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'Languages',       icon: Code,      skills: ['Java','JavaScript','Python','C','TypeScript','C#'],                                color: 'violet' },
    { title: 'Frontend',        icon: Globe,     skills: ['React','HTML5','CSS3','Tailwind CSS','Bootstrap','AngularJS'],                    color: 'blue' },
    { title: 'Backend & APIs',  icon: Cpu,       skills: ['Node.js','Express.js','ASP.NET Core','Servlets','JDBC','REST APIs'],             color: 'cyan' },
    { title: 'Databases',       icon: Database,  skills: ['MySQL','SQL','Oracle','SQL Server','MongoDB'],                                    color: 'teal' },
    { title: 'QA & Testing',    icon: TestTube,  skills: ['Manual Testing','Selenium (learning)','Test Cases','Bug Reporting','JIRA'],       color: 'rose' },
    { title: 'Data & Analytics',icon: BarChart2, skills: ['Python Pandas','NumPy','Matplotlib','SQL Analytics','RFM Analysis','Chart.js'],   color: 'amber' },
    { title: 'AI / ML',         icon: Search,    skills: ['scikit-learn','NLP','Prompt Engineering','Groq API','Jupyter','Data Analysis'],  color: 'purple' },
    { title: 'Tools & DevOps',  icon: GitBranch, skills: ['Git & GitHub','VS Code','Render','Vercel','GitHub Pages','GitHub Actions'],      color: 'gray' },
  ];

  const colorClasses: Record<string, { card: string; iconBg: string; icon: string; pill: string }> = {
    violet: { card: 'border-violet-200/60 dark:border-violet-400/15', iconBg: 'bg-violet-100 dark:bg-violet-900/30', icon: 'text-violet-600 dark:text-violet-400', pill: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300' },
    blue:   { card: 'border-blue-200/60 dark:border-blue-400/15',     iconBg: 'bg-blue-100 dark:bg-blue-900/30',     icon: 'text-blue-600 dark:text-blue-400',     pill: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
    cyan:   { card: 'border-cyan-200/60 dark:border-cyan-400/15',     iconBg: 'bg-cyan-100 dark:bg-cyan-900/30',     icon: 'text-cyan-600 dark:text-cyan-400',     pill: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300' },
    teal:   { card: 'border-teal-200/60 dark:border-teal-400/15',     iconBg: 'bg-teal-100 dark:bg-teal-900/30',     icon: 'text-teal-600 dark:text-teal-400',     pill: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300' },
    rose:   { card: 'border-rose-200/60 dark:border-rose-400/15',     iconBg: 'bg-rose-100 dark:bg-rose-900/30',     icon: 'text-rose-600 dark:text-rose-400',     pill: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300' },
    amber:  { card: 'border-amber-200/60 dark:border-amber-400/15',   iconBg: 'bg-amber-100 dark:bg-amber-900/30',   icon: 'text-amber-600 dark:text-amber-400',   pill: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
    purple: { card: 'border-purple-200/60 dark:border-purple-400/15', iconBg: 'bg-purple-100 dark:bg-purple-900/30', icon: 'text-purple-600 dark:text-purple-400', pill: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
    gray:   { card: 'border-gray-200/60 dark:border-gray-400/15',     iconBg: 'bg-gray-100 dark:bg-gray-800',         icon: 'text-gray-600 dark:text-gray-400',     pill: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300' },
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50/80 dark:bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-violet-100/50 dark:bg-violet-900/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-violet-500 mb-3">What I know</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              🛠️ <span className="text-gradient">Technical Skills</span>
            </h2>
            <div className="section-divider" />
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Spanning web development, QA testing, data analytics, and AI/ML
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((cat, i) => {
              const c = colorClasses[cat.color];
              return (
                <div key={cat.title}
                  className={`animate-on-scroll glass-card card-aesthetic rounded-2xl p-5 border ${c.card}`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${c.iconBg} rounded-xl flex items-center justify-center shadow-sm`}>
                      <cat.icon className={`w-5 h-5 ${c.icon}`} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-tight">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map(s => (
                      <span key={s} className={`${c.pill} px-2.5 py-1 rounded-lg text-xs font-semibold hover:scale-105 transition-transform cursor-default`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

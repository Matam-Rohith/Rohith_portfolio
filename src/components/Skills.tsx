import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Globe, 
  Server, 
  Database, 
  TestTube, 
  BarChart3, 
  Cpu, 
  GitBranch, 
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

type SkillCategory = {
  id: string;
  name: string;
  icon: typeof Code;
  description: string;
  skills: string[];
  highlight: string;
};

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Programming Languages',
    icon: Code,
    description: 'Foundational typed and interpreted languages for enterprise, web, and algorithmic systems.',
    skills: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'C#', 'C', 'SQL'],
    highlight: 'C#, Java, Python & TypeScript'
  },
  {
    id: 'backend',
    name: 'Backend & Web APIs',
    icon: Server,
    description: 'Clean architecture RESTful APIs, routing microservices, authentication, and server runtimes.',
    skills: ['ASP.NET Core 8', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Servlets', 'JDBC'],
    highlight: 'ASP.NET Core 8 & Node.js'
  },
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    icon: Globe,
    description: 'Modern component-driven web interfaces, responsive styling, and dynamic state management.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Bootstrap', 'AngularJS'],
    highlight: 'React & Tailwind CSS'
  },
  {
    id: 'databases',
    name: 'Database Architecture',
    icon: Database,
    description: 'Relational schema design, ACID transactions, ORM integration, and query performance.',
    skills: ['SQL Server', 'MySQL', 'Oracle DB', 'MongoDB', 'Entity Framework Core', 'Relational Modeling'],
    highlight: 'SQL Server & EF Core'
  },
  {
    id: 'qa-testing',
    name: 'QA & SDET Automation',
    icon: TestTube,
    description: 'Automated functional test suites, regression test cases, bug tracking, and defect triage.',
    skills: ['Selenium WebDriver', 'Manual Testing', 'Test Case Design', 'JIRA', 'Bug Tracking', 'Regression Testing'],
    highlight: 'Selenium & Test Frameworks'
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    icon: BarChart3,
    description: 'Statistical modeling, cohort segmentation, ETL scripts, and interactive business intelligence.',
    skills: ['Python Pandas', 'NumPy', 'Matplotlib', 'SQL Analytics', 'RFM Customer Segmentation', 'Chart.js'],
    highlight: 'Pandas & SQL Analytics'
  },
  {
    id: 'applied-ai',
    name: 'Applied AI & LLMs',
    icon: Cpu,
    description: 'Generative AI workflows, prompt optimization, model evaluation, and classical machine learning.',
    skills: ['Large Language Models (LLMs)', 'Prompt Engineering', 'scikit-learn', 'NLP Text Tokenization', 'Streamlit', 'Groq API'],
    highlight: 'LLMs & Prompt Engineering'
  },
  {
    id: 'devops-tools',
    name: 'DevOps & Tooling',
    icon: GitBranch,
    description: 'Source control workflows, CI/CD platforms, cloud hosting, and developer tooling.',
    skills: ['Git & GitHub', 'VS Code', 'Render', 'Vercel', 'GitHub Pages', 'AWS Academy Labs', 'Azure Basics'],
    highlight: 'Git & Cloud Deployment'
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredCategories = skillCategories.map((cat) => {
    if (!searchQuery.trim()) return cat;
    const query = searchQuery.toLowerCase();
    const matchingSkills = cat.skills.filter((s) => s.toLowerCase().includes(query));
    const nameMatch = cat.name.toLowerCase().includes(query);
    if (nameMatch || matchingSkills.length > 0) {
      return {
        ...cat,
        skills: nameMatch ? cat.skills : matchingSkills
      };
    }
    return null;
  }).filter(Boolean) as SkillCategory[];

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-white dark:bg-[#090A10] relative overflow-hidden border-t border-slate-100 dark:border-slate-800/60">
      
      {/* Background glow */}
      <div className="glow-mesh top-1/2 left-1/3 w-96 h-96 bg-sky-500/5 dark:bg-sky-600/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-on-scroll">
          <div>
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Technical Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Core <span className="text-gradient">Engineering Capabilities</span>
            </h2>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by skill or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* 8-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="animate-on-scroll group"
                style={{ animationDelay: `${(idx % 4) * 0.08}s` }}
              >
                <div className="h-full p-5 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 flex flex-col hover:border-indigo-400 dark:hover:border-indigo-500/40">
                  
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                        {cat.name}
                      </h3>
                      <div className="text-[10px] text-indigo-600 dark:text-indigo-400 font-medium">
                        {cat.highlight}
                      </div>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                    {cat.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer trust badge */}
        <div className="mt-14 p-6 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 animate-on-scroll">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">Full Lifecycle Readiness</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">From code architecture & automated test coverage to deployment and performance analytics</div>
            </div>
          </div>
          <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1.5 rounded-lg border border-indigo-200/60 dark:border-indigo-500/30 whitespace-nowrap">
            Ready for SDE · QA · Data Roles
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

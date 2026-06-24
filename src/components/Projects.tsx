import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
  color: string;
  badge?: string;
  category: string;
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: 'Library Management System',
      description: 'ASP.NET Core 8 Web API with JWT auth, EF Core, SQL Server & Swagger. Covers book inventory, member management, borrow/return, reservations, fines & CI/CD via GitHub Actions.',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/LibraryManagementSystem',
      tags: ['C#', 'ASP.NET Core 8', 'EF Core', 'SQL Server', 'JWT', 'Swagger'],
      color: 'teal', badge: 'New', category: 'Backend',
    },
    {
      title: 'ICC T20 World Cup Analytics',
      description: 'Interactive analytics dashboard for ICC T20 WC 2024 — team performance, run-rate trends, top batsmen/bowlers & head-to-head stats. Node.js + Chart.js.',
      image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/icc-t20-worldcup-analytics',
      demo: 'https://matam-rohith.github.io/icc-t20-worldcup-analytics/',
      tags: ['Node.js', 'Express', 'Chart.js', 'Bootstrap', 'JavaScript'],
      color: 'blue', badge: 'New', category: 'Data Analytics',
    },
    {
      title: 'E-Commerce Sales Analytics',
      description: 'End-to-end analytics platform — SQL, Python, RFM segmentation, sales forecasting, profitability analysis & interactive retention dashboard.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/ecommerce-sales-customer-analytics',
      demo: 'https://matam-rohith.github.io/ecommerce-sales-customer-analytics/',
      tags: ['SQL', 'Python', 'RFM Analysis', 'Forecasting', 'HTML'],
      color: 'purple', badge: 'New', category: 'Data Analytics',
    },
    {
      title: 'AI Prompt Playground',
      description: 'Interactive tool for writing & analysing AI prompts with instant rule-based feedback — 7-rule analyser, score/10, auto-improvement engine & 6 example prompts.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/ai-prompt-playground',
      demo: 'https://matam-rohith.github.io/ai-prompt-playground/',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Prompt Engineering'],
      color: 'violet', category: 'AI / ML',
    },
    {
      title: 'TalentFlow HRM',
      description: 'HR Management System for full employee lifecycle — onboarding, payroll, analytics & attendance tracking. Deployed on GitHub Pages.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/TalentFlow-HRM',
      demo: 'https://matam-rohith.github.io/TalentFlow-HRM/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      color: 'blue', category: 'Full-Stack',
    },
    {
      title: 'URL Shortener',
      description: 'Full-stack URL shortener converting long URLs to short shareable links with instant redirection. Backend hosted on Render.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/URL_Shortener',
      demo: 'https://url-shortener-na16.onrender.com/',
      tags: ['Node.js', 'Express', 'HTML', 'CSS', 'Render'],
      color: 'green', category: 'Full-Stack',
    },
    {
      title: 'Notes Web App',
      description: 'Lightweight notes app to create, edit & delete notes — built with React + TypeScript, deployed on Vercel.',
      image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/notes-app',
      demo: 'https://notes-app-zeta-ruddy.vercel.app/',
      tags: ['TypeScript', 'React', 'LocalStorage', 'Vercel'],
      color: 'teal', category: 'Full-Stack',
    },
    {
      title: 'Student Dashboard',
      description: 'Client-side student dashboard with GPA Calculator, Attendance Tracker & Timetable Manager — all in localStorage, no backend.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/student-dashboard',
      demo: 'https://matam-rohith.github.io/student-dashboard/',
      tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      color: 'blue', category: 'Full-Stack',
    },
    {
      title: 'Task Management System',
      description: 'Task manager with add, update, delete & priority-level tracking — deployed on GitHub Pages.',
      image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/Task_Management',
      demo: 'https://matam-rohith.github.io/Task_Management/',
      tags: ['JavaScript', 'LocalStorage', 'HTML', 'CSS'],
      color: 'green', category: 'Full-Stack',
    },
    {
      title: 'SMS Spam Detection',
      description: 'NLP classifier to detect spam SMS using Python & scikit-learn. Live Streamlit demo available.',
      image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/NLP/blob/main/sms_spam_detection_nlp.ipynb',
      demo: 'https://mamfegbtbyckxtr4ncu3nq.streamlit.app/',
      tags: ['Python', 'NLP', 'scikit-learn', 'Streamlit'],
      color: 'rose', category: 'AI / ML',
    },
    {
      title: 'Cancer Prediction',
      description: 'ML model predicting cancer risk from clinical features — data preprocessing, feature engineering & model evaluation in Jupyter.',
      image: 'https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/Cancer_Prediction',
      tags: ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
      color: 'purple', category: 'AI / ML',
    },
    {
      title: 'Personal Budget Tracker',
      description: 'Income & expense tracker with category-wise analytics, budget alerts & visual reports — built with AngularJS.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/personal_budget_tracker',
      demo: 'https://drive.google.com/file/d/1Qn3TDdZuQhSy1FOtNEYqqewJtcLzC4ze/view?usp=drive_link',
      tags: ['HTML', 'CSS', 'JavaScript', 'AngularJS'],
      color: 'amber', category: 'Full-Stack',
    },
    {
      title: 'Bank Management System',
      description: 'Java + JDBC bank system for customer accounts & transactions with Oracle DB integration.',
      image: 'https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/Bank-Management-system',
      tags: ['Java', 'JDBC', 'Oracle DB', 'SQL'],
      color: 'blue', category: 'Backend',
    },
    {
      title: 'Calculator',
      description: 'Feature-rich web calculator with +, -, ×, ÷, %, exponentiation, clear & delete — modern hover/click effects.',
      image: 'https://images.pexels.com/photos/6256086/pexels-photo-6256086.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/Matam-Rohith/Calculator-Project',
      demo: 'https://matam-rohith.github.io/Calculator-Project/',
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: 'green', category: 'Full-Stack',
    },
    {
      title: 'Smart Car Parking System',
      description: 'IoT parking system using Arduino UNO + IR sensors to detect free spots in real time — see demo video on Drive.',
      image: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800',
      demo: 'https://drive.google.com/drive/folders/1LZD9eOQ0Dppm9OqawQy2y9vvebHRpe18',
      tags: ['Arduino', 'IoT', 'C++', 'IR Sensors'],
      color: 'amber', category: 'IoT',
    },
  ];

  const categories = ['All', 'Full-Stack', 'Backend', 'Data Analytics', 'AI / ML', 'IoT'];

  const colorMap: Record<string, { overlay: string; pill: string }> = {
    violet: { overlay: 'from-violet-600 to-purple-600', pill: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300' },
    blue:   { overlay: 'from-blue-600 to-cyan-500',     pill: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
    purple: { overlay: 'from-purple-600 to-pink-500',   pill: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
    green:  { overlay: 'from-green-500 to-emerald-500', pill: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' },
    teal:   { overlay: 'from-teal-500 to-cyan-500',     pill: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300' },
    rose:   { overlay: 'from-rose-500 to-pink-500',     pill: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300' },
    amber:  { overlay: 'from-amber-500 to-orange-500',  pill: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' },
  };

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-[#080812] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100/40 dark:bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 animate-on-scroll">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-violet-500 mb-3">What I've built</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              💼 <span className="text-gradient">Projects</span>
            </h2>
            <div className="section-divider" />
            <p className="text-base text-gray-500 dark:text-gray-400">
              {projects.length} projects across Full-Stack, ML/AI, Data Analytics & IoT
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 animate-on-scroll">
            {categories.map(cat => (
              <button key={cat}
                onClick={() => setFilter(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-md shadow-violet-500/30 scale-105'
                    : 'glass-card text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-105'
                }`}
              >
                {cat === 'All' && <Filter className="w-3 h-3" />}
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => {
              const c = colorMap[project.color] ?? colorMap['blue'];
              return (
                <div key={project.title}
                  className="animate-on-scroll group"
                  style={{ animationDelay: `${(index % 6) * 0.08}s` }}
                >
                  <div className="glass-card card-aesthetic rounded-2xl overflow-hidden h-full flex flex-col">

                    {/* Image */}
                    <div className="relative overflow-hidden h-44">
                      <img src={project.image} alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${c.overlay} opacity-0 group-hover:opacity-80 transition-opacity duration-400`} />
                      {/* Badges */}
                      {project.badge && (
                        <span className="absolute top-3 left-3 pill-new z-10">{project.badge}</span>
                      )}
                      {/* Hover action icons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="p-2.5 bg-white/90 rounded-xl shadow-lg hover:scale-110 transition-transform">
                            <Github className="w-5 h-5 text-gray-800" />
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="p-2.5 bg-white/90 rounded-xl shadow-lg hover:scale-110 transition-transform">
                            <ExternalLink className="w-5 h-5 text-gray-800" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 shrink-0">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0,4).map(tag => (
                          <span key={tag} className={`${c.pill} px-2 py-0.5 rounded-md text-[10px] font-semibold`}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2 mt-auto">
                        {project.github && (
                          <Button variant="outline" size="sm"
                            className="flex-1 text-xs rounded-xl border-gray-200 dark:border-gray-700 hover:border-violet-400 hover:text-violet-600"
                            onClick={() => window.open(project.github, '_blank')}>
                            <Github className="w-3 h-3 mr-1" /> Code
                          </Button>
                        )}
                        {project.demo && (
                          <Button size="sm"
                            className="flex-1 text-xs rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white border-0 shadow-md hover:shadow-violet-500/30"
                            onClick={() => window.open(project.demo, '_blank')}>
                            <ExternalLink className="w-3 h-3 mr-1" /> Live Demo
                          </Button>
                        )}
                      </div>
                    </div>
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

export default Projects;

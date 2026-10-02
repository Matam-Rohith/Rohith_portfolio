import { useEffect, useRef, useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Filter, 
  ArrowUpRight, 
  X, 
  Check, 
  Code2, 
  Layers, 
  Terminal,
  Sparkles,
  Database
} from 'lucide-react';
import { Button } from "@/components/ui/button";

// Generated local high-fidelity assets tailored to each engineering project
import imgLibraryApi from '@/assets/images/project_library_api_1790871523997.jpg';
import imgCricketAnalytics from '@/assets/images/cricket_analytics_board_1790916145175.jpg';
import imgEcommerceAnalytics from '@/assets/images/project_analytics_dashboard_1790870998813.jpg';
import imgTalentFlowHrm from '@/assets/images/talentflow_hrm_portal_1790916157438.jpg';
import imgUrlShortener from '@/assets/images/url_shortener_service_1790916183672.jpg';
import imgNotesApp from '@/assets/images/notes_app_interface_1790916198135.jpg';
import imgSmsSpam from '@/assets/images/sms_spam_detector_1790916224824.jpg';
import imgSmartParking from '@/assets/images/smart_parking_sensor_1790916266115.jpg';
import imgBudgetTracker from '@/assets/images/budget_tracker_ui_1790954355576.jpg';
import imgItHelpdesk from '@/assets/images/it_helpdesk_ui_1790954370447.jpg';
import imgServiceOps from '@/assets/images/serviceops_ui_1790954385989.jpg';

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
  category: 'Full-Stack' | 'Backend' | 'Data Analytics' | 'AI / ML' | 'IoT';
  featured?: boolean;
  architectureHighlights: string[];
};

const projectsData: Project[] = [
  {
    id: 'ecommerce-sales-customer-analytics',
    title: 'E-Commerce Sales & Customer Analytics',
    subtitle: 'Interactive Analytics & RFM Customer Segmentation',
    description: 'End-to-end data analytics platform utilizing SQL and Python for RFM customer segmentation, seasonal sales forecasting, churn risk evaluation, and profit margin analysis.',
    longDescription: 'Comprehensive customer intelligence solution processing transactional orders. Calculates recency, frequency, and monetary scores to categorize users into retention cohorts and forecasts quarterly sales volume.',
    image: imgEcommerceAnalytics,
    github: 'https://github.com/Matam-Rohith/ecommerce-sales-customer-analytics',
    demo: 'https://ecommerce-sales-customer-analytics-pearl.vercel.app/',
    tags: ['React', 'Python', 'SQL', 'RFM Analysis', 'Sales Forecasting', 'Vercel'],
    category: 'Data Analytics',
    featured: true,
    architectureHighlights: [
      'RFM mathematical model segmenting high-value vs churn-risk customers',
      'Trend regression algorithms estimating revenue seasonality',
      'Structured SQL queries optimizing cohort calculations across large datasets',
      'Interactive executive dashboard deployed live on Vercel for stakeholder decision-making'
    ]
  },
  {
    id: 'personal-budget-tracker',
    title: 'Personal Budget Tracker',
    subtitle: 'Income & Expense Telemetry · Savings Goal Tracker',
    description: 'Client-side financial dashboard for tracking daily expenses, budgeting across categories, visualizing cash flow trends, and managing monthly savings targets.',
    longDescription: 'A responsive personal finance tracking platform built for real-time budget management. Features dynamic category breakdowns, expense logging with instant balance updates, interactive spending charts, and local persistence for data privacy.',
    image: imgBudgetTracker,
    github: 'https://github.com/Matam-Rohith/personal_budget_tracker',
    demo: 'https://matam-rohith.github.io/personal_budget_tracker/',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Data Visualization', 'LocalStorage', 'GitHub Pages'],
    category: 'Full-Stack',
    featured: true,
    architectureHighlights: [
      'Interactive category budget tracking with visual limit warnings',
      'Real-time cash-flow and balance calculations across accounts',
      'Client-side persistent storage ensuring zero data leakage',
      'Dynamic spending distribution charts and monthly variance reporting'
    ]
  },
  {
    id: 'it-helpdesk-portal',
    title: 'IT Help Desk Portal',
    subtitle: 'Role-Based Support Ticketing & Resolution Center',
    description: 'Full-featured IT helpdesk ticketing application with role-based access control, ticket queues, SLA priority tagging, agent assignments, and customer issue resolution.',
    longDescription: 'A secure, production-style IT helpdesk support portal built to manage employee tech requests. Implements authenticated roles for both end-users and support technicians, automated ticket categorization, priority tagging, ticket lifecycle transitions, and rapid search filtering.',
    image: imgItHelpdesk,
    github: 'https://github.com/Matam-Rohith/it-helpdesk-portal',
    demo: 'https://it-helpdesk-portal-khaki.vercel.app/login',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Role-Based Auth', 'Vercel'],
    category: 'Full-Stack',
    featured: true,
    architectureHighlights: [
      'Role-based authentication protecting user and technician portal views',
      'Dynamic ticket lifecycle tracking (New, In Progress, On Hold, Resolved, Closed)',
      'Categorized request routing for hardware, network, credentials, and software',
      'Zero-friction deployment on Vercel with responsive mobile and desktop viewports'
    ]
  },
  {
    id: 'serviceops-itil-platform',
    title: 'ServiceOps — ITIL Service Management & Support Platform',
    subtitle: 'Enterprise ITIL v4 Service Operations & Incident Hub',
    description: 'Enterprise-grade ITIL service management platform streamlining incident response, change request governance, SLA monitoring, and IT service catalog operations.',
    longDescription: 'ServiceOps delivers an enterprise ITIL v4-compliant service operation and support command center. Features structured incident prioritization matrix (impact vs urgency), automated SLA breach countdowns, change request review boards, service request fulfillment workflows, and centralized team telemetry deployed on Google Cloud Run.',
    image: imgServiceOps,
    github: 'https://github.com/Matam-Rohith/ServiceOps---ITIL-Service-Management-Support-Platform',
    demo: 'https://serviceops-itil-service-management-support-platfo-189251894547.asia-southeast1.run.app/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'ITIL v4', 'ITSM', 'Cloud Run'],
    category: 'Full-Stack',
    featured: true,
    architectureHighlights: [
      'ITIL v4 aligned Incident, Problem, Change, and Service Request lifecycle workflows',
      'Real-time SLA resolution countdowns with dynamic severity escalation triggers',
      'Enterprise Change Management approval pipeline with risk assessment tracking',
      'Containerized modern frontend architecture deployed on Google Cloud Run'
    ]
  },
  {
    id: 'libra-library-system',
    title: 'Libra — Library Management System',
    subtitle: 'Modern Library Automation & Circulation Suite',
    description: 'Comprehensive full-stack library management system featuring book catalog search, borrowing workflows, patron membership management, automated overdue fines, and real-time inventory telemetry.',
    longDescription: 'Libra is an end-to-end library operations platform designed to streamline library circulation and inventory control. Provides instantaneous book search, member account tracking, automated fine calculations for overdue returns, reservation queues, and administrative inventory analytics.',
    image: imgLibraryApi,
    github: 'https://github.com/Matam-Rohith/LibraryManagementSystem',
    demo: 'https://library-ten-taupe-32.vercel.app/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'REST API', 'Vercel', 'Circulation Engine'],
    category: 'Full-Stack',
    featured: true,
    architectureHighlights: [
      'Catalog indexing with instant full-text filtering by title, author, category, and ISBN',
      'Automated circulation state machine managing checkouts, returns, and overdue calculations',
      'Patron account portal for active loans, reservation requests, and borrowing history',
      'High-performance responsive UI deployed on Vercel with smooth interactive workflows'
    ]
  },
  {
    id: 'icc-t20-analytics',
    title: 'ICC T20 World Cup Analytics Platform',
    subtitle: 'Interactive Sports Intelligence Dashboard',
    description: 'Dynamic sports intelligence dashboard featuring real-time run-rate charts, head-to-head match trends, and batsman/bowler performance metrics for the 2024 World Cup.',
    longDescription: 'Full-stack sports analytics web application aggregating tournament match logs. Features interactive Chart.js visualizations, match scenario simulations, strike-rate comparative charts, and responsive telemetry design deployed on Render.',
    image: imgCricketAnalytics,
    github: 'https://github.com/Matam-Rohith/icc-t20-worldcup-analytics',
    demo: 'https://icc-t20-worldcup-analytics.onrender.com/',
    tags: ['Node.js', 'Express', 'Chart.js', 'JavaScript', 'Render'],
    category: 'Data Analytics',
    featured: false,
    architectureHighlights: [
      'Data parsing pipeline for multi-match tournament telemetry',
      'Dynamic Chart.js rendering for strike-rate and boundary frequency',
      'Head-to-head statistical engine and team efficiency matrix',
      'Lightweight server-side REST API with Render continuous deployment'
    ]
  },
  {
    id: 'talentflow-hrm',
    title: 'TalentFlow Human Resource Management',
    subtitle: 'Employee Lifecycle & Attendance Analytics',
    description: 'Comprehensive HR portal managing the full employee lifecycle — recruitment, onboarding, leave tracking, payroll computation, and team performance analytics.',
    longDescription: 'Modern dashboard application built to streamline HR operations. Features custom attendance logs, leave request approval workflows, role-based view permissions, and graphical payroll breakdowns.',
    image: imgTalentFlowHrm,
    github: 'https://github.com/Matam-Rohith/TalentFlow-HRM',
    demo: 'https://matam-rohith.github.io/TalentFlow-HRM/',
    tags: ['JavaScript', 'CSS3', 'Chart.js', 'HR Tech'],
    category: 'Full-Stack',
    architectureHighlights: [
      'Modular employee roster management with instant filter and search',
      'Visual attendance telemetry and department leave calendars',
      'Client-side state persistence and exportable reports'
    ]
  },
  {
    id: 'url-shortener',
    title: 'High-Performance URL Shortener Service',
    subtitle: 'REST Redirection Engine & Click Tracker',
    description: 'Full-stack URL shortening service with custom slug generation, instant redirection latency, and continuous deployment on Render.',
    longDescription: 'Engineered for swift redirect resolution. Provides a clean UI for shortening links, collision-resistant hash generation, and backend logging.',
    image: imgUrlShortener,
    github: 'https://github.com/Matam-Rohith/URL_Shortener',
    demo: 'https://url-shortener-na16.onrender.com/',
    tags: ['Node.js', 'Express', 'JavaScript', 'Render API', 'REST API'],
    category: 'Backend',
    architectureHighlights: [
      'Base62 encoding pipeline for URL generation',
      'Collision prevention algorithm with rapid dictionary lookup',
      'REST endpoints hosted on Render with CORS middleware'
    ]
  },
  {
    id: 'notes-app',
    title: 'Minimalist Notes Workspace',
    subtitle: 'React & TypeScript Productivity Suite',
    description: 'Fast, responsive notes management web app built with React, TypeScript, and localized state persistence, deployed on Vercel.',
    longDescription: 'Focused writing experience featuring instant debounced search, rich categorization, tags, and zero-latency LocalStorage sync.',
    image: imgNotesApp,
    github: 'https://github.com/Matam-Rohith/notes-app',
    demo: 'https://notes-app-zeta-ruddy.vercel.app/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'Full-Stack',
    architectureHighlights: [
      'Type-safe React component architecture with strict TypeScript',
      'Debounced search filter over indexed note records',
      'Automated CI/CD deployment on Vercel'
    ]
  },
  {
    id: 'sms-spam-detection',
    title: 'NLP SMS Spam Classification Pipeline',
    subtitle: 'Machine Learning Text Classifier & Streamlit App',
    description: 'Natural Language Processing model categorizing messages as spam or ham using scikit-learn feature extraction with live Streamlit deployment.',
    longDescription: 'End-to-end NLP machine learning pipeline including text tokenization, TF-IDF vectorization, Naive Bayes / Random Forest model evaluation, and an interactive cloud inference app.',
    image: imgSmsSpam,
    github: 'https://github.com/Matam-Rohith/NLP/blob/main/sms_spam_detection_nlp.ipynb',
    demo: 'https://mamfegbtbyckxtr4ncu3nq.streamlit.app/',
    tags: ['Python', 'NLP', 'scikit-learn', 'TF-IDF', 'Streamlit'],
    category: 'AI / ML',
    architectureHighlights: [
      'Text normalization with lemmatization and stop-word filtering',
      'TF-IDF vector representation with optimal ngram range',
      'Precision-optimized classification for zero false-positive spam filtration',
      'Interactive Streamlit web deployment for real-time text testing'
    ]
  },
  {
    id: 'smart-parking-iot',
    title: 'Smart Car Parking IoT Telemetry',
    subtitle: 'Arduino UNO & Infrared Sensor Hardware System',
    description: 'Hardware IoT parking management system utilizing Arduino UNO and infrared obstacle sensors to identify and display parking space occupancy in real time.',
    longDescription: 'Embedded computing project integrating hardware sensors with microcontrollers to monitor bay occupancy and provide visual LED telemetry signals for smart city parking.',
    image: imgSmartParking,
    demo: 'https://drive.google.com/drive/folders/1LZD9eOQ0Dppm9OqawQy2y9vvebHRpe18',
    tags: ['Arduino', 'IoT', 'C++', 'Hardware Telemetry', 'Sensors'],
    category: 'IoT',
    architectureHighlights: [
      'Real-time IR sensor threshold calibration',
      'Low-power microcontroller loop handling multiple bay monitors',
      'Hardware status LED state indicators and display drivers'
    ]
  }
];

const categories = ['All', 'Full-Stack', 'Backend', 'Data Analytics', 'AI / ML', 'IoT'] as const;

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-slate-50/70 dark:bg-[#08090E] relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="glow-mesh top-1/3 right-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with clear unboxed metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-on-scroll">
          <div>
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Featured <span className="text-gradient">Engineering Projects</span>
            </h2>
          </div>
          
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>{projectsData.length} Total Projects</span>
            <span className="mx-2">·</span>
            <span>Production & Open Source</span>
          </div>
        </div>

        {/* Filter Segmented Controls (functional interactive buttons) */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 overflow-x-auto mb-10 w-full sm:w-max shadow-sm animate-on-scroll">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? projectsData.length 
              : projectsData.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] tabular-nums font-mono px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid: Featured flagship items + standard cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="animate-on-scroll group"
              style={{ animationDelay: `${(idx % 6) * 0.08}s` }}
            >
              <div className="h-full glass-card rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden flex flex-col hover:border-indigo-400 dark:hover:border-indigo-500/40">
                
                {/* Media Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle dark gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Category unboxed tag on top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium text-slate-200 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-950/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-amber-500/30">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Quick hover trigger */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-950/40 backdrop-blur-[2px]"
                  >
                    <span className="px-4 py-2 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg hover:scale-105 transition-transform">
                      Deep Dive
                    </span>
                  </button>
                </div>

                {/* Content body */}
                <div className="p-5 flex flex-col flex-1">
                  
                  {/* Title & subtitle */}
                  <div className="mb-2">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Concise description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Clean unboxed tags with separator */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs h-8 px-2.5 rounded-xl border-slate-200 dark:border-slate-700 font-semibold hover:border-indigo-400"
                    >
                      Deep Dive
                    </Button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        aria-label="View architecture on GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Architecture</span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-sm hover:shadow-indigo-500/25 transition-all"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal header */}
            <div className="mb-6 pr-8">
              <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                {selectedProject.category} · Technical Architecture
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Banner preview */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-6 bg-slate-900 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Narrative deep dive */}
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  System Overview
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Architecture highlights list */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2.5">
                  Key Technical Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.architectureHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                  Stack & Tooling
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-3">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Architecture & Code (GitHub)
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Demo
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;

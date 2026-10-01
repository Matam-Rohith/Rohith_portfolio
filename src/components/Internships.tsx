import { useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

type ExperienceItem = {
  role: string;
  organization: string;
  affiliation?: string;
  duration: string;
  location: string;
  status: 'Current' | 'Completed';
  summary: string;
  keyContributions: string[];
  skills: string[];
  certificateUrl?: string;
};

const experienceList: ExperienceItem[] = [
  {
    role: "LLM Engineer Intern",
    organization: "Ethara.ai",
    duration: "February 2026 – Present",
    location: "Remote",
    status: "Current",
    summary: "Active internship focusing on large language model applications, generative AI workflows, and natural language processing pipelines.",
    keyContributions: [
      "Building and testing production-oriented generative AI components and prompt architectures",
      "Evaluating latency, context limits, and token efficiency for enterprise LLM tasks",
      "Developing evaluation heuristics to measure model accuracy and prevent hallucinations",
      "Collaborating on real-world generative AI workflows and integration endpoints"
    ],
    skills: ["Large Language Models (LLMs)", "Generative AI", "Prompt Engineering", "Python", "API Integration"]
  },
  {
    role: "AI-ML Virtual Intern",
    organization: "EduSkills Foundation",
    affiliation: "AICTE – National Internship Portal (AWS Academy Aligned)",
    duration: "January 2025 – March 2025",
    location: "Virtual / India",
    status: "Completed",
    summary: "Comprehensive 10-week practical internship aligned with AWS Academy machine learning curriculum and industrial use cases.",
    keyContributions: [
      "Completed hands-on modules in feature engineering, train-test splitting, and data normalization",
      "Trained classical supervised regression and classification models using scikit-learn",
      "Conducted exploratory data analysis across high-dimensional datasets using Python Pandas",
      "Gained working familiarity with AWS cloud-based machine learning pipelines"
    ],
    skills: ["Python", "Machine Learning", "Data Preprocessing", "scikit-learn", "AWS Academy"],
    certificateUrl: "https://drive.google.com/file/d/1DQSc7tm59Q3oZWzrfExDq74VpAegjwW1/view?usp=sharing"
  },
  {
    role: "Cloud Virtual Intern",
    organization: "EduSkills Foundation",
    affiliation: "AICTE – National Internship Portal (AWS Academy Aligned)",
    duration: "July 2024 – September 2024",
    location: "Virtual / India",
    status: "Completed",
    summary: "10-week structured cloud infrastructure program exploring foundational architecture, managed databases, security, and Linux administration.",
    keyContributions: [
      "Configured virtual servers, virtual private clouds (VPCs), and subnets within AWS sandbox environments",
      "Managed object storage buckets, access policies, and IAM role-based authentication",
      "Practiced shell navigation, server setup, and foundational Linux system administration",
      "Completed practical assessment labs evaluating cloud architecture resilience and cost optimization"
    ],
    skills: ["AWS Cloud", "Cloud Infrastructure", "IAM Policies", "Linux CLI", "S3 & EC2 Basics"],
    certificateUrl: "https://drive.google.com/file/d/1ZYLiim1DxtAYS8f9r7Pa2Y3aRRRzK0JM/view?usp=sharing"
  }
];

const Internships = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="internships"
      ref={sectionRef}
      className="py-24 bg-slate-50/70 dark:bg-[#08090E] relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Background radial glow */}
      <div className="glow-mesh top-10 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Work & Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Internships & <span className="text-gradient">Applied Engineering</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Real-world immersion across Generative AI, machine learning pipelines, and cloud systems.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {experienceList.map((item, index) => {
            const isCurrent = item.status === 'Current';
            return (
              <div
                key={item.role + item.organization}
                className="relative animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline node */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-900 ${
                  isCurrent 
                    ? 'border-indigo-600 dark:border-indigo-400 ring-4 ring-indigo-500/20' 
                    : 'border-slate-400 dark:border-slate-600'
                }`} />

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-500/40">
                  
                  {/* Top Bar: Role & Status */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display">
                        {item.role}
                      </h3>
                      {isCurrent ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Current Role
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                          Completed
                        </span>
                      )}
                    </div>

                    {/* Metadata: Dates & Location */}
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Company & Affiliation */}
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {item.organization}
                    {item.affiliation && (
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-2">
                        ({item.affiliation})
                      </span>
                    )}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-1.5 mb-5">
                    {item.keyContributions.map((contrib, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack & certificate */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 whitespace-nowrap"
                      >
                        <span>View Verified Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Internships;

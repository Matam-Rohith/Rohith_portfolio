import { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    level: "Undergraduate Degree",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "SR University",
    location: "Hanamkonda, Telangana",
    period: "2022 – 2026",
    score: "7.26 CGPA",
    status: "Graduating June 2026",
    highlights: [
      "Core Specialization: Software Engineering, Data Structures, Operating Systems, and Distributed Computing",
      "Applied Coursework: Database Management Systems (SQL), Computer Networks, Machine Learning, and Embedded IoT",
      "Active participant in technical symposiums, hackathons, and departmental coding workshops"
    ]
  },
  {
    level: "Higher Secondary (Class XII)",
    degree: "Intermediate — MPC (Maths, Physics, Chemistry)",
    institution: "SR Prime School",
    location: "Telangana, India",
    period: "2020 – 2022",
    score: "75.2%",
    status: "Completed",
    highlights: [
      "Rigorous foundations in advanced mathematics, analytical reasoning, and physics",
      "Developed early algorithmic interest and competitive aptitude"
    ]
  },
  {
    level: "Secondary School (Class X)",
    degree: "All India Secondary School Examination (CBSE)",
    institution: "Millennium High School",
    location: "Telangana, India",
    period: "2019 – 2020",
    score: "71.4%",
    status: "Completed",
    highlights: [
      "Comprehensive STEM curriculum and scientific fundamentals",
      "Active involvement in school science exhibitions and technical clubs"
    ]
  }
];

const Qualifications = () => {
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
    <section id="qualifications" ref={sectionRef} className="py-24 bg-white dark:bg-[#090A10] relative overflow-hidden border-t border-slate-100 dark:border-slate-800/60">
      
      {/* Background glow */}
      <div className="glow-mesh bottom-10 left-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Education & <span className="text-gradient">Academic Credentials</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Structured foundation in Computer Science, mathematical reasoning, and software systems.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {educationData.map((edu, idx) => (
            <div
              key={edu.degree}
              className="animate-on-scroll"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="h-full p-6 sm:p-7 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 flex flex-col hover:border-indigo-400 dark:hover:border-indigo-500/40">
                
                {/* Level micro-tag & period */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">
                  <span>{edu.level}</span>
                  <span>{edu.period}</span>
                </div>

                {/* Degree & Institution */}
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {edu.location}
                  </div>
                </div>

                {/* Score badge / status */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800 mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-500" />
                    <span className="text-xs text-slate-600 dark:text-slate-300">Grade / Score</span>
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                    {edu.score}
                  </span>
                </div>

                {/* Key Coursework / Highlights */}
                <div className="space-y-2 flex-1">
                  {edu.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Status indicator footer */}
                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                  <span>Status</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {edu.status}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Qualifications;

import { useEffect, useRef } from 'react';
import { MapPin, GraduationCap, Briefcase, Target } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: GraduationCap,
      color: 'blue',
      title: 'B.Tech — CSE',
      subtitle: 'CGPA: 7.30 | Graduated 2026',
    },
    {
      icon: Briefcase,
      color: 'purple',
      title: 'Project Portfolio',
      subtitle: '15+ Completed Projects',
    },
    {
      icon: MapPin,
      color: 'green',
      title: 'Location',
      subtitle: 'Telangana, India',
    },
    {
      icon: Target,
      color: 'orange',
      title: 'Goal',
      subtitle: 'Software Engineer / SDET Role',
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string }> = {
    blue:   { bg: 'bg-blue-100 dark:bg-blue-900',   icon: 'text-blue-600 dark:text-blue-400' },
    purple: { bg: 'bg-purple-100 dark:bg-purple-900', icon: 'text-purple-600 dark:text-purple-400' },
    green:  { bg: 'bg-green-100 dark:bg-green-900',  icon: 'text-green-600 dark:text-green-400' },
    orange: { bg: 'bg-orange-100 dark:bg-orange-900', icon: 'text-orange-600 dark:text-orange-400' },
  };

  return (
    <section id="about" ref={sectionRef} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left — Bio */}
            <div className="animate-on-scroll space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                I'm <span className="font-semibold text-gray-900 dark:text-white">Matam Rohith</span>, a Computer Science Engineering graduate from Telangana, India. I'm passionate about crafting end-to-end digital solutions — from intuitive front-end interfaces to robust back-end APIs and data-driven ML models.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                My toolkit spans full-stack web development (React, Node.js, Java), databases (MySQL, SQL), machine learning (Python, scikit-learn), and automation testing. I love building tools that solve real problems — whether it's an AI prompt playground, an HRM system, or a smart parking sensor network.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                I'm actively seeking <span className="font-semibold text-blue-600 dark:text-blue-400">entry-level Software Engineer or SDET roles</span> where I can contribute meaningfully from day one and grow alongside a great team.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                {[
                  { value: '15+', label: 'Projects' },
                  { value: '7.30', label: 'CGPA' },
                  { value: '2026', label: 'Graduate' },
                ].map(stat => (
                  <div key={stat.label} className="text-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                    <div className="text-xl font-extrabold text-blue-600 dark:text-blue-400">{stat.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Highlights */}
            <div className="animate-on-scroll space-y-3" style={{ animationDelay: '0.2s' }}>
              {highlights.map(({ icon: Icon, color, title, subtitle }) => (
                <div key={title} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className={`w-11 h-11 ${colorMap[color].bg} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${colorMap[color].icon}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{title}</div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">{subtitle}</div>
                  </div>
                </div>
              ))}

              {/* Tech pillars */}
              <div className="mt-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">Core Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {['Full-Stack Dev', 'Java & Spring', 'React & Node.js', 'ML / AI', 'SDET / Selenium', 'SQL & Databases', 'REST APIs', 'Cloud Hosting'].map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium shadow-sm border border-gray-200 dark:border-gray-600">
                      {tag}
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

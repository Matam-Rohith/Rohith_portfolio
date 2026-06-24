import { useEffect, useRef } from 'react';
import { Code, Database, Globe, Cpu, TestTube, GitBranch } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Java', 'JavaScript', 'Python', 'C', 'TypeScript', 'C#'],
      color: 'blue',
    },
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['React', 'HTML5', 'CSS3', 'AngularJS', 'Tailwind CSS', 'Bootstrap'],
      color: 'purple',
    },
    {
      title: 'Backend & APIs',
      icon: Cpu,
      skills: ['Node.js', 'Express.js', 'ASP.NET Core', 'Servlets', 'JDBC', 'REST APIs'],
      color: 'green',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'SQL', 'Oracle', 'SQL Server', 'LocalStorage'],
      color: 'orange',
    },
    {
      title: 'AI / ML',
      icon: TestTube,
      skills: ['Python ML', 'scikit-learn', 'NLP', 'Prompt Engineering', 'Groq API', 'Data Analysis'],
      color: 'red',
    },
    {
      title: 'Tools & DevOps',
      icon: GitBranch,
      skills: ['Git & GitHub', 'VS Code', 'Render.com', 'GitHub Pages', 'Vercel', 'Arduino'],
      color: 'teal',
    },
  ];

  const colorClasses: Record<string, { bg: string; icon: string; skill: string }> = {
    blue:   { bg: 'bg-blue-50 dark:bg-blue-900/20',   icon: 'text-blue-600 dark:text-blue-400',   skill: 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200' },
    purple: { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'text-purple-600 dark:text-purple-400', skill: 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200' },
    green:  { bg: 'bg-green-50 dark:bg-green-900/20',  icon: 'text-green-600 dark:text-green-400',  skill: 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200' },
    orange: { bg: 'bg-orange-50 dark:bg-orange-900/20', icon: 'text-orange-500 dark:text-orange-400', skill: 'bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200' },
    red:    { bg: 'bg-red-50 dark:bg-red-900/20',     icon: 'text-red-600 dark:text-red-400',     skill: 'bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200' },
    teal:   { bg: 'bg-teal-50 dark:bg-teal-900/20',   icon: 'text-teal-600 dark:text-teal-400',   skill: 'bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-200' },
  };

  return (
    <section id="skills" ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🛠️ <span className="text-gradient">Technical Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I use to build, test, and ship software
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => {
              const colors = colorClasses[category.color];
              return (
                <div
                  key={category.title}
                  className={`animate-on-scroll hover-lift ${colors.bg} p-5 rounded-2xl shadow-md`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${colors.bg} rounded-xl flex items-center justify-center shadow`}>
                      <category.icon className={`w-5 h-5 ${colors.icon}`} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`${colors.skill} px-3 py-1 rounded-lg font-medium text-xs hover:scale-105 transition-transform duration-200 cursor-default`}
                      >
                        {skill}
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

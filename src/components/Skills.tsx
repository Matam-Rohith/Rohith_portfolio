
import { useEffect, useRef } from 'react';
import { Code, Database, Globe } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C", "Java", "Python"],
      color: "blue"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "MySQL"],
      color: "purple"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "green"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      icon: "text-blue-600 dark:text-blue-400",
      skill: "bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200"
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      icon: "text-purple-600 dark:text-purple-400",
      skill: "bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200"
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/20",
      icon: "text-green-600 dark:text-green-400",
      skill: "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200"
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🛠️ <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title}
                className={`animate-on-scroll hover-lift ${colorClasses[category.color as keyof typeof colorClasses].bg} p-6 rounded-2xl shadow-lg`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`w-12 h-12 ${colorClasses[category.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center mx-auto mb-3 shadow-md`}>
                    <category.icon className={`w-6 h-6 ${colorClasses[category.color as keyof typeof colorClasses].icon}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className={`${colorClasses[category.color as keyof typeof colorClasses].skill} px-3 py-2 rounded-lg font-medium text-center transform transition-all duration-300 hover:scale-105 hover:shadow-md text-sm`}
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div className="mt-12 animate-on-scroll" style={{ animationDelay: '0.8s' }}>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                Additional Technologies
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["AngularJS", "Servlets", "JDBC", "Machine Learning", "NLP", "Arduino", "Git", "Data Analysis"].map((tech, index) => (
                  <span 
                    key={tech}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full font-medium hover:scale-110 transition-transform duration-300 cursor-default text-sm"
                    style={{ animationDelay: `${1 + (index * 0.1)}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

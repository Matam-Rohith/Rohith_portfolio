
import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

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

  const qualifications = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "SR University, Hanamkonda",
      duration: "2022 - 2026",
      subjects: "Core IT subjects including DSA, Embedded Systems, Design Analysis and Algorithm, Operating Systems, and Computer Architecture",
      status: "Current",
      icon: "🎓"
    },
    {
      degree: "Class 12 (Intermediate)",
      institution: "SR Prime School",
      duration: "2020 - 2022",
      subjects: "Physics, Chemistry, Maths, English Core, Physical Education",
      score: "83%",
      icon: "📚"
    },
    {
      degree: "Class 10 (CBSE)",
      institution: "Millennium High School",
      duration: "2019 - 2020",
      subjects: "Science, Maths, English, Social Studies, Telugu",
      score: "83%",
      icon: "📖"
    }
  ];

  return (
    <section id="qualifications" ref={sectionRef} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🎓 <span className="text-gradient">Qualifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My educational journey and academic achievements
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden md:block"></div>

            <div className="space-y-8">
              {qualifications.map((qual, index) => (
                <div 
                  key={index}
                  className={`animate-on-scroll flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl shadow-lg hover-lift">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{qual.icon}</span>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {qual.degree}
                          </h3>
                          {qual.score && (
                            <div className="flex items-center gap-2 mt-1">
                              <Award className="w-3 h-3 text-blue-500" />
                              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{qual.score}</span>
                            </div>
                          )}
                          {qual.status && (
                            <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium inline-block mt-1">
                              {qual.status}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                          <MapPin className="w-3 h-3" />
                          <span>{qual.institution}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
                          <Calendar className="w-3 h-3" />
                          <span>{qual.duration}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                          {qual.subjects}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-3 border-white dark:border-gray-900 shadow-lg z-10"></div>

                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;

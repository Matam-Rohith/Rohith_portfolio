
import { useEffect, useRef } from 'react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side - Content */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Introduction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-base">
                I am a Computer Science Engineering undergraduate, passionate about technology and an avid reader. 
                With a self-motivated and proactive attitude, I thrive in challenging and dynamic environments.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
                I am seeking a competitive, growth-oriented position where I can apply my skills, contribute 
                meaningfully to a professional organization, and continue to grow both technically and personally. 
                I am eager to explore and learn emerging technologies and methodologies that will enhance my 
                abilities as a developer and problem-solver.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">7.30+</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">CGPA</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">5+</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium text-sm">Projects</div>
                </div>
              </div>
            </div>

            {/* Right side - Highlights */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl shadow-lg hover-lift">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Highlights
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold">🎓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">Academic Excellence</div>
                      <div className="text-gray-600 dark:text-gray-300 text-xs">CGPA: 7.30+</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">💼</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">Project Portfolio</div>
                      <div className="text-gray-600 dark:text-gray-300 text-xs">5+ Completed Projects</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-bold">🚀</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">Experience Level</div>
                      <div className="text-gray-600 dark:text-gray-300 text-xs">Fresher with Strong Foundation</div>
                    </div>
                  </div>
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

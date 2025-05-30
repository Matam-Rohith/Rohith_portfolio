
import { useEffect, useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Certifications = () => {
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

  const certifications = [
    {
      title: "Python Programming",
      issuer: "Reliance Foundation",
      date: "May 2025",
      link: "https://drive.google.com/file/d/1dEzpHLMIdCRwZVlFieMT21wDr5wejPJC/view",
      icon: "🐍",
      color: "blue"
    },
    {
      title: "Introduction to Networking",
      issuer: "Cisco Certified",
      date: "March 2024",
      link: "https://www.credly.com/badges/5395ff92-075c-4fc2-8c25-038f8e0cdef4/public_url",
      icon: "🌐",
      color: "purple"
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS Certified",
      date: "February 2024",
      link: "https://www.credly.com/badges/f7da821b-4136-4bed-82cf-c2e99d0cbb87/public_url",
      icon: "☁️",
      color: "blue"
    },
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft Certified",
      date: "March 2024",
      link: "https://www.credly.com/badges/29363e1f-2059-4f18-b7c0-59fc049df3a4/public_url",
      icon: "☁️",
      color: "blue"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      card: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
      text: "text-blue-600 dark:text-blue-400"
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      card: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700",
      text: "text-purple-600 dark:text-purple-400"
    },
    green: {
      bg: "from-green-500 to-green-600",
      card: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700",
      text: "text-green-600 dark:text-green-400"
    }
  };

  return (
    <section id="certifications" ref={sectionRef} className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              🏆 <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional certifications that validate my technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title}
                className="animate-on-scroll group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`${colorClasses[cert.color as keyof typeof colorClasses].card} p-5 rounded-2xl border-2 shadow-lg hover-lift transition-all duration-300`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 bg-gradient-to-r ${colorClasses[cert.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center text-lg shadow-md`}>
                        {cert.icon}
                      </div>
                      <Award className={`w-5 h-5 ${colorClasses[cert.color as keyof typeof colorClasses].text}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      {cert.title}
                    </h3>
                    <p className={`font-semibold ${colorClasses[cert.color as keyof typeof colorClasses].text} mb-2 text-sm`}>
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{cert.date}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${colorClasses[cert.color as keyof typeof colorClasses].bg} hover:scale-105 transition-transform duration-300 text-sm`}
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Certificate
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center animate-on-scroll" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base max-w-3xl mx-auto">
                I'm committed to staying updated with the latest technologies and industry best practices. 
                Currently pursuing additional certifications in machine learning and cloud computing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

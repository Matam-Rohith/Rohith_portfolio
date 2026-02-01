import { useEffect, useRef } from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Internships = () => {
  const sectionRef = useRef(null);

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

  const internships = [
    {
      position: "AI-ML Virtual Intern",
      company: "EduSkills Foundation (AICTE – National Internship Portal)",
      duration: "January 2025 – March 2025",
      location: "India (Virtual)",
      description:
        "Completed a 10-week AI-ML virtual internship, gaining hands-on experience in data preprocessing, basic machine learning models, and real-world AI concepts through AWS Academy–aligned coursework.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Preprocessing",
        "AWS Academy"
      ],
      certificate:
        "https://drive.google.com/file/d/1DQSc7tm59Q3oZWzrfExDq74VpAegjwW1/view?usp=sharing",
      icon: "💼",
    },
    {
      position: "Web Development Intern",
      company: "Organization / Platform Name",
      duration: "Month Year – Month Year",
      location: "Remote",
      description:
        "Worked on building responsive web pages and improving frontend functionality using modern web technologies.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
      ],
      certificate: "",
      icon: "💼",
    },
    {
      position: "Cloud Computing Intern",
      company: "Organization / Platform Name",
      duration: "Month Year – Month Year",
      location: "Remote",
      description:
        "Learned core cloud concepts and gained practical exposure to cloud services and deployment basics.",
      technologies: [
        "AWS",
        "Cloud Computing",
        "Linux"
      ],
      certificate: "",
      icon: "💼",
    },
    {
      position: "Cyber Security Intern",
      company: "Organization / Platform Name",
      duration: "Month Year – Month Year",
      location: "Remote",
      description:
        "Understood cybersecurity fundamentals, networking concepts, and basic security tools through hands-on learning.",
      technologies: [
        "Cyber Security",
        "Networking",
        "Security Tools"
      ],
      certificate: "",
      icon: "💼",
    },
  ];

  return (
    <section
      id="internships"
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              💼 <span className="text-gradient">Internships</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My internship and practical learning experience
            </p>
          </div>

          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{internship.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {internship.position}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {internship.company}
                      </p>

                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {internship.location}
                        </div>
                      </div>

                      <p className="mt-4 text-gray-600 dark:text-gray-300">
                        {internship.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {internship.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {internship.certificate && (
                        <a
                          href={internship.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 text-blue-600 dark:text-blue-400 underline"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internships;

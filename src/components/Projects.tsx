import { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
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

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-featured e-commerce platform built with modern web technologies, featuring product catalog, shopping cart, and responsive design.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/E-Commerce-Website",
      demo: "https://shoplane-by-lassie.netlify.app/",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      color: "blue"
    },
    {
      title: "Cancer Prediction",
      description: "Applied machine learning techniques to predict cancer risk, showcasing skills in data analysis, model building, and deployment.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HG-RnSINNeMfyDf1-JyQjGsfBIhwq8vtrw&s",
      github: "https://github.com/Matam-Rohith/AIML-LABS/blob/main/Cancer%20Prediction.ipynb",
      tags: ["Python", "Machine Learning", "Data Analysis"],
      color: "purple"
    },
    {
      title: "Smart Car Parking System",
      description: "Designed to optimize parking space usage using sensors to detect available spots and guide users accordingly using Arduino-UNO.",
      image: "https://www.electroduino.com/wp-content/uploads/2021/11/Smart-Parking-System-Project-using-Arduino-and-IR-Sensor.png",
      demo: "https://drive.google.com/drive/folders/1LZD9eOQ0Dppm9OqawQy2y9vvebHRpe18",
      tags: ["Arduino", "IoT", "Sensors"],
      color: "green"
    },
    {
      title: "SMS Spam Detection",
      description: "Implemented in Python using NLP techniques to classify SMS messages as spam or non-spam with high accuracy.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutBzJUJ6hNDqFQwxlM8Pw_FundmolljaTeA&s",
      github: "https://github.com/Matam-Rohith/NLP/blob/main/sms_spam_detection_nlp.ipynb",
      demo: "https://mamfegbtbyckxtr4ncu3nq.streamlit.app/",
      tags: ["Python", "NLP", "Machine Learning"],
      color: "red"
    },
    {
      title: "Bank Management System",
      description: "A command-line program in C to manage customer accounts and transactions, demonstrating structured programming and file handling.",
      image: "https://code-projects.org/wp-content/uploads/2018/06/Screenshot-4480000.png",
      github: "https://github.com/Matam-Rohith/Bank-Management-system",
      tags: ["C", "File Handling", "Data Structures"],
      color: "blue"
    },
    {
      title: "Personal Budget Tracker",
      description: "A web-based application to help users record and monitor income and expenses with categorized tracking and analytics.",
      image: "https://m.media-amazon.com/images/I/611aqksgYsL._AC_UF1000,1000_QL80_.jpg",
      github: "https://github.com/Matam-Rohith/personal_budget_tracker",
      demo: "https://drive.google.com/file/d/1Qn3TDdZuQhSy1FOtNEYqqewJtcLzC4ze/view?usp=drive_link",
      tags: ["HTML", "CSS", "JavaScript", "AngularJS"],
      color: "purple"
    },
    {
      title: "URL Shortener",
      description: "A simple web app that converts long URLs into short, shareable links with instant redirection.",
      image: "https://miro.medium.com/1*Pdw7h5X6vQQNVopIzHBG6A.jpeg",
      github: "https://github.com/Matam-Rohith/URL_Shortener",
      demo: "https://url-shortener-na16.onrender.com/",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "blue"
    },
    {
      title: "Notes Web App",
      description:"A lightweight notes application to create, edit, and delete notes using browser local storage.",
      image: "https://cdn.dribbble.com/userupload/36551899/file/original-301dbd7522ac64fb5b3f4d59eb3eee34.jpg?resize=400x0",
      github: "https://github.com/Matam-Rohith/notes-app",
      demo: "https://notes-app-zeta-ruddy.vercel.app/",
      tags: ["JavaScript", "LocalStorage", "HTML", "CSS"],
      color: "green"
    },
    {
      title: "Task Management System",
      description:"A task management web app to add, update, delete, and track daily tasks efficiently.",
      image: "https://assets.plan.io/images/blog/what-is-task-management.png",
      github: "https://github.com/Matam-Rohith/Task_Management",
      demo: "https://matam-rohith.github.io/Task_Management/",
      tags: ["JavaScript", "LocalStorage", "HTML", "CSS"],
      color: "green"
    },
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    green: "from-green-500 to-green-600",
    red: "from-red-500 to-red-600"
  };

  return (
    <section id="projects" ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              💼 <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of my featured projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="animate-on-scroll group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover-lift">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[project.color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                          >
                            <Github className="w-5 h-5 text-gray-700" />
                          </a>
                        )}
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                          >
                            <ExternalLink className="w-5 h-5 text-gray-700" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex-1 text-xs"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button 
                          size="sm"
                          className="flex-1 text-xs"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Button>
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

export default Projects;

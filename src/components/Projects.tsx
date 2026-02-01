import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A responsive e-commerce platform with product listings, cart functionality, and modern UI design.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/E-Commerce-Website",
      demo: "https://shoplane-by-lassie.netlify.app/",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "blue",
    },
    {
      title: "Cancer Prediction",
      description:
        "Machine learning model to predict cancer risk using data analysis and classification algorithms.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1HG-RnSINNeMfyDf1-JyQjGsfBIhwq8vtrw&s",
      github:
        "https://github.com/Matam-Rohith/AIML-LABS/blob/main/Cancer%20Prediction.ipynb",
      tags: ["Python", "Machine Learning"],
      color: "purple",
    },
    {
      title: "Smart Car Parking System",
      description:
        "IoT-based parking system using Arduino and sensors to detect and manage parking slots efficiently.",
      image:
        "https://www.electroduino.com/wp-content/uploads/2021/11/Smart-Parking-System-Project-using-Arduino-and-IR-Sensor.png",
      demo:
        "https://drive.google.com/drive/folders/1LZD9eOQ0Dppm9OqawQy2y9vvebHRpe18",
      tags: ["Arduino", "IoT", "Sensors"],
      color: "green",
    },
    {
      title: "SMS Spam Detection",
      description:
        "NLP-based system that classifies SMS messages as spam or non-spam with high accuracy.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutBzJUJ6hNDqFQwxlM8Pw_FundmolljaTeA&s",
      github:
        "https://github.com/Matam-Rohith/NLP/blob/main/sms_spam_detection_nlp.ipynb",
      tags: ["Python", "NLP"],
      color: "red",
    },
    {
      title: "Bank Management System",
      description:
        "C-based console application to manage bank accounts, transactions, and file handling.",
      image:
        "https://code-projects.org/wp-content/uploads/2018/06/Screenshot-4480000.png",
      github: "https://github.com/Matam-Rohith/Bank-Management-system",
      tags: ["C", "File Handling"],
      color: "blue",
    },

    /* 🔥 NEW PROJECTS */

    {
      title: "URL Shortener",
      description:
        "A web app that converts long URLs into short, shareable links with quick redirection.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*H9t2m0U5yq6ZySUdkGFUTg.png",
      github: "https://github.com/Matam-Rohith/url-shortener",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "purple",
    },
    {
      title: "Notes Web App",
      description:
        "A simple notes application to create, edit, and delete notes with local storage support.",
      image:
        "https://cdn.dribbble.com/users/1787323/screenshots/16061389/media/7d62c6cf6b8a7baf1dfaa2eea5a98193.png",
      github: "https://github.com/Matam-Rohith/notes-web-app",
      tags: ["JavaScript", "LocalStorage"],
      color: "green",
    },
    {
      title: "Task Management System",
      description:
        "A task management web app to add, update, and track daily tasks efficiently.",
      image:
        "https://cdn.dribbble.com/users/1787323/screenshots/15981606/media/7c9c9d24dd47cebb6a42199d9db6466b.png",
      github: "https://github.com/Matam-Rohith/task-management-app",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "red",
    },
  ];

  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    green: "from-green-500 to-green-600",
    red: "from-red-500 to-red-600",
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            💼 Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Some of my academic and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${colorClasses[project.color]} opacity-0 hover:opacity-80 transition`}
                  ></div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() =>
                          window.open(project.github, "_blank")
                        }
                      >
                        <Github className="w-4 h-4 mr-1" /> Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

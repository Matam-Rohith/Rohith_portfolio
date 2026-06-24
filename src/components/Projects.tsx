import { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Projects = () => {
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

  const projects = [
    {
      title: "Library Management System",
      description: "ASP.NET Core 8 Web API with JWT authentication, Entity Framework Core, SQL Server, and Swagger. Covers book inventory, member management, borrow/return flows, reservations, late fines, and CI/CD via GitHub Actions.",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/LibraryManagementSystem",
      tags: ["C#", "ASP.NET Core 8", "EF Core", "SQL Server", "JWT", "Swagger", "GitHub Actions"],
      color: "teal",
      badge: "New"
    },
    {
      title: "ICC T20 World Cup Analytics",
      description: "Interactive analytics dashboard for ICC T20 World Cup 2024 — team performance, run-rate trends, top batsmen/bowlers, and head-to-head stats. Built with Node.js, Express, Chart.js, and Bootstrap.",
      image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/icc-t20-worldcup-analytics",
      tags: ["Node.js", "Express", "Chart.js", "Bootstrap", "JavaScript"],
      color: "blue",
      badge: "New"
    },
    {
      title: "E-Commerce Sales Analytics",
      description: "End-to-end e-commerce analytics platform with SQL, Python, RFM customer segmentation, sales forecasting, profitability analysis, and a retention dashboard — all in one interactive HTML report.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/ecommerce-sales-customer-analytics",
      tags: ["SQL", "Python", "RFM Analysis", "Forecasting", "HTML"],
      color: "purple",
      badge: "New"
    },
    {
      title: "AI Prompt Playground",
      description: "Interactive tool to learn and write better prompts with instant rule-based feedback — no backend required. Features a 7-rule prompt analyzer, score out of 10, auto-improvement engine, and 6 example bad prompts.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/ai-prompt-playground",
      demo: "https://matam-rohith.github.io/ai-prompt-playground/",
      tags: ["HTML5", "CSS3", "JavaScript", "Prompt Engineering"],
      color: "purple"
    },
    {
      title: "TalentFlow HRM",
      description: "Comprehensive HR Management System for employee lifecycle — onboarding to payroll, with analytics dashboard and attendance tracking. Deployed on GitHub Pages.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/TalentFlow-HRM",
      demo: "https://matam-rohith.github.io/TalentFlow-HRM/",
      tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
      color: "blue"
    },
    {
      title: "URL Shortener",
      description: "Full-stack URL shortener that converts long URLs into short, shareable links with instant redirection. Backend deployed on Render.",
      image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/URL_Shortener",
      demo: "https://url-shortener-na16.onrender.com/",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Render"],
      color: "green"
    },
    {
      title: "Notes Web App",
      description: "Lightweight notes application to create, edit, and delete notes using browser local storage — deployed on Vercel.",
      image: "https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/notes-app",
      demo: "https://notes-app-zeta-ruddy.vercel.app/",
      tags: ["TypeScript", "React", "LocalStorage", "Vercel"],
      color: "teal"
    },
    {
      title: "Student Dashboard",
      description: "Fully client-side Student Dashboard with GPA Calculator, Attendance Tracker, and Timetable Manager. All data persisted in browser localStorage.",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/student-dashboard",
      demo: "https://matam-rohith.github.io/student-dashboard/",
      tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      color: "blue"
    },
    {
      title: "Task Management System",
      description: "Task manager web app to add, update, delete, and track daily tasks efficiently with priority levels and a clean UI.",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/Task_Management",
      demo: "https://matam-rohith.github.io/Task_Management/",
      tags: ["JavaScript", "LocalStorage", "HTML", "CSS"],
      color: "green"
    },
    {
      title: "SMS Spam Detection",
      description: "NLP-based classifier to identify spam vs. legitimate SMS messages using Python and machine learning. Deployed as a live Streamlit app.",
      image: "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/NLP/blob/main/sms_spam_detection_nlp.ipynb",
      demo: "https://mamfegbtbyckxtr4ncu3nq.streamlit.app/",
      tags: ["Python", "NLP", "scikit-learn", "Streamlit"],
      color: "red"
    },
    {
      title: "Cancer Prediction",
      description: "Machine learning model to predict cancer risk using clinical features. Demonstrates data preprocessing, feature engineering, and model evaluation in Python.",
      image: "https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/Cancer_Prediction",
      tags: ["Python", "Machine Learning", "scikit-learn", "Jupyter"],
      color: "purple"
    },
    {
      title: "Personal Budget Tracker",
      description: "Web app to record and monitor income, expenses, and savings with category-wise tracking, budget alerts, and visual reports using AngularJS.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/personal_budget_tracker",
      demo: "https://drive.google.com/file/d/1Qn3TDdZuQhSy1FOtNEYqqewJtcLzC4ze/view?usp=drive_link",
      tags: ["HTML", "CSS", "JavaScript", "AngularJS"],
      color: "orange"
    },
    {
      title: "Bank Management System",
      description: "Java-based bank management system for managing customer accounts and transactions, built with JDBC and Oracle DB integration.",
      image: "https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/Bank-Management-system",
      tags: ["Java", "JDBC", "Oracle DB", "SQL"],
      color: "blue"
    },
    {
      title: "Calculator",
      description: "Feature-rich web calculator with support for addition, subtraction, multiplication, division, modulus, exponentiation, clear, and delete — modern styling with hover/click effects.",
      image: "https://images.pexels.com/photos/6256086/pexels-photo-6256086.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/Matam-Rohith/Calculator-Project",
      demo: "https://matam-rohith.github.io/Calculator-Project/",
      tags: ["HTML", "CSS", "JavaScript"],
      color: "green"
    },
    {
      title: "Smart Car Parking System",
      description: "IoT system using Arduino UNO and IR sensors to detect available parking spots in real time and guide users to free spaces — demo video on Google Drive.",
      image: "https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800",
      demo: "https://drive.google.com/drive/folders/1LZD9eOQ0Dppm9OqawQy2y9vvebHRpe18",
      tags: ["Arduino", "IoT", "C++", "IR Sensors"],
      color: "orange"
    },
  ];

  const colorClasses: Record<string, string> = {
    blue:   "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    green:  "from-green-500 to-green-600",
    red:    "from-red-500 to-red-600",
    teal:   "from-teal-500 to-teal-600",
    orange: "from-orange-500 to-orange-600",
  };

  const badgeColors: Record<string, string> = {
    New:      "bg-green-500 text-white",
    Featured: "bg-blue-500 text-white",
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
              {projects.length} projects spanning full-stack web, ML/AI, IoT, and data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-on-scroll group"
                style={{ animationDelay: `${(index % 6) * 0.1}s` }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover-lift h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[project.color]} opacity-0 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    {/* Badge */}
                    {project.badge && (
                      <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-bold ${badgeColors[project.badge]}`}>
                        {project.badge}
                      </span>
                    )}
                    {/* Hover icons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                             className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                            <Github className="w-5 h-5 text-gray-700" />
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                             className="p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                            <ExternalLink className="w-5 h-5 text-gray-700" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed text-sm flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <Button variant="outline" size="sm" className="flex-1 text-xs"
                          onClick={() => window.open(project.github, '_blank')}>
                          <Github className="w-3 h-3 mr-1" /> Code
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" className="flex-1 text-xs"
                          onClick={() => window.open(project.demo, '_blank')}>
                          <ExternalLink className="w-3 h-3 mr-1" /> Demo
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

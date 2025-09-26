
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8500276433",
      link: "tel:+918500276433",
      color: "blue"
    },
    {
      icon: Mail,
      label: "Email",
      value: "matamrohith12614@gmail.com",
      link: "mailto:matamrohith12614@gmail.com",
      color: "purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hanamkonda, Telangana, India",
      link: "#",
      color: "green"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Matam-Rohith",
      color: "gray"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/matam-rohith-1418ab1b4/",
      color: "blue"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      link: "https://wa.me/918500276433",
      color: "green"
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
      text: "text-blue-600 dark:text-blue-400",
      hover: "hover:bg-blue-100 dark:hover:bg-blue-900/40"
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-700",
      text: "text-purple-600 dark:text-purple-400",
      hover: "hover:bg-purple-100 dark:hover:bg-purple-900/40"
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-700",
      text: "text-green-600 dark:text-green-400",
      hover: "hover:bg-green-100 dark:hover:bg-green-900/40"
    },
    gray: {
      bg: "bg-gray-50 dark:bg-gray-900/20",
      border: "border-gray-200 dark:border-gray-700",
      text: "text-gray-600 dark:text-gray-400",
      hover: "hover:bg-gray-100 dark:hover:bg-gray-900/40"
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              📞 <span className="text-gradient">Contact Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let's connect! Feel free to reach out for opportunities, collaborations, or just a friendly chat.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>
              
              <div className="space-y-4 mb-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.link}
                    className={`flex items-center gap-3 p-3 ${colorClasses[info.color as keyof typeof colorClasses].bg} ${colorClasses[info.color as keyof typeof colorClasses].border} ${colorClasses[info.color as keyof typeof colorClasses].hover} border-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-10 h-10 ${colorClasses[info.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className={`w-5 h-5 ${colorClasses[info.color as keyof typeof colorClasses].text}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{info.label}</div>
                      <div className={`${colorClasses[info.color as keyof typeof colorClasses].text} font-medium text-sm`}>{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Resume Download */}
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.open('https://drive.google.com/file/d/1YKx8yX2bSmVgDvPCjXMaz7urIvatyjb_/view?usp=sharing', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links and Additional Info */}
            <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>

              <div className="space-y-3 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 ${colorClasses[social.color as keyof typeof colorClasses].bg} ${colorClasses[social.color as keyof typeof colorClasses].border} ${colorClasses[social.color as keyof typeof colorClasses].hover} border-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
                    style={{ animationDelay: `${0.4 + (index * 0.1)}s` }}
                  >
                    <div className={`w-10 h-10 ${colorClasses[social.color as keyof typeof colorClasses].bg} rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className={`w-5 h-5 ${colorClasses[social.color as keyof typeof colorClasses].text}`} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{social.label}</div>
                      <div className={`${colorClasses[social.color as keyof typeof colorClasses].text} text-xs`}>
                        {social.label === 'GitHub' && 'View my code repositories'}
                        {social.label === 'LinkedIn' && 'Connect professionally'}
                        {social.label === 'WhatsApp' && 'Quick messaging'}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-2xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  Ready to Collaborate?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  I'm always open to discussing new opportunities, innovative projects, 
                  and potential collaborations. Let's create something amazing together!
                </p>
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm"
                    onClick={() => window.open('mailto:matamrohith12614@gmail.com', '_blank')}
                  >
                    Send Email
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 text-sm"
                    onClick={() => window.open('https://wa.me/918500276433', '_blank')}
                  >
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

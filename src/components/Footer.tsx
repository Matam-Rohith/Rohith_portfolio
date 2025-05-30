
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Matam <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Rohith</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Computer Science Engineering student passionate about technology, 
                machine learning, and creating innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:matamrohith12614@gmail.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  matamrohith12614@gmail.com
                </a>
                <div className="flex gap-4 mt-4">
                  <a 
                    href="https://github.com/Matam-Rohith" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Matam Rohith. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

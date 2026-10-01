import { Github, Linkedin, Mail, Phone, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold font-display text-xs">
                MR
              </div>
              <span className="text-base font-bold text-white font-display">
                Matam Rohith
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Computer Science Engineering graduate (Class of 2026). Specializing in Software Engineering, QA Test Automation, and Applied Artificial Intelligence.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/Matam-Rohith"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:matamrohith12614@gmail.com"
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-indigo-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px] font-mono">
              Site Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About & Background', id: 'about' },
                { label: 'Experience & Internships', id: 'internships' },
                { label: 'Selected Projects', id: 'projects' },
                { label: 'Technical Skills', id: 'skills' },
                { label: 'Academic Qualifications', id: 'qualifications' },
                { label: 'Certifications', id: 'certifications' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Credentials (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-bold uppercase tracking-wider text-slate-200 text-[11px] font-mono">
              Direct Access
            </div>
            <div className="space-y-2.5">
              <a
                href="https://drive.google.com/file/d/13jCvjh85efBynPjkjZyho01H79My-U4m/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-colors group"
              >
                <span>Curriculum Vitae (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.credly.com/users/matam-rohith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-white transition-colors group"
              >
                <span>Credly Digital Transcripts</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="pt-2 text-[11px] text-slate-500">
                <span>Telangana, India · Open to relocations</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {currentYear} Matam Rohith. All rights reserved.
          </div>
          <div>
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

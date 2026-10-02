import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

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

  const copyEmail = () => {
    navigator.clipboard.writeText('matamrohith01@gmail.com');
    setCopied(true);
    toast.success('Email copied to clipboard: matamrohith01@gmail.com');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white dark:bg-[#090A10] relative overflow-hidden border-t border-slate-100 dark:border-slate-800/60">
      
      {/* Background glow meshes */}
      <div className="glow-mesh top-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/5" />
      <div className="glow-mesh bottom-10 right-1/4 w-80 h-80 bg-sky-500/5 dark:bg-sky-600/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <div className="section-tag justify-center">
            <span className="section-tag-dot" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Let's Discuss <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
            Available for Software Engineer (SDE), QA/SDET, and Applied AI roles starting 2026. Reach out directly through your preferred channel.
          </p>
        </div>

        {/* Highlight Primary Contact Banner */}
        <div className="max-w-4xl mx-auto mb-10 animate-on-scroll">
          <div className="p-8 sm:p-10 rounded-3xl glass-card border border-indigo-200/90 dark:border-indigo-500/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/10 via-sky-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30 flex-shrink-0">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                    Primary Direct Email
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display select-all">
                    matamrohith01@gmail.com
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Direct mailbox for full-time opportunities, technical interviews, and inquiries.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <a
                  href="mailto:matamrohith01@gmail.com"
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/25 transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
                <Button
                  variant="outline"
                  onClick={copyEmail}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-3 h-auto rounded-xl border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-indigo-400"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Address'}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Multi-channel Connection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-on-scroll">
          
          {/* Card 1: Direct Phone & WhatsApp */}
          <div className="p-6 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Phone & Messaging
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                +91 8500276433
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Available for phone interviews and instant discussions.
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2">
              <a
                href="tel:+918500276433"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Directly</span>
              </a>
              <a
                href="https://wa.me/918500276433"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-600 text-emerald-600 hover:text-white border border-emerald-500/20 text-xs font-semibold transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Professional Networks */}
          <div className="p-6 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Professional Presence
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                LinkedIn & GitHub
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Explore engineering repositories, activity, and recommendations.
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/20 text-xs font-semibold transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>Connect on LinkedIn</span>
              </a>
              <a
                href="https://github.com/Matam-Rohith"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900/10 dark:bg-slate-800 hover:bg-slate-900 text-slate-900 dark:text-slate-200 hover:text-white border border-slate-300 dark:border-slate-700 text-xs font-semibold transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repositories</span>
              </a>
            </div>
          </div>

          {/* Card 3: Location & Resume */}
          <div className="p-6 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Location & Mobility
              </div>
              <div className="text-base font-bold text-slate-900 dark:text-white mt-1">
                Telangana, India
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Open to Bangalore, Hyderabad, Pune, NCR & Remote arrangements.
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col gap-2">
              <a
                href="https://drive.google.com/file/d/13jCvjh85efBynPjkjZyho01H79My-U4m/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="https://www.credly.com/users/matam-rohith"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Credly Transcripts</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

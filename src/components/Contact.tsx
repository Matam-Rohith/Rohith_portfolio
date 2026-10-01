import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrSubject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent! Opening your email client to dispatch.');
      
      const mailtoLink = `mailto:matamrohith12614@gmail.com?subject=${encodeURIComponent(
        formData.roleOrSubject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setFormData({
        name: '',
        email: '',
        roleOrSubject: '',
        message: ''
      });
    }, 600);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Direct Email",
      value: "matamrohith12614@gmail.com",
      href: "mailto:matamrohith12614@gmail.com",
      note: "Primary communication channel"
    },
    {
      icon: Phone,
      label: "Direct Phone & WhatsApp",
      value: "+91 8500276433",
      href: "tel:+918500276433",
      note: "Available for interview calls"
    },
    {
      icon: MapPin,
      label: "Current Base",
      value: "Telangana, India",
      href: "#",
      note: "Open to Bangalore, Hyderabad, Pune & Remote"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white dark:bg-[#090A10] relative overflow-hidden border-t border-slate-100 dark:border-slate-800/60">
      
      {/* Background glow */}
      <div className="glow-mesh top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 animate-on-scroll">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
            Let's Discuss <span className="text-gradient">Opportunities</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Currently interviewing for Software Engineer (SDE), QA/SDET, and Data Analyst roles starting 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct channels & Quick Connect (5 cols) */}
          <div className="lg:col-span-5 space-y-6 animate-on-scroll">
            
            {/* Contact channels list */}
            <div className="space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="p-4 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 flex items-start gap-4 hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-all duration-200 group block"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-200 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {method.label}
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {method.value}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        {method.note}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social & WhatsApp Buttons */}
            <div className="p-5 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 space-y-3">
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Professional Networks
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://www.linkedin.com/in/matam-rohith-1418ab1b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/20 text-xs font-semibold transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/Matam-Rohith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900/10 dark:bg-slate-800 hover:bg-slate-900 text-slate-900 dark:text-slate-200 hover:text-white border border-slate-300 dark:border-slate-700 text-xs font-semibold transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918500276433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-600 text-emerald-600 hover:text-white border border-emerald-500/20 text-xs font-semibold transition-all duration-200"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Resume Callout Card */}
            <div className="p-5 rounded-2xl glass-card border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Full Curriculum Vitae</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Complete academic & engineering record (PDF)</div>
              </div>
              <a
                href="https://drive.google.com/file/d/13jCvjh85efBynPjkjZyho01H79My-U4m/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 whitespace-nowrap transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Console (7 cols) */}
          <div className="lg:col-span-7 animate-on-scroll">
            <div className="p-7 sm:p-8 rounded-3xl glass-card border border-slate-200/90 dark:border-slate-800">
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Have a role, project, or question in mind? Drop a note below and I will respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Target Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer Opportunity / QA Interview"
                    value={formData.roleOrSubject}
                    onChange={(e) => setFormData({ ...formData, roleOrSubject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-indigo-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about the role, team, or project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span>Preparing Message...</span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

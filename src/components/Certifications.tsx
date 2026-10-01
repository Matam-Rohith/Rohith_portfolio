import { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Award,
  Search,
  Cloud,
  Server,
  Globe,
  Database,
  GitBranch,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Wifi,
  Network,
  BarChart2,
  BrainCircuit,
  Layers,
  Terminal,
  Cpu,
  MonitorCog,
  CheckCircle2,
  Sparkles,
  BookOpen
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Cert = {
  title: string;
  issuer: string;
  date?: string;
  link: string;
  Icon: LucideIcon;
  category: 'Cloud' | 'Networking' | 'Data' | 'Dev' | 'Systems' | 'Management';
  highlight?: boolean;
};

const certsList: Cert[] = [
  // ── Cloud ────────────────────────────────────────────────────────────────
  { title: 'AWS Cloud Architecting', issuer: 'AWS Academy', date: 'Feb 2024', link: 'https://www.credly.com/badges/aa016e5d-000f-44ad-9868-2aaea878f756/public_url', Icon: Layers, category: 'Cloud', highlight: true },
  { title: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft', date: 'Mar 2024', link: 'https://www.credly.com/badges/29363e1f-2059-4f18-b7c0-59fc049df3a4/public_url', Icon: MonitorCog, category: 'Cloud', highlight: true },
  { title: 'AWS Cloud Data Pipeline Builder', issuer: 'AWS Academy', date: 'Feb 2024', link: 'https://www.credly.com/badges/8e430a47-e5c8-4d2a-bfb6-cbbe1d203d1d/public_url', Icon: Database, category: 'Cloud' },
  { title: 'AWS Cloud Foundations', issuer: 'AWS Academy', date: 'Feb 2024', link: 'https://www.credly.com/badges/f7da821b-4136-4bed-82cf-c2e99d0cbb87/public_url', Icon: Cloud, category: 'Cloud' },
  { title: 'AWS Cloud Web Application Builder', issuer: 'AWS Academy', date: 'Feb 2024', link: 'https://www.credly.com/badges/757c26cb-57c8-41c4-8dbb-ebbe3ed461a2/public_url', Icon: Globe, category: 'Cloud' },
  { title: 'AWS Machine Learning Foundations', issuer: 'AWS Academy', date: 'Feb 2024', link: 'https://www.credly.com/badges/ff75ac2a-f35f-415e-b823-50b81dbd37bd/public_url', Icon: BrainCircuit, category: 'Cloud' },
  { title: 'Introduction to Cloud Computing', issuer: 'IBM / Credly', date: '2024', link: 'https://www.credly.com/badges/81893c4a-7884-4d84-aa21-e7c5227c2be5/public_url', Icon: Server, category: 'Cloud' },
  { title: 'Creating Azure Serverless Functions', issuer: 'Coursera / Microsoft', date: '2024', link: 'https://coursera.org/share/52239fe8c1b3047cef9c96412e90dfdb', Icon: Cpu, category: 'Cloud' },
  { title: 'Introduction to DevOps', issuer: 'Coursera', date: '2024', link: 'https://coursera.org/share/bc1f935377ea8b3cd109a4bea3606697', Icon: GitBranch, category: 'Cloud' },
  { title: 'Introduction to Cloud Computing', issuer: 'Coursera', date: '2024', link: 'https://coursera.org/share/a620972885e5b78e0db03796a0635f26', Icon: Cloud, category: 'Cloud' },

  // ── Networking & Security ──────────────────────────────────────────────────
  { title: 'CCNA: Introduction to Networks', issuer: 'Cisco', date: 'Mar 2024', link: 'https://www.credly.com/badges/5395ff92-075c-4fc2-8c25-038f8e0cdef4/public_url', Icon: Network, category: 'Networking', highlight: true },
  { title: 'CCNA: Switching, Routing & Wireless Essentials', issuer: 'Cisco', date: 'Mar 2024', link: 'https://www.credly.com/badges/a1b54926-38f5-4960-8fc1-ba34edfb5eaa/public_url', Icon: Wifi, category: 'Networking' },
  { title: 'Networking Basics', issuer: 'Cisco', date: '2024', link: 'https://www.credly.com/badges/b12ac3d8-9eff-4f84-aa0d-21e66dac3f2b/public_url', Icon: Network, category: 'Networking' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco', date: '2024', link: 'https://www.credly.com/badges/29f8f041-fd63-4fc9-9095-672a4e677264/public_url', Icon: ShieldCheck, category: 'Networking' },
  { title: 'Endpoint Security', issuer: 'Cisco', date: '2024', link: 'https://www.credly.com/badges/5c3a3e9e-3c61-4dd7-b26f-b6dcbc458e9e/public_url', Icon: ShieldCheck, category: 'Networking' },
  { title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco', date: '2024', link: 'https://www.credly.com/badges/a1807a54-c5ff-4a3f-aba9-b7a67b1a9278/public_url', Icon: Lock, category: 'Networking' },
  { title: 'Ethical Hacking Essentials (EHE)', issuer: 'Coursera', date: '2024', link: 'https://coursera.org/share/588c7efdae5f7cf486ec9d3f4f3dd14b', Icon: ShieldAlert, category: 'Networking' },

  // ── Data & AI ─────────────────────────────────────────────────────────────
  { title: 'Python Basics for Data Science', issuer: 'IBM (edX)', date: 'Oct 2023', link: 'https://courses.edx.org/certificates/93a4a7bdb6ab4fbfaf3d78aeee7ff334', Icon: BrainCircuit, category: 'Data', highlight: true },
  { title: 'Data Analytics Essentials', issuer: 'Cisco / Credly', date: '2024', link: 'https://www.credly.com/badges/83076e8f-5c24-4a75-b852-4c7d81bedeb6/public_url', Icon: BarChart2, category: 'Data' },
  { title: 'Introduction to Databases', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/6b59d66e7da4af7ce75eedc302c976d1', Icon: Database, category: 'Data' },
  { title: 'MongoDB Basics for Students', issuer: 'MongoDB / Credly', date: '2024', link: 'https://www.credly.com/badges/74c9c332-f44f-43e9-b3cb-4624fc37c9a7/public_url', Icon: Database, category: 'Data' },
  { title: 'Introduction to MongoDB', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/a3dc4c73cace71cdf4465f154ad3d6e3', Icon: Database, category: 'Data' },

  // ── Software Dev ──────────────────────────────────────────────────────────
  { title: 'Data Structures & Algorithms (C++)', issuer: 'IBM (edX)', date: 'Oct 2023', link: 'https://courses.edx.org/certificates/5bf5f3f6c8454add9976b0c86e88b09b', Icon: Terminal, category: 'Dev', highlight: true },
  { title: 'Fundamentals of C++', issuer: 'IBM (edX)', date: 'Oct 2023', link: 'https://courses.edx.org/certificates/cbc1c40a50684aadb3bd065be57c52ce', Icon: Terminal, category: 'Dev' },
  { title: 'Intro to Web Dev (HTML5 / CSS3 / JS)', issuer: 'IBM (edX)', date: 'Oct 2023', link: 'https://courses.edx.org/certificates/c046285ad4174109a801c77aa1d430be', Icon: Globe, category: 'Dev' },
  { title: 'Web Development Fundamentals', issuer: 'IBM / Credly', date: '2023', link: 'https://www.credly.com/badges/e5a63698-3c50-4b84-b56b-563bd8a422f8/public_url', Icon: Globe, category: 'Dev' },
  { title: 'Software Engineering Essentials', issuer: 'IBM / Credly', date: '2023', link: 'https://www.credly.com/badges/7ccaa2f1-9bd0-43c4-9077-cb48300375f1/public_url', Icon: Award, category: 'Dev' },
  { title: 'Introduction to Software Engineering', issuer: 'Coursera / IBM', date: '2023', link: 'https://coursera.org/share/04450008b9b86cfeb9435fbfc963f830', Icon: Award, category: 'Dev' },
  { title: 'Python Essentials 1 & 2', issuer: 'Cisco / Credly', date: '2023', link: 'https://www.credly.com/badges/60cfd76e-a0dc-4f78-8994-23e26d76b340/public_url', Icon: Terminal, category: 'Dev' },
  { title: 'Introduction to Git and GitHub', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/1a71c18ea7a4771a00378105aa90a8dc', Icon: GitBranch, category: 'Dev' },
  { title: 'Version Control with Git', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/95914b39516c89fe6a44113c6a985476', Icon: GitBranch, category: 'Dev' },

  // ── Operating Systems ─────────────────────────────────────────────────────
  { title: 'Operating Systems Specialization', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/3fd36755bc852a8ffc975f25cf9375ab', Icon: MonitorCog, category: 'Systems', highlight: true },
  { title: 'Intro to OS 1: Virtualization', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/f98d044f25c70fdb19e565ac07f7d777', Icon: Cpu, category: 'Systems' },
  { title: 'Intro to OS 2: Memory Management', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/4b62bea81b027c42383cfac9d35c7424', Icon: Cpu, category: 'Systems' },
  { title: 'Intro to OS 3: Concurrency', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/dd0ac88aeb9e3a877743b09132519ca2', Icon: Cpu, category: 'Systems' },
  { title: 'Intro to OS 4: Persistence', issuer: 'Coursera', date: '2023', link: 'https://coursera.org/share/ad5f612a614a0557263545cb6309df66', Icon: Cpu, category: 'Systems' },
  { title: 'Introduction to Microprocessors', issuer: 'ArmEducationX (edX)', date: 'Oct 2023', link: 'https://courses.edx.org/certificates/e4eede1dbb064fc1a7a2784fff0f0d70', Icon: Cpu, category: 'Systems' },

  // ── Management ────────────────────────────────────────────────────────────
  { title: 'Foundations of Project Management', issuer: 'Coursera / Google', date: '2023', link: 'https://coursera.org/share/ab40d22bcb21288116b61c6c657845b2', Icon: BookOpen, category: 'Management' }
];

const categories = ['All', 'Cloud', 'Networking', 'Data', 'Dev', 'Systems', 'Management'] as const;

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredCerts = certsList.filter((c) => {
    const matchesCategory = filter === 'All' || c.category === filter;
    const matchesSearch = !searchQuery.trim() || 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="certifications" ref={sectionRef} className="py-24 bg-slate-50/70 dark:bg-[#08090E] relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80">
      
      {/* Background glow */}
      <div className="glow-mesh top-10 left-10 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-on-scroll">
          <div>
            <div className="section-tag">
              <span className="section-tag-dot" />
              <span>Verified Qualifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              Industry <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              <span className="font-semibold text-slate-900 dark:text-white font-mono tabular-nums">{certsList.length}</span> verified credentials from AWS Academy, Microsoft, Cisco, IBM & Coursera.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search credentials or issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 overflow-x-auto mb-10 w-full sm:w-max shadow-sm animate-on-scroll">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? certsList.length 
              : certsList.filter((c) => c.category === cat).length;
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] tabular-nums font-mono px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCerts.map((cert, idx) => {
            const Icon = cert.Icon;
            return (
              <div
                key={cert.title + cert.issuer}
                className="animate-on-scroll group"
                style={{ animationDelay: `${(idx % 8) * 0.05}s` }}
              >
                <div className="h-full p-5 rounded-2xl glass-card border border-slate-200/90 dark:border-slate-800 flex flex-col hover:border-indigo-400 dark:hover:border-indigo-500/40 relative">
                  
                  {/* Top Bar: Icon & Highlight */}
                  <div className="flex items-start justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {cert.highlight && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-tight mb-2 flex-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer & Date unboxed metadata */}
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium flex items-center justify-between">
                    <span>{cert.issuer}</span>
                    {cert.date && <span className="font-mono text-[11px] text-slate-400">{cert.date}</span>}
                  </div>

                  {/* External verification button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/90 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white rounded-xl border border-slate-200/80 dark:border-slate-700/80 transition-all duration-200 group/btn"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;

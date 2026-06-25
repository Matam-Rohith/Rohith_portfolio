import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Award, Filter } from 'lucide-react';

type Cert = {
  title: string;
  issuer: string;
  date?: string;
  link: string;
  icon: string;
  color: string;
  category: string;
  highlight?: boolean;
};

const certs: Cert[] = [
  // ── AWS / Cloud ──────────────────────────────────────────────
  { title: 'AWS Cloud Architecting',            issuer: 'AWS Academy',  date: 'Feb 2024', link: 'https://www.credly.com/badges/aa016e5d-000f-44ad-9868-2aaea878f756/public_url',  icon: '☁️', color: 'amber',  category: 'Cloud', highlight: true },
  { title: 'AWS Cloud Data Pipeline Builder',   issuer: 'AWS Academy',  date: 'Feb 2024', link: 'https://www.credly.com/badges/8e430a47-e5c8-4d2a-bfb6-cbbe1d203d1d/public_url',  icon: '☁️', color: 'amber',  category: 'Cloud' },
  { title: 'AWS Cloud Foundations',             issuer: 'AWS Academy',  date: 'Feb 2024', link: 'https://www.credly.com/badges/f7da821b-4136-4bed-82cf-c2e99d0cbb87/public_url',  icon: '☁️', color: 'amber',  category: 'Cloud' },
  { title: 'AWS Cloud Web Application Builder', issuer: 'AWS Academy',  date: 'Feb 2024', link: 'https://www.credly.com/badges/757c26cb-57c8-41c4-8dbb-ebbe3ed461a2/public_url',  icon: '☁️', color: 'amber',  category: 'Cloud' },
  { title: 'AWS Machine Learning Foundations',  issuer: 'AWS Academy',  date: 'Feb 2024', link: 'https://www.credly.com/badges/ff75ac2a-f35f-415e-b823-50b81dbd37bd/public_url',  icon: '🤖', color: 'amber',  category: 'Cloud' },
  { title: 'Microsoft Azure Fundamentals',      issuer: 'Microsoft',    date: 'Mar 2024', link: 'https://www.credly.com/badges/29363e1f-2059-4f18-b7c0-59fc049df3a4/public_url',  icon: '🔷', color: 'blue',   category: 'Cloud', highlight: true },
  { title: 'Introduction to Cloud Computing',   issuer: 'Credly / IBM', date: '',         link: 'https://www.credly.com/badges/81893c4a-7884-4d84-aa21-e7c5227c2be5/public_url',  icon: '☁️', color: 'blue',   category: 'Cloud' },
  { title: 'Introduction to Cloud Computing',   issuer: 'Coursera',     date: '',         link: 'https://coursera.org/share/a620972885e5b78e0db03796a0635f26',                     icon: '☁️', color: 'blue',   category: 'Cloud' },
  { title: 'Creating Azure Serverless Functions', issuer: 'Coursera / Microsoft', date: '', link: 'https://coursera.org/share/52239fe8c1b3047cef9c96412e90dfdb',                  icon: '⚡', color: 'blue',   category: 'Cloud' },
  { title: 'Introduction to DevOps',            issuer: 'Coursera',     date: '',         link: 'https://coursera.org/share/bc1f935377ea8b3cd109a4bea3606697',                     icon: '🔁', color: 'teal',   category: 'Cloud' },

  // ── Networking / Security ─────────────────────────────────────
  { title: 'CCNA: Introduction to Networks',         issuer: 'Cisco', date: 'Mar 2024', link: 'https://www.credly.com/badges/5395ff92-075c-4fc2-8c25-038f8e0cdef4/public_url', icon: '🌐', color: 'cyan',   category: 'Networking', highlight: true },
  { title: 'CCNA: Switching, Routing & Wireless',    issuer: 'Cisco', date: 'Mar 2024', link: 'https://www.credly.com/badges/a1b54926-38f5-4960-8fc1-ba34edfb5eaa/public_url', icon: '🔀', color: 'cyan',   category: 'Networking' },
  { title: 'Networking Basics',                      issuer: 'Cisco', date: '',         link: 'https://www.credly.com/badges/b12ac3d8-9eff-4f84-aa0d-21e66dac3f2b/public_url', icon: '📡', color: 'cyan',   category: 'Networking' },
  { title: 'Introduction to Cybersecurity',          issuer: 'Cisco', date: '',         link: 'https://www.credly.com/badges/29f8f041-fd63-4fc9-9095-672a4e677264/public_url', icon: '🔐', color: 'rose',   category: 'Networking' },
  { title: 'Endpoint Security',                      issuer: 'Cisco', date: '',         link: 'https://www.credly.com/badges/5c3a3e9e-3c61-4dd7-b26f-b6dcbc458e9e/public_url', icon: '🛡️', color: 'rose',   category: 'Networking' },
  { title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco', date: '',       link: 'https://www.credly.com/badges/a1807a54-c5ff-4a3f-aba9-b7a67b1a9278/public_url', icon: '🔒', color: 'rose',   category: 'Networking' },
  { title: 'Ethical Hacking Essentials (EHE)',       issuer: 'Coursera', date: '',      link: 'https://coursera.org/share/588c7efdae5f7cf486ec9d3f4f3dd14b',                    icon: '🧪', color: 'rose',   category: 'Networking' },

  // ── Data & Analytics ─────────────────────────────────────────
  { title: 'Data Analytics Essentials',        issuer: 'Cisco / Credly',  date: '',         link: 'https://www.credly.com/badges/83076e8f-5c24-4a75-b852-4c7d81bedeb6/public_url', icon: '📊', color: 'violet', category: 'Data' },
  { title: 'Python Basics for Data Science',   issuer: 'IBM (edX)',        date: 'Oct 2023', link: 'https://courses.edx.org/certificates/93a4a7bdb6ab4fbfaf3d78aeee7ff334',          icon: '🐍', color: 'violet', category: 'Data', highlight: true },
  { title: 'Introduction to Databases',        issuer: 'Coursera',         date: '',         link: 'https://coursera.org/share/6b59d66e7da4af7ce75eedc302c976d1',                   icon: '🗄️', color: 'violet', category: 'Data' },
  { title: 'Introduction to MongoDB',          issuer: 'Coursera',         date: '',         link: 'https://coursera.org/share/a3dc4c73cace71cdf4465f154ad3d6e3',                   icon: '🍃', color: 'green',  category: 'Data' },
  { title: 'MongoDB Basics for Students',      issuer: 'MongoDB / Credly', date: '',         link: 'https://www.credly.com/badges/74c9c332-f44f-43e9-b3cb-4624fc37c9a7/public_url', icon: '🍃', color: 'green',  category: 'Data' },

  // ── Programming / Dev ─────────────────────────────────────────
  { title: 'Data Structures & Algorithms (C++)', issuer: 'IBM (edX)',   date: 'Oct 2023', link: 'https://courses.edx.org/certificates/5bf5f3f6c8454add9976b0c86e88b09b',                  icon: '⚙️', color: 'blue',   category: 'Dev', highlight: true },
  { title: 'Fundamentals of C++',               issuer: 'IBM (edX)',   date: 'Oct 2023', link: 'https://courses.edx.org/certificates/cbc1c40a50684aadb3bd065be57c52ce',                  icon: '💻', color: 'blue',   category: 'Dev' },
  { title: 'Intro to Web Dev (HTML5/CSS3/JS)',   issuer: 'IBM (edX)',   date: 'Oct 2023', link: 'https://courses.edx.org/certificates/c046285ad4174109a801c77aa1d430be',                  icon: '🌐', color: 'teal',   category: 'Dev' },
  { title: 'Web Development Fundamentals',      issuer: 'IBM / Credly',date: '',         link: 'https://www.credly.com/badges/e5a63698-3c50-4b84-b56b-563bd8a422f8/public_url',       icon: '🖥️', color: 'teal',   category: 'Dev' },
  { title: 'Support Kids\' Projects: Web Dev',  issuer: 'Raspberry Pi (edX)', date: 'Oct 2023', link: 'https://courses.edx.org/certificates/30affe3149824042b434f3aeda50c195',        icon: '🍓', color: 'rose',   category: 'Dev' },
  { title: 'Introduction to Software Engineering', issuer: 'Coursera / IBM', date: '',    link: 'https://coursera.org/share/04450008b9b86cfeb9435fbfc963f830',                         icon: '🛠️', color: 'violet', category: 'Dev' },
  { title: 'Software Engineering Essentials',   issuer: 'IBM / Credly',date: '',         link: 'https://www.credly.com/badges/7ccaa2f1-9bd0-43c4-9077-cb48300375f1/public_url',       icon: '🔧', color: 'violet', category: 'Dev' },
  { title: 'Python Essentials',                 issuer: 'Cisco / Credly', date: '',      link: 'https://www.credly.com/badges/60cfd76e-a0dc-4f78-8994-23e26d76b340/public_url',       icon: '🐍', color: 'green',  category: 'Dev' },
  { title: 'Python Essentials 1',               issuer: 'Cisco / Credly', date: '',      link: 'https://www.credly.com/badges/e16efc9d-1b66-45cc-bd9e-da09a9e76ec3/public_url',       icon: '🐍', color: 'green',  category: 'Dev' },
  { title: 'Python Essentials 2',               issuer: 'Cisco / Credly', date: '',      link: 'https://www.credly.com/badges/767467f6-f6fa-421b-b5f6-68769361e9b1/public_url',       icon: '🐍', color: 'green',  category: 'Dev' },
  { title: 'Introduction to Git and GitHub',    issuer: 'Coursera',    date: '',         link: 'https://coursera.org/share/1a71c18ea7a4771a00378105aa90a8dc',                         icon: '🐙', color: 'gray',   category: 'Dev' },
  { title: 'Version Control with Git',          issuer: 'Coursera',    date: '',         link: 'https://coursera.org/share/95914b39516c89fe6a44113c6a985476',                         icon: '🐙', color: 'gray',   category: 'Dev' },

  // ── OS / Systems ─────────────────────────────────────────────
  { title: 'Introduction to Operating Systems Specialization', issuer: 'Coursera', date: '', link: 'https://coursera.org/share/3fd36755bc852a8ffc975f25cf9375ab', icon: '🖥️', color: 'purple', category: 'Systems', highlight: true },
  { title: 'Intro to OS 1: Virtualization',     issuer: 'Coursera', date: '', link: 'https://coursera.org/share/f98d044f25c70fdb19e565ac07f7d777', icon: '📦', color: 'purple', category: 'Systems' },
  { title: 'Intro to OS 2: Memory Management',  issuer: 'Coursera', date: '', link: 'https://coursera.org/share/4b62bea81b027c42383cfac9d35c7424', icon: '🧠', color: 'purple', category: 'Systems' },
  { title: 'Intro to OS 3: Concurrency',        issuer: 'Coursera', date: '', link: 'https://coursera.org/share/dd0ac88aeb9e3a877743b09132519ca2', icon: '⚡', color: 'purple', category: 'Systems' },
  { title: 'Intro to OS 4: Persistence',        issuer: 'Coursera', date: '', link: 'https://coursera.org/share/ad5f612a614a0557263545cb6309df66', icon: '💾', color: 'purple', category: 'Systems' },
  { title: 'Intro to Contemporary OS & Hardware 1b', issuer: 'Coursera', date: '', link: 'https://coursera.org/share/c7e9962220a3bb7e6d83326c7859e5c1', icon: '🔩', color: 'purple', category: 'Systems' },
  { title: 'Intro to Computers, OS & Security', issuer: 'Coursera', date: '', link: 'https://coursera.org/share/9ebc612d9f04d13a6e969da36d58b528', icon: '🔐', color: 'purple', category: 'Systems' },
  { title: 'Introduction to Microprocessors',   issuer: 'ArmEducationX (edX)', date: 'Oct 2023', link: 'https://courses.edx.org/certificates/e4eede1dbb064fc1a7a2784fff0f0d70', icon: '🔌', color: 'purple', category: 'Systems' },

  // ── Management ───────────────────────────────────────────────
  { title: 'Foundations of Project Management', issuer: 'Coursera / Google', date: '', link: 'https://coursera.org/share/ab40d22bcb21288116b61c6c657845b2', icon: '📋', color: 'amber', category: 'Management' },
];

const categories = ['All', 'Cloud', 'Networking', 'Data', 'Dev', 'Systems', 'Management'];

const colorMap: Record<string, { card: string; pill: string; badge: string; icon: string }> = {
  amber:  { card: 'border-amber-200/60 dark:border-amber-400/15',   pill: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',   badge: 'from-amber-500 to-orange-500',  icon: 'text-amber-600 dark:text-amber-400' },
  blue:   { card: 'border-blue-200/60 dark:border-blue-400/15',     pill: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',       badge: 'from-blue-500 to-cyan-500',     icon: 'text-blue-600 dark:text-blue-400' },
  cyan:   { card: 'border-cyan-200/60 dark:border-cyan-400/15',     pill: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300',       badge: 'from-cyan-500 to-teal-500',     icon: 'text-cyan-600 dark:text-cyan-400' },
  teal:   { card: 'border-teal-200/60 dark:border-teal-400/15',     pill: 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300',       badge: 'from-teal-500 to-cyan-500',     icon: 'text-teal-600 dark:text-teal-400' },
  rose:   { card: 'border-rose-200/60 dark:border-rose-400/15',     pill: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300',       badge: 'from-rose-500 to-pink-500',     icon: 'text-rose-600 dark:text-rose-400' },
  violet: { card: 'border-violet-200/60 dark:border-violet-400/15', pill: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300', badge: 'from-violet-500 to-purple-500', icon: 'text-violet-600 dark:text-violet-400' },
  green:  { card: 'border-green-200/60 dark:border-green-400/15',   pill: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',   badge: 'from-green-500 to-emerald-500', icon: 'text-green-600 dark:text-green-400' },
  purple: { card: 'border-purple-200/60 dark:border-purple-400/15', pill: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', badge: 'from-purple-500 to-indigo-500', icon: 'text-purple-600 dark:text-purple-400' },
  gray:   { card: 'border-gray-200/60 dark:border-gray-400/15',     pill: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',           badge: 'from-gray-500 to-slate-500',    icon: 'text-gray-600 dark:text-gray-400' },
};

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = filter === 'All' ? certs : certs.filter(c => c.category === filter);

  const catCounts = categories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = cat === 'All' ? certs.length : certs.filter(c => c.category === cat).length;
    return acc;
  }, {});

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-gray-50/80 dark:bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 dark:bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100/40 dark:bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 animate-on-scroll">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-violet-500 mb-3">Credentials & Badges</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
              🏆 <span className="text-gradient">Certifications</span>
            </h2>
            <div className="section-divider" />
            <p className="text-base text-gray-500 dark:text-gray-400">
              <span className="font-bold text-violet-600 dark:text-violet-400">{certs.length}</span> certifications across Cloud, Networking, Data, Dev, Systems & More
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10 animate-on-scroll">
            {categories.map(cat => (
              <button key={cat}
                onClick={() => setFilter(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-md shadow-violet-500/30 scale-105'
                    : 'glass-card text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:scale-105'
                }`}
              >
                {cat === 'All' && <Filter className="w-3 h-3" />}
                {cat}
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  filter === cat ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'
                }`}>
                  {catCounts[cat]}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((cert, i) => {
              const c = colorMap[cert.color] ?? colorMap['blue'];
              return (
                <div key={cert.title + cert.issuer}
                  className="animate-on-scroll group"
                  style={{ animationDelay: `${(i % 8) * 0.05}s` }}
                >
                  <div className={`glass-card card-aesthetic rounded-2xl p-4 h-full flex flex-col border ${c.card} relative overflow-hidden`}>

                    {/* Highlight glow */}
                    {cert.highlight && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${c.badge} opacity-[0.04] pointer-events-none`} />
                    )}

                    {/* Top row */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${c.badge} rounded-xl flex items-center justify-center text-lg shadow-md flex-shrink-0`}>
                        {cert.icon}
                      </div>
                      <div className="flex items-center gap-1">
                        {cert.highlight && (
                          <span className="pill-featured text-[9px]">★ Featured</span>
                        )}
                        <Award className={`w-4 h-4 ${c.icon}`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors flex-1">
                      {cert.title}
                    </h3>

                    {/* Issuer + date */}
                    <div className="mt-2 mb-3 space-y-1">
                      <span className={`inline-block ${c.pill} px-2.5 py-0.5 rounded-full text-[10px] font-bold`}>
                        {cert.issuer}
                      </span>
                      {cert.date && (
                        <div className="text-[10px] text-gray-400 dark:text-gray-500">📅 {cert.date}</div>
                      )}
                    </div>

                    {/* View button */}
                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                      className={`mt-auto flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${c.badge} shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-200`}>
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary strip */}
          <div className="mt-12 animate-on-scroll">
            <div className="glass-card rounded-2xl p-6 text-center border border-violet-200/40 dark:border-violet-400/10">
              <p className="text-3xl font-extrabold text-gradient mb-1">{certs.length}+</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Verified Certifications from IBM, AWS, Microsoft, Cisco & more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

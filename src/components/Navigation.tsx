import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const Navigation = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-card border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-600 shadow-lg hover:shadow-indigo-500/25 hover:scale-110 transition-all duration-300 animate-in fade-in zoom-in-75"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};

export default Navigation;

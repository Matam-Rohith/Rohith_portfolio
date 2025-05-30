
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-105"
    >
      {theme === 'light' ? (
        <span className="flex items-center gap-2">
          🌙 Dark
        </span>
      ) : (
        <span className="flex items-center gap-2">
          ☀️ Light
        </span>
      )}
    </Button>
  );
};

export default ThemeToggle;

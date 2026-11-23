import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const links = [
  ['Research', '#research'],
  ['Systems', '#systems'],
  ['Recognition', '#achievements'],
  ['Background', '#experience'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    setDark(next);
    try {
      localStorage.setItem('darkMode', String(next));
    } catch {
      // The theme still works for the current page when storage is unavailable.
    }
  }

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#top">Josué Jitimay</a>
        <nav aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <motion.button
          className="theme-button"
          type="button"
          aria-label="Dark theme"
          aria-pressed={dark}
          onClick={toggleTheme}
          whileTap={reducedMotion ? undefined : { scale: 0.92 }}
        >
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {dark
              ? <path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
              : <path d="M20.5 15A8.5 8.5 0 0 1 9 3.5 8.5 8.5 0 1 0 20.5 15Z" />}
          </svg>
        </motion.button>
      </div>
    </header>
  );
}

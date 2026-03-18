import { Link, useLocation } from 'react-router-dom';
import { useI18n, Lang } from '@/lib/i18n';
import { useTheme } from '@/lib/theme';
import { Sun, Moon, Globe, Menu, X, Cpu, BarChart3, GitCompare, Home } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const langLabels: Record<Lang, string> = { uz: "O'zbekcha", ru: 'Русский', en: 'English' };

export const Navbar = () => {
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: t('nav.home'), icon: Home },
    { to: '/catalog', label: t('nav.catalog'), icon: Cpu },
    { to: '/compare', label: t('nav.compare'), icon: GitCompare },
    { to: '/benchmarks', label: t('nav.benchmarks'), icon: BarChart3 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel overflow-visible border-b border-border/50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Cpu className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="gradient-text">TechSpec</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                location.pathname === l.to
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <l.icon className="w-4 h-4" />
              {l.label}
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="glass-button px-3 py-2 rounded-lg flex items-center gap-1.5 text-sm"
              aria-label="Change language"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{lang.toUpperCase()}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute right-0 top-full mt-2 glass-panel rounded-lg p-1 min-w-[140px]"
                >
                  {(['uz', 'ru', 'en'] as Lang[]).map(l => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        lang === l ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'
                      }`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="glass-button p-2 rounded-lg"
            aria-label={theme === 'light' ? t('theme.dark') : t('theme.light')}
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden glass-button p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-3 ${
                    location.pathname === l.to
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary'
                  }`}
                >
                  <l.icon className="w-5 h-5" />
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

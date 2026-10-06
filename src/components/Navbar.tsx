import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
  onGetQuote?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onGetQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section spy
      const sections = ['home', 'solutions', 'services', 'work', 'about', 'contact'];
      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'SOLUTIONS', href: '#solutions', id: 'solutions' },
    { label: 'SERVICES', href: '#services', id: 'services' },
    { label: 'WORK', href: '#portfolio', id: 'work' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (onGetQuote) {
      onGetQuote();
    } else if (onOpenContact) {
      onOpenContact();
    } else {
      handleNavClick('#contact');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-lg shadow-black/50 py-3.5 backdrop-blur-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element Brand Wordmark (Preserving authentic TS Logo) */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-90 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center p-0.5 shadow-md shadow-cyan-500/25 group-hover:scale-105 group-hover:shadow-cyan-400/40 transition-all duration-200">
              <span className="text-xs font-mono font-black text-black">TS</span>
            </div>
            <span className="font-display tracking-tight text-lg sm:text-xl font-bold text-white">
              TechSoftware<span className="text-cyan-400">.digital</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || (link.id === 'work' && activeSection === 'portfolio');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors relative py-1 hover:text-cyan-300 cursor-pointer ${
                    isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-sm shadow-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:8169401877"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              title="Direct Client Call"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>8169401877</span>
            </a>

            {/* GET A QUOTE Button with micro-interactions */}
            <button
              onClick={handleQuoteClick}
              className="relative group overflow-hidden px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 rounded-lg shadow-md shadow-cyan-500/25 hover:shadow-cyan-400/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              {/* Subtle button light sweep */}
              <span className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:left-[100%] transition-all duration-700 pointer-events-none" />
              
              <span>GET A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-slate-800/80 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-xs font-mono font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:8169401877"
              className="flex items-center justify-center gap-2 py-2 px-3 text-xs font-mono text-slate-300 bg-slate-800/40 rounded-lg border border-slate-700/50"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct Line: 8169401877</span>
            </a>

            <button
              onClick={handleQuoteClick}
              className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-sky-300 rounded-lg shadow-md shadow-cyan-500/20 text-center cursor-pointer"
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

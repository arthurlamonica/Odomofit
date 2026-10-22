import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, User } from 'lucide-react';

interface HeaderProps {
  onOpenAuth: () => void;
  onOpenInterest: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth, onOpenInterest }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#' },
    { label: 'Programas', href: '#programas' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Treinadores', href: '#treinadores' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080A]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo ODomoFit */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/images/logo.png"
              alt="ODomoFit Logo"
              className="h-6 sm:h-7 md:h-7.5 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#9FA1AC] hover:text-[#C6FF00] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3.5">
            <button
              onClick={onOpenAuth}
              className="px-5 py-2 rounded-full text-xs font-semibold text-white/90 border border-white/20 hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all duration-200 cursor-pointer flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5" />
              <span>Entrar</span>
            </button>
            <button
              onClick={onOpenInterest}
              className="px-6 py-2 rounded-full bg-[#C6FF00] text-[#08080A] hover:bg-[#B2E600] text-xs font-extrabold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-[0_4px_16px_rgba(198,255,0,0.3)] hover:scale-105 active:scale-95"
            >
              <span>Começar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenInterest}
              className="px-3.5 py-1.5 rounded-full bg-[#C6FF00] text-[#08080A] text-xs font-bold"
            >
              Começar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#121318] text-[#9FA1AC] hover:text-white border border-white/10"
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0E12] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#9FA1AC] hover:text-[#C6FF00] py-1.5 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-white"
            >
              Entrar
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterest();
              }}
              className="w-full py-2.5 rounded-xl bg-[#C6FF00] text-[#08080A] text-xs font-bold"
            >
              Cadastrar
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

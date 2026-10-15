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
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Como funciona', href: '#demonstracao' },
    { label: 'Comunidade', href: '#comunidade' },
    { label: 'Treinos', href: '#treinos' },
    { label: 'Para profissionais', href: '#profissionais' },
    { label: 'Planos', href: '#planos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B0B]/90 backdrop-blur-md border-b border-[#1F2224] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/images/logo.png"
              alt="Gymstagram Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#A7A7A7] hover:text-[#C6FF00] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAuth}
              className="px-4 py-2 text-sm font-semibold text-white hover:text-[#C6FF00] transition-colors duration-200 flex items-center gap-1.5"
            >
              <User className="w-4 h-4 text-[#A7A7A7]" />
              <span>Entrar</span>
            </button>
            <button
              onClick={onOpenInterest}
              className="px-5 py-2.5 rounded-full bg-[#C6FF00] text-[#080B0B] font-bold text-sm tracking-tight hover:bg-[#b5eb00] hover:scale-105 transition-all duration-200 lime-glow-sm flex items-center gap-1.5"
            >
              <span>Começar agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenInterest}
              className="px-3.5 py-1.5 rounded-full bg-[#C6FF00] text-[#080B0B] font-bold text-xs tracking-tight"
            >
              Começar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#1F2224] text-white hover:text-[#C6FF00] focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#080B0B] border-b border-[#1F2224] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#A7A7A7] hover:text-[#C6FF00] hover:bg-[#1F2224] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#1F2224] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 px-4 text-center rounded-lg border border-[#2D3236] text-white text-sm font-semibold hover:border-[#C6FF00] transition-colors"
            >
              Entrar na conta
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterest();
              }}
              className="w-full py-2.5 px-4 text-center rounded-lg bg-[#C6FF00] text-[#080B0B] text-sm font-bold lime-glow-sm hover:bg-[#b5eb00] transition-all"
            >
              Criar conta gratuita
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

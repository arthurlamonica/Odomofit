import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#C6FF00] via-[#00E5FF] to-[#C6FF00] transition-[width] duration-75 ease-out shadow-[0_0_12px_rgba(198,255,0,0.8),0_0_24px_rgba(198,255,0,0.4)]"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Ponto de laser brilhante na ponta da barra */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FFFFFF,0_0_16px_#C6FF00]" />
      </div>
    </div>
  );
};

export const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 400);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Raio do anel SVG de progresso
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#121318]/90 backdrop-blur-md border border-white/10 hover:border-[#C6FF00] text-white hover:text-[#C6FF00] flex items-center justify-center transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer group hover:scale-110 active:scale-95 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Anel SVG de Progresso Circular */}
      <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          stroke="#C6FF00"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-100"
        />
      </svg>

      <ArrowUp className="w-4 h-4 stroke-[2.5] relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
    </button>
  );
};

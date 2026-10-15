import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B0B] border-t border-[#1F2224] text-[#A7A7A7] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1F2224]">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <img
                src="/images/logo.png"
                alt="Gymstagram Logo"
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="text-sm text-[#A7A7A7] max-w-sm leading-relaxed">
              A plataforma fitness que une a força da comunidade à inteligência de treino e acompanhamento profissional.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1F2224] border border-[#2D3236] flex items-center justify-center text-white hover:text-[#C6FF00] hover:border-[#C6FF00] transition-colors"
                aria-label="Instagram Oficial"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* YouTube SVG */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1F2224] border border-[#2D3236] flex items-center justify-center text-white hover:text-[#C6FF00] hover:border-[#C6FF00] transition-colors"
                aria-label="Canal YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* X / Twitter SVG */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-[#1F2224] border border-[#2D3236] flex items-center justify-center text-white hover:text-[#C6FF00] hover:border-[#C6FF00] transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:contato@gymstagram.app"
                className="w-9 h-9 rounded-lg bg-[#1F2224] border border-[#2D3236] flex items-center justify-center text-white hover:text-[#C6FF00] hover:border-[#C6FF00] transition-colors"
                aria-label="Email de Contato"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1: Plataforma */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Plataforma
            </h4>
            <ul className="space-y-2">
              <li><a href="#funcionalidades" className="hover:text-[#C6FF00] transition-colors">Treinos Inteligentes</a></li>
              <li><a href="#demonstracao" className="hover:text-[#C6FF00] transition-colors">Como Funciona</a></li>
              <li><a href="#treinos" className="hover:text-[#C6FF00] transition-colors">Fichas de Treino</a></li>
              <li><a href="#comunidade" className="hover:text-[#C6FF00] transition-colors">Feed & Comunidade</a></li>
              <li><a href="#planos" className="hover:text-[#C6FF00] transition-colors">Planos & Preços</a></li>
            </ul>
          </div>

          {/* Links Column 2: Para Profissionais */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Para Treinadores
            </h4>
            <ul className="space-y-2">
              <li><a href="#profissionais" className="hover:text-[#C6FF00] transition-colors">Gymstagram Pro</a></li>
              <li><a href="#profissionais" className="hover:text-[#C6FF00] transition-colors">Gestão de Alunos</a></li>
              <li><a href="#profissionais" className="hover:text-[#C6FF00] transition-colors">Prescrição de Fichas</a></li>
              <li><a href="#profissionais" className="hover:text-[#C6FF00] transition-colors">Acompanhamento Online</a></li>
              <li><a href="#profissionais" className="hover:text-[#C6FF00] transition-colors">Parcerias & Academias</a></li>
            </ul>
          </div>

          {/* Links Column 3: Suporte & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Informações
            </h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-[#C6FF00] transition-colors">Central de Ajuda & FAQ</a></li>
              <li><a href="#" className="hover:text-[#C6FF00] transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-[#C6FF00] transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[#C6FF00] transition-colors">Preferências de Cookies</a></li>
              <li><a href="mailto:suporte@gymstagram.app" className="hover:text-[#C6FF00] transition-colors">suporte@gymstagram.app</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A7A7A7]">
            © {new Date().getFullYear()} Gymstagram®. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-[#A7A7A7] hover:text-[#C6FF00] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <div className="w-7 h-7 rounded-full bg-[#1F2224] border border-[#2D3236] flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

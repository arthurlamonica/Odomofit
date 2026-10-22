import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface HeroSectionProps {
  onOpenInterest: () => void;
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInterest, onExplore }) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.1 }
      )
        .fromTo(
          descRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75 },
          '-=0.55'
        )
        .fromTo(
          statsRef.current ? statsRef.current.children : [],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 },
          '-=0.45'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#08080A] text-white pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* =========================================================================
          1. FOTO DE FUNDO CINEMATOGRÁFICA (REFERÊNCIA: RACK DE HALTERES NA ACADEMIA)
          ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gym_hero_bg.jpg"
          alt="Academia de alto padrão com rack de halteres metálicos"
          className="w-full h-full object-cover object-center scale-[1.02] filter contrast-[1.05] brightness-[0.88]"
        />

        {/* Gradiente Lateral: Escurece suavemente da esquerda para a direita fundindo com o site */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A]/95 via-[#08080A]/85 sm:via-[#08080A]/70 md:via-[#08080A]/55 to-[#08080A]/30" />

        {/* Gradiente Vertical: Suaviza o topo e a base fundindo 100% com o preto #08080A do site */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-black/60" />

        {/* Halo Neon sutil de ambientação da marca ODomoFit no quadrante esquerdo */}
        <div className="absolute top-1/3 -left-20 w-[480px] h-[480px] rounded-full bg-[#C6FF00]/[0.07] blur-[140px] pointer-events-none" />

        {/* Ruído Cinematográfico Sutil (Diretriz Construtor de Sites) */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none noise-overlay" />
      </div>

      {/* =========================================================================
          2. CONTEÚDO PRINCIPAL (1:1 COM A REFERÊNCIA, NA PALETA OFICIAL DO SITE)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center my-auto">
        
        <div className="max-w-2xl lg:max-w-3xl text-left">

          {/* Headline Monumental Condensada com Destaque no Verde Neon do Site */}
          <h1
            ref={titleRef}
            className="font-['Oswald'] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] uppercase leading-[0.94] tracking-tight text-white drop-shadow-2xl select-none"
          >
            <span className="block text-white">TREINE COMO VOCÊ</span>
            <span className="block text-[#C6FF00] drop-shadow-[0_0_35px_rgba(198,255,0,0.45)]">
              PERFORMA.
            </span>
          </h1>

          {/* Subtítulo em Português do Brasil */}
          <p
            ref={descRef}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#C7C9D3] font-sans font-normal leading-relaxed max-w-xl"
          >
            Transforme seu físico sem abrir mão do seu estilo de vida. Treinamento fundamentado na ciência para quem busca o mais alto nível.
          </p>

          {/* Botões de Ação com Micro-Interação Magnética nas Cores do Site */}
          <div
            ref={ctaRef}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            {/* Botão Primário: Verde Neon do Site com Texto Escuro de Máximo Contraste */}
            <button
              onClick={onOpenInterest}
              className="btn-magnetic group relative inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#C6FF00] text-[#08080A] font-['Montserrat'] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_30px_rgba(198,255,0,0.35)] hover:shadow-[0_18px_45px_rgba(198,255,0,0.55)] hover:bg-[#B2E600] transition-all duration-300 cursor-pointer select-none active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>AGENDAR AVALIAÇÃO</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            {/* Botão Secundário: Pílula Escura Fosca com Vidro e Borda com Hover Verde Neon */}
            <button
              onClick={onExplore}
              className="btn-magnetic inline-flex items-center justify-center px-8 sm:px-9 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md border border-white/20 hover:border-[#C6FF00] hover:text-[#C6FF00] text-white font-['Montserrat'] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer select-none active:scale-95"
            >
              <span>VER PROGRAMAS</span>
            </button>
          </div>

        </div>

      </div>

      {/* =========================================================================
          3. MÉTRICAS E TELEMETRIA INFERIOR COM DETALHES EM VERDE NEON
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10">
        <div
          ref={statsRef}
          className="flex flex-wrap items-center gap-8 sm:gap-14 md:gap-20 text-left border-t border-white/[0.12] pt-6 sm:pt-8"
        >
          {/* Métrica 1 */}
          <div>
            <div className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              500<span className="text-[#C6FF00]">+</span>
            </div>
            <div className="font-['Montserrat'] text-[11px] sm:text-xs font-semibold text-[#9FA1AC] uppercase tracking-wider mt-1.5">
              HISTÓRIAS DE SUCESSO
            </div>
          </div>

          {/* Métrica 2 */}
          <div>
            <div className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              100<span className="text-[#C6FF00]">%</span>
            </div>
            <div className="font-['Montserrat'] text-[11px] sm:text-xs font-semibold text-[#9FA1AC] uppercase tracking-wider mt-1.5">
              PLANOS PERSONALIZADOS
            </div>
          </div>

          {/* Métrica 3 */}
          <div>
            <div className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              24<span className="text-[#C6FF00]">/</span>7
            </div>
            <div className="font-['Montserrat'] text-[11px] sm:text-xs font-semibold text-[#9FA1AC] uppercase tracking-wider mt-1.5">
              SUPORTE EXCLUSIVO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

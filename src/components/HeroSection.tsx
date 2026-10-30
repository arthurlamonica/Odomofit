import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Heart, Flame, Activity, Zap, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

interface HeroSectionProps {
  onOpenInterest: () => void;
  onExplore: () => void;
}

interface ClickSparkle {
  id: number;
  x: number;
  y: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInterest, onExplore }) => {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Estados de Scroll e Interatividade
  const [scrollY, setScrollY] = useState(0);
  const [mouseTilt, setMouseTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [bpm, setBpm] = useState(142);
  const [calories, setCalories] = useState(680);
  const [sparkles, setSparkles] = useState<ClickSparkle[]>([]);

  // 1. Escuta do Scroll do Mouse para o Efeito Parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Escuta do Mouse para Efeito 3D Tilt nos Cards
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalizar de -1 a 1
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    // Calcular rotação suave (máx 10 graus)
    setMouseTilt({
      rotateX: -normY * 8,
      rotateY: normX * 8,
    });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ rotateX: 0, rotateY: 0 });
  };

  // 3. Batimento Cardíaco com Oscilação Orgânica
  useEffect(() => {
    const interval = setInterval(() => {
      // Oscila suavemente entre 139 e 145 BPM
      setBpm(140 + Math.floor(Math.sin(Date.now() / 1000) * 4));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // 4. Interação Tátil de Calorias com Feedback Visual
  const handleBurnCalories = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCalories((prev) => prev + 25);
    const newSparkle: ClickSparkle = { id: Date.now(), x, y };
    setSparkles((prev) => [...prev, newSparkle]);

    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 800);
  };

  // 5. Animações de Entrada GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
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

  // Fatores de Parallax de Scroll
  const bgTranslateY = scrollY * 0.35;
  const contentTranslateY = scrollY * 0.18;
  const contentOpacity = Math.max(0, 1 - scrollY / 650);
  const card1ParallaxY = -scrollY * 0.22;
  const card2ParallaxY = -scrollY * 0.38;
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 140);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-transparent text-white pt-24 sm:pt-28 pb-10 sm:pb-14 select-none"
    >
      {/* =========================================================================
          1. CAMADA DE FUNDO CINEMATOGRÁFICA COM PARALLAX NO SCROLL
          ========================================================================= */}
      <div
        className="absolute inset-0 z-0 will-change-transform transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${bgTranslateY}px, 0) scale(${1.02 + scrollY * 0.0003})`,
        }}
      >
        <img
          src="/images/gym_hero_bg.jpg"
          alt="Academia de alto padrão com rack de halteres metálicos"
          className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[0.85]"
        />

        {/* Gradiente Lateral: Escurece suavemente para fundir o texto com o fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A]/95 via-[#08080A]/85 sm:via-[#08080A]/70 md:via-[#08080A]/55 to-[#08080A]/35" />

        {/* Gradiente Vertical: Fundo 100% fundido com o preto #08080A do restante do site */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-black/60" />

        {/* Ruído Cinematográfico */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none noise-overlay" />
      </div>

      {/* =========================================================================
          2. CONTEÚDO PRINCIPAL (COM PARALLAX MULTI-CAMADA E 3D HUD)
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center my-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center will-change-transform transition-[opacity,transform] duration-100 ease-out"
          style={{
            transform: `translate3d(0, ${contentTranslateY}px, 0)`,
            opacity: contentOpacity,
          }}
        >
          {/* Coluna Esquerda: Headline, Subtítulo e Chamadas de Ação */}
          <div className="lg:col-span-7 xl:col-span-7 text-left max-w-2xl lg:max-w-none">
            
            {/* Tag Badge Tecnológica com Ponto Neon Pulsante */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-[#C6FF00]/30 backdrop-blur-md mb-5 text-[11px] font-['Montserrat'] font-semibold tracking-wider text-[#C6FF00] uppercase shadow-[0_0_15px_rgba(198,255,0,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-ping" />
              <span>ALTA PERFORMANCE INTEGRADA</span>
            </div>

            {/* Headline Monumental Condensada com Destaque Neon */}
            <h1
              ref={titleRef}
              className="font-['Oswald'] font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.2rem] uppercase leading-[0.94] tracking-tight text-white drop-shadow-2xl select-none"
            >
              <span className="block text-white">TREINE COMO VOCÊ</span>
              <span className="block text-[#C6FF00] drop-shadow-[0_0_35px_rgba(198,255,0,0.45)]">
                PERFORMA.
              </span>
            </h1>

            {/* Subtítulo em Português do Brasil */}
            <p
              ref={descRef}
              className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-[#C7C9D3] font-sans font-normal leading-relaxed max-w-xl"
            >
              Transforme seu físico sem abrir mão do seu estilo de vida. Treinamento fundamentado na ciência para quem busca o mais alto nível.
            </p>

            {/* Botões de Ação com Efeito Magnético e Sombra Neon */}
            <div
              ref={ctaRef}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Botão Primário: Verde Neon do Site */}
              <button
                onClick={onOpenInterest}
                className="btn-magnetic group relative inline-flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#C6FF00] text-[#08080A] font-['Montserrat'] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_12px_30px_rgba(198,255,0,0.35)] hover:shadow-[0_18px_45px_rgba(198,255,0,0.55)] hover:bg-[#B2E600] transition-all duration-300 cursor-pointer select-none active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>AGENDAR AVALIAÇÃO</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>

              {/* Botão Secundário: Pílula Escura Fosca com Vidro */}
              <button
                onClick={onExplore}
                className="btn-magnetic inline-flex items-center justify-center px-8 sm:px-9 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md border border-white/20 hover:border-[#C6FF00] hover:text-[#C6FF00] text-white font-['Montserrat'] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer select-none active:scale-95"
              >
                <span>VER PROGRAMAS</span>
              </button>
            </div>
          </div>

          {/* Coluna Direita: Cards Flutuantes de Telemetria com 3D Tilt e Parallax de Scroll */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-4 sm:gap-5 preserve-3d">
            
            {/* CARD 1: Frequência Cardíaca e ECG em Tempo Real */}
            <div
              className="relative p-5 sm:p-6 rounded-2xl bg-[#121318]/85 backdrop-blur-xl border border-white/10 hover:border-[#C6FF00]/60 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.7)] group overflow-hidden cursor-default"
              style={{
                transform: `perspective(1000px) rotateX(${mouseTilt.rotateX}deg) rotateY(${mouseTilt.rotateY}deg) translate3d(0, ${card1ParallaxY}px, 0)`,
                transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Brilho interno dinâmico */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6FF00]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C6FF00]/20 transition-colors" />

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-xl bg-[#C6FF00]/15 border border-[#C6FF00]/30 flex items-center justify-center text-[#C6FF00]">
                    <Heart className="w-5 h-5 fill-current animate-heart-beat text-[#C6FF00]" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C6FF00] animate-ping" />
                  </div>
                  <div>
                    <div className="text-[10px] font-['Montserrat'] font-bold text-[#9FA1AC] tracking-wider uppercase flex items-center gap-1.5">
                      <span>RITMO CARDÍACO</span>
                      <Activity className="w-3 h-3 text-[#C6FF00]" />
                    </div>
                    <div className="text-xl sm:text-2xl font-['Oswald'] font-bold text-white flex items-baseline gap-1.5 leading-none mt-0.5">
                      <span>{bpm}</span>
                      <span className="text-xs font-['Montserrat'] text-[#9FA1AC] font-semibold">BPM ATIVO</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 text-[#C6FF00] text-[10px] font-['Montserrat'] font-bold uppercase tracking-wider">
                    ZONA ÓTIMA
                  </span>
                </div>
              </div>

              {/* Traçado Dinâmico de ECG com Gradiente Neon */}
              <div className="relative h-12 w-full pt-1 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 320 50" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C6FF00" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#C6FF00" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  {/* Linha guia de fundo */}
                  <path
                    d="M 0,25 L 40,25 L 50,10 L 60,40 L 70,25 L 110,25 L 120,5 L 135,45 L 145,20 L 155,28 L 165,25 L 210,25 L 220,8 L 235,42 L 245,25 L 320,25"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="2"
                  />
                  {/* Linha pulsante animada */}
                  <path
                    d="M 0,25 L 40,25 L 50,10 L 60,40 L 70,25 L 110,25 L 120,5 L 135,45 L 145,20 L 155,28 L 165,25 L 210,25 L 220,8 L 235,42 L 245,25 L 320,25"
                    fill="none"
                    stroke="url(#ecgGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-ecg-line shadow-[0_0_12px_#C6FF00]"
                  />
                </svg>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-['Montserrat'] text-[#9FA1AC]">
                <span className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#C6FF00]" />
                  <span>VO2 Max Calculado: 54.2</span>
                </span>
                <span className="text-white/80 font-medium">Resposta em Tempo Real</span>
              </div>
            </div>

            {/* CARD 2: Gasto Calórico & Potência Interativo ao Clique */}
            <div
              onClick={handleBurnCalories}
              className="relative p-5 sm:p-6 rounded-2xl bg-[#121318]/85 backdrop-blur-xl border border-white/10 hover:border-[#FF5E3A]/60 transition-all duration-300 shadow-[0_16px_40px_rgba(0,0,0,0.7)] group overflow-hidden cursor-pointer"
              title="Clique para acelerar queima de calorias!"
              style={{
                transform: `perspective(1000px) rotateX(${mouseTilt.rotateX * 1.1}deg) rotateY(${mouseTilt.rotateY * 1.1}deg) translate3d(0, ${card2ParallaxY}px, 0)`,
                transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              {/* Efeito de partículas subindo ao clicar */}
              {sparkles.map((s) => (
                <div
                  key={s.id}
                  className="absolute pointer-events-none z-30 font-['Montserrat'] font-extrabold text-xs text-[#C6FF00] drop-shadow-[0_0_8px_#C6FF00] animate-pop-fade"
                  style={{ left: s.x, top: s.y }}
                >
                  +25 KCAL!
                </div>
              ))}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 flex items-center justify-center text-[#FF5E3A] group-hover:scale-105 transition-transform">
                    <Flame className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-[10px] font-['Montserrat'] font-bold text-[#9FA1AC] tracking-wider uppercase">
                      ENERGIA & CALORIAS
                    </div>
                    <div className="text-xl sm:text-2xl font-['Oswald'] font-bold text-white flex items-baseline gap-1.5 leading-none mt-0.5">
                      <span>{calories.toLocaleString('pt-BR')}</span>
                      <span className="text-xs font-['Montserrat'] text-[#FF5E3A] font-semibold">KCAL QUEIMADAS</span>
                    </div>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/80 text-[10px] font-['Montserrat'] font-semibold">
                  Clique +25
                </div>
              </div>

              {/* Barra de Progresso de Intensidade Aeróbica */}
              <div className="mt-4">
                <div className="flex justify-between text-[10px] font-['Montserrat'] font-bold text-[#9FA1AC] mb-1.5 uppercase tracking-wider">
                  <span>POTÊNCIA DO TREINO</span>
                  <span className="text-[#C6FF00]">88% ALTO NÍVEL</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden relative">
                  <div className="h-full rounded-full bg-gradient-to-r from-[#FF5E3A] via-[#C6FF00] to-[#C6FF00] w-[88%] shadow-[0_0_12px_rgba(198,255,0,0.5)]" />
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-['Montserrat'] text-[#9FA1AC]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C6FF00]" />
                  <span>Bio-tracking Criptografado</span>
                </span>
                <span className="text-[#C6FF00] font-semibold text-[10px]">ODomoFit OS</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          4. MÉTRICAS INFERIORES E INDICADOR DE SCROLL DO MOUSE
          ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-6 sm:pt-8">
        
        {/* Linha das Métricas */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-between gap-6 sm:gap-12 border-t border-white/[0.12] pt-6 sm:pt-8"
        >
          {/* Métrica 1 */}
          <div className="flex-1 min-w-[130px]">
            <div className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              500<span className="text-[#C6FF00]">+</span>
            </div>
            <div className="font-['Montserrat'] text-[11px] sm:text-xs font-semibold text-[#9FA1AC] uppercase tracking-wider mt-1.5">
              HISTÓRIAS DE SUCESSO
            </div>
          </div>

          {/* Métrica 2 */}
          <div className="flex-1 min-w-[130px]">
            <div className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              100<span className="text-[#C6FF00]">%</span>
            </div>
            <div className="font-['Montserrat'] text-[11px] sm:text-xs font-semibold text-[#9FA1AC] uppercase tracking-wider mt-1.5">
              PLANOS PERSONALIZADOS
            </div>
          </div>

          {/* Métrica 3 */}
          <div className="flex-1 min-w-[130px]">
            <div className="font-['Oswald'] font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              24<span className="text-[#C6FF00]">/</span>7
            </div>
            <div className="font-['Montserrat'] text-[11px] sm:text-xs font-semibold text-[#9FA1AC] uppercase tracking-wider mt-1.5">
              SUPORTE EXCLUSIVO
            </div>
          </div>

          {/* =====================================================================
              INDICADOR INTERATIVO DE SCROLL DO MOUSE NO RODAPÉ DA HERO
              ===================================================================== */}
          <div
            onClick={onExplore}
            className="flex items-center gap-3 py-2 px-4 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-[#C6FF00]/40 transition-all duration-300 cursor-pointer group"
            style={{ opacity: scrollIndicatorOpacity }}
            title="Deslize ou clique para explorar as seções do site"
          >
            {/* Ícone de Mouse Animado com Rodinha Neon */}
            <div className="w-5 h-8 rounded-full border-2 border-white/40 group-hover:border-[#C6FF00] flex justify-center pt-1.5 transition-colors">
              <div className="w-1 h-2 rounded-full bg-[#C6FF00] animate-mouse-wheel shadow-[0_0_6px_#C6FF00]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[10px] font-['Montserrat'] font-extrabold tracking-widest text-[#9FA1AC] group-hover:text-white uppercase transition-colors">
                DESLIZE PARA EXPLORAR
              </span>
              <span className="text-[9px] font-['Montserrat'] text-[#C6FF00] font-medium flex items-center gap-0.5">
                <span>Rolar página</span>
                <ChevronDown className="w-3 h-3 animate-chevron-pulse" />
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState } from 'react';
import { ArrowRight, Flame, Heart, Dumbbell, Play, Plus, Activity } from 'lucide-react';

interface HeroSectionProps {
  onOpenInterest: () => void;
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInterest, onExplore }) => {
  const [bpm, setBpm] = useState(124);
  const [calories, setCalories] = useState(44411);
  const [isBpmActive, setIsBpmActive] = useState(true);

  // Efeito interativo ao clicar no batimento cardíaco
  const handlePulseBpm = () => {
    setBpm((prev) => (prev === 124 ? 146 : 124));
    setCalories((prev) => prev + 24);
    setIsBpmActive((prev) => !prev);
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-24 sm:pt-28 pb-14 flex flex-col justify-between overflow-hidden bg-[#08080A] text-white">
      
      {/* =========================================================================
          1. EFEITOS DE ILUMINAÇÃO RADIAL EM VERDE NEON DA MARCA ODOMOFIT
          ========================================================================= */}
      
      {/* Geometria circular sutil do design de referência no canto superior esquerdo */}
      <div 
        className="absolute -top-32 -left-32 w-[620px] h-[620px] rounded-full border border-white/[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(198, 255, 0, 0.03) 0%, rgba(8, 8, 10, 0.98) 75%)',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.9)'
        }}
      />
      <div 
        className="absolute -top-16 -left-16 w-[420px] h-[420px] rounded-full border border-white/[0.03] pointer-events-none"
      />

      {/* Halo de luz neon atrás da cabeça e ombros do atleta */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(198, 255, 0, 0.16) 0%, rgba(255, 255, 255, 0.03) 35%, transparent 70%)'
        }}
      />

      {/* Brilho neon sutil no quadrante direito */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* =========================================================================
          2. TIPOGRAFIA MONUMENTAL (HEADLINE 1:1 COM A REFERÊNCIA)
          ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2 sm:pt-6 text-center select-none pointer-events-none">
        <h1 className="font-heading font-black text-[2.75rem] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6.4rem] tracking-tight text-white leading-[1.02] uppercase drop-shadow-2xl">
          <span className="block sm:inline">ELEVATE YOUR </span>
          <span className="block sm:inline">FITNESS FOR</span>
          <br className="hidden sm:inline" />
          <span className="block sm:inline sm:mr-4"> HEALTH </span>
          <span className="block sm:inline text-white/90">AND VITALITY.</span>
        </h1>
      </div>

      {/* =========================================================================
          3. COMPOSIÇÃO CENTRAL: O ATLETA E OS BALÕES FLUTUANTES INTERATIVOS
          ========================================================================= */}
      <div className="relative w-full max-w-6xl mx-auto px-4 flex-1 flex items-center justify-center my-[-2.2rem] sm:my-[-3.8rem] lg:my-[-5rem] z-20">
        
        {/* Container do Atleta com Máscara de Fade no Fundo */}
        <div className="relative w-[310px] sm:w-[440px] md:w-[520px] lg:w-[580px] max-w-full aspect-[3/4] flex items-center justify-center">
          
          {/* Brilho neon de silhueta suave atrás da foto */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-[#C6FF00]/12 to-transparent blur-2xl transform scale-90" />

          {/* Imagem do Homem Muscular com Halteres da Referência */}
          <img
            src="/images/hero_athlete.jpg"
            alt="Atleta fitness com físico definido segurando halteres"
            className="w-full h-full object-contain object-bottom filter contrast-[1.12] brightness-[1.03] transition-transform duration-700 hover:scale-[1.02]"
            style={{
              maskImage: 'linear-gradient(to bottom, black 82%, transparent 99%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 99%)'
            }}
          />

          {/* =====================================================================
              BALÃO 1: FITNESS GYM / 4 EXERCISE + EQUALIZADOR NEON (SUPERIOR ESQUERDO)
              ===================================================================== */}
          <div 
            className="absolute -top-2 left-2 sm:-left-8 md:-left-12 p-3 sm:p-4 rounded-2xl hero-glass-card cursor-pointer transition-all duration-300 hover:scale-105 animate-float-slow z-30"
            title="Clique para ver o progresso da série"
          >
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Dumbbell className="w-4 h-4 text-[#C6FF00]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-semibold text-[#9FA1AC] tracking-wider uppercase">Fitness Gym</div>
                <div className="text-xs sm:text-sm font-bold text-white">4 Exercise</div>
              </div>
            </div>

            {/* Mini Equalizador / Gráfico de Barras do Treino em Verde Neon */}
            <div className="flex items-end gap-1.5 h-7 pt-1 px-1">
              <div className="w-1.5 bg-white/40 rounded-full h-3 animate-pulse" />
              <div className="w-1.5 bg-white/70 rounded-full h-5" />
              <div className="w-1.5 bg-[#C6FF00] rounded-full h-6 shadow-[0_0_8px_#C6FF00]" />
              <div className="w-1.5 bg-white/50 rounded-full h-4" />
              <div className="w-1.5 bg-[#C6FF00] rounded-full h-7 shadow-[0_0_10px_#C6FF00]" />
              <div className="w-1.5 bg-white/80 rounded-full h-5" />
            </div>
          </div>

          {/* =====================================================================
              BALÃO 2: HEARTBEAT / 124 BPM (INFERIOR ESQUERDO)
              ===================================================================== */}
          <div 
            onClick={handlePulseBpm}
            className="absolute bottom-16 -left-3 sm:-left-10 md:-left-16 p-3 sm:p-3.5 rounded-2xl hero-glass-card cursor-pointer transition-all duration-300 hover:scale-105 animate-float-reverse z-30 group"
            title="Clique para simular batimento em treino de alta intensidade"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-[#C6FF00]/15 border border-[#C6FF00]/30 flex items-center justify-center text-[#C6FF00]">
                <Heart className={`w-5 h-5 fill-current ${isBpmActive ? 'animate-heart-beat text-[#C6FF00]' : 'text-white'}`} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C6FF00] animate-ping" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-[#9FA1AC] tracking-wider uppercase flex items-center gap-1">
                  <span>Heartbeat</span>
                  <Activity className="w-3 h-3 text-[#C6FF00]" />
                </div>
                <div className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1">
                  <span>{bpm}</span>
                  <span className="text-[11px] text-[#9FA1AC] font-semibold">BPM</span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              BALÃO 3: CALORIES / 44411 KCAL (SUPERIOR DIREITO)
              ===================================================================== */}
          <div 
            onClick={() => setCalories((prev) => prev + 250)}
            className="absolute top-10 -right-2 sm:-right-8 md:-right-14 p-3 sm:p-3.5 rounded-2xl hero-glass-card cursor-pointer transition-all duration-300 hover:scale-105 animate-float-slow z-30"
            title="Clique para queimar mais calorias!"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 flex items-center justify-center text-[#FF5E3A] orange-glow">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-[#9FA1AC] tracking-wider uppercase">Calories</div>
                <div className="text-sm sm:text-base font-extrabold text-white">
                  {calories.toLocaleString('en-US')} <span className="text-[11px] text-[#FF5E3A] font-semibold">Kcal</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          4. MÉTRICAS LATERAIS INFERIORES E TREINADORES (BOTTOM FLANKS)
          ========================================================================= */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 pb-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/[0.08]">
          
          {/* Lado Esquerdo: Estatísticas dos Alunos e Aulas */}
          <div className="flex items-center gap-8 text-left w-full sm:w-auto justify-around sm:justify-start">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">120+</div>
              <div className="text-xs text-[#9FA1AC] font-medium">Active Students</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">240+</div>
              <div className="text-xs text-[#9FA1AC] font-medium">Online Classes</div>
            </div>
          </div>

          {/* Centro: Chamada para Ação / Botões da Plataforma com Verde Neon */}
          <div className="flex items-center gap-3.5 order-last sm:order-none">
            <button
              onClick={onOpenInterest}
              className="px-6 sm:px-8 py-3 rounded-full btn-neon font-bold text-sm tracking-wide transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Começar Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onExplore}
              className="px-5 sm:px-6 py-3 rounded-full btn-outline-neon text-sm flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#C6FF00]" />
              <span>Ver Demonstração</span>
            </button>
          </div>

          {/* Lado Direito: Treinadores + Avatar Stack + Botão Plus Verde Neon */}
          <div className="flex items-center gap-3.5 w-full sm:w-auto justify-end">
            <div className="text-right">
              <div className="text-lg sm:text-xl font-black font-heading text-white tracking-tight leading-tight">50+</div>
              <div className="text-[11px] font-bold text-[#9FA1AC] tracking-wider uppercase">Fitness Trainers</div>
            </div>

            {/* Avatares dos Treinadores com Botão Neon (+) */}
            <div className="flex items-center -space-x-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                alt="Trainer"
                className="w-10 h-10 rounded-full border-2 border-[#08080A] object-cover bg-[#1A1B22]"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Trainer"
                className="w-10 h-10 rounded-full border-2 border-[#08080A] object-cover bg-[#1A1B22]"
              />
              <button 
                onClick={onOpenInterest}
                className="w-10 h-10 rounded-full bg-[#C6FF00] border-2 border-[#08080A] text-[#08080A] flex items-center justify-center font-black neon-glow-sm transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                title="Conheça todos os treinadores"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

import React, { useState } from 'react';
import { Heart, Flame, Maximize2, TrendingUp, CheckCircle2 } from 'lucide-react';

export const DynamicExperience: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'heart' | 'cal'>('heart');

  return (
    <section id="experiencia" className="py-20 sm:py-28 bg-[#08080A] relative overflow-hidden">
      
      {/* Halo de luz sutil no fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#C6FF00]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho com Badge da Referência */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6FF00] text-[#08080A] text-xs font-black uppercase tracking-wider mb-4 neon-glow-sm">
            <span>Our Classes</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
            Dive Into Our Dynamic Fitness Experience
          </h2>
        </div>

        {/* Grid com os 2 Cards Fotográficos Grandes e o Divisor Métrico Central */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 sm:gap-8 items-center">
          
          {/* ===================================================================
              CARD 1: MUSCLE MAX (ESQUERDA)
              =================================================================== */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#131418] border border-white/[0.08] aspect-[4/5] sm:aspect-[3/4]">
              
              {/* Imagem Fotográfica da Atleta */}
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80"
                alt="Treino Muscle Max"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-[1.08] brightness-[0.92]"
              />

              {/* Gradiente Escuro Inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-transparent" />

              {/* Card Flutuante 1: Gráfico de Evolução (Feb, Mar, Apr, May) da Referência */}
              <div className="absolute top-1/2 right-4 -translate-y-1/2 p-3 sm:p-4 rounded-2xl bg-[#08080A]/90 backdrop-blur-md border border-white/10 shadow-2xl z-20 hidden sm:block">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-[10px] font-bold text-[#9FA1AC] uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#C6FF00]" />
                    Progress
                  </span>
                  <span className="text-[10px] text-[#C6FF00] font-mono font-bold">+28%</span>
                </div>
                {/* Mini Gráfico de Barras com Meses */}
                <div className="flex items-end gap-2 h-12 pt-2 px-1">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-2.5 bg-white/20 rounded-full h-4" />
                    <span className="text-[8px] text-white/50">Feb</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-2.5 bg-white/40 rounded-full h-6" />
                    <span className="text-[8px] text-white/50">Mar</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-2.5 bg-white/70 rounded-full h-8" />
                    <span className="text-[8px] text-white/50">Apr</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-2.5 bg-[#C6FF00] rounded-full h-11 shadow-[0_0_8px_#C6FF00]" />
                    <span className="text-[8px] text-[#C6FF00] font-bold">May</span>
                  </div>
                </div>
              </div>

              {/* Bloco de Texto Inferior: Muscle Max */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold mb-3">
                  <Maximize2 className="w-3 h-3 text-[#C6FF00]" />
                  <span>Muscle Max</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
                  Maximize Muscle Growth Through Resistance Training, Protein Intake, And Adequate Rest.
                </p>
              </div>

            </div>
          </div>

          {/* ===================================================================
              DIVISOR CENTRAL: BALÃO VERTICAL MÉTRICO (CENTRO)
              =================================================================== */}
          <div className="lg:col-span-1 flex lg:flex-col justify-center items-center gap-4 py-4">
            
            {/* Heartbeat Badge */}
            <div
              onClick={() => setActiveMetric('heart')}
              className={`p-3 sm:p-4 rounded-2xl hero-glass-card cursor-pointer transition-all duration-300 text-center ${
                activeMetric === 'heart' ? 'border-[#C6FF00]/50 scale-105' : 'opacity-80'
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#C6FF00]/15 flex items-center justify-center text-[#C6FF00] mx-auto mb-1.5">
                <Heart className="w-4 h-4 fill-current animate-heart-beat" />
              </div>
              <div className="text-[9px] font-bold text-[#9FA1AC] uppercase">HEARTBEAT</div>
              <div className="text-xs sm:text-sm font-extrabold text-white">124 BPM</div>
            </div>

            {/* Calories Badge */}
            <div
              onClick={() => setActiveMetric('cal')}
              className={`p-3 sm:p-4 rounded-2xl hero-glass-card cursor-pointer transition-all duration-300 text-center ${
                activeMetric === 'cal' ? 'border-[#FF5E3A]/50 scale-105' : 'opacity-80'
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#FF5E3A]/15 flex items-center justify-center text-[#FF5E3A] mx-auto mb-1.5">
                <Flame className="w-4 h-4 fill-current" />
              </div>
              <div className="text-[9px] font-bold text-[#9FA1AC] uppercase">CALORIES</div>
              <div className="text-xs sm:text-sm font-extrabold text-white">44411 Kcal</div>
            </div>

          </div>

          {/* ===================================================================
              CARD 2: CORE CRUSHER (DIREITA)
              =================================================================== */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#131418] border border-white/[0.08] aspect-[4/5] sm:aspect-[3/4]">
              
              {/* Imagem Fotográfica da Atleta na Barra */}
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80"
                alt="Treino Core Crusher"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter contrast-[1.08] brightness-[0.92]"
              />

              {/* Gradiente Escuro Inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-transparent" />

              {/* Card Flutuante 2: Gym 2 Exercise Left da Referência */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 p-3 sm:p-4 rounded-2xl bg-[#08080A]/90 backdrop-blur-md border border-white/10 shadow-2xl z-20 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5E3A] text-white flex items-center justify-center font-bold text-xs">
                    2.5 Lb
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">Gym Routine</div>
                    <div className="text-[10px] text-[#FF5E3A] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>2 Exercise Left</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bloco de Texto Inferior: Core Crusher */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-bold mb-3">
                  <Maximize2 className="w-3 h-3 text-[#C6FF00]" />
                  <span>Core Crusher</span>
                </div>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
                  An Intense Core-Focused Workout Aimed At Strengthening And Toning Abdominal And Lower Back Muscles.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

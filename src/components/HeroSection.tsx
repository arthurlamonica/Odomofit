import React from 'react';
import { ArrowRight, Play, Flame, Dumbbell, TrendingUp, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenInterest: () => void;
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenInterest, onExplore }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center overflow-hidden bg-[#080B0B]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#C6FF00]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C6FF00 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F2224] border border-[#2D3236]">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-pulse" />
              <span className="text-xs font-semibold text-[#A7A7A7] tracking-wider uppercase">
                A nova geração do fitness social
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight font-heading">
              Seu treino.{' '}
              <span className="text-[#C6FF00] inline-block relative">
                Sua evolução.
                <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#C6FF00]/40 rounded-full" />
              </span>{' '}
              Sua comunidade.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#A7A7A7] max-w-2xl font-normal leading-relaxed">
              O Gymstagram conecta você a uma comunidade que treina, evolui e compartilha resultados. 
              Organize seus treinos, acompanhe seu progresso e tenha as ferramentas certas para ir mais longe.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenInterest}
                className="px-7 py-4 rounded-xl bg-[#C6FF00] text-[#080B0B] font-extrabold text-base tracking-tight hover:bg-[#b8f000] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 lime-glow flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
              >
                <span>Começar gratuitamente</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={onExplore}
                className="px-6 py-4 rounded-xl bg-[#1F2224] border border-[#2D3236] text-white font-semibold text-base hover:border-[#C6FF00] hover:text-[#C6FF00] hover:bg-[#25292c] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Conhecer a plataforma</span>
              </button>
            </div>

            {/* Value Statement Badge */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#A7A7A7] border-t border-[#1F2224]">
              <div className="flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C6FF00]" />
                <span>Para quem treina.</span>
              </div>
              <span className="text-[#2D3236]">•</span>
              <div className="flex items-center gap-1.5 text-white font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#C6FF00]" />
                <span>Para quem orienta.</span>
              </div>
              <span className="text-[#2D3236]">•</span>
              <div className="flex items-center gap-1.5 text-[#C6FF00] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#C6FF00]" />
                <span>Para quem quer evoluir.</span>
              </div>
            </div>

            {/* Quick social proof counter */}
            <div className="grid grid-cols-3 gap-4 pt-4 max-w-lg">
              <div className="bg-[#1F2224]/60 p-3 rounded-lg border border-[#2D3236]">
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">100%</div>
                <div className="text-xs text-[#A7A7A7]">Foco em Musculação</div>
              </div>
              <div className="bg-[#1F2224]/60 p-3 rounded-lg border border-[#2D3236]">
                <div className="text-xl sm:text-2xl font-bold font-heading text-[#C6FF00]">+4.5k</div>
                <div className="text-xs text-[#A7A7A7]">Na Lista de Espera</div>
              </div>
              <div className="bg-[#1F2224]/60 p-3 rounded-lg border border-[#2D3236]">
                <div className="text-xl sm:text-2xl font-bold font-heading text-white">Social + Pro</div>
                <div className="text-xs text-[#A7A7A7]">Alunos e Personais</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Floating Cards */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            {/* Main Framed Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-[#2D3236] shadow-2xl bg-[#1F2224] group">
              <img
                src="/images/arte_hero.png"
                alt="Atleta Gymstagram na academia moderna"
                className="w-full h-[480px] sm:h-[540px] object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080B0B] via-transparent to-transparent opacity-80" />

              {/* Bottom overlay info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-xl bg-[#080B0B]/85 backdrop-blur-md border border-[#2D3236]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1F2224] border-2 border-[#C6FF00] overflow-hidden flex items-center justify-center font-bold text-white text-sm">
                    GS
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-tight">Arthur Ramos</h2>
                    <p className="text-xs text-[#A7A7A7]">Treino A • Supino 84kg</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#C6FF00]/15 text-[#C6FF00] font-bold text-xs">
                  Novo PR!
                </span>
              </div>
            </div>

            {/* Floating Widget 1: Streak / Sequência */}
            <div className="absolute -top-4 -left-4 sm:-left-8 p-3.5 rounded-xl bg-[#080B0B]/95 backdrop-blur-md border border-[#2D3236] shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
              <div className="w-10 h-10 rounded-lg bg-[#C6FF00]/15 flex items-center justify-center text-[#C6FF00]">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#A7A7A7]">Sequência Ativa</div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>18 dias seguidos</span>
                  <span className="text-xs text-[#C6FF00] font-bold">🔥</span>
                </div>
              </div>
            </div>

            {/* Floating Widget 2: Gráfico de Sobrecarga Progressiva */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 p-4 rounded-xl bg-[#080B0B]/95 backdrop-blur-md border border-[#2D3236] shadow-2xl max-w-[240px]">
              <div className="flex items-center justify-between pb-2 border-b border-[#1F2224] mb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#C6FF00]" />
                  Evolução Cargas
                </span>
                <span className="text-[11px] font-bold text-[#C6FF00]">+12.5%</span>
              </div>
              <div className="flex items-end gap-1.5 h-12 pt-2">
                <div className="flex-1 bg-[#1F2224] rounded-t h-4" />
                <div className="flex-1 bg-[#1F2224] rounded-t h-6" />
                <div className="flex-1 bg-[#1F2224] rounded-t h-7" />
                <div className="flex-1 bg-[#C6FF00]/40 rounded-t h-9" />
                <div className="flex-1 bg-[#C6FF00] rounded-t h-12 shadow-[0_0_10px_#C6FF00]" />
              </div>
              <div className="text-[10px] text-[#A7A7A7] mt-1.5 flex justify-between">
                <span>Semana 1</span>
                <span className="text-white font-semibold">Semana 4 (84kg)</span>
              </div>
            </div>

            {/* Floating Widget 3: Atividade Concluída */}
            <div className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 p-3 rounded-xl bg-[#1F2224]/90 backdrop-blur-md border border-[#2D3236] shadow-xl items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#C6FF00] text-[#080B0B] flex items-center justify-center font-bold">
                <Dumbbell className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-[#A7A7A7]">Sessão de Hoje</div>
                <div className="text-xs font-bold text-white">6 de 6 Concluídos</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

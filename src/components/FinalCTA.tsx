import React from 'react';
import { ArrowRight, Flame, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenInterest: () => void;
  onExplore: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInterest, onExplore }) => {
  return (
    <section className="py-24 bg-[#080B0B] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C6FF00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#1F2224] to-[#121415] rounded-3xl p-8 sm:p-14 border border-[#C6FF00]/30 shadow-2xl text-center relative overflow-hidden lime-glow">
          
          {/* Subtle Accent Glow Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6FF00]/15 rounded-bl-full blur-2xl" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080B0B] border border-[#2D3236] mb-6">
            <Flame className="w-4 h-4 text-[#C6FF00] fill-current" />
            <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-wider">
              Dê o primeiro passo hoje
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto font-heading">
            Seu próximo nível começa com o{' '}
            <span className="text-[#C6FF00]">próximo treino.</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#A7A7A7] max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            Organize sua rotina, compartilhe sua evolução e encontre uma comunidade que também acredita no poder da consistência.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={onOpenInterest}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C6FF00] text-[#080B0B] font-extrabold text-base tracking-tight hover:bg-[#b8f000] hover:scale-105 active:scale-[0.98] transition-all duration-200 lime-glow flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Começar gratuitamente</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={onExplore}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#080B0B] border border-[#2D3236] text-white font-semibold text-base hover:border-[#C6FF00] hover:text-[#C6FF00] transition-colors cursor-pointer"
            >
              Conhecer os recursos
            </button>
          </div>

          {/* Key reassurance */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-[#2D3236]/60 text-xs text-[#A7A7A7]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C6FF00]" />
              <span>100% gratuito para começar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C6FF00]" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#C6FF00]" />
              <span>Acesso imediato à comunidade</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

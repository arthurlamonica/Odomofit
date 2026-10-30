import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Dumbbell, Flame, BicepsFlexed, Apple } from 'lucide-react';

interface ProgramItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

export const ExploreProgram: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Fat Lose selecionado por padrão como na referência

  const programs: ProgramItem[] = [
    {
      id: 'cardio-strength',
      title: 'Força e Cárdio',
      description:
        'Combine treinos cardiovasculares com fortalecimento muscular para uma evolução completa que potencializa a saúde cardíaca e a força funcional.',
      icon: <Dumbbell className="w-5 h-5" />,
      tag: 'Resistência & Cárdio'
    },
    {
      id: 'fat-lose',
      title: 'Queima de Gordura',
      description:
        'Reduza a gordura corporal e acelere seu metabolismo através de treinos disciplinados, sobrecarga progressiva e nutrição inteligente.',
      icon: <Flame className="w-5 h-5" />,
      tag: 'Queima Acelerada'
    },
    {
      id: 'muscle-gain',
      title: 'Ganho de Massa',
      description:
        'Construa massa muscular densa com exercícios direcionados de hipertrofia e distribuição ideal de macronutrientes para o crescimento muscular.',
      icon: <BicepsFlexed className="w-5 h-5" />,
      tag: 'Hipertrofia Pura'
    },
    {
      id: 'nutrition',
      title: 'Nutrição Esportiva',
      description:
        'Uma alimentação balanceada e planejada cientificamente fornece os nutrientes e a energia necessários para sustentar o pico de performance atlética.',
      icon: <Apple className="w-5 h-5" />,
      tag: 'Dieta & Performance'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="programas" className="relative z-10 py-20 sm:py-28 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Título e Setas de Navegação */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-['Montserrat'] uppercase tracking-widest text-[#C6FF00] font-extrabold block mb-1">
              Metodologia de Alta Performance
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Explore Nossos Programas
            </h2>
          </div>

          {/* Setas Redondas da Referência */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:border-white/50 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Programa Anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#C6FF00] text-[#08080A] flex items-center justify-center font-bold neon-glow-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Próximo Programa"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grade de 4 Cards (com o card ativo em Verde Neon como no modelo) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={prog.id}
                onClick={() => setActiveIndex(idx)}
                className={`rounded-[1.75rem] p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[310px] relative ${
                  isActive
                    ? 'bg-[#C6FF00] text-[#08080A] shadow-[0_20px_50px_rgba(198,255,0,0.35)] scale-[1.02] border border-[#C6FF00]'
                    : 'bg-[#121318] text-white border border-white/[0.08] hover:border-white/20 hover:bg-[#161820]'
                }`}
              >
                {/* Ícone Redondo */}
                <div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-colors ${
                      isActive
                        ? 'bg-[#08080A] text-[#C6FF00]'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    {prog.icon}
                  </div>

                  <h3
                    className={`font-heading font-extrabold text-xl mb-3 ${
                      isActive ? 'text-[#08080A]' : 'text-white'
                    }`}
                  >
                    {prog.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isActive ? 'text-[#08080A]/85 font-medium' : 'text-[#9FA1AC]'
                    }`}
                  >
                    {prog.description}
                  </p>
                </div>

                {/* Tag de categoria inferior */}
                <div className="pt-6 border-t border-current/15 flex items-center justify-between text-[11px] font-semibold font-['Montserrat']">
                  <span className={isActive ? 'text-[#08080A]/70' : 'text-[#9FA1AC]'}>
                    {prog.tag}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#08080A]' : 'bg-[#C6FF00]'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

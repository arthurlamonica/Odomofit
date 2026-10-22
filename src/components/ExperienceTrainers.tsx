import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';

interface TrainerItem {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  experience: string;
}

interface ExperienceTrainersProps {
  onSchedule?: (trainerName: string) => void;
}

export const ExperienceTrainers: React.FC<ExperienceTrainersProps> = ({ onSchedule }) => {
  const [activeTrainerIndex, setActiveTrainerIndex] = useState<number>(0);

  const trainers: TrainerItem[] = [
    {
      id: 'esther-howard',
      name: 'Esther Howard',
      role: 'Líder de Força & Condicionamento',
      specialty: 'Hipertrofia, Força Pura e Biomecânica',
      experience: '8+ anos de experiência',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'leslie-alexander',
      name: 'Leslie Alexander',
      role: 'Mestre em Resistência & Treino Metabólico',
      specialty: 'Definição Extrema, HIIT e Mobilidade',
      experience: '10+ anos de experiência',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 'jacob-jones',
      name: 'Jacob Jones',
      role: 'Especialista em Performance Atlética',
      specialty: 'Recuperação Funcional, Potência e Nutrição Esportiva',
      experience: '7+ anos de experiência',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const handlePrev = () => {
    setActiveTrainerIndex((prev: number) => (prev === 0 ? trainers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveTrainerIndex((prev: number) => (prev === trainers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="treinadores" className="py-20 sm:py-28 bg-[#08080A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF00] font-bold block mb-1">
              Corpo Docente Especializado
            </span>
            <h2 className="font-heading font-black text-2xl sm:text-4xl text-white uppercase tracking-tight max-w-xl">
              Conheça Nossa Equipe de Treinadores Especialistas
            </h2>
          </div>

          {/* Botões de Navegação Redondos */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-white/20 bg-white/5 hover:border-white/50 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Treinador Anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#C6FF00] text-[#08080A] flex items-center justify-center font-bold neon-glow-sm transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Próximo Treinador"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grade de 3 Cards de Treinadores da Referência */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => {
            const isHighlighted = idx === activeTrainerIndex;

            return (
              <div
                key={trainer.id}
                onClick={() => setActiveTrainerIndex(idx)}
                className={`group relative rounded-[2rem] overflow-hidden bg-[#121318] border transition-all duration-300 cursor-pointer flex flex-col ${
                  isHighlighted
                    ? 'border-[#C6FF00] shadow-[0_20px_45px_rgba(198,255,0,0.18)] scale-[1.02]'
                    : 'border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Imagem do Treinador */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#0D0E12]">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-[1.1] brightness-[0.95] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  
                  {/* Gradiente sutil inferior */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent" />

                  {/* Badge de Experiência flutuante */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#08080A]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#C6FF00] font-bold">
                    {trainer.experience}
                  </div>
                </div>

                {/* Nome do Treinador da Referência */}
                <div className="p-6 text-center space-y-2">
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-[#C6FF00] font-semibold uppercase tracking-wider">
                    {trainer.role}
                  </p>
                  <p className="text-xs text-[#9FA1AC] leading-relaxed pt-1">
                    {trainer.specialty}
                  </p>

                  <div className="pt-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onSchedule) onSchedule(trainer.name);
                      }}
                      className="w-full py-2.5 rounded-full border border-white/15 text-xs font-semibold text-white/90 hover:border-[#C6FF00] hover:text-[#C6FF00] hover:bg-[#C6FF00]/5 transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C6FF00]" />
                      <span>Agendar Consultoria</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

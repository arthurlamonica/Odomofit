import React, { useState } from 'react';
import { Footprints, Heart, CheckCircle2 } from 'lucide-react';

interface CycleStep {
  number: number;
  title: string;
  description: string;
  duration: string;
}

export const TrainingCycle: React.FC = () => {
  const [activeStep, setActiveStep] = useState(3); // Strength ativo por padrão

  const steps: CycleStep[] = [
    {
      number: 1,
      title: 'Warm Up',
      description:
        'Begin with 5-10 minutes of gentle cardio like walking, jogging, or cycling to warm up and get your blood flowing.',
      duration: '5 - 10 min'
    },
    {
      number: 2,
      title: 'Cardio',
      description:
        'Perform 20-30 minutes of moderate to vigorous aerobic activity such as running, cycling, swimming, or dancing.',
      duration: '20 - 30 min'
    },
    {
      number: 3,
      title: 'Strength',
      description:
        'Perform 20-30 minutes of targeted resistance strength exercises with progressive overload to build lean muscle density.',
      duration: '30 - 45 min'
    },
    {
      number: 4,
      title: 'Cool Down',
      description:
        'Conclude with 5-10 minutes of light activity like walking or gentle stretching to cool down and aid muscular recovery.',
      duration: '5 - 10 min'
    },
    {
      number: 5,
      title: 'Rest',
      description:
        'Get adequate sleep, stay hydrated, and eat a balanced diet to support your fitness goals, hormonal balance and recovery.',
      duration: '7 - 8 hrs'
    },
    {
      number: 6,
      title: 'Progression',
      description:
        'Gradually increase the intensity, duration, or resistance of your workouts as your physiological fitness level improves.',
      duration: 'Contínuo'
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-[#08080A] relative overflow-hidden">
      
      {/* Halo de Luz Neon Central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C6FF00]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF00] font-bold block mb-2">
            Metodologia Biomecânica em 6 Fases
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
            The Complete Fitness & Longevity Cycle
          </h2>
        </div>

        {/* Infográfico Circular Central com os 6 Balões em Órbita */}
        <div className="relative max-w-5xl mx-auto min-h-[700px] flex items-center justify-center">
          
          {/* Anel de Órbita SVG */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden md:flex">
            <div className="w-[580px] h-[580px] rounded-full border border-white/[0.06] border-dashed" />
            <div className="absolute w-[440px] h-[440px] rounded-full border border-[#C6FF00]/10" />
          </div>

          {/* ===================================================================
              CENTRO: FOTO CIRCULAR DO TREINADOR COM BADGES FLUTUANTES
              =================================================================== */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-[#C6FF00] via-white/20 to-transparent shadow-[0_0_50px_rgba(198,255,0,0.2)] z-20">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#131418] relative">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80"
                alt="Treinador Responsável"
                className="w-full h-full object-cover filter contrast-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/60 via-transparent to-transparent" />
            </div>

            {/* Badges Flutuantes Circulares da Referência */}
            {/* 1. Footprints / Passos */}
            <div className="absolute -top-3 right-6 w-10 h-10 rounded-full bg-[#181920] border border-white/20 flex items-center justify-center text-[#C6FF00] shadow-xl animate-bounce">
              <Footprints className="w-4 h-4" />
            </div>

            {/* 2. Heart / Batimento */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[#181920] border border-white/20 flex items-center justify-center text-[#C6FF00] shadow-xl">
              <Heart className="w-4 h-4 fill-current animate-heart-beat" />
            </div>

            {/* 3. Checkmarks / Metas */}
            <div className="absolute -bottom-2 right-10 w-10 h-10 rounded-full bg-[#C6FF00] text-[#08080A] flex items-center justify-center font-bold shadow-xl">
              <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>

          {/* ===================================================================
              OS 6 CARDS EM ÓRBITA DA REFERÊNCIA (POSICIONADOS E RESPONSIVOS)
              =================================================================== */}
          
          {/* FASE 1: WARM UP (Superior Esquerdo) */}
          <div
            onClick={() => setActiveStep(1)}
            className={`cursor-pointer transition-all duration-300 md:absolute md:top-0 md:left-4 max-w-xs p-5 rounded-2xl brand-card my-3 md:my-0 ${
              activeStep === 1
                ? 'border-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.25)] bg-[#181920]'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-extrabold text-base text-white">Warm Up</h3>
              <span className="w-6 h-6 rounded-full bg-white/10 text-[11px] font-mono font-bold flex items-center justify-center text-[#C6FF00]">
                1
              </span>
            </div>
            <p className="text-xs text-[#9FA1AC] leading-relaxed">
              {steps[0].description}
            </p>
          </div>

          {/* FASE 2: CARDIO (Meio Esquerdo) */}
          <div
            onClick={() => setActiveStep(2)}
            className={`cursor-pointer transition-all duration-300 md:absolute md:top-1/2 md:-translate-y-1/2 md:-left-12 max-w-xs p-5 rounded-2xl brand-card my-3 md:my-0 ${
              activeStep === 2
                ? 'border-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.25)] bg-[#181920]'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-extrabold text-base text-white">Cardio</h3>
              <span className="w-6 h-6 rounded-full bg-white/10 text-[11px] font-mono font-bold flex items-center justify-center text-[#C6FF00]">
                2
              </span>
            </div>
            <p className="text-xs text-[#9FA1AC] leading-relaxed">
              {steps[1].description}
            </p>
          </div>

          {/* FASE 3: STRENGTH (Inferior Esquerdo) */}
          <div
            onClick={() => setActiveStep(3)}
            className={`cursor-pointer transition-all duration-300 md:absolute md:bottom-2 md:left-6 max-w-xs p-5 rounded-2xl brand-card my-3 md:my-0 ${
              activeStep === 3
                ? 'border-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.25)] bg-[#181920]'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-extrabold text-base text-white">Strength</h3>
              <span className="w-6 h-6 rounded-full bg-white/10 text-[11px] font-mono font-bold flex items-center justify-center text-[#C6FF00]">
                3
              </span>
            </div>
            <p className="text-xs text-[#9FA1AC] leading-relaxed">
              {steps[2].description}
            </p>
          </div>

          {/* FASE 4: COOL DOWN (Superior Direito) */}
          <div
            onClick={() => setActiveStep(4)}
            className={`cursor-pointer transition-all duration-300 md:absolute md:top-0 md:right-4 max-w-xs p-5 rounded-2xl brand-card my-3 md:my-0 ${
              activeStep === 4
                ? 'border-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.25)] bg-[#181920]'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-extrabold text-base text-white">Cool Down</h3>
              <span className="w-6 h-6 rounded-full bg-white/10 text-[11px] font-mono font-bold flex items-center justify-center text-[#C6FF00]">
                4
              </span>
            </div>
            <p className="text-xs text-[#9FA1AC] leading-relaxed">
              {steps[3].description}
            </p>
          </div>

          {/* FASE 5: REST (Meio Direito) */}
          <div
            onClick={() => setActiveStep(5)}
            className={`cursor-pointer transition-all duration-300 md:absolute md:top-1/2 md:-translate-y-1/2 md:-right-12 max-w-xs p-5 rounded-2xl brand-card my-3 md:my-0 ${
              activeStep === 5
                ? 'border-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.25)] bg-[#181920]'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-extrabold text-base text-white">Rest</h3>
              <span className="w-6 h-6 rounded-full bg-white/10 text-[11px] font-mono font-bold flex items-center justify-center text-[#C6FF00]">
                5
              </span>
            </div>
            <p className="text-xs text-[#9FA1AC] leading-relaxed">
              {steps[4].description}
            </p>
          </div>

          {/* FASE 6: PROGRESSION (Inferior Direito) */}
          <div
            onClick={() => setActiveStep(6)}
            className={`cursor-pointer transition-all duration-300 md:absolute md:bottom-2 md:right-6 max-w-xs p-5 rounded-2xl brand-card my-3 md:my-0 ${
              activeStep === 6
                ? 'border-[#C6FF00] shadow-[0_0_30px_rgba(198,255,0,0.25)] bg-[#181920]'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-heading font-extrabold text-base text-white">Progression</h3>
              <span className="w-6 h-6 rounded-full bg-white/10 text-[11px] font-mono font-bold flex items-center justify-center text-[#C6FF00]">
                6
              </span>
            </div>
            <p className="text-xs text-[#9FA1AC] leading-relaxed">
              {steps[5].description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

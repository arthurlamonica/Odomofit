import React from 'react';
import { ArrowUpRight, Check, Zap } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: 'standard',
      name: 'Standard Plan',
      price: 'R$ 89',
      period: '/mês',
      description: 'Ideal para quem está iniciando e busca consistência com rotinas guiadas.',
      isFeatured: false,
      features: [
        'Unlimited Gym Access',
        '2x Fitness Consultant',
        'Nutrition Tracking',
        '3 Days Per Week Access'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 'R$ 149',
      period: '/mês',
      description: 'O plano mais procurado por praticantes que buscam evolução máxima e suporte.',
      isFeatured: true,
      features: [
        'Unlimited Gym Access',
        '7x Fitness Consultant',
        'Nutrition Tracking',
        'Official Gym Card VIP',
        'Dedicated Personal Trainer'
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced Plan',
      price: 'R$ 229',
      period: '/mês',
      description: 'A experiência definitiva com suporte biomecânico diário e bioimpedância.',
      isFeatured: false,
      features: [
        'Unlimited Gym Access',
        '10x Fitness Consultant',
        'Nutrition Tracking',
        'Official Gym Card VIP',
        'All Programs & Masters Included'
      ]
    }
  ];

  return (
    <section id="precos" className="py-20 sm:py-32 bg-[#08080A] relative overflow-hidden">
      
      {/* Halo de Luz Neon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C6FF00]/6 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção com Badge da Referência */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6FF00] text-[#08080A] text-xs font-black uppercase tracking-wider mb-4 neon-glow-sm">
            <span>Our Pricing</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-tight">
            Choose Your Pricing Plan
          </h2>
        </div>

        {/* Grade de 3 Cards da Referência */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isFeatured
                  ? 'bg-[#15161C] border-2 border-[#C6FF00] shadow-[0_20px_50px_rgba(198,255,0,0.18)] md:scale-105 z-20'
                  : 'bg-[#121318] border border-white/[0.08] hover:border-white/20 hover:bg-[#161820]'
              }`}
            >
              {/* Badge Popular para o plano em destaque */}
              {plan.isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C6FF00] text-[#08080A] text-[11px] font-black uppercase tracking-wider flex items-center gap-1 neon-glow-sm">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                {/* Nome do Plano */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-4">
                  {plan.name}
                </h3>

                {/* Preço Monumental da Referência */}
                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#9FA1AC] font-medium font-mono">
                    {plan.period}
                  </span>
                </div>

                {/* Lista de Benefícios */}
                <ul className="space-y-4 mb-10 text-xs sm:text-sm text-[#9FA1AC]">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          plan.isFeatured
                            ? 'bg-[#C6FF00]/20 text-[#C6FF00]'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span className={plan.isFeatured ? 'text-white/95 font-medium' : ''}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão Join Now com Seta da Referência */}
              <div>
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer magnetic-btn ${
                    plan.isFeatured
                      ? 'btn-neon shadow-lg'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                  }`}
                >
                  <span>Join Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

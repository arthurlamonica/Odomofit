import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Planos & Assinaturas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Encontre a experiência ideal{' '}
            <span className="text-[#C6FF00]">para sua jornada.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Comece 100% de graça ou antecipe seu acesso aos recursos avançados de análise e consultoria.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isHighlighted = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                  isHighlighted
                    ? 'bg-[#1F2224] border-2 border-[#C6FF00] lime-glow-sm lg:-translate-y-3'
                    : 'bg-[#1F2224] border border-[#2D3236] hover:border-[#A7A7A7]'
                }`}
              >
                {/* Floating Tag */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-[#C6FF00] text-[#080B0B] text-xs font-extrabold uppercase tracking-wider shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold text-[#A7A7A7] uppercase tracking-wider">
                    {plan.targetAudience}
                  </div>
                  <h3 className="text-2xl font-extrabold text-white font-heading mt-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#A7A7A7] mt-1 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price Banner */}
                  <div className="my-6 p-4 rounded-xl bg-[#080B0B] border border-[#2D3236]">
                    <div className="text-xs text-[#A7A7A7]">Status de Lançamento</div>
                    <div className="text-lg font-bold text-[#C6FF00] mt-0.5 font-heading">
                      {plan.priceNote}
                    </div>
                    <div className="text-[11px] text-[#A7A7A7] mt-1">
                      {plan.id === 'plano-gratuito' ? 'Sem necessidade de cartão de crédito' : 'Valores finais em breve no lançamento oficial'}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                      O que está incluído:
                    </div>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-[#C6FF00]/15 text-[#C6FF00] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8 mt-6 border-t border-[#2D3236]">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm tracking-tight transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#C6FF00] text-[#080B0B] hover:bg-[#b8f000] hover:scale-[1.02] lime-glow-sm'
                        : 'bg-[#080B0B] text-white border border-[#2D3236] hover:border-[#C6FF00] hover:text-[#C6FF00]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on payments and subscription architecture */}
        <div className="mt-12 text-center text-xs text-[#A7A7A7] max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C6FF00]" />
          <span>Arquitetura preparada para integração segura com Stripe & gateways de pagamento certificados.</span>
        </div>

      </div>
    </section>
  );
};

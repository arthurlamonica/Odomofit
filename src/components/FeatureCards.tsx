import React from 'react';
import { Dumbbell, TrendingUp, Users, ClipboardCheck, ArrowUpRight } from 'lucide-react';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      id: 'treinos-inteligentes',
      title: 'Treinos inteligentes',
      description: 'Organize sua rotina, consulte seus exercícios e acompanhe séries, repetições, cargas e descansos com precisão cirúrgica.',
      icon: Dumbbell,
      tag: 'Organização'
    },
    {
      id: 'evolucao-acompanhada',
      title: 'Evolução acompanhada',
      description: 'Visualize seu histórico, compare resultados e entenda como sua consistência se transforma em sobrecarga progressiva e resultados reais.',
      icon: TrendingUp,
      tag: 'Analytics'
    },
    {
      id: 'comunidade-fitness',
      title: 'Comunidade fitness',
      description: 'Compartilhe conquistas, publique treinos, interaja com outros praticantes e encontre motivação diária para nunca falhar uma sessão.',
      icon: Users,
      tag: 'Social'
    },
    {
      id: 'acompanhamento-profissional',
      title: 'Acompanhamento profissional',
      description: 'Personal trainers podem estruturar rotinas, organizar alunos, analisar adesão e acompanhar informações relevantes sobre cada treino.',
      icon: ClipboardCheck,
      tag: 'Para Personais'
    }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Proposta de Valor
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Mais do que treinar.{' '}
            <span className="text-[#C6FF00]">Evoluir conectado.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] font-normal leading-relaxed">
            Tudo o que você precisa para transformar consistência em progresso, em um só lugar.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative bg-[#1F2224] hover:bg-[#25292c] rounded-2xl p-7 border border-[#2D3236] hover:border-[#C6FF00]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg hover:shadow-2xl"
              >
                {/* Top icon and tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#080B0B] border border-[#2D3236] group-hover:border-[#C6FF00]/40 flex items-center justify-center text-[#C6FF00] group-hover:scale-110 transition-transform duration-300 lime-glow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#A7A7A7] group-hover:text-[#C6FF00] tracking-wide uppercase px-2.5 py-1 rounded-md bg-[#080B0B] border border-[#2D3236] transition-colors">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C6FF00] transition-colors font-heading">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#A7A7A7] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom line hint */}
                <div className="pt-6 mt-6 border-t border-[#2D3236] flex items-center justify-between text-xs text-[#A7A7A7] group-hover:text-white transition-colors">
                  <span>Recurso {index + 1} de 4</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A7A7A7] group-hover:text-[#C6FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

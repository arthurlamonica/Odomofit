import React from 'react';
import { Users, FileSpreadsheet, TrendingUp, MessageCircle, ArrowRight, Shield, Award } from 'lucide-react';
import { TRAINER_CLIENTS_PREVIEW } from '../data/mockData';

interface TrainerSectionProps {
  onOpenInterest: () => void;
}

export const TrainerSection: React.FC<TrainerSectionProps> = ({ onOpenInterest }) => {
  const trainerFeatures = [
    {
      title: 'Organização e Gestão de Alunos',
      description: 'Centralize todos os seus alunos em um só lugar, com histórico de presença, dados antropométricos e planos ativos.',
      icon: Users
    },
    {
      title: 'Prescrição Rápida de Fichas',
      description: 'Crie e edite fichas de musculação em poucos cliques com uma biblioteca completa de exercícios e parâmetros de carga.',
      icon: FileSpreadsheet
    },
    {
      title: 'Acompanhamento em Tempo Real',
      description: 'Receba notificações quando o aluno concluir o treino e veja exatamente quais cargas e repetições foram executadas.',
      icon: TrendingUp
    },
    {
      title: 'Comunicação e Canal Direto',
      description: 'Envie orientações em vídeo, feedbacks pontuais e mantenha seus alunos motivados e consistentes.',
      icon: MessageCircle
    }
  ];

  return (
    <section id="profissionais" className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Área para Personal Trainers
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Você orienta pessoas.{' '}
            <span className="text-[#C6FF00]">O Gymstagram organiza a jornada.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Uma experiência criada para facilitar a organização de alunos, a estruturação de treinos 
            e o acompanhamento da evolução de cada pessoa com máximo profissionalismo.
          </p>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trainerFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-5 rounded-xl bg-[#1F2224] border border-[#2D3236] hover:border-[#C6FF00]/40 transition-all hover:-translate-y-1"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#080B0B] border border-[#2D3236] flex items-center justify-center text-[#C6FF00] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5 font-heading">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#A7A7A7] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Monetization & Client Acquisition Highlight */}
            <div className="p-5 rounded-xl bg-[#1F2224] border border-[#C6FF00]/30 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#C6FF00] text-[#080B0B] shrink-0 font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-heading">
                  Feche Aulas e Consultorias com Alunos da Comunidade
                </h4>
                <p className="text-xs text-[#A7A7A7] mt-1 leading-relaxed">
                  Além de gerenciar seus alunos existentes, seu perfil profissional fica visível para milhares de praticantes que buscam orientação na sua cidade.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenInterest}
                className="px-7 py-4 rounded-xl bg-[#C6FF00] text-[#080B0B] font-extrabold text-base tracking-tight hover:bg-[#b8f000] hover:scale-[1.02] transition-all lime-glow flex items-center gap-2 cursor-pointer"
              >
                <span>Conhecer o Gymstagram para profissionais</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-[#A7A7A7] mt-2.5">
                * Pré-cadastro exclusivo com benefícios especiais de pioneiro.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup & Trainer Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2D3236] bg-[#1F2224] shadow-2xl">
              
              {/* Photo Background */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src="/images/trainer.jpg"
                  alt="Personal trainer profissional orientando aluno na academia"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2224] via-[#1F2224]/60 to-transparent" />
                
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-[#080B0B]/80 backdrop-blur-md border border-[#2D3236] text-xs font-bold text-white flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#C6FF00]" />
                  <span>Painel do Treinador (CREF Verificado)</span>
                </div>
              </div>

              {/* In-app Student Management Preview List */}
              <div className="p-6 -mt-10 relative z-10 bg-[#1F2224]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">Alunos Ativos (Demonstração)</h4>
                    <span className="text-xs text-[#A7A7A7]">4 de 28 alunos monitorados</span>
                  </div>
                  <span className="text-xs font-bold text-[#C6FF00] bg-[#C6FF00]/10 px-2.5 py-1 rounded-md">
                    94% Taxa de Adesão
                  </span>
                </div>

                <div className="space-y-2.5">
                  {TRAINER_CLIENTS_PREVIEW.map((client) => (
                    <div
                      key={client.name}
                      className="p-3 rounded-xl bg-[#080B0B] border border-[#2D3236] flex items-center justify-between text-xs hover:border-[#C6FF00]/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={client.avatar}
                          alt={client.name}
                          className="w-9 h-9 rounded-full object-cover border border-[#2D3236]"
                        />
                        <div>
                          <div className="font-bold text-white">{client.name}</div>
                          <div className="text-[11px] text-[#A7A7A7]">{client.plan}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                          <span className="text-[11px] text-[#A7A7A7] block">Último treino</span>
                          <span className="text-white font-medium">{client.lastWorkout}</span>
                        </div>
                        <span
                          className={`px-2.5 py-1 rounded font-bold text-[11px] ${
                            client.status === 'PR Batido'
                              ? 'bg-[#C6FF00]/20 text-[#C6FF00]'
                              : client.status === 'Em dia'
                              ? 'bg-emerald-500/15 text-emerald-400'
                              : 'bg-amber-500/15 text-amber-400'
                          }`}
                        >
                          {client.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#2D3236] flex items-center justify-between text-xs text-[#A7A7A7]">
                  <span>Módulo Pro em preparação para lançamento</span>
                  <span className="text-[#C6FF00] font-semibold">Saiba mais →</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

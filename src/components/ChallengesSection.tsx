import React, { useState } from 'react';
import { Trophy, Users, Check, Sparkles } from 'lucide-react';
import { CHALLENGES_LIST } from '../data/mockData';
import type { ChallengeItem } from '../types';

export const ChallengesSection: React.FC = () => {
  const [challenges, setChallenges] = useState<ChallengeItem[]>(CHALLENGES_LIST);

  const toggleJoin = (id: string) => {
    setChallenges(prev =>
      prev.map(c => {
        if (c.id === id) {
          const nextJoined = !c.joined;
          return {
            ...c,
            joined: nextJoined,
            participants: nextJoined ? c.participants + 1 : c.participants - 1
          };
        }
        return c;
      })
    );
  };

  const badges = [
    { title: 'Primeiro PR', desc: 'Supere sua marca histórica em qualquer exercício', icon: '⚡' },
    { title: 'Consistência 14D', desc: '14 dias sem quebrar sua sequência', icon: '🔥' },
    { title: 'Treinador de Elite', desc: 'Primeiros 10 alunos formados no plano Pro', icon: '👑' },
    { title: 'Clube 100 Toneladas', desc: 'Acumule 100k kg de volume total no ano', icon: '🦾' }
  ];

  return (
    <section className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Gamificação & Comunidade
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Transforme consistência{' '}
            <span className="text-[#C6FF00]">em conquistas.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Participe de metas individuais e coletivas, ganhe insígnias de honra e mantenha a disciplina no mais alto nível.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between shadow-xl ${
                challenge.joined
                  ? 'bg-[#1F2224] border-[#C6FF00]/60 lime-glow-sm'
                  : 'bg-[#1F2224] border-[#2D3236] hover:border-[#A7A7A7]'
              }`}
            >
              <div>
                {/* Badge top */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#C6FF00] bg-[#080B0B] px-3 py-1 rounded-full border border-[#2D3236]">
                    {challenge.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#A7A7A7]">
                    <Users className="w-3.5 h-3.5" />
                    <span>{challenge.participants} atletas</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {challenge.title}
                </h3>

                <p className="text-xs text-[#A7A7A7] leading-relaxed mb-4">
                  {challenge.description}
                </p>

                <div className="text-xs text-[#C6FF00] font-semibold mb-3">
                  🎁 Recompensa: {challenge.reward}
                </div>

                {/* Progress bar */}
                <div className="space-y-1.5 mb-6">
                  <div className="flex justify-between text-[11px] text-[#A7A7A7]">
                    <span>{challenge.duration}</span>
                    <span className="font-bold text-white">{challenge.progressPercent}%</span>
                  </div>
                  <div className="w-full bg-[#080B0B] h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#C6FF00] h-full rounded-full transition-all duration-500 shadow-[0_0_8px_#C6FF00]"
                      style={{ width: `${challenge.progressPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => toggleJoin(challenge.id)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  challenge.joined
                    ? 'bg-[#080B0B] text-[#C6FF00] border border-[#C6FF00]/50 hover:bg-[#141719]'
                    : 'bg-[#C6FF00] text-[#080B0B] hover:bg-[#b5eb00] hover:scale-[1.02]'
                }`}
              >
                {challenge.joined ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Você está participando!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Entrar no Desafio</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Gamification Badges Trophy Cabinet */}
        <div className="bg-[#1F2224] rounded-2xl border border-[#2D3236] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#2D3236]">
            <div>
              <h3 className="text-lg font-bold text-white font-heading flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#C6FF00]" />
                <span>Galeria de Conquistas & Emblemas</span>
              </h3>
              <p className="text-xs text-[#A7A7A7]">Desbloqueie selos reais à medida que sua frequência e força aumentam</p>
            </div>
            <span className="text-xs text-[#C6FF00] font-semibold">4 de 32 Emblemas no MVP</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {badges.map((b) => (
              <div
                key={b.title}
                className="p-4 rounded-xl bg-[#080B0B] border border-[#2D3236] text-center hover:border-[#C6FF00]/40 transition-colors group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{b.icon}</div>
                <div className="text-sm font-bold text-white font-heading">{b.title}</div>
                <p className="text-[11px] text-[#A7A7A7] mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

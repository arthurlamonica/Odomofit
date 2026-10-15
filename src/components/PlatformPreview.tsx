import React, { useState } from 'react';
import { Dumbbell, TrendingUp, Users, UserCheck, Check, Heart, MessageSquare, Bookmark } from 'lucide-react';
import { INITIAL_WORKOUT_ROUTINE, INITIAL_SOCIAL_POSTS } from '../data/mockData';

export const PlatformPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'treino' | 'progresso' | 'comunidade' | 'acompanhamento'>('treino');
  
  // Interactive workout state inside tab
  const [exercises, setExercises] = useState(INITIAL_WORKOUT_ROUTINE.exercises);
  const [communityPosts, setCommunityPosts] = useState(INITIAL_SOCIAL_POSTS);

  const toggleExercise = (id: string) => {
    setExercises(prev =>
      prev.map(ex => (ex.id === id ? { ...ex, completed: !ex.completed } : ex))
    );
  };

  const completedCount = exercises.filter(ex => ex.completed).length;
  const progressPercent = Math.round((completedCount / exercises.length) * 100);

  const toggleLike = (id: string) => {
    setCommunityPosts(prev =>
      prev.map(p =>
        p.id === id
          ? {
              ...p,
              userLiked: !p.userLiked,
              likes: p.userLiked ? p.likes - 1 : p.likes + 1
            }
          : p
      )
    );
  };

  const tabs = [
    { id: 'treino', label: 'Meu Treino', icon: Dumbbell, hint: 'Ficha interativa' },
    { id: 'progresso', label: 'Meu Progresso', icon: TrendingUp, hint: 'Gráficos & Cargas' },
    { id: 'comunidade', label: 'Comunidade', icon: Users, hint: 'Feed & Interação' },
    { id: 'acompanhamento', label: 'Meu Acompanhamento', icon: UserCheck, hint: 'Área com Personal' },
  ] as const;

  return (
    <section id="demonstracao" className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Demonstração Interativa
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Seu universo fitness,{' '}
            <span className="text-[#C6FF00]">em uma única plataforma.</span>
          </h2>
          <p className="text-base text-[#A7A7A7] leading-relaxed">
            Experimente a interface real do Gymstagram. Alterne entre as abas e interaja com os recursos.
          </p>
          <span className="inline-block text-xs font-medium text-[#C6FF00] bg-[#C6FF00]/10 border border-[#C6FF00]/20 px-3 py-1 rounded-full">
            💡 Modo de Demonstração Interativo — Clique nos itens para testar
          </span>
        </div>

        {/* Outer SaaS Mockup Container */}
        <div className="rounded-2xl border border-[#2D3236] bg-[#0c0f10] shadow-2xl overflow-hidden">
          
          {/* SaaS App Header / Bar */}
          <div className="bg-[#141719] px-4 py-3 border-b border-[#2D3236] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-[#C6FF00]" />
              <span className="ml-3 text-xs font-mono text-[#A7A7A7]">gymstagram.app/app/dashboard</span>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-[#A7A7A7]">
              <span className="w-2 h-2 rounded-full bg-[#C6FF00] animate-ping" />
              <span>Sessão Ativa</span>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#1F2224]/70 border-b border-[#2D3236] p-2 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center lg:justify-start gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#080B0B] text-[#C6FF00] border border-[#C6FF00]/40 shadow-md font-bold'
                      : 'text-[#A7A7A7] hover:text-white hover:bg-[#141719]'
                  }`}
                >
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-[#C6FF00] text-[#080B0B]' : 'bg-[#141719] text-[#A7A7A7]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="leading-tight">{tab.label}</div>
                    <div className="text-[10px] text-[#A7A7A7] font-normal">{tab.hint}</div>
                  </div>
                  <div className="sm:hidden text-xs">{tab.label}</div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Tab Body */}
          <div className="p-4 sm:p-8 bg-[#080B0B] min-h-[460px]">

            {/* TAB 1: MEU TREINO */}
            {activeTab === 'treino' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#1F2224] border border-[#2D3236]">
                  <div>
                    <div className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider mb-1">
                      Rotina A • Hipertrofia & Força
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      {INITIAL_WORKOUT_ROUTINE.title}
                    </h3>
                    <p className="text-xs text-[#A7A7A7] mt-0.5">
                      Foco: Peito, Deltóides e Tríceps • Estimativa: {INITIAL_WORKOUT_ROUTINE.estimatedMinutes} min
                    </p>
                  </div>

                  {/* Realtime progress tracker */}
                  <div className="sm:w-64 bg-[#080B0B] p-3 rounded-lg border border-[#2D3236]">
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#A7A7A7]">Progresso da sessão:</span>
                      <span className="font-bold text-[#C6FF00]">{completedCount} de {exercises.length} ({progressPercent}%)</span>
                    </div>
                    <div className="w-full bg-[#1F2224] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#C6FF00] h-full transition-all duration-300 rounded-full shadow-[0_0_8px_#C6FF00]"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Exercises list table / cards */}
                <div className="space-y-3">
                  {exercises.map((ex, idx) => (
                    <div
                      key={ex.id}
                      onClick={() => toggleExercise(ex.id)}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        ex.completed
                          ? 'bg-[#1F2224]/50 border-[#C6FF00]/40 text-white'
                          : 'bg-[#1F2224] border-[#2D3236] hover:border-[#A7A7A7]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                            ex.completed
                              ? 'bg-[#C6FF00] text-[#080B0B] font-bold'
                              : 'bg-[#080B0B] border border-[#2D3236] text-[#A7A7A7]'
                          }`}
                        >
                          {ex.completed ? <Check className="w-4 h-4 stroke-[3]" /> : <span className="text-xs">{idx + 1}</span>}
                        </div>
                        <div>
                          <h4 className={`text-sm sm:text-base font-bold ${ex.completed ? 'text-[#C6FF00]' : 'text-white'}`}>
                            {ex.name}
                          </h4>
                          <span className="text-xs text-[#A7A7A7]">{ex.history}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 sm:gap-6 pl-10 sm:pl-0 text-xs sm:text-sm">
                        <div className="bg-[#080B0B] px-3 py-1.5 rounded-lg border border-[#2D3236]">
                          <span className="text-[#A7A7A7] text-[11px] block">Séries</span>
                          <span className="font-bold text-white">{ex.sets}x</span>
                        </div>
                        <div className="bg-[#080B0B] px-3 py-1.5 rounded-lg border border-[#2D3236]">
                          <span className="text-[#A7A7A7] text-[11px] block">Reps</span>
                          <span className="font-bold text-white">{ex.reps}</span>
                        </div>
                        <div className="bg-[#080B0B] px-3 py-1.5 rounded-lg border border-[#2D3236]">
                          <span className="text-[#A7A7A7] text-[11px] block">Carga</span>
                          <span className="font-bold text-[#C6FF00]">{ex.weight} kg</span>
                        </div>
                        <div className="bg-[#080B0B] px-3 py-1.5 rounded-lg border border-[#2D3236] hidden md:block">
                          <span className="text-[#A7A7A7] text-[11px] block">Descanso</span>
                          <span className="font-bold text-white">{ex.restSeconds}s</span>
                        </div>

                        <button
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                            ex.completed
                              ? 'bg-[#C6FF00]/15 text-[#C6FF00]'
                              : 'bg-[#2D3236] text-white hover:bg-[#C6FF00] hover:text-[#080B0B]'
                          }`}
                        >
                          {ex.completed ? 'Concluído' : 'Marcar'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: MEU PROGRESSO */}
            {activeTab === 'progresso' && (
              <div className="space-y-6 animate-fadeIn">
                {/* Stats summary row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-[#1F2224] p-4 rounded-xl border border-[#2D3236]">
                    <div className="text-xs text-[#A7A7A7]">Volume Acumulado</div>
                    <div className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">28.450 kg</div>
                    <div className="text-xs text-[#C6FF00] mt-1">↑ +8.4% vs semana anterior</div>
                  </div>
                  <div className="bg-[#1F2224] p-4 rounded-xl border border-[#2D3236]">
                    <div className="text-xs text-[#A7A7A7]">Frequência</div>
                    <div className="text-xl sm:text-2xl font-bold font-heading text-[#C6FF00] mt-1">5 de 5</div>
                    <div className="text-xs text-[#A7A7A7] mt-1">100% da meta semanal</div>
                  </div>
                  <div className="bg-[#1F2224] p-4 rounded-xl border border-[#2D3236]">
                    <div className="text-xs text-[#A7A7A7]">Maior Supino (1RM)</div>
                    <div className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">105 kg</div>
                    <div className="text-xs text-[#C6FF00] mt-1">Recorde batido na Terça</div>
                  </div>
                  <div className="bg-[#1F2224] p-4 rounded-xl border border-[#2D3236]">
                    <div className="text-xs text-[#A7A7A7]">Streak de Dias</div>
                    <div className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">18 dias</div>
                    <div className="text-xs text-[#A7A7A7] mt-1">Melhor marca pessoal</div>
                  </div>
                </div>

                {/* Big Chart visualization */}
                <div className="bg-[#1F2224] p-6 rounded-xl border border-[#2D3236]">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                      <h4 className="text-base font-bold text-white font-heading">
                        Evolução de Cargas: Supino Reto & Agachamento (kg)
                      </h4>
                      <p className="text-xs text-[#A7A7A7]">Sobrecarga progressiva monitorada pelo algoritmo do Gymstagram</p>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#C6FF00]" />
                        <span className="text-white">Agachamento</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-white" />
                        <span className="text-[#A7A7A7]">Supino Reto</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Line / Bar chart representation */}
                  <div className="h-56 w-full flex items-end justify-between gap-4 pt-6 pb-2 px-2 border-b border-[#2D3236]">
                    {[
                      { week: 'Sem 1', squat: 90, bench: 74 },
                      { week: 'Sem 2', squat: 95, bench: 76 },
                      { week: 'Sem 3', squat: 100, bench: 80 },
                      { week: 'Sem 4', squat: 105, bench: 82 },
                      { week: 'Sem 5', squat: 110, bench: 84 },
                    ].map((item, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                        <div className="text-[10px] text-[#A7A7A7] opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.squat}kg / {item.bench}kg
                        </div>
                        <div className="w-full max-w-[48px] flex items-end justify-center gap-1.5 h-full">
                          <div
                            className="w-1/2 bg-[#C6FF00] rounded-t transition-all duration-500 hover:brightness-110 shadow-[0_0_12px_rgba(198,255,0,0.3)]"
                            style={{ height: `${(item.squat / 120) * 100}%` }}
                          />
                          <div
                            className="w-1/2 bg-white/70 rounded-t transition-all duration-500 hover:bg-white"
                            style={{ height: `${(item.bench / 120) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-[#A7A7A7] font-medium">{item.week}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: COMUNIDADE */}
            {activeTab === 'comunidade' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {communityPosts.slice(0, 2).map((post) => (
                    <div key={post.id} className="bg-[#1F2224] rounded-xl border border-[#2D3236] overflow-hidden flex flex-col justify-between">
                      <div>
                        {/* Author Header */}
                        <div className="p-4 flex items-center justify-between border-b border-[#2D3236]/60">
                          <div className="flex items-center gap-3">
                            <img src={post.authorAvatar} alt={post.authorName} className="w-9 h-9 rounded-full object-cover border border-[#C6FF00]" />
                            <div>
                              <div className="text-sm font-bold text-white">{post.authorName}</div>
                              <div className="text-xs text-[#A7A7A7]">{post.workoutType}</div>
                            </div>
                          </div>
                          <span className="text-xs text-[#A7A7A7]">{post.timestamp}</span>
                        </div>

                        {/* Image */}
                        <div className="relative aspect-video bg-[#080B0B] overflow-hidden">
                          <img src={post.image} alt="Treino" className="w-full h-full object-cover" />
                          <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#080B0B]/80 text-[#C6FF00] text-xs font-bold border border-[#2D3236]">
                            {post.workoutStats?.prRecord}
                          </div>
                        </div>

                        {/* Caption */}
                        <div className="p-4">
                          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                            {post.caption}
                          </p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="p-4 pt-0 border-t border-[#2D3236]/50 flex items-center justify-between text-xs text-[#A7A7A7]">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => toggleLike(post.id)}
                            className={`flex items-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                              post.userLiked ? 'text-[#C6FF00]' : 'hover:text-white'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${post.userLiked ? 'fill-current text-[#C6FF00]' : ''}`} />
                            <span>{post.likes}</span>
                          </button>
                          <div className="flex items-center gap-1.5">
                            <MessageSquare className="w-4 h-4" />
                            <span>{post.commentsCount}</span>
                          </div>
                        </div>
                        <Bookmark className="w-4 h-4 hover:text-[#C6FF00] cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: MEU ACOMPANHAMENTO */}
            {activeTab === 'acompanhamento' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="p-4 rounded-xl bg-[#1F2224] border border-[#2D3236] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                      alt="Personal Trainer"
                      className="w-12 h-12 rounded-xl object-cover border-2 border-[#C6FF00]"
                    />
                    <div>
                      <div className="text-xs text-[#C6FF00] font-bold uppercase tracking-wider">Seu Personal Trainer</div>
                      <h4 className="text-base font-bold text-white font-heading">Prof. Felipe Siqueira (CREF 094821)</h4>
                      <p className="text-xs text-[#A7A7A7]">Plano de Periodização de Força & Hipertrofia (Ciclo 2)</p>
                    </div>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-[#C6FF00]/15 text-[#C6FF00] text-xs font-bold border border-[#C6FF00]/30">
                    Acompanhamento Ativo
                  </span>
                </div>

                {/* Planned sessions and goals */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#1F2224] p-4 rounded-xl border border-[#2D3236]">
                    <div className="text-xs text-[#A7A7A7] mb-2 font-medium">Meta Atual do Aluno</div>
                    <div className="text-sm font-bold text-white">Ganho de 2.5kg de massa magra</div>
                    <div className="mt-3 flex items-center justify-between text-xs text-[#A7A7A7]">
                      <span>Progresso: 75%</span>
                      <span className="text-[#C6FF00] font-semibold">Semana 6 de 8</span>
                    </div>
                  </div>

                  <div className="bg-[#1F2224] p-4 rounded-xl border border-[#2D3236]">
                    <div className="text-xs text-[#A7A7A7] mb-2 font-medium">Próxima Avaliação Física</div>
                    <div className="text-sm font-bold text-white">Quinta-feira, às 10:30</div>
                    <div className="mt-3 text-xs text-[#C6FF00]">Dobras cutâneas & Bioimpedância</div>
                  </div>

                  <div className="bg-[#1F2224] p-4 rounded-xl border border-[#2D3236]">
                    <div className="text-xs text-[#A7A7A7] mb-2 font-medium">Nota do Treinador</div>
                    <div className="text-xs text-gray-300 italic">
                      "Excelente consistência nas cargas. Vamos manter a carga no supino e aumentar o volume de costas na sexta."
                    </div>
                  </div>
                </div>

                {/* Upcoming scheduled workouts */}
                <div className="bg-[#1F2224] rounded-xl border border-[#2D3236] p-4">
                  <div className="text-sm font-bold text-white mb-3">Cronograma de Treinos Prescritos</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#080B0B] border border-[#2D3236]">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00]" />
                        <span className="text-xs sm:text-sm font-semibold text-white">Treino A: Peito, Deltóide Anterior e Tríceps</span>
                      </div>
                      <span className="text-xs text-[#C6FF00] font-bold">Hoje • Concluído</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#080B0B] border border-[#2D3236]">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#A7A7A7]" />
                        <span className="text-xs sm:text-sm font-semibold text-white">Treino B: Costas, Deltóide Posterior e Bíceps</span>
                      </div>
                      <span className="text-xs text-[#A7A7A7]">Amanhã • Programado</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#080B0B] border border-[#2D3236]">
                      <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#A7A7A7]" />
                        <span className="text-xs sm:text-sm font-semibold text-white">Treino C: Pernas Completo & Panturrilhas</span>
                      </div>
                      <span className="text-xs text-[#A7A7A7]">Sexta • Programado</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

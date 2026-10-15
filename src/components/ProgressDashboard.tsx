import React, { useState } from 'react';
import { Flame, Calendar, Dumbbell, Target } from 'lucide-react';
import { PROGRESS_DATA } from '../data/mockData';

export const ProgressDashboard: React.FC = () => {
  const [period, setPeriod] = useState<'semana' | 'mes' | 'trimestre'>('semana');
  const currentData = PROGRESS_DATA[period];

  return (
    <section className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Análise & Estatísticas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Cada treino conta.{' '}
            <span className="text-[#C6FF00]">Cada progresso importa.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Acompanhe sobrecarga progressiva, volume de peso total levantado e sua frequência através de gráficos dinâmicos.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="bg-[#1F2224] rounded-2xl border border-[#2D3236] p-6 sm:p-8 shadow-2xl">
          
          {/* Top Controls: Period Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#2D3236] gap-4">
            <div>
              <h3 className="text-xl font-extrabold text-white font-heading">
                Painel Geral de Performance
              </h3>
              <p className="text-xs text-[#A7A7A7] mt-0.5">
                Dados demonstrativos de sobrecarga e consistência física
              </p>
            </div>

            {/* Period Filter Buttons */}
            <div className="flex items-center bg-[#080B0B] p-1.5 rounded-xl border border-[#2D3236]">
              {(['semana', 'mes', 'trimestre'] as const).map((p) => {
                const labels = {
                  semana: 'Esta Semana',
                  mes: 'Último Mês',
                  trimestre: 'Últimos 3 Meses'
                };
                return (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      period === p
                        ? 'bg-[#C6FF00] text-[#080B0B] shadow-sm'
                        : 'text-[#A7A7A7] hover:text-white'
                    }`}
                  >
                    {labels[p]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            <div className="bg-[#080B0B] p-4 rounded-xl border border-[#2D3236]">
              <div className="flex items-center justify-between text-xs text-[#A7A7A7]">
                <span>Volume Levantado</span>
                <Dumbbell className="w-4 h-4 text-[#C6FF00]" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-heading mt-2">
                {currentData.volumeTotal}
              </div>
              <div className="text-[11px] text-[#C6FF00] font-semibold mt-1">
                ↑ Progressão contínua
              </div>
            </div>

            <div className="bg-[#080B0B] p-4 rounded-xl border border-[#2D3236]">
              <div className="flex items-center justify-between text-xs text-[#A7A7A7]">
                <span>Frequência no Período</span>
                <Calendar className="w-4 h-4 text-[#C6FF00]" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-heading mt-2">
                {currentData.frequency}
              </div>
              <div className="text-[11px] text-[#A7A7A7] mt-1">
                Conforme meta estipulada
              </div>
            </div>

            <div className="bg-[#080B0B] p-4 rounded-xl border border-[#2D3236]">
              <div className="flex items-center justify-between text-xs text-[#A7A7A7]">
                <span>Sequência (Streak)</span>
                <Flame className="w-4 h-4 text-[#C6FF00] fill-current" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#C6FF00] font-heading mt-2">
                {currentData.streak}
              </div>
              <div className="text-[11px] text-[#A7A7A7] mt-1">
                Zero faltas injustificadas
              </div>
            </div>

            <div className="bg-[#080B0B] p-4 rounded-xl border border-[#2D3236]">
              <div className="flex items-center justify-between text-xs text-[#A7A7A7]">
                <span>Tempo em Atividade</span>
                <Target className="w-4 h-4 text-[#C6FF00]" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-white font-heading mt-2">
                {currentData.activeMinutes} min
              </div>
              <div className="text-[11px] text-[#C6FF00] font-semibold mt-1">
                Média de 58 min / sessão
              </div>
            </div>
          </div>

          {/* Interactive Chart Container */}
          <div className="bg-[#080B0B] p-6 rounded-xl border border-[#2D3236]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
              <div>
                <h4 className="text-base font-bold text-white font-heading">
                  Progressão de Cargas nos Grandes Levantamentos (kg)
                </h4>
                <p className="text-xs text-[#A7A7A7]">
                  Monitoramento de Supino Reto, Agachamento e Levantamento Terra
                </p>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#C6FF00]" />
                  <span className="text-white font-medium">Terra</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-white" />
                  <span className="text-[#A7A7A7]">Agachamento</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#2D3236]" />
                  <span className="text-[#A7A7A7]">Supino</span>
                </div>
              </div>
            </div>

            {/* Dynamic Bars depending on active period */}
            <div className="h-64 flex items-end justify-between gap-3 pt-8 pb-3 px-2 border-b border-[#2D3236]">
              {currentData.labels.map((label, idx) => {
                const dl = currentData.deadlift[idx] || 120;
                const sq = currentData.squat[idx] || 100;
                const bp = currentData.benchPress[idx] || 80;

                return (
                  <div key={label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div className="text-[10px] text-[#A7A7A7] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {dl}kg / {sq}kg / {bp}kg
                    </div>
                    
                    <div className="w-full max-w-[56px] flex items-end justify-center gap-1 sm:gap-1.5 h-full">
                      {/* Terra bar */}
                      <div
                        className="w-1/3 bg-[#C6FF00] rounded-t transition-all duration-500 hover:brightness-125 shadow-[0_0_10px_rgba(198,255,0,0.3)]"
                        style={{ height: `${(dl / 140) * 100}%` }}
                        title={`Terra: ${dl}kg`}
                      />
                      {/* Agachamento bar */}
                      <div
                        className="w-1/3 bg-white/80 rounded-t transition-all duration-500 hover:bg-white"
                        style={{ height: `${(sq / 140) * 100}%` }}
                        title={`Agachamento: ${sq}kg`}
                      />
                      {/* Supino bar */}
                      <div
                        className="w-1/3 bg-[#3a4045] rounded-t transition-all duration-500 hover:bg-[#5a6066]"
                        style={{ height: `${(bp / 140) * 100}%` }}
                        title={`Supino: ${bp}kg`}
                      />
                    </div>

                    <span className="text-xs text-[#A7A7A7] font-semibold text-center mt-1">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="mt-4 text-[11px] text-[#A7A7A7] text-center">
              * Dados fictícios ilustrativos para demonstração da experiência de gráficos do Gymstagram.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

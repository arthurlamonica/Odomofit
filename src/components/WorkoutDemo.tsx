import React, { useState, useEffect } from 'react';
import { Dumbbell, Check, Play, Pause, RotateCcw, Timer, Info } from 'lucide-react';
import { INITIAL_WORKOUT_ROUTINE } from '../data/mockData';

export const WorkoutDemo: React.FC = () => {
  const [exercises, setExercises] = useState(INITIAL_WORKOUT_ROUTINE.exercises);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [restTimer, setRestTimer] = useState<number | null>(null);

  // Active workout timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSessionActive]);

  // Rest timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (restTimer !== null && restTimer > 0) {
      interval = setInterval(() => {
        setRestTimer(prev => (prev && prev > 1 ? prev - 1 : null));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [restTimer]);

  const toggleExercise = (id: string) => {
    setExercises(prev =>
      prev.map(ex => {
        if (ex.id === id) {
          const nextCompleted = !ex.completed;
          if (nextCompleted) {
            // Trigger rest timer
            setRestTimer(ex.restSeconds);
          }
          return { ...ex, completed: nextCompleted };
        }
        return ex;
      })
    );
  };

  const completedCount = exercises.filter(e => e.completed).length;
  const progressPercent = Math.round((completedCount / exercises.length) * 100);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartWorkout = () => {
    setIsSessionActive(!isSessionActive);
  };

  const handleReset = () => {
    setIsSessionActive(false);
    setSessionSeconds(0);
    setRestTimer(null);
    setExercises(INITIAL_WORKOUT_ROUTINE.exercises.map(e => ({ ...e, completed: false })));
  };

  return (
    <section id="treinos" className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Registro & Organização
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Seu treino organizado.{' '}
            <span className="text-[#C6FF00]">Sua evolução registrada.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Monte rotinas completas, anote cargas e repetições e acompanhe o descanso entre séries em tempo real.
          </p>
        </div>

        {/* Workout Card Container */}
        <div className="max-w-4xl mx-auto bg-[#1F2224] rounded-2xl border border-[#2D3236] p-6 sm:p-8 shadow-2xl">
          
          {/* Header of the Workout Card */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-[#2D3236] gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#C6FF00] uppercase tracking-wider mb-1">
                <Dumbbell className="w-4 h-4" />
                <span>{INITIAL_WORKOUT_ROUTINE.category}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white font-heading">
                {INITIAL_WORKOUT_ROUTINE.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {INITIAL_WORKOUT_ROUTINE.muscleGroups.map(muscle => (
                  <span key={muscle} className="text-xs bg-[#080B0B] text-[#A7A7A7] px-2.5 py-1 rounded-md border border-[#2D3236]">
                    {muscle}
                  </span>
                ))}
              </div>
            </div>

            {/* Session Controller Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleStartWorkout}
                className={`px-5 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  isSessionActive
                    ? 'bg-amber-400 text-[#080B0B] hover:bg-amber-300'
                    : 'bg-[#C6FF00] text-[#080B0B] hover:bg-[#b5eb00] lime-glow-sm'
                }`}
              >
                {isSessionActive ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" />
                    <span>Pausar Treino ({formatTime(sessionSeconds)})</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Iniciar Treino</span>
                  </>
                )}
              </button>

              <button
                onClick={handleReset}
                title="Reiniciar sessão"
                className="p-3 rounded-xl bg-[#080B0B] text-[#A7A7A7] hover:text-white border border-[#2D3236] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Rest Timer Banner (shows up when a user ticks an exercise) */}
          {restTimer !== null && (
            <div className="mt-6 p-4 rounded-xl bg-[#080B0B] border border-[#C6FF00]/40 flex items-center justify-between animate-pulse">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#C6FF00] text-[#080B0B]">
                  <Timer className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#A7A7A7]">Descanso entre séries ativo</div>
                  <div className="text-base font-bold text-white">
                    Respire! Próxima série em: <span className="text-[#C6FF00]">{restTimer} segundos</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setRestTimer(null)}
                className="text-xs text-[#A7A7A7] hover:text-white px-2 py-1 rounded bg-[#1F2224] border border-[#2D3236]"
              >
                Pular
              </button>
            </div>
          )}

          {/* Progress Bar & Summary */}
          <div className="my-6 p-4 rounded-xl bg-[#080B0B] border border-[#2D3236]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-[#A7A7A7]">
                Status da Sessão: {completedCount} de {exercises.length} exercícios concluídos
              </span>
              <span className="text-sm font-extrabold text-[#C6FF00]">
                {progressPercent}% Concluído {progressPercent === 100 && '🎉 Parabéns!'}
              </span>
            </div>
            <div className="w-full bg-[#1F2224] h-3 rounded-full overflow-hidden">
              <div
                className="bg-[#C6FF00] h-full transition-all duration-300 rounded-full shadow-[0_0_12px_#C6FF00]"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Exercises List */}
          <div className="space-y-3">
            {exercises.map((exercise, index) => (
              <div
                key={exercise.id}
                onClick={() => toggleExercise(exercise.id)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  exercise.completed
                    ? 'bg-[#181b1d] border-[#C6FF00]/40 opacity-90'
                    : 'bg-[#080B0B] border-[#2D3236] hover:border-[#A7A7A7]'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all mt-0.5 sm:mt-0 ${
                      exercise.completed
                        ? 'bg-[#C6FF00] text-[#080B0B]'
                        : 'bg-[#1F2224] border border-[#2D3236] text-[#A7A7A7]'
                    }`}
                  >
                    {exercise.completed ? <Check className="w-5 h-5 stroke-[3]" /> : index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`text-base font-bold ${exercise.completed ? 'text-[#C6FF00] line-through' : 'text-white'}`}>
                        {exercise.name}
                      </h4>
                      <span className="text-[11px] text-[#A7A7A7] bg-[#1F2224] px-2 py-0.5 rounded">
                        {exercise.muscle}
                      </span>
                    </div>
                    <p className="text-xs text-[#A7A7A7] mt-0.5">
                      {exercise.history}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4 pl-11 sm:pl-0 text-xs">
                  <div className="bg-[#1F2224] px-3 py-1.5 rounded-lg border border-[#2D3236]">
                    <span className="text-[#A7A7A7] text-[10px] block">Séries</span>
                    <span className="font-bold text-white">{exercise.sets}</span>
                  </div>
                  <div className="bg-[#1F2224] px-3 py-1.5 rounded-lg border border-[#2D3236]">
                    <span className="text-[#A7A7A7] text-[10px] block">Repetições</span>
                    <span className="font-bold text-white">{exercise.reps}</span>
                  </div>
                  <div className="bg-[#1F2224] px-3 py-1.5 rounded-lg border border-[#2D3236]">
                    <span className="text-[#A7A7A7] text-[10px] block">Carga</span>
                    <span className="font-bold text-[#C6FF00]">{exercise.weight} kg</span>
                  </div>
                  <div className="bg-[#1F2224] px-3 py-1.5 rounded-lg border border-[#2D3236] hidden md:block">
                    <span className="text-[#A7A7A7] text-[10px] block">Descanso</span>
                    <span className="font-bold text-white">{exercise.restSeconds}s</span>
                  </div>
                  <button
                    className={`px-3 py-2 rounded-lg font-bold text-xs transition-colors ${
                      exercise.completed
                        ? 'bg-[#C6FF00]/20 text-[#C6FF00]'
                        : 'bg-[#1F2224] text-white hover:bg-[#C6FF00] hover:text-[#080B0B]'
                    }`}
                  >
                    {exercise.completed ? 'Feito' : 'Concluir'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Legal / Medical disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-[#080B0B] border border-[#2D3236] flex items-start gap-3 text-xs text-[#A7A7A7]">
            <Info className="w-5 h-5 text-[#C6FF00] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Nota de Responsabilidade:</strong> As sugestões de exercícios e rotinas do Gymstagram têm caráter de organização e demonstração de usabilidade. Prescrições individualizadas de treino devem ser formuladas e supervisionadas por profissionais de Educação Física qualificados.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

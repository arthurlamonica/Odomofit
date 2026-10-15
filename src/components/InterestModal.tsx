import React, { useState } from 'react';
import { X, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import type { UserRole } from '../types';

interface InterestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlanId?: string;
}

export const InterestModal: React.FC<InterestModalProps> = ({ isOpen, onClose, defaultPlanId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>(defaultPlanId === 'plano-pro' ? 'personal' : 'praticante');
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!email.includes('@')) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }
    if (!consent) {
      setError('É necessário aceitar os termos de contato para prosseguir.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#1F2224] border border-[#2D3236] rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#C6FF00]/10 rounded-bl-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#080B0B] text-[#A7A7A7] hover:text-white border border-[#2D3236] transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#080B0B] border border-[#2D3236] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C6FF00]" />
              <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
                {defaultPlanId ? `Interesse: ${defaultPlanId.replace('plano-', '').toUpperCase()}` : 'Acesso Antecipado'}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-heading">
              Faça parte do <span className="text-[#C6FF00]">Gymstagram</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#A7A7A7] mt-1 mb-6 leading-relaxed">
              Cadastre-se na lista prioritária de lançamento e receba convite exclusivo com benefícios de pioneiro.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Lucas Silva"
                  className="w-full px-4 py-3 rounded-xl bg-[#080B0B] border border-[#2D3236] text-white text-sm focus:outline-none focus:border-[#C6FF00] placeholder:text-[#5a6066]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Seu Melhor E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: lucas@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#080B0B] border border-[#2D3236] text-white text-sm focus:outline-none focus:border-[#C6FF00] placeholder:text-[#5a6066]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1.5">
                  Qual é o seu perfil principal? *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'praticante', label: 'Praticante' },
                    { id: 'atleta', label: 'Atleta' },
                    { id: 'personal', label: 'Personal' }
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setRole(item.id as UserRole)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold transition-all border ${
                        role === item.id
                          ? 'bg-[#C6FF00] text-[#080B0B] border-[#C6FF00]'
                          : 'bg-[#080B0B] text-[#A7A7A7] border-[#2D3236] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 rounded border-[#2D3236] accent-[#C6FF00] w-4 h-4 cursor-pointer"
                />
                <label htmlFor="consent" className="text-[11px] text-[#A7A7A7] leading-relaxed cursor-pointer">
                  Concordo em receber atualizações de lançamento do Gymstagram de acordo com a Política de Privacidade e LGPD.
                </label>
              </div>

              {/* Notice */}
              <div className="text-[10px] text-[#A7A7A7] bg-[#080B0B] p-2.5 rounded-lg border border-[#2D3236]">
                ℹ️ <strong>Modo de Demonstração:</strong> Os dados inseridos serão registrados na pré-visualização local. A integração com banco de dados real será ativada no deploy oficial.
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-[#C6FF00] text-[#080B0B] font-extrabold text-sm tracking-tight hover:bg-[#b8f000] hover:scale-[1.01] transition-all lime-glow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Garantir Meu Lugar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#C6FF00]/15 text-[#C6FF00] flex items-center justify-center mx-auto lime-glow">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            
            <h3 className="text-2xl font-extrabold text-white font-heading">
              Inscrição Registrada!
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm mx-auto">
              Obrigado, <strong className="text-white">{name}</strong>! Seu interesse com perfil de <strong className="text-[#C6FF00]">{role}</strong> foi cadastrado na lista de lançamento.
            </p>

            <div className="p-3 bg-[#080B0B] rounded-xl border border-[#2D3236] text-xs text-[#A7A7A7]">
              Enviaremos atualizações no e-mail <strong>{email}</strong> assim que as vagas beta forem abertas!
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-3 rounded-xl bg-[#1F2224] text-white border border-[#2D3236] hover:border-[#C6FF00] text-xs font-bold transition-colors cursor-pointer"
            >
              Fechar Demonstração
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

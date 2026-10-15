import React, { useState } from 'react';
import { X, Lock, Mail, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessDemo?: (role: 'aluno' | 'personal') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccessDemo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInAs, setLoggedInAs] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSimulateLogin = (role: 'aluno' | 'personal') => {
    setLoggedInAs(role === 'aluno' ? 'Aluno Demonstrativo (Camila)' : 'Personal Trainer (Prof. Felipe)');
    if (onSuccessDemo) onSuccessDemo(role);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#1F2224] border border-[#2D3236] rounded-2xl w-full max-w-md p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6FF00]/10 rounded-bl-full blur-2xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#080B0B] text-[#A7A7A7] hover:text-white border border-[#2D3236] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!loggedInAs ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C6FF00]" />
              <span className="text-xs font-bold text-[#C6FF00] uppercase tracking-wider">
                Acesso à Conta
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white font-heading">
              Entrar no <span className="text-[#C6FF00]">Gymstagram</span>
            </h3>
            <p className="text-xs text-[#A7A7A7] mt-1 mb-6">
              Acesse seus treinos, acompanhamento de alunos e histórico de evolução.
            </p>

            {/* One-click demo login options */}
            <div className="space-y-2.5 mb-6">
              <div className="text-xs font-semibold text-white">
                Entrada Rápida para Demonstração:
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => handleSimulateLogin('aluno')}
                  className="p-3 rounded-xl bg-[#080B0B] border border-[#2D3236] hover:border-[#C6FF00] text-left transition-all cursor-pointer group"
                >
                  <div className="text-xs font-bold text-white group-hover:text-[#C6FF00]">
                    Perfil Aluno
                  </div>
                  <div className="text-[10px] text-[#A7A7A7]">Testar como atleta</div>
                </button>

                <button
                  type="button"
                  onClick={() => handleSimulateLogin('personal')}
                  className="p-3 rounded-xl bg-[#080B0B] border border-[#2D3236] hover:border-[#C6FF00] text-left transition-all cursor-pointer group"
                >
                  <div className="text-xs font-bold text-white group-hover:text-[#C6FF00]">
                    Perfil Treinador
                  </div>
                  <div className="text-[10px] text-[#A7A7A7]">Testar visão do coach</div>
                </button>
              </div>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-[#2D3236]" />
              <span className="flex-shrink mx-3 text-[11px] text-[#A7A7A7]">ou entre com credenciais</span>
              <div className="flex-grow border-t border-[#2D3236]" />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSimulateLogin('aluno');
              }}
              className="space-y-3.5 mt-3"
            >
              <div>
                <label className="block text-xs font-semibold text-white mb-1">E-mail</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#A7A7A7] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080B0B] border border-[#2D3236] text-white text-xs focus:outline-none focus:border-[#C6FF00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1">Senha</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#A7A7A7] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#080B0B] border border-[#2D3236] text-white text-xs focus:outline-none focus:border-[#C6FF00]"
                  />
                </div>
              </div>

              <div className="text-[10px] text-[#A7A7A7] bg-[#080B0B] p-2 rounded-lg border border-[#2D3236]">
                ℹ️ <strong>Demonstração:</strong> O sistema de autenticação real será acoplado na fase seguinte com token JWT e sessão segura.
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#C6FF00] text-[#080B0B] font-bold text-xs tracking-tight hover:bg-[#b8f000] transition-all lime-glow-sm cursor-pointer"
              >
                Acessar Plataforma
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-[#C6FF00]/15 text-[#C6FF00] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-xl font-bold text-white font-heading">
              Sessão Demonstrativa Ativa!
            </h3>
            <p className="text-xs text-gray-300">
              Conectado como <strong className="text-[#C6FF00]">{loggedInAs}</strong>.
            </p>
            <div className="p-3 bg-[#080B0B] rounded-xl border border-[#2D3236] text-[11px] text-[#A7A7A7]">
              Você pode navegar pela página e interagir com as abas e componentes livremente!
            </div>
            <button
              onClick={() => {
                setLoggedInAs(null);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#C6FF00] text-[#080B0B] font-bold text-xs hover:bg-[#b8f000] cursor-pointer"
            >
              Continuar Navegando
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

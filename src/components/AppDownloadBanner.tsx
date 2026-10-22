import { Smartphone, Download, Apple, Play } from 'lucide-react';

interface AppDownloadBannerProps {
  onDownload?: () => void;
}

export const AppDownloadBanner: React.FC<AppDownloadBannerProps> = ({ onDownload }) => {
  return (
    <section className="py-12 sm:py-20 bg-[#08080A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner com Gradiente da Marca ODomoFit (Verde Neon com Fundo Escuro Profundo) */}
        <div 
          className="relative rounded-[2.5rem] overflow-hidden p-8 sm:p-14 lg:p-16 border border-[#C6FF00]/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
          style={{
            background: 'linear-gradient(135deg, #112200 0%, #1c3500 45%, #08080a 100%)'
          }}
        >
          {/* Efeitos de Iluminação e Halos */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C6FF00]/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#C6FF00]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Lado Esquerdo: Textos e Botão de Download */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C6FF00]/20 border border-[#C6FF00]/40 text-[#C6FF00] text-xs font-black uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Aplicativo Móvel ODomoFit</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
                Baixe o App e Desbloqueie Todos os Benefícios
              </h2>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl font-medium">
                Junte-se à família ODomoFit hoje mesmo e inicie sua jornada transformadora, conquistando mais força, saúde e confiança como você sempre quis.
              </p>

              {/* Botão Baixar o App */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onDownload}
                  className="px-8 py-3.5 rounded-full bg-white text-[#08080A] font-extrabold text-sm hover:bg-[#C6FF00] hover:text-[#08080A] transition-all duration-300 shadow-xl flex items-center gap-2 cursor-pointer magnetic-btn hover:scale-105 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar o App</span>
                </button>

                <div className="flex items-center gap-3 text-xs text-white/70">
                  <span className="flex items-center gap-1">
                    <Apple className="w-4 h-4 fill-current text-white/90" />
                    iOS 17+
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="flex items-center gap-1">
                    <Play className="w-3.5 h-3.5 fill-current text-white/90" />
                    Android 12+
                  </span>
                </div>
              </div>
            </div>

            {/* Lado Direito: Foto dos Dois Atletas de Braços Cruzados da Referência */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-[320px] sm:w-[420px] lg:w-[460px] aspect-[4/3] sm:aspect-square flex items-end">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&auto=format&fit=crop&q=80"
                  alt="Dois Atletas ODomoFit"
                  className="w-full h-full object-cover object-center rounded-2xl filter contrast-[1.12] brightness-[1.02] shadow-2xl"
                  style={{
                    maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)'
                  }}
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

import { ArrowRight, Sparkles, Video } from 'lucide-react';

interface SmartFeaturesProps {
  onLearnMore?: () => void;
}

export const SmartFeatures: React.FC<SmartFeaturesProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#08080A] relative overflow-hidden">
      
      {/* Marca d'água monumental "Fitness" da referência */}
      <div className="absolute top-1/4 -left-10 text-[6rem] sm:text-[10rem] md:text-[14rem] font-heading font-black text-white/[0.025] select-none pointer-events-none uppercase leading-none tracking-tighter">
        Fitness
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">
        
        {/* =====================================================================
            BLOCO 1: GET MORE WITH LOW COST ADVANCED FEATURES
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          
          {/* Lado Esquerdo: Conteúdo Textual */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF00] font-bold block">
              Acessibilidade & Tecnologia
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.1]">
              Get More With Low Cost Advanced Features
            </h2>
            <p className="text-sm sm:text-base text-[#9FA1AC] leading-relaxed max-w-xl">
              Access Advanced Features Typically Found In Higher-Priced Options, Enjoy Increased Benefits Without The Hefty Price Tag, Maximizing Your Investment.
            </p>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-xs sm:text-sm hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all duration-200 inline-flex items-center gap-2 cursor-pointer magnetic-btn"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 text-[#C6FF00]" />
              </button>
            </div>
          </div>

          {/* Lado Direito: Imagem com Badge Flutuante 400+ Free Features */}
          <div className="lg:col-span-6 relative group">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#131418] border border-white/[0.08] aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=80"
                alt="Treinador e Aluna"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/60 via-transparent to-transparent" />

              {/* Badge 400+ Free Features da Referência */}
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-2xl bg-[#FF5E3A] text-white shadow-xl flex items-center gap-2 font-black text-xs sm:text-sm">
                <Sparkles className="w-4 h-4" />
                <div className="text-left leading-tight">
                  <div className="text-xs font-black">400+</div>
                  <div className="text-[9px] uppercase tracking-wider font-semibold opacity-90">Free Features</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =====================================================================
            BLOCO 2: SMART WORKOUT & HEALTH METRICS (INVERTIDO)
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
          
          {/* Lado Esquerdo: Imagem com Badge 400+ Free Videos */}
          <div className="lg:col-span-6 order-last lg:order-first relative group">
            <div className="relative rounded-[2rem] overflow-hidden bg-[#131418] border border-white/[0.08] aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&auto=format&fit=crop&q=80"
                alt="Smart Workout Metrices"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/60 via-transparent to-transparent" />

              {/* Badge 400+ Free Videos da Referência */}
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-2xl bg-[#FF5E3A] text-white shadow-xl flex items-center gap-2 font-black text-xs sm:text-sm">
                <Video className="w-4 h-4" />
                <div className="text-left leading-tight">
                  <div className="text-xs font-black">400+</div>
                  <div className="text-[9px] uppercase tracking-wider font-semibold opacity-90">Free Videos</div>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Conteúdo Textual */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C6FF00] font-bold block">
              Dados em Tempo Real
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.1]">
              Smart Workout & Health Metrices
            </h2>
            <p className="text-sm sm:text-base text-[#9FA1AC] leading-relaxed max-w-xl">
              Utilizes Technology And Data To Optimize Workout Routines For Efficiency And Effectiveness, Offers Real-Time Feedback During Workouts To Improve Form, Intensity.
            </p>

            <div className="pt-2">
              <button
                onClick={onLearnMore}
                className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-xs sm:text-sm hover:border-[#C6FF00] hover:text-[#C6FF00] transition-all duration-200 inline-flex items-center gap-2 cursor-pointer magnetic-btn"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 text-[#C6FF00]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

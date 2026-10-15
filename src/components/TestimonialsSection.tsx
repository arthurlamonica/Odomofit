import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#080B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F2224] border border-[#2D3236]">
            <span className="text-xs font-semibold text-[#C6FF00] uppercase tracking-wider">
              Prova Social & Comunidade
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Uma comunidade movida{' '}
            <span className="text-[#C6FF00]">pela evolução.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Veja como alunos e professores transformam suas rotinas através da conexão e consistência.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#1F2224] rounded-2xl p-7 border border-[#2D3236] hover:border-[#C6FF00]/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating stars & quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-[#C6FF00]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#2D3236]" />
                </div>

                <p className="text-sm text-gray-200 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Stats */}
              <div className="pt-4 border-t border-[#2D3236] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#C6FF00]"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">{t.name}</h3>
                    <p className="text-xs text-[#A7A7A7]">{t.role}</p>
                    <span className="text-[10px] font-bold text-[#C6FF00]">
                      {t.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer as requested */}
        <div className="mt-10 text-center text-[11px] text-[#A7A7A7]">
          * Cenários e depoimentos demonstrativos para ilustração da experiência do Gymstagram.
        </div>

      </div>
    </section>
  );
};

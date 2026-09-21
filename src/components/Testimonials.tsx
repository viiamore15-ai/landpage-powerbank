import React from 'react';
import { Star, ShieldCheck, CheckCircle2, HeartHandshake } from 'lucide-react';
import { REVIEWS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#00296B] text-white relative overflow-hidden">
      {/* Decorative Glow elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00509D]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#FDC500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-[#FFD500] mb-4">
            <HeartHandshake className="w-4 h-4" />
            Depoimentos Reais de Clientes
          </div>
          
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            Quem usa, não fica sem
          </h2>
          <p className="text-slate-200 text-base sm:text-lg mt-3">
            Mais de 1.480 clientes confiam no Kapbom 20.000mAh para nunca mais ficarem sem bateria. Veja o que diz quem já comprou:
          </p>

          {/* Social Proof Rating Score */}
          <div className="inline-flex items-center gap-3 mt-6 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <div className="flex text-[#FDC500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">
              Nota 4.9/5 <span className="font-normal text-slate-300">(1.482 avaliações verificadas)</span>
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 flex flex-col justify-between hover:bg-white/15 transition-all duration-200"
            >
              <div>
                {/* Stars and date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FDC500]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-300">{review.date}</span>
                </div>

                {/* Highlight title if present */}
                {review.highlight && (
                  <div className="text-sm font-bold text-[#FFD500] mb-2 leading-snug">
                    "{review.highlight}"
                  </div>
                )}

                {/* Body text */}
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#FDC500]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    {review.name}
                    {review.verified && (
                      <span title="Compra Verificada">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2ecc71] inline" />
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-300">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

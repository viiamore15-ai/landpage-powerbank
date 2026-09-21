import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, WHATSAPP_DEFAULT_LINK } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00509D] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#00296B] tracking-tight mt-4 uppercase">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Tudo o que você precisa saber antes de adquirir o seu Powerbank Kapbom 20.000mAh.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? 'border-[#003F88] bg-blue-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-800 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#00296B] text-[#FDC500] rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-blue-100/60 font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center p-8 bg-slate-50 rounded-3xl border border-slate-200">
          <HelpCircle className="w-8 h-8 text-[#003F88] mx-auto mb-3" />
          <h3 className="font-bebas text-2xl text-[#00296B] tracking-wide mb-1">
            Ficou com alguma dúvida específica?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-4">
            Nosso time de consultores está pronto para tirar dúvidas sobre compatibilidade com o seu aparelho.
          </p>
          <a
            href={WHATSAPP_DEFAULT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00296B] hover:bg-[#003F88] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#FDC500]" />
            Conversar com Especialista no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

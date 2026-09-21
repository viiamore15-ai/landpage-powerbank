import React from 'react';
import { Check, Zap, Sparkles, ShieldCheck, Truck, CreditCard, MessageSquare } from 'lucide-react';
import { PRICING_PLANS, WHATSAPP_PHONE } from '../data/mockData';
import { PricingPlan } from '../types';

interface PricingProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenOrderModal }) => {
  const getDirectWhatsAppUrl = (plan: PricingPlan) => {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(plan.whatsappMessage)}`;
  };

  return (
    <section id="precos" className="py-24 bg-[#f4f4f4] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00509D] bg-blue-100 px-4 py-1.5 rounded-full border border-blue-200">
            Valores Promocionais de Lote
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#00296B] tracking-tight mt-4 uppercase">
            Escolha o seu plano de energia
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Garanta seu Powerbank Kapbom com garantia oficial de 30 dias, Frete Grátis para todo o Brasil e suporte direto via WhatsApp.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.featured;
            
            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'border-3 border-[#FDC500] shadow-2xl lg:-translate-y-3 z-10'
                    : 'border border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Floating Badge for Featured Card */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FDC500] text-[#00296B] font-black text-xs px-5 py-1.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    {isFeatured && <Sparkles className="w-3.5 h-3.5" />}
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="text-center mb-6">
                    <h3 className="font-bebas text-3xl sm:text-4xl text-[#00296B] tracking-wide">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                      {plan.subtitle}
                    </p>

                    {/* Price Block */}
                    <div className="my-6">
                      {plan.originalPrice && (
                        <div className="text-xs text-slate-400 line-through font-semibold mb-1">
                          De R$ {plan.originalPrice}
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-1 text-[#00296B]">
                        <span className="text-lg font-bold">R$</span>
                        <span className="font-bebas text-5xl sm:text-6xl tracking-tight leading-none">
                          {plan.price}
                        </span>
                      </div>

                      {plan.savings && (
                        <span className="inline-block mt-2 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-0.5 rounded-full">
                          {plan.savings}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="border-t border-slate-100 pt-6 mb-8">
                    <ul className="space-y-3.5 text-sm text-slate-700">
                      {plan.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-xs sm:text-sm font-medium leading-tight">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buttons Action */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => onOpenOrderModal(plan.id)}
                    className={`w-full py-4 rounded-full font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all duration-200 text-center shadow-md cursor-pointer flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-[#FDC500] hover:bg-[#FFD500] text-[#00296B] hover:shadow-lg'
                        : 'bg-[#00296B] hover:bg-[#003F88] text-white'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    {plan.id === 'individual' ? 'Comprar 1 Unidade' : plan.id === 'combo-duplo' ? 'Levar 2 Unidades' : 'Levar 3 Unidades'}
                  </button>

                  <a
                    href={getDirectWhatsAppUrl(plan)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs text-slate-500 hover:text-[#00296B] font-semibold py-1 hover:underline"
                  >
                    Ou pedir direto no WhatsApp →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security / Payment Trust Badges */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="pt-2 sm:pt-0 sm:px-2 flex flex-col items-center">
              <ShieldCheck className="w-6 h-6 text-[#00296B] mb-1.5" />
              <strong className="text-xs font-bold text-slate-800">Garantia de 30 Dias</strong>
              <span className="text-[11px] text-slate-500">Troca imediata com nota</span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-2 flex flex-col items-center">
              <Truck className="w-6 h-6 text-[#00296B] mb-1.5" />
              <strong className="text-xs font-bold text-slate-800">Frete Grátis Brasil</strong>
              <span className="text-[11px] text-slate-500">Para todas as regiões</span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-2 flex flex-col items-center">
              <CreditCard className="w-6 h-6 text-[#00296B] mb-1.5" />
              <strong className="text-xs font-bold text-slate-800">PIX ou Cartão em 12x</strong>
              <span className="text-[11px] text-slate-500">Pagamento 100% seguro</span>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-2 flex flex-col items-center">
              <Zap className="w-6 h-6 text-[#FDC500] fill-[#FDC500] mb-1.5" />
              <strong className="text-xs font-bold text-slate-800">Suporte Humanizado</strong>
              <span className="text-[11px] text-slate-500">Atendimento rápido no Whats</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

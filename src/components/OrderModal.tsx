import React, { useState, useEffect } from 'react';
import { X, Check, MessageSquare, ShieldCheck, Truck, Sparkles, MapPin } from 'lucide-react';
import { PRICING_PLANS, WHATSAPP_PHONE } from '../data/mockData';
import { PricingPlan } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, initialPlanId = 'combo-duplo' }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(initialPlanId);
  const [colorChoice, setColorChoice] = useState<'black' | 'white' | 'mixed'>('black');
  const [cep, setCep] = useState<string>('');
  const [deliveryEstimate, setDeliveryEstimate] = useState<string | null>(null);

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlanId(initialPlanId);
    }
  }, [initialPlanId]);

  if (!isOpen) return null;

  const currentPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[1];

  const handleCepCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length >= 5) {
      if (cleanCep.startsWith('01') || cleanCep.startsWith('02') || cleanCep.startsWith('03') || cleanCep.startsWith('04') || cleanCep.startsWith('05')) {
        setDeliveryEstimate("Frete Grátis: Entrega Expressa via Motoboy hoje ou amanhã em SP!");
      } else {
        setDeliveryEstimate("Frete Grátis: Sedex com Rastreio Expresso para todo o Brasil (2 a 4 dias úteis)!");
      }
    }
  };

  const getColorText = () => {
    if (colorChoice === 'black') return 'Preto Fosco';
    if (colorChoice === 'white') return 'Branco Neve';
    return 'Cores Mistas (Preto + Branco)';
  };

  const generateWhatsAppUrl = () => {
    let text = `Olá! Quero garantir o meu pedido do *Powerbank Kapbom 20.000mAh*:\n\n`;
    text += `📦 *Plano Selecionado:* ${currentPlan.name} (${currentPlan.units}x Unidades) - R$ ${currentPlan.price}\n`;
    text += `🚚 *Frete:* Grátis para todo o Brasil\n`;
    text += `🎨 *Preferência de Cor:* ${getColorText()}\n`;
    if (cep) {
      text += `📍 *Meu CEP:* ${cep}\n`;
    }
    text += `\nPoderiam me passar a chave PIX ou link de cartão e confirmar o envio? Obrigado!`;

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#00296B] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDC500] text-[#00296B] text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Condição Especial Garantida
          </div>
          <h3 className="font-bebas text-3xl tracking-wide text-white">
            Personalizar Pedido Kapbom
          </h3>
          <p className="text-xs text-slate-200">
            Finalize sua solicitação e receba atendimento imediato pelo WhatsApp oficial.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-slate-800">
          
          {/* Plan Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              1. Selecione o Combo Desejado:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {PRICING_PLANS.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col justify-between ${
                    selectedPlanId === plan.id
                      ? 'border-[#00296B] bg-blue-50/60 ring-2 ring-[#00296B]'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs font-bold text-slate-800 truncate block">
                    {plan.name}
                  </span>
                  <span className="text-xs text-slate-500 font-medium my-1 block">
                    {plan.units}x unid.
                  </span>
                  <span className="text-sm font-black text-[#00296B] block">
                    R$ {plan.price}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              2. Escolha a(s) Cor(es):
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setColorChoice('black')}
                className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  colorChoice === 'black'
                    ? 'border-[#00296B] bg-slate-900 text-white ring-2 ring-[#00296B]'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-zinc-900 border border-white shrink-0" />
                Preto Fosco
              </button>

              <button
                type="button"
                onClick={() => setColorChoice('white')}
                className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  colorChoice === 'white'
                    ? 'border-[#00296B] bg-blue-50 text-[#00296B] ring-2 ring-[#00296B]'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-white border border-slate-400 shrink-0" />
                Branco Neve
              </button>

              {currentPlan.units > 1 && (
                <button
                  type="button"
                  onClick={() => setColorChoice('mixed')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    colorChoice === 'mixed'
                      ? 'border-[#00296B] bg-blue-50 text-[#00296B] ring-2 ring-[#00296B]'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Mescladas
                </button>
              )}
            </div>
          </div>

          {/* Optional CEP calculation */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              3. Simular Entrega por CEP (Opcional):
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Ex: 03162-000"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  maxLength={9}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#00296B]"
                />
              </div>
              <button
                type="button"
                onClick={handleCepCheck}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Calcular
              </button>
            </div>
            {deliveryEstimate && (
              <p className="text-[11px] text-emerald-700 font-semibold mt-1.5 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5" />
                {deliveryEstimate}
              </p>
            )}
          </div>

          {/* Summary Box */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs space-y-1.5">
            <div className="flex justify-between font-bold text-slate-800">
              <span>Total do Pedido:</span>
              <span className="text-[#00296B] text-base">R$ {currentPlan.price}</span>
            </div>
            <div className="text-slate-500 text-[11px] flex items-center justify-between">
              <span>Envio:</span>
              <span className="text-emerald-600 font-bold">Frete Grátis para todo o Brasil</span>
            </div>
            <div className="text-slate-500 text-[11px] flex items-center justify-between">
              <span>Formas de Pagamento:</span>
              <span>PIX ou Cartão em até 12x</span>
            </div>
            <div className="text-slate-500 text-[11px] flex items-center justify-between">
              <span>Garantia:</span>
              <span className="text-emerald-600 font-semibold">30 Dias com Nota</span>
            </div>
          </div>

          {/* Action Button */}
          <a
            href={generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full bg-[#25d366] hover:bg-[#128c7e] text-white font-extrabold text-sm sm:text-base py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 uppercase tracking-wide cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Confirmar Pedido no WhatsApp</span>
          </a>

          <p className="text-center text-[11px] text-slate-400">
            Você será direcionado diretamente para conversar com o consultor Kapbom oficial.
          </p>
        </div>
      </div>
    </div>
  );
};

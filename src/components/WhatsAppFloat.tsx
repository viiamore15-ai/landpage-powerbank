import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/mockData';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = "Olá! Gostaria de tirar uma dúvida e garantir meu Powerbank Kapbom 20.000mAh.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Speech Bubble Popup */}
      {showTooltip && (
        <div className="mb-3 max-w-xs bg-white text-slate-800 p-3.5 rounded-2xl shadow-2xl border border-slate-200 text-xs relative animate-fade-in">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <strong className="text-[#00296B] font-bold">Consultor Online</strong>
          </div>
          <p className="text-slate-600 pr-3 leading-tight">
            Olá! Dúvida sobre o Powerbank Kapbom? Clique aqui para falar conosco pelo WhatsApp!
          </p>
          
          {/* Tooltip triangle indicator */}
          <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-b border-r border-slate-200 transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25d366] hover:bg-[#128c7e] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        {/* Pulsing halo */}
        <span className="absolute -inset-1 rounded-full bg-[#25d366] opacity-40 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />
      </a>
    </div>
  );
};

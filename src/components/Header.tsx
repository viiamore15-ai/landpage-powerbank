import React, { useState } from 'react';
import { Zap, Menu, X, PhoneCall, ShieldCheck, BatteryCharging } from 'lucide-react';
import { WHATSAPP_DEFAULT_LINK } from '../data/mockData';

interface HeaderProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Flash Announcement Bar */}
      <div className="bg-[#001535] text-xs md:text-sm text-slate-200 py-1.5 px-4 text-center border-b border-white/10 flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#FDC500] text-[#00296B] font-extrabold text-[10px] uppercase tracking-wider animate-pulse">
          Oferta Hoje
        </span>
        <span className="font-medium">
          Envio imediato da <strong>Mooca (SP)</strong> | <strong>Frete Grátis para todo o Brasil!</strong>
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00296B] to-[#00509D] flex items-center justify-center text-[#FDC500] shadow-md group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 fill-[#FDC500]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bebas text-3xl tracking-wider text-[#00296B] leading-none">
                  KAPBOM<span className="text-[#00509D] text-lg ml-1 font-sans font-bold">POWER</span>
                </span>
                <span className="text-[10px] tracking-widest text-slate-500 font-bold uppercase -mt-0.5">
                  20.000mAh Ultra Turbo
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <a href="#inicio" className="hover:text-[#003F88] transition-colors">Início</a>
              <a href="#diferenciais" className="hover:text-[#003F88] transition-colors">Diferenciais</a>
              <a href="#recursos" className="hover:text-[#003F88] transition-colors">Recursos</a>
              <a href="#precos" className="hover:text-[#003F88] transition-colors">Preços</a>
              <a href="#depoimentos" className="hover:text-[#003F88] transition-colors">Depoimentos</a>
              <a href="#localizacao" className="hover:text-[#003F88] transition-colors">Onde Estamos</a>
              <a href="#faq" className="hover:text-[#003F88] transition-colors">Dúvidas</a>
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={WHATSAPP_DEFAULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-[#00296B] hover:text-[#003F88] px-3 py-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#00509D]" />
                (11) 95410-3087
              </a>

              <button
                onClick={() => onOpenOrderModal("combo-duplo")}
                className="bg-[#FDC500] hover:bg-[#FFD500] text-[#00296B] font-bold text-sm px-6 py-2.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide flex items-center gap-2 cursor-pointer"
              >
                <BatteryCharging className="w-4 h-4" />
                Pedir Agora
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenOrderModal("combo-duplo")}
                className="bg-[#FDC500] text-[#00296B] font-bold text-xs px-3.5 py-2 rounded-full uppercase tracking-wider flex items-center gap-1 sm:hidden"
              >
                Pedir
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#00296B] hover:bg-slate-100 transition-colors"
                aria-label="Abrir menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Início
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Por Que a Kapbom?
            </a>
            <a
              href="#recursos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Recursos & Segurança
            </a>
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Tabela de Preços
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Depoimentos de Clientes
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Onde Estamos (Mooca - SP)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Perguntas Frequentes
            </a>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal("combo-duplo");
                }}
                className="w-full bg-[#FDC500] hover:bg-[#FFD500] text-[#00296B] font-bold text-center py-3 rounded-full text-sm uppercase tracking-wider shadow-sm flex items-center justify-center gap-2"
              >
                <BatteryCharging className="w-4 h-4" />
                Garantir com Desconto
              </button>
              <a
                href={WHATSAPP_DEFAULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-slate-500 font-semibold py-1 hover:underline"
              >
                Falar com consultor no WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

import React from 'react';
import { Zap, Heart, ShieldCheck } from 'lucide-react';
import { WHATSAPP_DEFAULT_LINK } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0f19] text-slate-400 pt-16 pb-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00296B] to-[#00509D] flex items-center justify-center text-[#FDC500]">
                <Zap className="w-5 h-5 fill-[#FDC500]" />
              </div>
              <span className="font-bebas text-2xl tracking-wider text-white">
                KAPBOM <span className="text-[#00509D] text-base font-sans font-bold">POWER 20.000mAh</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Distribuição oficial do Powerbank Kapbom 20.000mAh no Brasil. Foco em alta durabilidade, proteção térmica certificada e energia infinita para sua rotina, viagens e eventos.
            </p>
            <div className="text-[11px] text-slate-500">
              Centro de Distribuição: Rua da Mooca, São Paulo - SP | CEP 03162-000
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navegação Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-[#FDC500] transition-colors">Início</a></li>
              <li><a href="#diferenciais" className="hover:text-[#FDC500] transition-colors">Diferenciais da Bateria</a></li>
              <li><a href="#recursos" className="hover:text-[#FDC500] transition-colors">Recursos & Cabos</a></li>
              <li><a href="#precos" className="hover:text-[#FDC500] transition-colors">Tabela de Preços & Combos</a></li>
              <li><a href="#depoimentos" className="hover:text-[#FDC500] transition-colors">Avaliações de Clientes</a></li>
              <li><a href="#localizacao" className="hover:text-[#FDC500] transition-colors">Retirada na Mooca (SP)</a></li>
              <li><a href="#faq" className="hover:text-[#FDC500] transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Safe Shopping & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Atendimento & Suporte
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-slate-300 font-semibold">WhatsApp Oficial:</li>
              <li>
                <a
                  href={WHATSAPP_DEFAULT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FDC500] hover:underline font-bold"
                >
                  +55 (11) 95410-3087
                </a>
              </li>
              <li className="text-[11px] text-slate-500 pt-1">
                Seg a Sex das 08h às 19h<br />Sábados das 09h às 15h
              </li>
              <li className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                30 Dias de Garantia Oficial
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & payment notices */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Kapbom Power Brasil. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Pagamentos via PIX & Cartão</span>
            <span>•</span>
            <span>Envios via Motoboy & Sedex</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

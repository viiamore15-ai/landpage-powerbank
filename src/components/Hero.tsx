import React from 'react';
import { Zap, Plane, BatteryMedium, Sparkles, CheckCircle2, ChevronRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="inicio" className="relative min-h-screen pt-32 pb-20 bg-gradient-to-b from-[#00183f] via-[#00296B] to-[#003F88] text-white overflow-hidden flex items-center">
      {/* Background Decorative Lighting & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00509D]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FDC500]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Sales Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#FDC500] animate-ping" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#FFD500]">
                Novo Lote 2026 com Chip Inteligente Antiaquecimento
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white uppercase mb-6">
              Sua Liberdade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] via-[#FFD500] to-white">
                Não Depende
              </span> <br />
              De Uma Tomada.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal mb-8">
              Domine o dia com o <strong className="text-white font-bold">Powerbank Kapbom 20.000mAh</strong>. Energia real e ininterrupta para viajantes, nômades digitais e amantes de festivais que não podem parar.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FDC500]/20 flex items-center justify-center shrink-0 text-[#FDC500]">
                  <Zap className="w-4 h-4 fill-current" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">Turbo 22.5W</div>
                  <div className="text-slate-300">Carga Ultrarrápida</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FDC500]/20 flex items-center justify-center shrink-0 text-[#FDC500]">
                  <BatteryMedium className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">2 Cargas Completas</div>
                  <div className="text-slate-300">Garantidas com Teste</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-xl p-3 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-[#FDC500]/20 flex items-center justify-center shrink-0 text-[#FDC500]">
                  <Plane className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">100% Liberado</div>
                  <div className="text-slate-300">Em Voos e Avião</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenOrderModal("combo-duplo")}
                className="bg-[#FDC500] hover:bg-[#FFD500] text-[#00296B] font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#FDC500]/30 hover:-translate-y-1 transition-all duration-200 uppercase tracking-wide text-center flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Garantir Meu Powerbank Agora</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#diferenciais"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all duration-200 border border-white/20 backdrop-blur-sm text-center"
              >
                Ver Comparação Real
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Seals under button */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ecc71]" />
                Frete Grátis para todo o Brasil
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ecc71]" />
                Envio Imediato da Mooca (SP)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ecc71]" />
                Garantia de 30 Dias
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ecc71]" />
                Nota Fiscal e Suporte WhatsApp
              </span>
            </div>
          </div>

          {/* Right Column: Official Kapbom Powerbank Product Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[450px] flex flex-col items-center lg:items-end">
              
              {/* Ambient Glow behind the Powerbank */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-[#00509D]/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/3 right-2 w-44 h-44 bg-[#FDC500]/15 rounded-full blur-2xl pointer-events-none" />

              {/* Floating Quality / Spec Badge */}
              <div className="relative z-20 mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/20 backdrop-blur-md shadow-xl text-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FDC500]" />
                <span className="font-semibold text-white">Kapbom 20.000mAh Original</span>
                <span className="text-[#FFD500] font-bold">• 22.5W Turbo</span>
              </div>

              {/* Powerbank Product Image */}
              <div className="relative z-10 w-full flex justify-center lg:justify-end">
                <img
                  src="/imagem-da-landpage.png"
                  alt="Powerbank Kapbom 20.000mAh Turbo Original com Display Digital"
                  width={1024}
                  height={1536}
                  className="w-full max-w-[280px] sm:max-w-[330px] md:max-w-[370px] lg:max-w-[420px] xl:max-w-[450px] h-auto aspect-[2/3] object-contain transition-transform duration-500 hover:scale-[1.02] drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)] select-none"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('google.com')) {
                      target.src = 'https://drive.google.com/uc?export=download&id=1dZJ0nhKzifa3gv65_O8t8mRloes61S0U';
                    }
                  }}
                />
              </div>

              {/* Under Showcase Delivery Notice */}
              <div className="relative z-10 mt-4 text-center lg:text-right text-xs text-slate-300 flex items-center justify-center lg:justify-end gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Pronta entrega na Mooca (SP) • Envio Imediato para todo o Brasil</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

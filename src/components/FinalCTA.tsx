import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, ArrowRight, Flame, CheckCircle2, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenOrderModal }) => {
  // 24 minutes countdown timer simulation
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({
    minutes: 19,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 }; // reset cycle
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="py-24 bg-gradient-to-b from-[#003F88] via-[#00296B] to-[#00183f] text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#00509D]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FDC500]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flash Urgency Pill */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-400/40 text-red-200 text-xs font-bold uppercase tracking-widest shadow-inner">
            <Flame className="w-4 h-4 text-red-400 animate-bounce" />
            Últimas Unidades do Lote Promocional com Frete Grátis
          </div>
        </div>

        {/* Pre-Conversion Grid: Explanatory Text on the Left, Visual Element on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12">
          
          {/* Left Column: Explanatory text regarding compact size and ergonomics */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFD500] text-xs font-bold mb-4 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-[#FDC500]" />
              Ergonomia & Design Compacto
            </div>

            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.98] mb-5">
              Potência Máxima de 20.000mAh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDC500] via-[#FFD500] to-white">
                Que Cabe na Palma da Sua Mão
              </span>
            </h2>

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Ao contrário das baterias portáteis antigas que eram pesadas como tijolos, o <strong className="text-white font-bold">Kapbom 20.000mAh</strong> foi desenvolvido para aliar densidade energética impressionante com pegada anatômica natural. Seus cantos arredondados e acabamento acetinado antiderrapante garantem que você segure o powerbank e o smartphone juntos com uma única mão, sem escorregar ou cansar os dedos.
            </p>

            <div className="space-y-3.5 mb-8 w-full">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2ecc71] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong className="text-white">Pegada Firme e Confortável:</strong> Encaixe anatômico projetado para uso contínuo em pé, no transporte público ou caminhando.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2ecc71] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong className="text-white">Cabe em Bolsos e Mochilas:</strong> Perfil slim que desliza facilmente em bolsos de calça, jaqueta, bolsas compactas ou pochetes.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2ecc71] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong className="text-white">Zero Volume de Fios Soltos:</strong> Os 4 cabos embutidos ficam rentes à carcaça, evitando nós e cabos pendurados.
                </span>
              </div>
            </div>

            {/* Countdown Box integrated in conversion section */}
            <div className="w-full bg-black/40 backdrop-blur-md border border-white/15 rounded-2xl p-5 sm:p-6 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FDC500]" />
                Tempo restante para garantir a condição promocional deste lote:
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/10 rounded-xl px-4 py-2.5 min-w-[70px] text-center">
                  <span className="font-mono font-black text-2xl sm:text-3xl text-[#FDC500]">00</span>
                  <span className="block text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">Horas</span>
                </div>
                <span className="font-mono text-2xl font-bold text-white/50">:</span>
                <div className="bg-white/10 rounded-xl px-4 py-2.5 min-w-[70px] text-center">
                  <span className="font-mono font-black text-2xl sm:text-3xl text-[#FDC500]">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                  <span className="block text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">Minutos</span>
                </div>
                <span className="font-mono text-2xl font-bold text-white/50">:</span>
                <div className="bg-white/10 rounded-xl px-4 py-2.5 min-w-[70px] text-center">
                  <span className="font-mono font-black text-2xl sm:text-3xl text-[#FDC500]">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                  <span className="block text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">Segundos</span>
                </div>

                <div className="ml-auto hidden sm:block text-right">
                  <span className="text-[11px] font-bold text-amber-300 block">Apenas 6 unidades restantes</span>
                  <span className="text-[10px] text-slate-300">no estoque de São Paulo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element demonstrating compactness and real ergonomics */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
            <div className="relative w-full max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#FDC500]/30 via-[#00509D]/40 to-[#FFD500]/20 opacity-70 blur-xl" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group bg-slate-900">
                <img
                  src="/mao-powerbank.jpg"
                  alt="Mão segurando o Powerbank Kapbom demonstrando tamanho compacto e ergonomia real"
                  className="w-full h-auto aspect-square object-cover group-hover:scale-103 transition-transform duration-500 rounded-3xl"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('google.com')) {
                      target.src = 'https://drive.google.com/uc?export=download&id=1gpaYu9NxnnE2kDe9dTawbhT0unQuq_PY';
                    }
                  }}
                />

                {/* Floating pill badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 border border-white/20 backdrop-blur-md text-xs font-bold text-white shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
                    Escala Real do Produto
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00183f]/90 via-transparent to-transparent flex items-end p-6 rounded-3xl pointer-events-none">
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#FDC500]">Tamanho Compacto</span>
                    <p className="font-bebas text-2xl tracking-wide text-white">Empunhadura segura e conforto anatômico</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Purchase CTA Button (Directly following the text & visual) */}
        <div className="flex flex-col items-center justify-center gap-4 text-center mt-4">
          <button
            onClick={() => onOpenOrderModal("combo-duplo")}
            className="w-full sm:w-auto bg-[#FDC500] hover:bg-[#FFD500] text-[#00296B] font-extrabold text-lg sm:text-2xl px-12 py-5 rounded-full shadow-2xl hover:shadow-[#FDC500]/40 hover:-translate-y-1 transition-all duration-200 uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Garantir Meu Powerbank Agora</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
          
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            Clique no botão acima para escolher seu kit com <strong className="text-[#FFD500]">Frete Grátis</strong> e <strong className="text-[#FFD500]">Garantia de 30 Dias</strong>
          </p>
        </div>

        {/* Guarantee Seals Box */}
        <div className="mt-12 pt-8 border-t border-white/10 max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Garantia de 30 Dias com Nota</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Frete Grátis para todo o Brasil</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Envio Imediato da Mooca (SP)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Suporte Humanizado no WhatsApp</span>
          </div>
        </div>

      </div>
    </section>
  );
};

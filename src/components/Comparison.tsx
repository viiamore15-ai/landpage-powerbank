import React, { useState } from 'react';
import { X, Check, BatteryCharging, Zap, Smartphone, ArrowRight, ShieldCheck, Flame, Cpu } from 'lucide-react';
import { DEVICE_CHARGES } from '../data/mockData';

interface ComparisonProps {
  onOpenOrderModal: (planId?: string) => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onOpenOrderModal }) => {
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState<number>(0);
  const currentDevice = DEVICE_CHARGES[selectedDeviceIndex];

  return (
    <section id="diferenciais" className="py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00509D] bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            Comparativo Definitivo
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#00296B] tracking-tight mt-4 uppercase">
            Por que escolher a Kapbom?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Não caia no golpe dos powerbanks genéricos com baterias reutilizadas e números falsos. Compare a tecnologia real da Kapbom.
          </p>
        </div>

        {/* 2-Column Comparison Grid matching original specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          
          {/* Card: Powerbanks Comuns */}
          <div className="bg-[#f4f4f4] border border-slate-300/80 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                <h3 className="font-bebas text-3xl text-slate-500 tracking-wide">
                  Powerbanks Comuns
                </h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                  Alto Risco
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-bold">Capacidade "maquiada" (acaba logo)</strong>
                    <span className="text-xs text-slate-500">Prometem 20k mAh mas trazem pilhas 18650 fracas que mal dão 1 carga e meia.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-bold">Esquece rápido se não usar</strong>
                    <span className="text-xs text-slate-500">Autodescarga acelerada: você guarda carregado e quando precisa está zerado.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-bold">Superaquece o seu celular</strong>
                    <span className="text-xs text-slate-500">Sem chip de proteção térmica, reduzindo a vida útil da bateria do seu smartphone.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="block text-slate-800 text-sm font-bold">Carregamento lento (horas na tomada)</strong>
                    <span className="text-xs text-slate-500">Limitados a 5W ou 10W básicos. O celular demora até 4 horas para completar.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500 italic">
              * Fabricados frequentemente sem controle de segurança ou certificação.
            </div>
          </div>

          {/* Card: Nosso Kapbom 20.000mAh */}
          <div className="bg-[#00296B] text-white border-2 border-[#FDC500] rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Top golden accent badge */}
            <div className="absolute top-0 right-0 bg-[#FDC500] text-[#00296B] text-xs font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
              100% Original
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
                <h3 className="font-bebas text-3xl text-[#FDC500] tracking-wide">
                  Nosso Kapbom 20.000mAh
                </h3>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-[#2ecc71] flex items-center justify-center shrink-0 mt-0.5 border border-[#2ecc71]/40">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="block text-white text-sm font-bold">Células de Polímero de alta densidade</strong>
                    <span className="text-xs text-slate-200">Capacidade real testada em laboratório, leve e durável para mais de 500 ciclos.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-[#2ecc71] flex items-center justify-center shrink-0 mt-0.5 border border-[#2ecc71]/40">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="block text-white text-sm font-bold">2 Cargas completas no iPhone/Android</strong>
                    <span className="text-xs text-slate-200">Autonomia garantida para recarregar 2x de 0% a 100% com alta eficiência e segurança térmica.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-[#2ecc71] flex items-center justify-center shrink-0 mt-0.5 border border-[#2ecc71]/40">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="block text-white text-sm font-bold">Chip Inteligente Antiaquecimento</strong>
                    <span className="text-xs text-slate-200">Smart IC regula a voltagem milissegundo a milissegundo, preservando seu celular.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-[#2ecc71] flex items-center justify-center shrink-0 mt-0.5 border border-[#2ecc71]/40">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <strong className="block text-white text-sm font-bold">Carregamento Turbo 22.5W</strong>
                    <span className="text-xs text-slate-200">Recarrega até 60% da bateria do seu smartphone em aproximadamente 35 minutos.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/20 flex items-center justify-between">
              <span className="text-xs text-[#FFD500] font-bold">
                ✓ Garantia Total de 30 Dias
              </span>
              <button
                onClick={() => onOpenOrderModal("combo-duplo")}
                className="text-xs font-extrabold uppercase tracking-wider text-[#00296B] bg-[#FDC500] hover:bg-[#FFD500] px-4 py-2 rounded-full cursor-pointer transition-colors"
              >
                Garantir o Meu
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Device Battery Calculator */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#00183f] to-[#003F88] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-blue-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[#FDC500] text-xs font-bold uppercase tracking-wider mb-1">
                <BatteryCharging className="w-4 h-4" />
                Simulador de Autonomia Real
              </div>
              <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide">
                Quantas vezes o Kapbom carrega o seu aparelho?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xs text-left md:text-right">
              Selecione o seu modelo para calcular a quantidade aproximada de cargas completas:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
            {/* Device Selector Buttons */}
            <div className="lg:col-span-7 space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                Escolha seu modelo de aparelho:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {DEVICE_CHARGES.map((device, idx) => (
                  <button
                    key={device.name}
                    onClick={() => setSelectedDeviceIndex(idx)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all cursor-pointer border ${
                      selectedDeviceIndex === idx
                        ? 'bg-[#FDC500] text-[#00296B] border-[#FDC500] shadow-md scale-102'
                        : 'bg-white/10 text-white border-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="truncate">{device.name}</div>
                    <div className={`text-[10px] font-normal ${selectedDeviceIndex === idx ? 'text-[#00296B]/80' : 'text-slate-300'}`}>
                      {device.batteryCapacity} mAh
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Result Box */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
              <span className="text-xs uppercase tracking-widest text-[#FFD500] font-bold">
                Estimativa Kapbom 20.000mAh
              </span>
              <div className="my-2 flex items-baseline justify-center gap-1">
                <span className="font-bebas text-6xl sm:text-7xl text-white tracking-tight">
                  ~{currentDevice.chargesEstimate}x
                </span>
                <span className="text-sm font-semibold text-slate-200">cargas</span>
              </div>
              <p className="text-xs text-slate-200">
                Garante <strong className="text-white font-bold">2 cargas completas</strong> para você nunca ficar na mão longe da tomada.
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-emerald-300 font-semibold flex items-center justify-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-current" />
                Compatível com Turbo Power Delivery
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

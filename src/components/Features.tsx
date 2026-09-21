import React from 'react';
import { Music, Shield, Plane, Cable, CheckCircle, Compass, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="recursos" className="py-24 bg-slate-50 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#00509D] bg-blue-100/60 px-4 py-1.5 rounded-full border border-blue-200">
            Tecnologia Feita Para a Vida Real
          </span>
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#00296B] tracking-tight mt-4 uppercase">
            Projetado Para Quem Não Pode Parar
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Cada detalhe do Kapbom 20.000mAh foi pensado para resistir a longas jornadas, eventos e viagens onde a tomada simplesmente não existe.
          </p>
        </div>

        {/* Zig-Zag Row 1: Airport & Travel Freedom (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Text */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#003F88] text-xs font-bold mb-4">
              <Plane className="w-3.5 h-3.5 text-[#00509D]" />
              Liberdade em Viagens & Aeroportos
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#00296B] tracking-tight mb-4">
              Energia para ir mais longe
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Viaje com total tranquilidade e esqueça a disputa por tomadas em saguões ou o medo de ficar sem bateria durante conexões e escalas. Seja trabalhando no café do aeroporto, assistindo a séries a bordo ou mantendo o cartão de embarque e o GPS sempre à mão, o Kapbom 20.000mAh acompanha o seu ritmo — com homologação internacional e 100% liberado para bagagem de mão.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-medium text-slate-700">100% autorizado para embarque em voos nacionais e internacionais (ANAC/IATA)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Carga rápida para celular, tablet e fones enquanto você aguarda seu portão</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-medium text-slate-700">Sem fios soltos: cabos integrados para carregar direto sobre a mesa</span>
              </div>
            </div>
          </div>

          {/* Right Column: Image of Powerbank on Airport Wooden Table */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-900">
              <img
                src="/aeroporto-powerbank.jpg"
                alt="Powerbank Kapbom conectado ao celular sobre a mesa de madeira do aeroporto"
                className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500 rounded-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('google.com')) {
                    target.src = 'https://drive.google.com/uc?export=download&id=1ndo-_vf2q8PPR5vGx47n5MGZOVqt8S9j';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00296B]/80 via-transparent to-transparent flex items-end p-6 rounded-2xl pointer-events-none">
                <div className="text-white">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#FDC500]">Conexão Garantida</span>
                  <p className="font-bebas text-xl sm:text-2xl tracking-wide">Trabalhe e viaje sem depender de tomadas de saguão</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zig-Zag Row 2: 4-in-1 Integrated Cables (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=1000&q=80"
                alt="Powerbank com cabos e conexões embutidas"
                className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500 rounded-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00296B]/80 via-transparent to-transparent flex items-end p-6 rounded-2xl pointer-events-none">
                <div className="text-white">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#FDC500]">Multi-Conexão</span>
                  <p className="font-bebas text-xl sm:text-2xl tracking-wide">Sem nós, sem cabos extras e sem dor de cabeça</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-4">
              <Cable className="w-3.5 h-3.5 text-emerald-700" />
              Praticidade Absoluta
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#00296B] tracking-tight mb-4">
              4 Cabos Embutidos: Nunca mais esqueça o carregador
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Acabou o estresse de sair correndo de casa e perceber que esqueceu o cabo do celular. O Kapbom vem equipado com todos os cabos essenciais acoplados em ranhuras traseiras perfeitas.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-xs font-bold text-[#00296B]">Cabo Lightning</span>
                <span className="text-[11px] text-slate-500">Para iPhones e iPads</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-xs font-bold text-[#00296B]">Cabo Type-C</span>
                <span className="text-[11px] text-slate-500">Androids e iPhone 15/16</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-xs font-bold text-[#00296B]">Cabo Micro-USB</span>
                <span className="text-[11px] text-slate-500">Fones, caixas e v8</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="block text-xs font-bold text-[#00296B]">Cabo USB Recarga</span>
                <span className="text-[11px] text-slate-500">Recarrega o próprio aparelho</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zig-Zag Row 3: Festivals & Events (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-4">
              <Music className="w-3.5 h-3.5 text-amber-700" />
              Festivais, Shows & Eventos
            </div>
            <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-[#00296B] tracking-tight mb-4">
              Energia para curtir o dia todo
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Não perca nenhum Stories ou vídeo do show principal. Com 20.000mAh e carga turbo de 22.5W, você tem energia de sobra para você e seus amigos curtirem até o último minuto sem preocupação.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-[#00296B] flex items-center gap-1.5 mb-1">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Chip Antiaquecimento
                </div>
                <p className="text-xs text-slate-500">Controle térmico inteligente para carregar mesmo em dias quentes de festival.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="text-xs font-bold text-[#00296B] flex items-center gap-1.5 mb-1">
                  <Zap className="w-4 h-4 text-[#FDC500]" />
                  22.5W Turbo
                </div>
                <p className="text-xs text-slate-500">Recupera até 50% de bateria do seu celular em aproximadamente 30 minutos.</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80"
                alt="Pessoas em festival curtindo música e registrando momentos"
                className="w-full h-80 sm:h-96 md:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500 rounded-2xl"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00296B]/80 via-transparent to-transparent flex items-end p-6 rounded-2xl pointer-events-none">
                <div className="text-white">
                  <span className="text-xs uppercase font-mono tracking-widest text-[#FDC500]">Liberdade Total</span>
                  <p className="font-bebas text-xl sm:text-2xl tracking-wide">Grave horas de shows sem o medo da bateria acabar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

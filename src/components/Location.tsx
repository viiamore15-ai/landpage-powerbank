import React from 'react';
import { MapPin, Clock, Truck, Store, PhoneCall, ExternalLink, ShieldCheck } from 'lucide-react';
import { WHATSAPP_DEFAULT_LINK } from '../data/mockData';

export const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text & Info */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#003F88] text-xs font-bold mb-4 border border-blue-100">
              <MapPin className="w-3.5 h-3.5 text-[#00509D]" />
              Ponto de Distribuição Estratégico
            </div>

            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#00296B] tracking-tight mb-6 uppercase">
              Onde Estamos
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              Estamos localizados no coração da <strong className="text-slate-900 font-bold">Mooca</strong>, tradicional bairro de São Paulo. Nossa operação logística é focada em agilidade extrema, garantindo que você receba seu pedido com rapidez e total segurança.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              Quer retirar em mãos na nossa base ou conferir o produto antes de levar? Entre em contato pelo WhatsApp e agende sua retirada ou combine envio via motoboy no mesmo dia!
            </p>

            {/* Practical Info Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-[#00296B] text-[#FDC500] flex items-center justify-center shrink-0 mt-0.5">
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#00296B] uppercase tracking-wider">
                    Retirada Presencial (Mooca - SP)
                  </strong>
                  <span className="text-xs text-slate-600">
                    Disponível mediante agendamento prévio no WhatsApp para conferência do produto.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-[#00296B] text-[#FDC500] flex items-center justify-center shrink-0 mt-0.5">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#00296B] uppercase tracking-wider">
                    Frete Grátis para Todo o Brasil & Motoboy SP
                  </strong>
                  <span className="text-xs text-slate-600">
                    Frete Grátis com envio prioritário rastreado via Sedex/Correios para todo o Brasil e motoboy expresso para a capital de SP.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-[#00296B] text-[#FDC500] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-xs font-bold text-[#00296B] uppercase tracking-wider">
                    Horário de Atendimento
                  </strong>
                  <span className="text-xs text-slate-600">
                    Segunda a Sexta: 08h às 19h | Sábados: 09h às 15h (Plantão WhatsApp ativo).
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <a
              href={WHATSAPP_DEFAULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#003F88] hover:text-[#00296B] border-b-2 border-[#FDC500] pb-1 hover:border-[#00296B] transition-all group"
            >
              <span>Falar com consultor agora e agendar retirada</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Right: Map Container */}
          <div className="lg:col-span-6">
            <div className="w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative bg-slate-100">
              <iframe
                title="Mapa de Localização Mooca São Paulo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.271103730043!2d-46.6062779!3d-23.5659881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce593623910f8d%3A0x86745147814b301b!2sMooca%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Address Card on top of map */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200/80 shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#00296B]">Bairro da Mooca — São Paulo, SP</div>
                  <div className="text-[11px] text-slate-500">CEP de Referência: 03162-000 | Zona Leste</div>
                </div>
                <a
                  href="https://maps.google.com/?q=Mooca,São+Paulo,SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#00296B] hover:bg-[#003F88] text-white text-xs font-bold rounded-lg transition-colors shrink-0"
                >
                  Ver no Maps
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

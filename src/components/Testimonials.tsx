import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCheck, MessageCircle, HeartHandshake, ZoomIn, X, Phone, Video, MoreVertical, ArrowLeft, Smile, Paperclip, Mic, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  onOpenOrderModal?: (planId?: string) => void;
}

interface TestimonialMessage {
  id: string;
  sender: 'client' | 'seller';
  senderLabel: string;
  role: string;
  city: string;
  time: string;
  imageSrc: string;
  imageFallback: string;
  altText: string;
  quickNote: string;
}

const TESTIMONIALS: TestimonialMessage[] = [
  {
    id: 'depoimento-1',
    sender: 'client',
    senderLabel: 'Cliente Verificado',
    role: 'Comprador Verificado',
    city: 'São Paulo - SP',
    time: '14:22',
    imageSrc: '/depoimento-1.png',
    imageFallback: 'https://drive.google.com/uc?export=download&id=1n4vqmSKWok6YtSjg0sRNzcoXbYFsKBhK',
    altText: 'Depoimento real de cliente sobre a entrega e carga do Powerbank Kapbom no WhatsApp',
    quickNote: 'Confirmou recebimento rápido e elogiou o display digital com carga real.',
  },
  {
    id: 'depoimento-2',
    sender: 'seller',
    senderLabel: 'Varlobrasil (Suporte Oficial)',
    role: 'Atendimento & Pós-Venda',
    city: 'São Paulo - SP',
    time: '14:25',
    imageSrc: '/depoimento-2.png',
    imageFallback: 'https://drive.google.com/uc?export=download&id=1QNm4TZpP1VSa3YbiLZWjSN3B_ZQyz62U',
    altText: 'Atendimento oficial Varlobrasil prestando suporte e confirmando garantia com o cliente',
    quickNote: 'Suporte humanizado prestando auxílio e garantindo a satisfação total.',
  },
  {
    id: 'depoimento-3',
    sender: 'client',
    senderLabel: 'Cliente Verificado',
    role: 'Comprador Verificado',
    city: 'Rio de Janeiro - RJ',
    time: '14:31',
    imageSrc: '/depoimento-3.png',
    imageFallback: 'https://drive.google.com/uc?export=download&id=1jiWMzSvGvrWlnb8dWWG5HLMAW_BXQGvx',
    altText: 'Depoimento de cliente satisfeito comprovando autonomia e cabos embutidos',
    quickNote: 'Testou durante viagem e aprovou a autonomia de múltiplas cargas no celular.',
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenOrderModal }) => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; label: string } | null>(null);

  return (
    <section id="avaliacoes" className="py-24 bg-[#00296B] text-white relative overflow-hidden">
      {/* Decorative Glow elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00509D]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#FDC500]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-bold text-[#FFD500] mb-4">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            Depoimentos Reais no WhatsApp
          </div>
          
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            Quem Compra, Recomenda no WhatsApp
          </h2>
          <p className="text-slate-200 text-base sm:text-lg mt-3">
            Prints autênticos de conversas reais com nossos clientes. Sem edição, com teste prático de carga e aprovação comprovada.
          </p>

          {/* Social Proof Rating Score */}
          <div className="inline-flex items-center gap-3 mt-6 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <div className="flex text-[#FDC500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-white">
              Nota 4.9/5 <span className="font-normal text-slate-300">(1.482 clientes atendidos)</span>
            </span>
          </div>
        </div>

        {/* WhatsApp Chat Canal Mockup Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#111b21] rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden flex flex-col">
            
            {/* WhatsApp Top Bar */}
            <div className="bg-[#202c33] px-4 py-3.5 flex items-center justify-between border-b border-white/5 select-none">
              <div className="flex items-center gap-3">
                <button type="button" aria-label="Voltar" className="text-slate-300 hover:text-white transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                
                {/* Avatar with online indicator */}
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#003F88] to-[#00509D] flex items-center justify-center text-[#FDC500] font-black text-sm border border-[#FDC500]/40">
                    V
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#202c33] rounded-full" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white leading-tight">Varlobrasil</span>
                    <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-semibold bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40">
                      Verificado
                    </span>
                  </div>
                  <span className="text-[11px] text-[#25D366] block font-medium">online agora</span>
                </div>
              </div>

              {/* Chat action icons */}
              <div className="flex items-center gap-3 text-slate-400">
                <Video className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                <Phone className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>

            {/* WhatsApp Conversation Canal / Messages Area */}
            <div
              className="p-4 sm:p-6 space-y-6 relative"
              style={{
                backgroundColor: '#0b141a',
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            >
              {/* Encryption Security Notice Pill */}
              <div className="flex justify-center">
                <div className="bg-[#182229]/95 text-[#ffd279] text-[11px] text-center px-3.5 py-1.5 rounded-lg max-w-sm border border-[#ffd279]/15 shadow-xs font-medium">
                  🔒 As mensagens são protegidas com a criptografia de ponta a ponta. Conversas reais autorizadas pelos clientes.
                </div>
              </div>

              {/* Date Header Pill */}
              <div className="flex justify-center">
                <span className="bg-[#182229] text-slate-400 text-[11px] font-semibold px-3 py-1 rounded-md uppercase tracking-wider shadow-xs">
                  Ontem
                </span>
              </div>

              {/* Render the 3 Testimonial images formatted vertically */}
              {TESTIMONIALS.map((item) => {
                const isClient = item.sender === 'client';

                return (
                  <div
                    key={item.id}
                    className={`flex flex-col w-full ${isClient ? 'items-start' : 'items-end'}`}
                  >
                    {/* Message Bubble Container with WhatsApp authentic styling */}
                    <div
                      className={`relative max-w-[90%] sm:max-w-[82%] md:max-w-[76%] rounded-2xl p-2 sm:p-2.5 shadow-lg transition-transform duration-300 hover:scale-[1.01] ${
                        isClient
                          ? 'bg-[#202c33] text-white rounded-tl-xs border border-white/5'
                          : 'bg-[#005c4b] text-white rounded-tr-xs border border-emerald-400/20'
                      }`}
                    >
                      {/* Sender Header info inside bubble */}
                      <div className="flex items-center justify-between gap-2 px-1 pb-1.5 mb-1 border-b border-white/10 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className={`font-bold ${isClient ? 'text-[#53bdeb]' : 'text-[#ffd279]'}`}>
                            {item.senderLabel}
                          </span>
                          <span className="text-[10px] text-slate-300 hidden sm:inline">• {item.city}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0">{item.time}</span>
                      </div>

                      {/* Testimonial Image - Strict Aspect Ratio Preserved */}
                      <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-slate-900 border border-white/10">
                        <img
                          src={item.imageSrc}
                          alt={item.altText}
                          width={719}
                          height={1599}
                          className="w-full h-auto aspect-[719/1599] object-contain transition-transform duration-300 group-hover:scale-101 select-none"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('google.com')) {
                              target.src = item.imageFallback;
                            }
                          }}
                          onClick={() =>
                            setSelectedImage({
                              src: item.imageSrc,
                              alt: item.altText,
                              label: item.senderLabel,
                            })
                          }
                        />

                        {/* Interactive Zoom Overlay Badge */}
                        <div
                          onClick={() =>
                            setSelectedImage({
                              src: item.imageSrc,
                              alt: item.altText,
                              label: item.senderLabel,
                            })
                          }
                          className="absolute bottom-2 right-2 px-2.5 py-1 rounded-full bg-black/75 hover:bg-black/90 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1 shadow-md transition-colors border border-white/20"
                        >
                          <ZoomIn className="w-3.5 h-3.5 text-[#FDC500]" />
                          <span>Ampliar</span>
                        </div>
                      </div>

                      {/* Quick Summary Note & WhatsApp Delivery Checkmark */}
                      <div className="mt-2 px-1 flex items-center justify-between text-[11px] text-slate-300">
                        <span className="truncate pr-2 italic text-slate-300">
                          {item.quickNote}
                        </span>
                        <div className="flex items-center gap-1 shrink-0">
                          <span className="text-[10px] text-slate-400">{item.time}</span>
                          <CheckCheck className={`w-3.5 h-3.5 ${isClient ? 'text-slate-400' : 'text-[#53bdeb]'}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* WhatsApp Bottom Input Bar Mockup */}
            <div className="bg-[#202c33] px-3 sm:px-4 py-3 flex items-center gap-2 sm:gap-3 border-t border-white/5 select-none">
              <Smile className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
              <Paperclip className="w-5 h-5 text-slate-400 cursor-pointer hover:text-white" />
              <div className="flex-1 bg-[#2a3942] text-slate-400 text-xs sm:text-sm px-4 py-2.5 rounded-full">
                Conversa verificada da Central Varlobrasil...
              </div>
              <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-md">
                <Mic className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

        {/* Action Call to Action below testimonials */}
        <div className="mt-12 text-center max-w-xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Mais de 1.480 clientes receberam com frete grátis e nota fiscal</span>
          </div>

          <button
            onClick={() => onOpenOrderModal ? onOpenOrderModal("combo-duplo") : (window.location.hash = "#precos")}
            className="w-full sm:w-auto bg-[#FDC500] hover:bg-[#FFD500] text-[#00296B] font-extrabold text-base sm:text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#FDC500]/30 hover:-translate-y-0.5 transition-all uppercase tracking-wide flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Quero Meu Kapbom Com Garantia de 30 Dias</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Lightbox / Zoom Modal for full inspection */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[92vh] flex flex-col items-center bg-[#111b21] rounded-2xl p-3 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-white/10 px-2 text-white">
              <span className="text-xs font-bold text-[#FDC500] uppercase tracking-wide">
                {selectedImage.label} • Resolução Completa
              </span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Expanded Image with original ratio */}
            <div className="w-full overflow-y-auto max-h-[80vh] rounded-xl flex justify-center bg-black/60 p-1">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-auto h-auto max-h-[78vh] object-contain rounded-lg shadow-xl"
              />
            </div>
            
            <p className="text-[11px] text-slate-400 mt-2 text-center">
              Pressione ESC ou clique fora para fechar
            </p>
          </div>
        </div>
      )}
    </section>
  );
};


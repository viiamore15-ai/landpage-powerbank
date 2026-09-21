import { PricingPlan, Review, FAQItem, DeviceCharge } from '../types';

export const WHATSAPP_PHONE = "5511954103087";
export const WHATSAPP_DEFAULT_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Powerbank Kapbom 20.000mAh e garantir o meu.")}`;

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "individual",
    name: "Individual",
    subtitle: "Para o dia a dia e trabalho",
    price: "149,99",
    originalPrice: "199,90",
    units: 1,
    freeShipping: true,
    items: [
      "1x Powerbank Kapbom 20.000mAh Original",
      "2 Cargas Completas garantidas",
      "Frete Grátis para todo o Brasil",
      "4 Cabos Embutidos (Lightning, Type-C, Micro, USB)",
      "Display Digital LED com % em tempo real",
      "Garantia Total de 30 Dias com Nota",
      "Suporte exclusivo direto no WhatsApp"
    ],
    whatsappMessage: "Olá! Gostaria de comprar 1 Unidade do Powerbank Kapbom 20.000mAh (Plano Individual - R$ 149,99 com Frete Grátis). Como podemos prosseguir com o pagamento e entrega?"
  },
  {
    id: "combo-duplo",
    name: "Combo Duplo",
    subtitle: "Para você e seu par ou reserva",
    price: "274,99",
    originalPrice: "300,00",
    featured: true,
    badge: "MAIS VENDIDO",
    savings: "Economia de R$ 25,00",
    freeShipping: true,
    units: 2,
    items: [
      "2x Powerbank Kapbom 20.000mAh Originais",
      "De R$ 300,00 por apenas R$ 274,99",
      "2 Cargas Completas em cada aparelho",
      "Frete Grátis para todo o Brasil",
      "Cores à sua escolha (Preto Fosco / Branco Neve)",
      "Carregamento Turbo 22.5W Power Delivery",
      "Garantia Total de 30 Dias em ambos"
    ],
    whatsappMessage: "Olá! Quero aproveitar a promoção do COMBO DUPLO do Powerbank Kapbom (De R$ 300,00 por R$ 274,99 com Frete Grátis para todo o Brasil). Quais cores estão disponíveis para envio imediato?"
  },
  {
    id: "kit-familia",
    name: "Kit Família",
    subtitle: "Energia para todos e viagens longas",
    price: "399,90",
    originalPrice: "449,90",
    badge: "MELHOR CUSTO-BENEFÍCIO",
    savings: "Economia de R$ 50,00",
    freeShipping: true,
    units: 3,
    items: [
      "3x Powerbank Kapbom 20.000mAh Originais",
      "De R$ 449,90 por R$ 399,90 (Apenas R$ 133,30 cada)",
      "2 Cargas Completas em cada unidade",
      "Frete Grátis para todo o Brasil",
      "Prioridade no despacho do pedido",
      "Garantia Total de 30 Dias com Nota",
      "Brinde especial de proteção contra impactos"
    ],
    whatsappMessage: "Olá! Gostaria de pedir o KIT FAMÍLIA (De R$ 449,90 por R$ 399,90 com Frete Grátis para todo o Brasil). Como funciona o envio imediato?"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Mariana S.",
    role: "Frequentadora de Festivais",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Salvou minha vida no festival!",
    text: "Fui para o Rock in Rio e esse Powerbank salvou minha vida. Carreguei meu celular 3 dias seguidos e ainda sobrou bateria para salvar as fotos das minhas amigas! Os cabos embutidos são perfeitos porque você não perde nada na bolsa.",
    date: "Há 4 dias",
    verified: true
  },
  {
    id: "2",
    name: "Ricardo M.",
    role: "Motorista de Aplicativo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Aguenta a rotina pesada o dia todo",
    text: "Trabalho na rua o dia todo usando GPS e 4G sem parar, o que drena qualquer bateria em poucas horas. Foi o único powerbank que realmente aguentou o tranco sem esquentar meu aparelho nem perder capacidade.",
    date: "Há 1 semana",
    verified: true
  },
  {
    id: "3",
    name: "Lucas T.",
    role: "Viajante & Fotógrafo",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Excelente acabamento e voos liberados",
    text: "O acabamento fosco é muito elegante e não é aquele trambolho pesado que a gente vê por aí. Cabe perfeitamente na mochila de bordo e passou sem nenhuma restrição na esteira do aeroporto pela regra de 20k mAh da ANAC.",
    date: "Há 2 semanas",
    verified: true
  },
  {
    id: "4",
    name: "Ana Paula",
    role: "Designer & Criadora de Conteúdo",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Atendimento na Mooca nota 10!",
    text: "Chegou super rápido aqui na Mooca em poucas horas via motoboy. Atendimento via WhatsApp muito atencioso, tiraram todas as minhas dúvidas e o produto é 100% original Kapbom com display digital nítido. Recomendo de olhos fechados!",
    date: "Há 3 semanas",
    verified: true
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Posso levar o Powerbank Kapbom 20.000mAh no avião?",
    answer: "Sim! De acordo com as normas da ANAC (Agência Nacional de Aviação Civil) e IATA internacional, powerbanks de até 100Wh (o modelo Kapbom 20.000mAh opera a ~74Wh) são totalmente permitidos para transporte na bagagem de mão (cabine). Apenas lembre-se de nunca despachá-lo no porão da aeronave."
  },
  {
    question: "Ele realmente entrega 2 cargas completas no meu celular?",
    answer: "Sim! Com capacidade otimizada e células de polímero de lítio de alta densidade, o Kapbom 20.000mAh entrega 2 cargas completas com alta estabilidade nos principais smartphones do mercado (como iPhone 13/14/15/16 ou linha Galaxy S23/S24), preservando a saúde da bateria do seu smartphone."
  },
  {
    question: "Quais cabos já vêm embutidos nele?",
    answer: "O Kapbom possui 4 cabos integrados reforçados diretamente no chassi: 1 conector Lightning (compatível com iPhones e iPads), 1 conector Type-C (para Androids modernos, iPhones da linha 15/16 e fones), 1 conector Micro-USB (V8) e 1 cabo USB de entrada para recarregar o próprio powerbank em qualquer tomada ou carregador."
  },
  {
    question: "O carregamento Turbo 22.5W estraga a bateria do celular?",
    answer: "Não! O Kapbom conta com Chip Inteligente de Gerenciamento de Carga (Smart IC) que reconhece automaticamente a voltagem e amperagem ideal do seu aparelho, enviando apenas a potência suportada sem causar superaquecimento nem sobrecargas."
  },
  {
    question: "Como funciona a entrega e o Frete Grátis?",
    answer: "Oferecemos Frete Grátis para todo o Brasil! Para clientes de São Paulo e Grande SP, temos opção de envio expresso via motoboy ou retirada agendada na nossa base na Mooca. Para todas as outras regiões e estados do Brasil, o envio é feito via Correios com código de rastreamento enviado diretamente no seu WhatsApp."
  },
  {
    question: "O produto possui garantia de fábrica?",
    answer: "Sim! Todos os nossos produtos possuem garantia de 30 dias contra qualquer defeito de fabricação, além de suporte ágil direto pelo nosso canal oficial de atendimento no WhatsApp."
  }
];

export const DEVICE_CHARGES: DeviceCharge[] = [
  { name: "iPhone 15 / 16", batteryCapacity: 3349, chargesEstimate: 2.0, icon: "smartphone" },
  { name: "iPhone 15 / 16 Pro Max", batteryCapacity: 4422, chargesEstimate: 2.0, icon: "smartphone" },
  { name: "Samsung Galaxy S24", batteryCapacity: 4000, chargesEstimate: 2.0, icon: "smartphone" },
  { name: "Samsung S24 Ultra", batteryCapacity: 5000, chargesEstimate: 2.0, icon: "smartphone" },
  { name: "Xiaomi 13 / 14", batteryCapacity: 4610, chargesEstimate: 2.0, icon: "smartphone" },
  { name: "iPad Mini / Tablet", batteryCapacity: 5124, chargesEstimate: 1.8, icon: "tablet" },
  { name: "Fones Bluetooth (Cases)", batteryCapacity: 500, chargesEstimate: 12.0, icon: "headphones" }
];

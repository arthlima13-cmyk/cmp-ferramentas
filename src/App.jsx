import React, { useMemo, useState } from 'react';

const STORE = {
  name: 'CMP Ferramentas',
  whatsapp: '5517936188454',
  phoneLabel: '(17) 93618-8454',
  location: 'Atendimento em todo o Brasil',
};

const CATEGORIES = [
  'Todos',
  'Adaptadores',
  'Ferramentas',
  'Eletrica',
  'Itaqua',
,
];

const PRODUCTS = [

   {
  id: 'adap-001',
  name: 'Adaptador T Reforçado',
  category: 'Adaptadores',
  badge: 'Oferta Especial',
  description: '',
  image: 'https://images.unsplash.com/photo-1777476682610-277d7c15915f?q=80&w=1470&auto=format&fit=crop',
  unitPrice: 1.40,
  variants: [
    { id: '25pc', label: '25 Uni', price: 38.50, stock: 500, weightKg: 0.2 },
    { id: '50pc', label: '50 Uni', price: 70.00, stock: 500, weightKg: 0.2 },
    { id: '100', label: '100 Uni', price: 125.00, stock: 2000, weightKg: 0.2 },
  ],
},
   {
  id: 'adap-001',
  name: 'Adaptador T Comum',
  category: 'Adaptadores',
  badge: 'Oferta Especial',
  description: '',
  image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777580045/ChatGPT_Image_30_de_abr._de_2026_17_13_43_wpzsxb.png',
  unitPrice: 1.20,
  variants: [
    { id: '25pc', label: '25 Uni', price: 32.50, stock: 500, weightKg: 0.2 },
    { id: '50pc', label: '50 Uni', price: 60.00, stock: 500, weightKg: 0.2 },
    { id: '100', label: '100 Uni', price: 115.00, stock: 2000, weightKg: 0.2 },
  ],
},
  {
    id: 'adap-003',
    name: 'Adaptador Cubo Colorido',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
    unitPrice: 2.60, 
    description: '',
    image: 'https://images.unsplash.com/photo-1777475369764-ab87f1ae4c9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: [
         { id: '25pc', label: '25 Uni', price: 65.00, stock: 500, weightKg: 0.2 },
    { id: '50pc', label: '50 Uni', price: 125.00, stock: 500, weightKg: 0.2 },
    { id: '100', label: '100 Uni', price: 240.00, stock: 2000, weightKg: 0.2 },
    ],
  },
  {
    id: 'adap-004',
    name: 'Adaptador Redondo Colorido',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
     unitPrice: 2.60,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779400489/ChatGPT_Image_21_de_mai._de_2026_18_54_18_ilu1ai.png',
    variants: [
      { id: '25pc', label: '25 Uni', price: 65.00, stock: 500, weightKg: 0.2 },
    { id: '50pc', label: '50 Uni', price: 125.00, stock: 500, weightKg: 0.2 },
    { id: '100', label: '100 Uni', price: 240.00, stock: 2000, weightKg: 0.2 }
    
    ],
  },
  {
    id: 'adap-005',
    name: 'Pino Macho Branco',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
    unitPrice: 1.40,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1780372112/ADAPTADOR_MACHO_nnbsym.png',
    variants: [
      {
        id: 'branco1',
        label: 'Branco - 50 Uni',
        price: 70.00,
        stock: 500,
        weightKg: 0.1,
        image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1780372112/ADAPTADOR_MACHO_nnbsym.png',
      },
      {
        id: 'branco2',
        label: 'Branco - 100 Uni',
        price: 140.00,
        stock: 500,
        weightKg: 0.1,
        image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1780372112/ADAPTADOR_MACHO_nnbsym.png',
      },
    ],
  },
   {
    id: 'adap-005',
    name: 'Pino Macho Preto',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
    unitPrice: 1.40,
    description: '',
    image: 'https://images.unsplash.com/photo-1777480226851-43e7f83d0182?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: [
      {
        id: 'preto1',
        label: 'Preto - 50 Uni',
        price: 70.00,
        stock: 500,
        weightKg: 0.1,
        image: 'https://images.unsplash.com/photo-1777480226851-43e7f83d0182?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 'preto2',
        label: 'Preto - 100 Uni',
        price: 140.00,
        stock: 500,
        weightKg: 0.1,
        image: 'https://images.unsplash.com/photo-1777480226851-43e7f83d0182?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    id: 'adap-006',
    name: 'Bob Esponja Porcelana',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
    unitPrice: 1.40,
    description: '',
    image: 'https://images.unsplash.com/photo-1777487932963-f4c7c5378bbd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: [
   { id: '25pc', label: '25 Uni', price: 38.50, stock: 500, weightKg: 0.2 },
    { id: '50pc', label: '50 Uni', price: 70.00, stock: 500, weightKg: 0.2 },
    { id: '100', label: '100 Uni', price: 125.00, stock: 2000, weightKg: 0.2 },
  ],
  },
  {
    id: 'adap-007',
    name: 'Bob Esponja Tradicional',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
    unitPrice: 1.30,
    description: '',
    image: 'https://images.unsplash.com/photo-1777487932963-f4c7c5378bbd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: [
     { id: '25pc', label: '25 Uni', price: 37.50, stock: 500, weightKg: 0.2 },
    { id: '50pc', label: '50 Uni', price: 65.00, stock: 500, weightKg: 0.2 },
    { id: '100', label: '100 Uni', price: 115.00, stock: 2000, weightKg: 0.2 },
  ],
  },
  {
    id: 'adap-008',
    name: 'Adaptador Flexível Fixo',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
      unitPrice: 1.80,
    description: '',
    image: 'https://images.unsplash.com/photo-1777488110029-bde929b0267f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: [
      { id: '25pc', label: '25 Uni', price: 45.00, stock: 500, weightKg: 0.2 },
    { id: '50pc', label: '50 Uni', price: 87.50, stock: 500, weightKg: 0.2 },
    { id: '100', label: '100 Uni', price: 170.00, stock: 2000, weightKg: 0.2 },
   ],
  },
  {
    id: 'adap-0029',
    name: 'Tomada em Barra',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
      unitPrice: 2.50,
    description: '',
    image: 'https://images.unsplash.com/photo-1777480577334-2542aac17e4f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: [
      {
        id: '10abranca21',
        label: 'Branca 10A/20A - 50 Uni ',
        price: 125.00,
        stock: 500,
        weightKg: 0.4,
        image: 'https://images.unsplash.com/photo-1777480577334-2542aac17e4f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: '10a2branca4',
        label: 'Branca 10A/20A - 100 Uni',
        price: 250.00,
        stock: 500,
        weightKg: 0.4,
        image: 'https://images.unsplash.com/photo-1777480577334-2542aac17e4f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
 {
    id: 'adap-0020',
    name: 'Tomada em Barra',
    category: 'Adaptadores',
    badge: 'Oferta Especial',
      unitPrice: 2.50,
    description: '',
    image: 'https://images.unsplash.com/photo-1777480577334-2542aac17e4f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variants: [
      {
        id: '10a2preta3',
        label: 'Preta 10A/20A - 50 Uni',
        price: 125.00,
        stock: 500,
        weightKg: 0.4,
        image: 'https://images.unsplash.com/photo-1777480640336-cb0cfdb3d0ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
       {
        id: '10a2preta4',
        label: 'Preta 10A/20A - 100 Uni',
        price: 250.00,
        stock: 500,
        weightKg: 0.4,
        image: 'https://images.unsplash.com/photo-1777480640336-cb0cfdb3d0ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
 {
  id: 'adap-010',
  name: 'Tomada Redonda',
  category: 'Adaptadores',
  badge: 'Oferta Especial',
   unitPrice: 1.50,
  description: '',
  image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777563960/ChatGPT_Image_30_de_abr._de_2026_12_45_47_tlyr7c.png',
  variants: [
    {
      id: '10a-branca',
      label: '10A/20A Branca Colorida - 50 Uni',
      price: 75.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777563960/ChatGPT_Image_30_de_abr._de_2026_12_45_47_tlyr7c.png',
    },
     {
      id: '10a-branca2',
      label: '10A/20A Branca Colorida - 100 Uni',
      price: 150,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777563960/ChatGPT_Image_30_de_abr._de_2026_12_45_47_tlyr7c.png',
    },
  ],
},
  {
  id: 'adap-010',
  name: 'Tomada Redonda',
  category: 'Adaptadores',
  badge: 'Oferta Especial',
   unitPrice: 1.50,
  description: '',
  image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777563960/ChatGPT_Image_30_de_abr._de_2026_12_45_47_tlyr7c.png',
  variants: [
        {
      id: '10a-preta1',
      label: '10A/20A Preta - 50 Uni',
      price: 75.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/v1777562343/ChatGPT_Image_30_de_abr._de_2026_12_18_04_gvfgjg.png',
    },
     {
      id: '10a-preta2',
      label: '10A/20A Preta - 100 Uni',
      price: 150.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/v1777562343/ChatGPT_Image_30_de_abr._de_2026_12_18_04_gvfgjg.png',
    
    },
  ],
},
  {
  id: 'adap-01012',
  name: 'Tomada Redonda',
  category: 'Adaptadores',
  badge: 'Oferta Especial',
   unitPrice: 1.80,
  description: '',
  image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777563424/ChatGPT_Image_30_de_abr._de_2026_12_31_02_qvraex.png',
  variants: [
        {
      id: '10a-cinza',
      label: '10A/20A Preta - 50 Uni',
      price: 90.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777563424/ChatGPT_Image_30_de_abr._de_2026_12_31_02_qvraex.png',
    },
     {
      id: '10a-ciwnza',
      label: '10A/20A Preta - 100 Uni',
      price: 180.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777563424/ChatGPT_Image_30_de_abr._de_2026_12_31_02_qvraex.png',
    
    },
  ],
},
  {
  id: 'adap-011',
  name: 'Adaptador Fêmea',
  category: 'Adaptadores',
  badge: 'Oferta Especial',
unitPrice: 1.80,
  description: '',
  image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564130/ChatGPT_Image_30_de_abr._de_2026_12_48_23_f7qg7n.png',
  variants: [
    {
      id: '10a-branca1',
      label: '10A Branca - 50 Uni',
      price: 90.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564130/ChatGPT_Image_30_de_abr._de_2026_12_48_23_f7qg7n.png',
    },
    {
      id: '10a-branca2',
      label: '10A Branca - 100 Uni',
      price: 180.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564130/ChatGPT_Image_30_de_abr._de_2026_12_48_23_f7qg7n.png',
    },
{
      id: '20a-branca1',
      label: '20A Branca - 50 Uni',
      price: 90.00,
      stock: 2000,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564130/ChatGPT_Image_30_de_abr._de_2026_12_48_23_f7qg7n.png',
    },
    {
      id: '20a-branca2',
      label: '20A Branca - 100 Uni',
      price: 180.00,
      stock: 2000,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564130/ChatGPT_Image_30_de_abr._de_2026_12_48_23_f7qg7n.png',
    },
  ],
},
     {
  id: 'adap-0112',
  name: 'Adaptador Fêmea',
  category: 'Adaptadores',
  badge: 'Oferta Especial',
unitPrice: 1.50,
  description: '',
  image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564130/ChatGPT_Image_30_de_abr._de_2026_12_48_23_f7qg7n.png',
  variants: [
 {
      id: '10a-prweta',
      label: '10A Preta - 50 Uni',
      price: 90.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564493/ChatGPT_Image_30_de_abr._de_2026_12_54_22_e0xxdc.png',
   
    },
    {
      id: '10a-preeta2',
      label: '10A Preta - 100 Uni',
      price: 180.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564493/ChatGPT_Image_30_de_abr._de_2026_12_54_22_e0xxdc.png',
   
    },
    {
      id: '20a-prewta1',
      label: '20A Preta - 50 Uni',
      price: 90.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564493/ChatGPT_Image_30_de_abr._de_2026_12_54_22_e0xxdc.png',
    },
        {
      id: '20a-pretwa2',
      label: '20A Preta - 100 Uni',
      price: 180.00,
      stock: 500,
      weightKg: 0.2,
      image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777564493/ChatGPT_Image_30_de_abr._de_2026_12_54_22_e0xxdc.png',
    },
  ],
},
  {
    id: 'disco-001',
    name: 'Disco de Corte Segmentado',
    category: 'Ferramentas',
    unitPrice: 17.20,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777576047/ChatGPT_Image_30_de_abr._de_2026_16_06_09_isfqd6.png',
    variants: [{ id: 'unico', label: 'Único', price: 17.20, stock: 100, weightKg: 0.3 }],
  },
  {
    id: 'disco-002',
    name: 'Disco de Corte Liso',
    category: 'Ferramentas',
    unitPrice: 17.20,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777576745/ChatGPT_Image_30_de_abr._de_2026_16_18_36_gq9ioq.png',
    variants: [{ id: 'unico', label: 'Único', price: 17.20, stock: 100, weightKg: 0.3 }],
  },
  {
    id: 'disco-003',
    name: 'Disco de Corte Turbo',
    category: 'Ferramentas',
    unitPrice: 17.20,
    description: '.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777577015/ChatGPT_Image_30_de_abr._de_2026_16_22_52_f8n8g2.png',
    variants: [{ id: 'unico', label: 'Único', price: 17.20, stock: 100, weightKg: 0.3 }],
  },
  {
    id: 'disco-004',
    name: 'Disco de Corte Vídea',
    category: 'Ferramentas',
    unitPrice: 17.20,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777576507/ChatGPT_Image_30_de_abr._de_2026_16_14_11_dne0cf.png',
    variants: [{ id: 'unico', label: 'Único', price: 17.20, stock: 100, weightKg: 0.3 }],
  },
  {
    id: 'disco-005',
    name: 'Disco de Corte Contínuo',
    category: 'Ferramentas',
    unitPrice: 17.20,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777576253/ChatGPT_Image_30_de_abr._de_2026_16_09_40_bokpbs.png',
    variants: [{ id: 'unico', label: 'Único', price: 17.20, stock: 100, weightKg: 0.3 }],
  },
  {
    id: 'disco-006',
    name: 'Disco de Corte Multiuso',
    category: 'Ferramentas',
    unitPrice: 28.90,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777577377/ChatGPT_Image_30_de_abr._de_2026_16_29_08_usstad.png',
    variants: [{ id: 'unico', label: 'Único', price: 28.90, stock: 100, weightKg: 0.3 }],
  },
  {
    id: 'reb-001',
    name: 'Rebitadeira',
    category: 'Ferramentas',
    unitPrice: 20.80,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777579751/ChatGPT_Image_30_de_abr._de_2026_17_07_15_x2migr.png',
    variants: [{ id: 'unico', label: 'Único', price: 20.80, stock: 100, weightKg: 0.7 }],
  },
  {
    id: 'trena-001',
    name: 'Trena Transparente',
    category: 'Ferramentas',
    unitPrice: 11.40,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777581077/ChatGPT_Image_30_de_abr._de_2026_17_30_44_rtdw2v.png',
    variants: [{ id: '5m', label: '5 metros', price: 11.40, stock: 100, weightKg: 0.3 }],
  },
  {
    id: 'trena-002',
    name: 'Trenas',
    category: 'Ferramentas',
    unitPrice: 5.50,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777590661/ChatGPT_Image_30_de_abr._de_2026_20_10_46_zxrnik.png',
    variants: [
      { id: '1m', label: '1 metro', price: 5.50, stock: 100, weightKg: 0.15 },
      { id: '3m', label: '3 metros', price: 6.70, stock: 100, weightKg: 0.25 },
      { id: '5m', label: '5 metros', price: 7.80, stock: 100, weightKg: 0.35 },
      { id: '10m', label: '10 metros', price: 10.20, stock: 100, weightKg: 0.6 },
    ],
  },
  {
    id: 'chave-001',
    name: 'Kit Chave de Fenda|Philips',
    category: 'Ferramentas',
    unitPrice: 23.40,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777590929/ChatGPT_Image_30_de_abr._de_2026_20_15_12_d9lv6a.png',
    variants: [{ id: 'jogo-6-pecas', label: 'Jogo com 6 peças', price: 23.40, stock: 100, weightKg: 0.8 }],
  },
   {
    id: 'chave-002',
    name: 'Chave de Torx',
    category: 'Ferramentas',
    unitPrice: 20.80,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777591205/ChatGPT_Image_30_de_abr._de_2026_20_19_48_jkdima.png',
    variants: [{ id: 'modelo-longo', label: 'Modelo longo - jogo de chaves', price: 20.80, stock: 100, weightKg: 0.8 }],
  },
  {
    id: 'chave-003',
    name: 'Chave de Allen',
    category: 'Ferramentas',
    unitPrice: 23.80,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777591205/ChatGPT_Image_30_de_abr._de_2026_20_19_48_jkdima.png',
    variants: [{ id: 'modelo-longo', label: 'Modelo longo - jogo de chaves', price: 23.80, stock: 100, weightKg: 0.8 }],
  },
  {
    id: 'estilete',
    name: 'Estilete',
    category: 'Ferramentas',
    unitPrice: 6.90,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777591427/ChatGPT_Image_30_de_abr._de_2026_20_23_36_rgd9wn.png',
    variants: [{ id: '3-laminas', label: '3 lâminas', price: 6.90, stock: 100, weightKg: 0.2 }],
  },
  {
    id: 'grifo-12',
    name: 'Grifo 12 Polegadas',
    category: 'Ferramentas',
    unitPrice: 28.60,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777591830/ChatGPT_Image_30_de_abr._de_2026_20_30_03_j4ggbv.png',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 28.60, stock: 100, weightKg: 1.1 }],
  },
  {
    id: 'grifo-14',
    name: 'Grifo 14 Polegadas',
    category: 'Ferramentas',
    unitPrice: 36.40,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777591830/ChatGPT_Image_30_de_abr._de_2026_20_30_03_j4ggbv.png',
    variants: [{ id: '14-pol', label: '14 polegadas', price: 36.40, stock: 100, weightKg: 1.3 }],
  },
  {
    id: 'nivel-001',
    name: 'Nível 3 Bolhas',
    category: 'Ferramentas',
    unitPrice: 7.90,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777592146/ChatGPT_Image_30_de_abr._de_2026_20_35_32_iy674v.png',
    variants: [
      { id: 'p', label: 'Tamanho P', price: 7.90, stock: 100, weightKg: 0.4 },
      { id: 'g', label: 'Tamanho G', price: 12.90, stock: 100, weightKg: 0.6 },
    ],
  },
  {
    id: 'Querosene-Itaqua',
    name: 'Querosene Itaqua',
    category: 'Itaqua',
    unitPrice: 45.00,
    description: 'Querosene 900 ML - Itaqua.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779402818/ChatGPT_Image_21_de_mai._de_2026_19_32_57_hfi5yw.png',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 45.00, stock: 100, weightKg: 1.1 }],
  },{
    id: 'Aguarras-Itaqua',
    name: 'Aguarras Itaqua',
    category: 'Itaqua',
    unitPrice: 45.00,
    description: 'Aguarras 900 ML - Itaqua.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779403088/ChatGPT_Image_21_de_mai._de_2026_19_37_59_svgmxn.png',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 45.00, stock: 100, weightKg: 1.1 }],
  },
  {
    id: 'Thinner-Itaqua',
    name: 'Thinner Itaqua',
    category: 'Itaqua',
    unitPrice: 45.00,
    description: 'Thinner 900 ML - Itaqua.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779401374/thinner-900-ml-12116-itaquA_2023-04-12_12-57-56_0_229_l2ovmb.jpg',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 45.00, stock: 100, weightKg: 1.1 }],
  },
   {
    id: 'Plafon',
    name: 'Plafon Porcelana',
    category: 'Eletrica',
    unitPrice: 14.90,
    description: 'Plafon Plastico Porcelana.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779403538/ChatGPT_Image_21_de_mai._de_2026_19_45_19_hgvuar.png',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 14.90, stock: 100, weightKg: 1.1 }],
  }, 
    {
    id: 'Sifão',
    name: 'Sifão Pia Plastico',
    category: 'Ferramentas',
    unitPrice: 17.90,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779403690/images_11_ualaek.jpg',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 17.90, stock: 100, weightKg: 1.1 }],
  },   
{
    id: 'resistencia-01',
    name: 'Resistencia Bella Ducha',
    category: 'Eletrica',
    unitPrice: 19.90,
    description: 'Resistencia Chuveiro Bella Ducha.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779429921/resistencia_bella_ducha_s76zvy.jpg',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 19.90, stock: 100, weightKg: 1.1 }],
  },
   {
    id: 'resistencia-02',
    name: 'Resistencia Advanced',
    category: 'Eletrica',
    unitPrice: 24.90,
    description: 'Resistencia Chuveiro Advanced.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779430210/resistencia_advanced_jwwlmm.jpg',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 24.90, stock: 100, weightKg: 1.1 }],
  },  
    {
    id: 'resistencia-03',
    name: 'Resistencia Gorducha',
    category: 'Eletrica',
    unitPrice: 24.90,
    description: 'Resistencia Chuveiro Gorducha.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779430282/resistencia_gorducha_acnrql.jpg',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 24.90, stock: 100, weightKg: 1.1 }],
  },  
   {
    id: 'resistencia-04',
    name: 'Resistencia Maxi Ducha',
    category: 'Eletrica',
    unitPrice: 28.60,
    description: 'Resistencia Chuveiro Maxi Ducha.',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1779430343/resistencia_tf566i.jpg',
    variants: [{ id: '12-pol', label: '12 polegadas', price: 28.60, stock: 100, weightKg: 1.1 }],
  },  
  {
    id: 'lixa-001',
    name: 'Disco Lixa Mármore',
    category: 'Ferramentas',
    unitPrice: 10.40,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777592481/ChatGPT_Image_30_de_abr._de_2026_20_41_02_ah7wxb.png',
    variants: [
      { id: '50', label: '50', price: 10.40, stock: 100, weightKg: 0.1 },
      { id: '100', label: '100', price: 12.60, stock: 100, weightKg: 0.1 },
      { id: '200', label: '200', price: 14.10, stock: 100, weightKg: 0.1 },
    ],
  },
  {
    id: 'aplicador-001',
    name: 'Aplicador Silicone',
    category: 'Ferramentas',
    unitPrice: 19.70,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777592630/ChatGPT_Image_30_de_abr._de_2026_20_43_29_swr1cn.png',
    variants: [{ id: 'unico', label: 'Único', price: 19.70, stock: 100, weightKg: 0.6 }],
  },
  {
    id: 'desempenadeira-001',
    name: 'Desempenadeira Lisa',
    category: 'Desempenadeiras',
    unitPrice: 35.90,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777592847/images_7_wascei.jpg',
    variants: [{ id: 'unico', label: 'Único', price: 35.90, stock: 100, weightKg: 0.5 }],
  },
  {
    id: 'desempenadeira-002',
    name: 'Desempenadeira Corrugada',
    category: 'Desempenadeiras',
    unitPrice: 35.90,
    description: '',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777592799/de395258566dd097f401b8eb0105d21a_no8r6v.jpg',
    variants: [{ id: 'unico', label: 'Único', price: 35.90, stock: 100, weightKg: 0.5 }],
  },
   {
    id: 'fio',
    name: 'Fio Sil',
    category: 'Eletrica',
    unitPrice: 278.00,
    description: '0',
    image: 'https://res.cloudinary.com/dyex6ege2/image/upload/q_auto/f_auto/v1777593035/br-11134207-7r98o-m1y4zqda1ftrf2_fsfhis.jpg',
    variants: [
      { id: '2.5m', label: '2.5mm', price: 278.00, stock: 100, weightKg: 0.15 },
      { id: '4m', label: '4mm', price: 470.00, stock: 100, weightKg: 0.25 },
      { id: '6m', label: '6mm', price: 640.00, stock: 100, weightKg: 0.35 },
      { id: '10m', label: '10mm', price: 870.00, stock: 100, weightKg: 0.6 },
    ],
  },
];

function money(value) {
  return Number(value || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function onlyNumbers(value) {
  return String(value || '').replace(/\D/g, '');
}

function cepMask(value) {
  const digits = onlyNumbers(value).slice(0, 8);
  return digits.length <= 5 ? digits : `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function phoneMask(value) {
  const digits = onlyNumbers(value).slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isSaoPauloCapitalCep(cep) {
  const digits = onlyNumbers(cep);
  const prefix = Number(digits.slice(0, 5));

  return (
    digits.length === 8 &&
    (
      (prefix >= 1000 && prefix <= 5999) ||
      (prefix >= 8000 && prefix <= 8499)
    )
  );
}

function calculateDemoShipping(cep, weightKg) {
  const digits = onlyNumbers(cep);
  if (digits.length !== 8) return null;

  if (isSaoPauloCapitalCep(cep)) {
    return {
      price: 0,
      deadline: 'São Paulo Capital',
      service: 'Frete grátis',
    };
  }

  const region = Number(digits.slice(0, 2));
  const base = region > 39 ? 24 : 16;
  const price = base + Number(weightKg || 0) * 1.85;
  const deadline = region > 39 ? '5 a 8 dias úteis' : '2 a 5 dias úteis';

  return { price, deadline, service: 'Simulação PAC/SEDEX' };
}

export default function App() {
  const [category, setCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [shipping, setShipping] = useState(null);
  const [shippingError, setShippingError] = useState('');
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    cep: '',
    street: '',
    number: '',
    district: '',
    city: '',
    uf: '',
  });
  const [selectedVariants, setSelectedVariants] = useState(() => {
    const initial = {};
    PRODUCTS.forEach((product) => {
      initial[product.id] = product.variants[0].id;
    });
    return initial;
  });

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const categoryOk = category === 'Todos' || product.category === category;
      const searchOk =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.variants.some((variant) => variant.label.toLowerCase().includes(term));
      return categoryOk && searchOk;
    });
  }, [category, search]);

  const cartItems = useMemo(() => {
    return cart
      .map((item) => {
        const product = PRODUCTS.find((productItem) => productItem.id === item.productId);
        const variant = product ? product.variants.find((variantItem) => variantItem.id === item.variantId) : null;
        if (!product || !variant) return null;
        return {
          ...item,
          product,
          variant,
          subtotal: item.quantity * variant.price,
          weightKg: item.quantity * variant.weightKg,
        };
      })
      .filter(Boolean);
  }, [cart]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const totalWeightKg = cartItems.reduce((sum, item) => sum + item.weightKg, 0);
  const total = subtotal + (shipping ? shipping.price : 0);
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  const resetShipping = () => {
    setShipping(null);
    setShippingError('');
  };

  const addToCart = (product) => {
    const variantId = selectedVariants[product.id];
    const variant = product.variants.find((item) => item.id === variantId);
    if (!variant) return;

    setCart((current) => {
      const existing = current.find((item) => item.productId === product.id && item.variantId === variantId);
      if (!existing) return [...current, { productId: product.id, variantId, quantity: 1 }];
      return current.map((item) =>
        item.productId === product.id && item.variantId === variantId
          ? { ...item, quantity: Math.min(item.quantity + 1, variant.stock) }
          : item,
      );
    });

    resetShipping();
    setCartOpen(true);
  };

  const changeQuantity = (productId, variantId, amount) => {
    const product = PRODUCTS.find((item) => item.id === productId);
    const variant = product ? product.variants.find((item) => item.id === variantId) : null;
    if (!variant) return;

    setCart((current) =>
      current
        .map((item) => {
          if (item.productId !== productId || item.variantId !== variantId) return item;
          return { ...item, quantity: Math.max(0, Math.min(item.quantity + amount, variant.stock)) };
        })
        .filter((item) => item.quantity > 0),
    );

    resetShipping();
  };

  const removeFromCart = (productId, variantId) => {
    setCart((current) => current.filter((item) => item.productId !== productId || item.variantId !== variantId));
    resetShipping();
  };

  const updateCustomer = (key, value) => {
    setCustomer((current) => ({ ...current, [key]: value }));
    if (key === 'cep') resetShipping();
  };

  const calculateShipping = () => {
    if (!cartItems.length) {
      setShippingError('Adicione ao menos um produto ao carrinho.');
      return;
    }
    if (onlyNumbers(customer.cep).length !== 8) {
      setShippingError('Digite um CEP válido com 8 números.');
      return;
    }
    setShipping(calculateDemoShipping(customer.cep, totalWeightKg));
    setShippingError('');
  };

  const checkoutReady = Boolean(
    cartItems.length &&
      customer.name.trim().length >= 3 &&
      onlyNumbers(customer.phone).length >= 10 &&
      onlyNumbers(customer.cep).length === 8 &&
      customer.street.trim() &&
      customer.number.trim() &&
      customer.district.trim() &&
      customer.city.trim() &&
      customer.uf.trim().length === 2 &&
      shipping,
  );

 const whatsappUrl = useMemo(() => {
  const enderecoCompleto = `${customer.street || '-'}, ${customer.number || '-'} - ${customer.district || '-'} - ${customer.city || '-'} / ${customer.uf || '-'}`;

  const productLines = cartItems.flatMap((item, index) => [
    `${index + 1}.`,
    `QTD: ${item.quantity}`,
    `CÓDIGO: ${item.product.id}`,
    `PRODUTO: ${item.product.name}`,
    `ESPECIFICAÇÃO: ${item.variant.label}`,
    `DESCRIÇÃO: ${item.product.description}`,
    '',
  ]);

  const lines = [
    '========================',
    'PEDIDO CMP FERRAMENTAS',
    '========================',
    '',
    'DADOS DO CLIENTE',
'------------------------',
`NOME: ${customer.name || '-'}`,
`TELEFONE: ${customer.phone || '-'}`,
`ENDEREÇO: ${enderecoCompleto}`,
,
    'ITENS DO PEDIDO',
    '------------------------',
    '',
    ...productLines,
    'RESUMO',
    '------------------------',
    `TOTAL DE PRODUTOS: ${cartQuantity}`,
    `VALOR TOTAL: ${money(total)}`,
  ];

  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
}, [cartItems, cartQuantity, total, customer]);
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; background: #ffffff; }
        button, input, select { font-family: inherit; }
        .page { min-height: 100vh; color: #08245c; background: #fff; }
        .header { position: sticky; top: 0; z-index: 20; background: rgba(255,255,255,.95); border-bottom: 1px solid #dbeafe; backdrop-filter: blur(8px); }
        .header-inner { max-width: 1200px; margin: 0 auto; padding: 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .brand { display: flex; align-items: center; gap: 12px; }
        .brand-icon { width: 48px; height: 48px; border-radius: 18px; display: flex; align-items: center; justify-content: center; background: #dc2626; color: #fff; font-size: 24px; }
        .brand-small { margin: 0; color: #dc2626; font-size: 12px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; }
        .brand-title { margin: 0; color: #08245c; font-size: 22px; font-weight: 900; }
        .top-actions { display: flex; align-items: center; gap: 10px; }
        .whatsapp-link { text-decoration: none; color: #0b2e6b; font-weight: 800; border: 1px solid #dbeafe; padding: 12px 16px; border-radius: 14px; background: #fff; }
        .cart-button, .red-button { border: 0; background: #dc2626; color: #fff; padding: 13px 18px; border-radius: 14px; font-weight: 800; cursor: pointer; }
        .cart-button:hover, .red-button:hover { background: #b91c1c; }
        .hero { background: linear-gradient(135deg, #08245c, #0b3c8c, #1d4ed8); color: #fff; }
         .hero-inner { max-width: 1200px; margin: 0 auto; padding: 16px 10px; display: grid; grid-template-columns: 1fr 1fr;  gap: 28px;  align-items: center; }
        .pill { display: inline-block; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.12); padding: 10px 16px; border-radius: 999px; font-weight: 800; margin-bottom: 20px; }
        .hero h2 {  margin: 0;  font-size: 40px;  line-height: 1.05;  font-weight: 900; }
        .hero p { color: #dbeafe; font-size: 18px; line-height: 1.7; max-width: 620px; }
        .hero-buttons { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
        .white-button { text-decoration: none; border: 1px solid rgba(255,255,255,.35); background: #fff; color: #08245c; padding: 14px 22px; border-radius: 18px; font-weight: 900; cursor: pointer; }
        .red-link { text-decoration: none; background: #dc2626; color: #fff; padding: 14px 22px; border-radius: 18px; font-weight: 900; }
        .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 30px; }
        .feature-card { background: #fff; color: #08245c; padding: 18px; border-radius: 24px; }
        .feature-card p { color: #1d4ed8; margin: 8px 0 0; font-size: 14px; line-height: 1.5; }
        .hero-image-card { background: #fff; padding: 20px; border-radius: 32px; color: #08245c; box-shadow: 0 20px 50px rgba(0,0,0,.18); }
        .hero-image-card img { width: 100%; height: 240px; object-fit: cover; border-radius: 24px; }
        .hero-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
        .stat { background: #eff6ff; border-radius: 22px; padding: 18px; }
        .stat strong { color: #dc2626; font-size: 34px; display: block; }
        .section { max-width: 1200px; margin: 0 auto; padding: 34px 16px; }
        .filter-box { border: 1px solid #dbeafe; border-radius: 28px; padding: 16px; box-shadow: 0 6px 18px rgba(15,23,42,.06); }

        .catalog-layout { max-width: 1280px; margin: 0 auto; padding: 34px 8px; display: grid; grid-template-columns: 220px 1fr; gap: 18px; align-items: start; }
        .sidebar-categories { position: sticky; top: 92px; align-self: start; border: 1px solid #dbeafe; border-radius: 24px; padding: 16px; background: #ffffff; box-shadow: 0 6px 18px rgba(15,23,42,.06); }
        .sidebar-title { margin: 0 0 14px; color: #dc2626; font-size: 13px; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; }
        .sidebar-categories .tabs { display: grid; gap: 10px; }
        .sidebar-categories .tab { width: 100%; text-align: left; justify-content: flex-start; }
        .sidebar-categories .search { width: 100%; margin-top: 14px; }
        .products-area { min-width: 0; }
        .filters { display: flex; align-items: center; justify-content: space-between; gap: 14px; flex-wrap: wrap; }
        .tabs { display: flex; flex-wrap: wrap; gap: 10px; }
        .tab { border: 0; padding: 12px 16px; border-radius: 14px; font-weight: 800; cursor: pointer; background: #eff6ff; color: #1e40af; }
        .tab.active { background: #08245c; color: #fff; }
        .search { width: min(100%, 390px); border: 1px solid #dbeafe; background: #eff6ff; padding: 13px 16px; border-radius: 14px; outline: none; }
        .section-title-small { color: #dc2626; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; margin: 0; font-size: 13px; }
        .section h2 { color: #08245c; margin: 8px 0 22px; font-size: 34px; }
        .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .product-card { overflow: hidden; border: 1px solid #dbeafe; background: #fff; border-radius: 28px; box-shadow: 0 6px 18px rgba(15,23,42,.06); }
        .product-img { position: relative; height: 220px; background: #eff6ff; }
        .product-img img { width: 100%; height: 100%; object-fit: cover; }
        .tag { position: absolute; top: 16px; left: 16px; background: #dc2626; color: #fff; padding: 7px 12px; border-radius: 999px; font-size: 12px; font-weight: 900;display: none; }
        .product-body { padding: 20px; }
        .product-top { display: flex; justify-content: space-between; gap: 14px; align-items: flex-start; }
        .product-badge {display: inline-block;background: #ffcc00;color: #1f2937;font-size: 11px;font-weight: 800;padding: 4px 10px;border-radius: 999px;margin-bottom: 8px;text-transform: uppercase;}
        .product-top p { color: #1d4ed8; line-height: 1.5; font-size: 14px; }
        .price-box { flex-shrink: 0; background: #eff6ff; padding: 10px 12px; border-radius: 16px; text-align: right; }
        .price-box small { color: #1d4ed8; font-weight: 800; text-transform: uppercase; }
        .price-box strong { color: #dc2626; display: block; font-size: 18px; }
        .variant-title { margin: 18px 0 8px; color: #1d4ed8; font-size: 12px; font-weight: 900; text-transform: uppercase; }
        .variants { display: grid; gap: 8px; }
        .variant { border: 1px solid #dbeafe; background: #fff; color: #1e40af; padding: 12px; border-radius: 14px; display: flex; justify-content: space-between; font-weight: 800; cursor: pointer; }
        .variant.active { border-color: #08245c; background: #08245c; color: #fff; }
        .meta { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 16px 0; }
        .meta div { background: #eff6ff; padding: 12px; border-radius: 14px; font-size: 14px; }
        .meta span { display: block; color: #1d4ed8; font-weight: 800; }
        .footer-info { background: #08245c; color: #fff; border-radius: 28px; padding: 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .footer-info p { color: #dbeafe; margin: 6px 0 0; }
        .overlay { position: fixed; inset: 0; z-index: 50; background: rgba(8,36,92,.55); }
        .drawer { position: fixed; top: 0; right: 0; z-index: 60; height: 100vh; width: min(100%, 560px); background: #fff; display: flex; flex-direction: column; box-shadow: -20px 0 60px rgba(0,0,0,.2); }
        .drawer-header { padding: 18px; border-bottom: 1px solid #dbeafe; display: flex; justify-content: space-between; align-items: center; }
        .drawer-header small { color: #dc2626; font-weight: 900; text-transform: uppercase; letter-spacing: 1.5px; }
        .drawer-header h2 { margin: 4px 0 0; color: #08245c; }
        .close { border: 0; background: #eff6ff; color: #08245c; border-radius: 12px; padding: 8px 12px; font-size: 22px; cursor: pointer; }
        .drawer-content { flex: 1; overflow-y: auto; padding: 18px; background: #eff6ff; }
        .cart-empty { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #1d4ed8; }
        .cart-card { background: #fff; border-radius: 22px; padding: 14px; margin-bottom: 12px; box-shadow: 0 4px 14px rgba(15,23,42,.06); }
        .cart-row { display: flex; gap: 12px; }
        .cart-row img { width: 82px; height: 82px; object-fit: cover; border-radius: 16px; }
        .cart-card h3 { margin: 0; color: #08245c; }
        .cart-card p { margin: 5px 0; color: #1d4ed8; font-size: 14px; }
        .cart-actions { margin-top: 12px; display: flex; align-items: center; justify-content: space-between; }
        .qty { display: flex; align-items: center; border: 1px solid #dbeafe; border-radius: 12px; overflow: hidden; }
        .qty button { border: 0; background: #eff6ff; padding: 9px 12px; cursor: pointer; }
        .qty span { width: 34px; text-align: center; font-weight: 900; }
        .remove { border: 0; background: transparent; color: #dc2626; font-weight: 800; cursor: pointer; }
        .checkout-card { background: #fff; padding: 18px; border-radius: 22px; margin-top: 14px; box-shadow: 0 4px 14px rgba(15,23,42,.06); }
        .checkout-card h3 { color: #08245c; margin: 0 0 14px; }
        .field { display: block; margin-bottom: 10px; }
        .field span { display: block; color: #1d4ed8; font-size: 12px; font-weight: 900; text-transform: uppercase; margin-bottom: 5px; }
        .field input { width: 100%; border: 1px solid #bfdbfe; border-radius: 12px; padding: 12px; outline: none; }
        .field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .full { grid-column: 1 / -1; }
        .shipping-result { background: #ecfdf5; color: #166534; padding: 12px; border-radius: 14px; margin-top: 10px; font-size: 14px; }
        .error { background: #fef2f2; color: #b91c1c; padding: 12px; border-radius: 14px; margin-top: 10px; font-size: 14px; }
        .drawer-footer { border-top: 1px solid #dbeafe; padding: 18px; background: #fff; }
        .summary-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .summary-total { border-top: 1px solid #dbeafe; padding-top: 12px; font-size: 19px; font-weight: 900; }
        .finish { display: block; width: 100%; text-align: center; margin-top: 14px; border: 0; border-radius: 18px; background: #16a34a; color: #fff; padding: 14px; font-weight: 900; text-decoration: none; }
        .disabled { display: block; width: 100%; margin-top: 14px; border: 0; border-radius: 18px; background: #dbeafe; color: #1d4ed8; padding: 14px; font-weight: 900; }
        @media (max-width: 900px) {
          .hero-inner, .products-grid { grid-template-columns: 1fr; }
          .features, .footer-info { grid-template-columns: 1fr; }
          .hero h2 { font-size: 38px; }
          .whatsapp-link { display: none; }
          .catalog-layout { grid-template-columns: 1fr; }
          .sidebar-categories { position: static; }
        }
      `}</style>

      <div className="page">
        <header className="header">
          <div className="header-inner">
            <div className="brand">
              <div className="brand-icon">🔧</div>
              <div>
                <p className="brand-small">Loja online</p>
                <h1 className="brand-title">{STORE.name}</h1>
              </div>
            </div>
            <div className="top-actions">
              <a href={`https://wa.me/${STORE.whatsapp}`} target="_blank" rel="noreferrer" className="whatsapp-link">WhatsApp</a>
              <button className="cart-button" onClick={() => setCartOpen(true)}>Carrinho ({cartQuantity})</button>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="hero-inner">
              <div>
                <span className="pill">🚚 Frete calculado antes do WhatsApp</span>
                <h2>Ferramentas, materiais e itens elétricos para sua casa ou loja.</h2>
                <p>Escolha os produtos, selecione a quantidade, calcule o frete e envie o pedido completo para o WhatsApp da CMP Ferramentas.Pedido só liberado depois dos dados e frete calculado</p>
                <div className="hero-buttons">
                  <a href="#produtos" className="red-link">Ver produtos</a>
                  <button className="white-button" onClick={() => setCartOpen(true)}>Abrir carrinho</button>
                </div>
                
              </div>

              <div className="hero-image-card">
                <img src="https://images.unsplash.com/photo-1777474739203-b85511959515?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Produtos de loja" />
                <div className="hero-stats">
                  <div className="stat"><strong>{PRODUCTS.length}+</strong><span>produtos no catálogo</span></div>
                  <div className="stat"><strong>{CATEGORIES.length - 1}</strong><span>abas de categorias</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="catalog-layout" id="produtos">
            <aside className="sidebar-categories">
              <p className="sidebar-title">Categorias</p>

              <div className="tabs">
                {CATEGORIES.map((item) => (
                  <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`tab ${category === item ? 'active' : ''}`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <input
                className="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar produto"
              />
            </aside>

            <div className="products-area">
              <p className="section-title-small">Catálogo editável</p>
              <h2>Produtos disponíveis</h2>

              <div className="products-grid">
              {filteredProducts.map((product) => {
                const variant = product.variants.find((item) => item.id === selectedVariants[product.id]) || product.variants[0];
                return (
                  <article key={product.id} className="product-card">
                    <div className="product-img">
                      <img src={variant.image || product.image} alt={product.name} />
                      <span className="tag">{product.category}</span>
                    </div>
                    <div className="product-body">
                      <div className="product-top">
                        <div>
                          {product.badge && (<span className="product-badge">{product.badge}</span>)}<h3>{product.name}</h3>
                          <p>{product.description}</p>
                        </div>
                        <div className="price-box"><small>Preço unitário</small><strong>{money(product.unitPrice)}</strong></div>
                      </div>
                      <p className="variant-title">Especificação</p>
                      <div className="variants">
                        {product.variants.map((item) => (
                          <button key={item.id} onClick={() => setSelectedVariants((current) => ({ ...current, [product.id]: item.id }))} className={`variant ${variant.id === item.id ? 'active' : ''}`}>
                            <span>{item.label}</span><span>{money(item.price)}</span>
                          </button>
                        ))}
                      </div>
                      <div className="meta">
                        <div><span>Estoque</span><strong>{variant.stock} un.</strong></div>
                        <div><span>Peso</span><strong>{variant.weightKg} kg</strong></div>
                      </div>
                      <button className="red-button" style={{ width: '100%' }} onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
                    </div>
                  </article>
                );
              })}
              </div>
            </div>
          </section>

          <section className="section">
            <div className="footer-info">
              <div><strong>Atendimento</strong><p>{STORE.phoneLabel}</p></div>
              <div><strong>Localização</strong><p>{STORE.location}</p></div>
              <div><strong>Frete</strong><p>Preparado para integração real com Correios via backend.</p></div>
            </div>
          </section>
        </main>

        {cartOpen ? (
          <>
            <div className="overlay" onClick={() => setCartOpen(false)} />
            <aside className="drawer">
              <div className="drawer-header">
                <div><small>Checkout</small><h2>Seu carrinho</h2></div>
                <button className="close" onClick={() => setCartOpen(false)}>×</button>
              </div>
              <div className="drawer-content">
                {cartItems.length === 0 ? (
                  <div className="cart-empty"><div style={{ fontSize: 50 }}>🛒</div><h3>Seu carrinho está vazio</h3><p>Adicione produtos para montar o pedido.</p></div>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div key={`${item.productId}-${item.variantId}`} className="cart-card">
                        <div className="cart-row">
                          <img src={item.variant.image || item.product.image} alt={item.product.name} />
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                              <div><h3>{item.product.name}</h3><p>{item.variant.label} • {money(item.variant.price)}</p></div>
                              <button className="remove" onClick={() => removeFromCart(item.productId, item.variantId)}>Remover</button>
                            </div>
                            <div className="cart-actions">
                              <div className="qty"><button onClick={() => changeQuantity(item.productId, item.variantId, -1)}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.productId, item.variantId, 1)}>+</button></div>
                              <strong style={{ color: '#dc2626' }}>{money(item.subtotal)}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="checkout-card">
                      <h3>Frete pelos Correios</h3>
                      <label className="field"><span>CEP</span><input value={customer.cep} onChange={(e) => updateCustomer('cep', cepMask(e.target.value))} placeholder="00000-000" /></label>
                      <button className="red-button" style={{ width: '100%' }} onClick={calculateShipping}>Calcular frete antes de finalizar</button>
                      {shipping ? <div className="shipping-result"><p><strong>Frete:</strong> {money(shipping.price)}</p><p><strong>Prazo:</strong> {shipping.deadline}</p><p><strong>Serviço:</strong> {shipping.service}</p></div> : null}
                      {shippingError ? <div className="error">{shippingError}</div> : null}
                    </div>

                    <div className="checkout-card">
                      <h3>Dados de entrega</h3>
                      <div className="field-grid">
                        <label className="field full"><span>Nome</span><input value={customer.name} onChange={(e) => updateCustomer('name', e.target.value)} placeholder="Nome completo" /></label>
                        <label className="field full"><span>Telefone</span><input value={customer.phone} onChange={(e) => updateCustomer('phone', phoneMask(e.target.value))} placeholder="(00) 00000-0000" /></label>
                        <label className="field"><span>Rua</span><input value={customer.street} onChange={(e) => updateCustomer('street', e.target.value)} placeholder="Rua / Avenida" /></label>
                        <label className="field"><span>Número</span><input value={customer.number} onChange={(e) => updateCustomer('number', e.target.value)} placeholder="Número" /></label>
                        <label className="field"><span>Bairro</span><input value={customer.district} onChange={(e) => updateCustomer('district', e.target.value)} placeholder="Bairro" /></label>
                        <label className="field"><span>Cidade</span><input value={customer.city} onChange={(e) => updateCustomer('city', e.target.value)} placeholder="Cidade" /></label>
                        <label className="field full"><span>UF</span><input value={customer.uf} onChange={(e) => updateCustomer('uf', e.target.value.toUpperCase().slice(0, 2))} placeholder="SP" /></label>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {cartItems.length > 0 ? (
                <div className="drawer-footer">
                  <div className="summary-row"><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
                  <div className="summary-row"><span>Frete</span><strong>{shipping ? money(shipping.price) : '—'}</strong></div>
                  <div className="summary-row summary-total"><span>Total</span><span>{money(total)}</span></div>
                  {checkoutReady ? <a href={whatsappUrl} target="_blank" rel="noreferrer" className="finish">Finalizar pelo WhatsApp ›</a> : <button className="disabled" disabled>Preencha os dados e calcule o frete</button>}
                </div>
              ) : null}
            </aside>
          </>
        ) : null}
      </div>
    </>
  );
}
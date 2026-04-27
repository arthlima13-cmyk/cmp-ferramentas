import React, { useMemo, useState } from 'react';

const STORE = {
  name: 'CMP Ferramentas',
  whatsapp: '5511999999999',
  phoneLabel: '(11) 99999-9999',
  location: 'Atendimento em todo o Brasil',
};

const CATEGORIES = ['Todos', 'Adaptadores', 'Construção', 'Fios', 'Ferramentas', Desemepandeiras , Hidráulica
  

];

const PRODUCTS = [
  {
    id: 'adaptador-t',
    name: 'Adaptador T 2P+T',
    category: 'Adaptadores',
    description: 'Adaptador resistente para uso residencial e profissional.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: '10a', label: '10A', price: 12.9, stock: 28, weightKg: 0.15 },
      { id: '20a', label: '20A', price: 16.9, stock: 16, weightKg: 0.18 },
    ],
  },
  {
    id: 'inforca-gato',
    name: 'Inforca Gato',
    category: 'Adaptadores',
    description: 'Produto com opções de tamanho e mudança automática de preço.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: 'p', label: 'Pequeno', price: 19.9, stock: 20, weightKg: 0.25 },
      { id: 'm', label: 'Médio', price: 24.9, stock: 14, weightKg: 0.35 },
      { id: 'g', label: 'Grande', price: 31.9, stock: 9, weightKg: 0.45 },
    ],
  },
  {
    id: 'cimento-cola',
    name: 'Cimento Cola Premium',
    category: 'Construção',
    description: 'Alta aderência para obras, reformas e acabamentos.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: '5kg', label: '5 kg', price: 21.5, stock: 35, weightKg: 5 },
      { id: '20kg', label: '20 kg', price: 59.9, stock: 12, weightKg: 20 },
    ],
  },
  {
    id: 'fio-flexivel',
    name: 'Fio Flexível 750V',
    category: 'Fios',
    description: 'Fio para instalações elétricas residenciais e comerciais.',
    image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: '1-5mm', label: '1,5 mm', price: 89.9, stock: 18, weightKg: 1.4 },
      { id: '2-5mm', label: '2,5 mm', price: 129.9, stock: 13, weightKg: 2.1 },
      { id: '4mm', label: '4 mm', price: 189.9, stock: 8, weightKg: 3.3 },
    ],
  },
  {
    id: 'alicate',
    name: 'Alicate Universal',
    category: 'Ferramentas',
    description: 'Ferramenta robusta para corte, aperto e manutenção.',
    image: 'https://images.unsplash.com/photo-1581147036324-c1c6eb89f4d1?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: '6pol', label: '6 polegadas', price: 28.9, stock: 22, weightKg: 0.45 },
      { id: '8pol', label: '8 polegadas', price: 36.9, stock: 15, weightKg: 0.62 },
    ],
  },
  {
    id: 'trena',
    name: 'Trena Emborrachada',
    category: 'Ferramentas',
    description: 'Medição prática com trava reforçada e corpo resistente.',
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=900&q=80',
    variants: [
      { id: '3m', label: '3 metros', price: 17.9, stock: 19, weightKg: 0.3 },
      { id: '5m', label: '5 metros', price: 24.9, stock: 17, weightKg: 0.4 },
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

function calculateDemoShipping(cep, weightKg) {
  const digits = onlyNumbers(cep);
  if (digits.length !== 8) return null;
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
    const productLines = cartItems.flatMap((item, index) => [
      `${index + 1}. ${item.product.name}`,
      `Categoria: ${item.product.category}`,
      `Especificação: ${item.variant.label}`,
      `Quantidade: ${item.quantity}`,
      `Valor unitário: ${money(item.variant.price)}`,
      `Subtotal: ${money(item.subtotal)}`,
      '',
    ]);

    const lines = [
      'Olá, CMP Ferramentas! Quero fazer este pedido:',
      '',
      ...productLines,
      `Subtotal dos produtos: ${money(subtotal)}`,
      `Frete: ${shipping ? `${money(shipping.price)} - ${shipping.deadline} - ${shipping.service}` : 'não calculado'}`,
      `Total estimado: ${money(total)}`,
      '',
      'Dados para entrega:',
      `Nome: ${customer.name || '-'}`,
      `Telefone: ${customer.phone || '-'}`,
      `CEP: ${customer.cep || '-'}`,
      `Endereço: ${customer.street || '-'}, ${customer.number || '-'} - ${customer.district || '-'}`,
      `Cidade/UF: ${customer.city || '-'} / ${customer.uf || '-'}`,
      '',
      'Aguardo a confirmação do pedido.',
    ];

    return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
  }, [cartItems, subtotal, shipping, total, customer]);

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
        .hero-inner { max-width: 1200px; margin: 0 auto; padding: 52px 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 36px; align-items: center; }
        .pill { display: inline-block; border: 1px solid rgba(255,255,255,.25); background: rgba(255,255,255,.12); padding: 10px 16px; border-radius: 999px; font-weight: 800; margin-bottom: 20px; }
        .hero h2 { margin: 0; font-size: 52px; line-height: 1.05; font-weight: 900; }
        .hero p { color: #dbeafe; font-size: 18px; line-height: 1.7; max-width: 620px; }
        .hero-buttons { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }
        .white-button { text-decoration: none; border: 1px solid rgba(255,255,255,.35); background: #fff; color: #08245c; padding: 14px 22px; border-radius: 18px; font-weight: 900; cursor: pointer; }
        .red-link { text-decoration: none; background: #dc2626; color: #fff; padding: 14px 22px; border-radius: 18px; font-weight: 900; }
        .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 30px; }
        .feature-card { background: #fff; color: #08245c; padding: 18px; border-radius: 24px; }
        .feature-card p { color: #1d4ed8; margin: 8px 0 0; font-size: 14px; line-height: 1.5; }
        .hero-image-card { background: #fff; padding: 20px; border-radius: 32px; color: #08245c; box-shadow: 0 20px 50px rgba(0,0,0,.18); }
        .hero-image-card img { width: 100%; height: 300px; object-fit: cover; border-radius: 24px; }
        .hero-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px; }
        .stat { background: #eff6ff; border-radius: 22px; padding: 18px; }
        .stat strong { color: #dc2626; font-size: 34px; display: block; }
        .section { max-width: 1200px; margin: 0 auto; padding: 34px 16px; }
        .filter-box { border: 1px solid #dbeafe; border-radius: 28px; padding: 16px; box-shadow: 0 6px 18px rgba(15,23,42,.06); }
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
        .tag { position: absolute; top: 16px; left: 16px; background: #dc2626; color: #fff; padding: 7px 12px; border-radius: 999px; font-size: 12px; font-weight: 900; }
        .product-body { padding: 20px; }
        .product-top { display: flex; justify-content: space-between; gap: 14px; align-items: flex-start; }
        .product-top h3 { margin: 0; color: #08245c; font-size: 21px; }
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
                <h2>Ferramentas, materiais e itens elétricos para sua obra ou manutenção.</h2>
                <p>Escolha os produtos, selecione o tamanho ou especificação, calcule o frete e envie o pedido completo para o WhatsApp da CMP Ferramentas.</p>
                <div className="hero-buttons">
                  <a href="#produtos" className="red-link">Ver produtos</a>
                  <button className="white-button" onClick={() => setCartOpen(true)}>Abrir carrinho</button>
                </div>
                <div className="features">
                  <div className="feature-card"><strong>Abas editáveis</strong><p>Categorias simples para você ampliar depois.</p></div>
                  <div className="feature-card"><strong>Variações</strong><p>Cada tamanho pode ter preço, estoque e peso próprios.</p></div>
                  <div className="feature-card"><strong>WhatsApp</strong><p>Pedido só libera depois dos dados e frete calculados.</p></div>
                </div>
              </div>

              <div className="hero-image-card">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80" alt="Produtos de loja" />
                <div className="hero-stats">
                  <div className="stat"><strong>{PRODUCTS.length}+</strong><span>produtos no catálogo</span></div>
                  <div className="stat"><strong>{CATEGORIES.length - 1}</strong><span>abas de categorias</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="filter-box">
              <div className="filters">
                <div className="tabs">
                  {CATEGORIES.map((item) => (
                    <button key={item} onClick={() => setCategory(item)} className={`tab ${category === item ? 'active' : ''}`}>{item}</button>
                  ))}
                </div>
                <input className="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar produto, categoria ou tamanho" />
              </div>
            </div>
          </section>

          <section className="section" id="produtos">
            <p className="section-title-small">Catálogo editável</p>
            <h2>Produtos disponíveis</h2>
            <div className="products-grid">
              {filteredProducts.map((product) => {
                const variant = product.variants.find((item) => item.id === selectedVariants[product.id]) || product.variants[0];
                return (
                  <article key={product.id} className="product-card">
                    <div className="product-img">
                      <img src={product.image} alt={product.name} />
                      <span className="tag">{product.category}</span>
                    </div>
                    <div className="product-body">
                      <div className="product-top">
                        <div>
                          <h3>{product.name}</h3>
                          <p>{product.description}</p>
                        </div>
                        <div className="price-box"><small>Preço</small><strong>{money(variant.price)}</strong></div>
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
                          <img src={item.product.image} alt={item.product.name} />
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

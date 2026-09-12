// ===== GERENCIAMENTO DO CARRINHO (localStorage) =====
const CARRINHO_KEY = 'pizzaCarrinho';

function getCarrinho() {
  try { return JSON.parse(localStorage.getItem(CARRINHO_KEY) || '[]'); }
  catch { return []; }
}

function setCarrinho(c) {
  localStorage.setItem(CARRINHO_KEY, JSON.stringify(c));
  updateCartCount();
}

function addCarrinho(item) {
  const c = getCarrinho();
  // Se for pizza simples (sem detalhes), agrupa por id
  if (!item.detalhes && !item.obs) {
    const ex = c.find(i => i.id === item.id && !i.detalhes && !i.obs);
    if (ex) { ex.qtd += item.qtd; setCarrinho(c); return; }
  }
  c.push(item);
  setCarrinho(c);
}

function removerCarrinho(id) {
  const c = getCarrinho().filter(i => i.id !== id);
  setCarrinho(c);
}

function limparCarrinho() {
  setCarrinho([]);
}

function totalCarrinho() {
  const c = getCarrinho();
  const subtotal = c.reduce((s, i) => s + i.preco * i.qtd, 0);
  return { subtotal, taxa: 8, total: subtotal + 8 };
}

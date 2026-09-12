// ===== BANCO DE PRODUTOS (mockado) =====
const PRODUTOS = [
  // ---- TRADICIONAIS ----
  { id:1, nome:'Mussarela', desc:'Molho de tomate, mussarela e orégano', categoria:'tradicionais', precoBase:49.90, emoji:'🍕', destaque:true },
  { id:2, nome:'Calabresa', desc:'Molho, mussarela, calabresa e cebola', categoria:'tradicionais', precoBase:49.90, emoji:'🍕', destaque:true },
  { id:3, nome:'Presunto e Queijo', desc:'Molho, presunto, mussarela e orégano', categoria:'tradicionais', precoBase:49.90, emoji:'🍕' },
  { id:4, nome:'Marguerita', desc:'Molho, mussarela, tomate, manjericão', categoria:'tradicionais', precoBase:52.90, emoji:'🍕' },
  { id:5, nome:'Portuguesa', desc:'Presunto, ovo, cebola, ervilha, azeitona', categoria:'tradicionais', precoBase:54.90, emoji:'🍕' },
  { id:6, nome:'Napolitana', desc:'Mussarela, tomate, parmesão e orégano', categoria:'tradicionais', precoBase:52.90, emoji:'🍕' },
  { id:7, nome:'Milho com Mussarela', desc:'Molho, milho, mussarela e orégano', categoria:'tradicionais', precoBase:49.90, emoji:'🍕' },
  { id:8, nome:'Frango com Catupiry', desc:'Frango desfiado, catupiry e orégano', categoria:'tradicionais', precoBase:56.90, emoji:'🍕', destaque:true },
  { id:9, nome:'Bacon com Mussarela', desc:'Mussarela, bacon crocante e orégano', categoria:'tradicionais', precoBase:56.90, emoji:'🍕' },
  { id:10, nome:'Atum com Cebola', desc:'Atum, cebola, mussarela e orégano', categoria:'tradicionais', precoBase:54.90, emoji:'🍕' },

  // ---- CARNES ----
  { id:11, nome:'Calabresa Acebolada', desc:'Calabresa fatiada, cebola e mussarela', categoria:'carnes', precoBase:54.90, emoji:'🥓' },
  { id:12, nome:'Calabresa com Catupiry', desc:'Calabresa, catupiry e orégano', categoria:'carnes', precoBase:56.90, emoji:'🥓' },
  { id:13, nome:'Calabresa com Cheddar', desc:'Calabresa, cheddar cremoso', categoria:'carnes', precoBase:56.90, emoji:'🥓' },
  { id:14, nome:'Bacon com Cheddar', desc:'Bacon crocante e cheddar cremoso', categoria:'carnes', precoBase:58.90, emoji:'🥓' },
  { id:15, nome:'Bacon com Catupiry', desc:'Bacon, catupiry e mussarela', categoria:'carnes', precoBase:58.90, emoji:'🥓' },
  { id:16, nome:'Frango com Cheddar', desc:'Frango desfiado, cheddar e orégano', categoria:'carnes', precoBase:56.90, emoji:'🍗' },
  { id:17, nome:'Frango com Bacon e Catupiry', desc:'Frango, bacon, catupiry', categoria:'carnes', precoBase:62.90, emoji:'🍗', destaque:true },
  { id:18, nome:'Frango com Palmito', desc:'Frango, palmito, mussarela', categoria:'carnes', precoBase:58.90, emoji:'🍗' },
  { id:19, nome:'Carne Seca com Cebola', desc:'Carne seca, cebola, mussarela', categoria:'carnes', precoBase:64.90, emoji:'🥩' },
  { id:20, nome:'Carne Seca com Catupiry', desc:'Carne seca, catupiry, mussarela', categoria:'carnes', precoBase:66.90, emoji:'🥩' },
  { id:21, nome:'Lombo com Catupiry', desc:'Lombo, catupiry, mussarela', categoria:'carnes', precoBase:58.90, emoji:'🥩' },
  { id:22, nome:'Pepperoni', desc:'Mussarela, pepperoni e orégano', categoria:'carnes', precoBase:58.90, emoji:'🍕', destaque:true },
  { id:23, nome:'Pepperoni com Catupiry', desc:'Pepperoni, catupiry, mussarela', categoria:'carnes', precoBase:62.90, emoji:'🍕' },
  { id:24, nome:'Hambúrguer com Cheddar', desc:'Hambúrguer, cheddar, mussarela', categoria:'carnes', precoBase:62.90, emoji:'🍔' },
  { id:25, nome:'Linguiça com Catupiry', desc:'Linguiça, catupiry, cebola', categoria:'carnes', precoBase:58.90, emoji:'🌭' },

  // ---- QUEIJOS ----
  { id:26, nome:'3 Queijos', desc:'Mussarela, provolone, parmesão', categoria:'queijos', precoBase:56.90, emoji:'🧀' },
  { id:27, nome:'4 Queijos', desc:'Mussarela, provolone, parmesão, gorgonzola', categoria:'queijos', precoBase:62.90, emoji:'🧀', destaque:true },
  { id:28, nome:'5 Queijos', desc:'5 queijos especiais selecionados', categoria:'queijos', precoBase:68.90, emoji:'🧀' },
  { id:29, nome:'Mussarela com Cheddar', desc:'Mussarela e cheddar derretido', categoria:'queijos', precoBase:52.90, emoji:'🧀' },
  { id:30, nome:'Mussarela com Catupiry', desc:'Mussarela e catupiry cremoso', categoria:'queijos', precoBase:54.90, emoji:'🧀' },
  { id:31, nome:'Gorgonzola com Mussarela', desc:'Gorgonzola e mussarela', categoria:'queijos', precoBase:62.90, emoji:'🧀' },
  { id:32, nome:'Provolone com Bacon', desc:'Provolone, bacon e mussarela', categoria:'queijos', precoBase:62.90, emoji:'🧀' },
  { id:33, nome:'Cheddar com Bacon', desc:'Cheddar cremoso e bacon crocante', categoria:'queijos', precoBase:62.90, emoji:'🧀' },

  // ---- ESPECIAIS ----
  { id:34, nome:'Moda da Casa', desc:'Calabresa, bacon, milho, cebola, catupiry', categoria:'especiais', precoBase:68.90, emoji:'⭐', destaque:true },
  { id:35, nome:'Suprema', desc:'Pepperoni, bacon, presunto, milho, queijo', categoria:'especiais', precoBase:72.90, emoji:'⭐' },
  { id:36, nome:'Pizzaiolo', desc:'Calabresa, bacon, tomate, cebola, pimentão', categoria:'especiais', precoBase:68.90, emoji:'⭐' },
  { id:37, nome:'Especial da Casa', desc:'Frango, bacon, milho, catupiry, cheddar', categoria:'especiais', precoBase:72.90, emoji:'⭐' },
  { id:38, nome:'Carnívora', desc:'Carne seca, calabresa, bacon, pepperoni', categoria:'especiais', precoBase:78.90, emoji:'🥩' },
  { id:39, nome:'Paulista', desc:'Calabresa, queijo, milho, cebola', categoria:'especiais', precoBase:62.90, emoji:'⭐' },
  { id:40, nome:'Caipira', desc:'Frango, milho, bacon, catupiry', categoria:'especiais', precoBase:66.90, emoji:'⭐' },
  { id:41, nome:'Bruta', desc:'Bacon, calabresa, pepperoni, cheddar', categoria:'especiais', precoBase:74.90, emoji:'⭐' },

  // ---- DOCES ----
  { id:42, nome:'Chocolate', desc:'Chocolate ao leite derretido', categoria:'doces', precoBase:49.90, emoji:'🍫', destaque:true },
  { id:43, nome:'Chocolate Branco', desc:'Chocolate branco cremoso', categoria:'doces', precoBase:52.90, emoji:'🍫' },
  { id:44, nome:'Chocolate Branco com Morango', desc:'Chocolate branco e morangos frescos', categoria:'doces', precoBase:58.90, emoji:'🍓' },
  { id:45, nome:'Chocolate com Morango', desc:'Chocolate e morangos frescos', categoria:'doces', precoBase:56.90, emoji:'🍓' },
  { id:46, nome:'Chocolate com Banana', desc:'Chocolate e banana', categoria:'doces', precoBase:52.90, emoji:'🍌' },
  { id:47, nome:'Chocolate com Confete', desc:'Chocolate com confetes coloridos', categoria:'doces', precoBase:52.90, emoji:'🍫' },
  { id:48, nome:'Chocolate com Coco', desc:'Chocolate e coco ralado', categoria:'doces', precoBase:52.90, emoji:'🥥' },
  { id:49, nome:'Chocolate com Paçoca', desc:'Chocolate e paçoca', categoria:'doces', precoBase:54.90, emoji:'🍫' },
  { id:50, nome:'Prestígio', desc:'Chocolate com coco e leite condensado', categoria:'doces', precoBase:56.90, emoji:'🍫', destaque:true },
  { id:51, nome:'Brigadeiro', desc:'Brigadeiro cremoso', categoria:'doces', precoBase:52.90, emoji:'🍫' },
  { id:52, nome:'Brigadeiro com Morango', desc:'Brigadeiro e morangos', categoria:'doces', precoBase:58.90, emoji:'🍓' },
  { id:53, nome:'Nutella com Morango', desc:'Nutella e morangos frescos', categoria:'doces', precoBase:68.90, emoji:'🍫', destaque:true },
  { id:54, nome:'Nutella com Banana', desc:'Nutella e banana', categoria:'doces', precoBase:62.90, emoji:'🍌' },
  { id:55, nome:'Romeu e Julieta', desc:'Goiabada com queijo minas', categoria:'doces', precoBase:54.90, emoji:'🍫' },
  { id:56, nome:'Banana com Canela', desc:'Banana, açúcar e canela', categoria:'doces', precoBase:49.90, emoji:'🍌' },
  { id:57, nome:'Doce de Leite com Coco', desc:'Doce de leite e coco', categoria:'doces', precoBase:54.90, emoji:'🥥' },
  { id:58, nome:'Beijinho', desc:'Beijinho de coco', categoria:'doces', precoBase:52.90, emoji:'🍫' },
  { id:59, nome:'Leite Ninho com Nutella', desc:'Leite ninho e nutella', categoria:'doces', precoBase:68.90, emoji:'🍫' },
  { id:60, nome:'Oreo com Chocolate', desc:'Chocolate com biscoito Oreo', categoria:'doces', precoBase:62.90, emoji:'🍪' },
  { id:61, nome:'Kinder com Chocolate', desc:'Chocolate Kinder', categoria:'doces', precoBase:68.90, emoji:'🍫' },

  // ---- BEBIDAS ----
  { id:101, nome:'Coca-Cola 2L', desc:'Refrigerante gelado', categoria:'bebidas', precoBase:12.90, emoji:'🥤', destaque:true },
  { id:102, nome:'Coca-Cola Zero 2L', desc:'Refrigerante zero', categoria:'bebidas', precoBase:12.90, emoji:'🥤' },
  { id:103, nome:'Guaraná 2L', desc:'Guaraná Antarctica', categoria:'bebidas', precoBase:10.90, emoji:'🥤' },
  { id:104, nome:'Fanta Laranja 2L', desc:'Fanta Laranja', categoria:'bebidas', precoBase:10.90, emoji:'🥤' },
  { id:105, nome:'Fanta Uva 2L', desc:'Fanta Uva', categoria:'bebidas', precoBase:10.90, emoji:'🥤' },
  { id:106, nome:'Sprite 2L', desc:'Sprite gelado', categoria:'bebidas', precoBase:10.90, emoji:'🥤' },
  { id:107, nome:'Pepsi 2L', desc:'Pepsi', categoria:'bebidas', precoBase:10.90, emoji:'🥤' },
  { id:108, nome:'Soda Limão', desc:'Soda limão', categoria:'bebidas', precoBase:8.90, emoji:'🥤' },
  { id:109, nome:'Tônica', desc:'Água tônica', categoria:'bebidas', precoBase:8.90, emoji:'🥤' },
  { id:110, nome:'Suco de Laranja', desc:'Suco natural de laranja', categoria:'bebidas', precoBase:9.90, emoji:'🍊' },
  { id:111, nome:'Suco de Limão', desc:'Suco natural de limão', categoria:'bebidas', precoBase:8.90, emoji:'🍋' },
  { id:112, nome:'Suco de Maracujá', desc:'Suco natural de maracujá', categoria:'bebidas', precoBase:9.90, emoji:'🥤' },
  { id:113, nome:'Suco de Abacaxi', desc:'Suco natural de abacaxi', categoria:'bebidas', precoBase:9.90, emoji:'🍍' },
  { id:114, nome:'Suco de Morango', desc:'Suco natural de morango', categoria:'bebidas', precoBase:10.90, emoji:'🍓' },
  { id:115, nome:'Suco de Uva', desc:'Suco natural de uva', categoria:'bebidas', precoBase:10.90, emoji:'🍇' },
  { id:116, nome:'Suco de Goiaba', desc:'Suco natural de goiaba', categoria:'bebidas', precoBase:9.90, emoji:'🥤' },
  { id:117, nome:'Suco de Acerola', desc:'Suco natural de acerola', categoria:'bebidas', precoBase:9.90, emoji:'🥤' },
  { id:118, nome:'Suco de Manga', desc:'Suco natural de manga', categoria:'bebidas', precoBase:9.90, emoji:'🥭' },
  { id:119, nome:'Suco de Caju', desc:'Suco natural de caju', categoria:'bebidas', precoBase:9.90, emoji:'🥤' },
  { id:120, nome:'Água Mineral', desc:'Água mineral 500ml', categoria:'bebidas', precoBase:4.90, emoji:'💧' },
  { id:121, nome:'Água com Gás', desc:'Água mineral com gás', categoria:'bebidas', precoBase:5.90, emoji:'💧' },
  { id:122, nome:'Água de Coco', desc:'Água de coco natural', categoria:'bebidas', precoBase:8.90, emoji:'🥥' },
  { id:123, nome:'Chá Gelado', desc:'Chá gelado de limão', categoria:'bebidas', precoBase:7.90, emoji:'🧊' },
  { id:124, nome:'Chá de Pêssego', desc:'Chá gelado de pêssego', categoria:'bebidas', precoBase:7.90, emoji:'🍑' },
  { id:125, nome:'Suco de Uva Integral', desc:'Suco de uva 100% natural', categoria:'bebidas', precoBase:14.90, emoji:'🍇' },
  { id:126, nome:'Energético', desc:'Energético tradicional 473ml', categoria:'bebidas', precoBase:12.90, emoji:'⚡' },
  { id:127, nome:'Isotônico', desc:'Bebida isotônica 500ml', categoria:'bebidas', precoBase:8.90, emoji:'💧' },
  { id:128, nome:'Achocolatado', desc:'Achocolatado gelado 200ml', categoria:'bebidas', precoBase:6.90, emoji:'🍫' }
];

// ===== FUNÇÃO AUXILIAR: card HTML =====
function cardProduto(p) {
  return `
    <div class="produto-card" onclick="abrirDetalhe(${p.id})">
      <div class="produto-img">
        ${p.destaque ? '<span class="produto-tag">🔥 Top</span>' : ''}
        <button class="produto-fav" onclick="event.stopPropagation();toggleFav(${p.id},this)"><i class="fas fa-heart"></i></button>
        <span>${p.emoji}</span>
      </div>
      <div class="produto-info">
        <h3>${p.nome}</h3>
        <p>${p.desc}</p>
        <div class="produto-bottom">
          <span class="produto-preco">R$ ${p.precoBase.toFixed(2).replace('.',',')}<small>a partir de</small></span>
          <button class="btn-add" onclick="event.stopPropagation();addProdutoRapido(${p.id})"><i class="fas fa-plus"></i></button>
        </div>
      </div>
    </div>
  `;
}

function renderProductCards(containerId, lista) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = lista.map(p => cardProduto(p)).join('');
}

function addProdutoRapido(id) {
  const p = PRODUTOS.find(x => x.id === id);
  if (!p) return;
  addCarrinho({ id: p.id, nome: p.nome, preco: p.precoBase, qtd: 1, emoji: p.emoji });
  showToast(`${p.nome} adicionado! 🍕`, 'success');
}

function abrirDetalhe(id) {
  const p = PRODUTOS.find(x => x.id === id);
  if (!p) return;
  if (p.categoria === 'bebidas') { addProdutoRapido(id); return; }
  // Redireciona para personalização
  localStorage.setItem('saborPreSelecionado', p.id);
  window.location.href = 'pizza.html';
}

function toggleFav(id, el) {
  const favs = JSON.parse(localStorage.getItem('pizzaFavs') || '[]');
  const i = favs.indexOf(id);
  if (i > -1) { favs.splice(i, 1); el.classList.remove('active'); showToast('Removido dos favoritos', 'info'); }
  else { favs.push(id); el.classList.add('active'); showToast('Adicionado aos favoritos ❤️', 'success'); }
  localStorage.setItem('pizzaFavs', JSON.stringify(favs));
}

function bindCardEvents() {
  const favs = JSON.parse(localStorage.getItem('pizzaFavs') || '[]');
  document.querySelectorAll('.produto-card').forEach(card => {
    const fav = card.querySelector('.produto-fav');
    if (fav && fav.classList.contains('active')) return;
  });
  document.querySelectorAll('.produto-card').forEach((card, i) => {
    // já tratado via onclick inline
  });
}

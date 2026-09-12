// ===== ADMIN: PEDIDOS =====
function renderTabelaPedidos() {
  const pedidos = JSON.parse(localStorage.getItem('pizzaPedidos') || '[]');
  const tbody = document.querySelector('#tabelaPedidos tbody');
  if (!tbody) return;

  const mock = pedidos.length ? pedidos : [
    { numero: 1048, cliente:'João Silva', itens:[{nome:'Pizza Grande',qtd:1}], total:67.90, pagamento:'Pix', status:'Recebido' },
    { numero: 1047, cliente:'Maria Santos', itens:[{nome:'2 Pizzas Médias',qtd:1}], total:89.80, pagamento:'Cartão de Crédito', status:'Preparando' },
    { numero: 1046, cliente:'Carlos Lima', itens:[{nome:'Pizza Família',qtd:1}], total:74.90, pagamento:'Dinheiro', status:'Saiu para entrega' }
  ];

  const statusOpts = ['Recebido','Preparando','Saiu para entrega','Entregue'];
  tbody.innerHTML = mock.map((p, i) => `
    <tr>
      <td><strong>#${p.numero}</strong></td>
      <td>${p.cliente}</td>
      <td>${p.itens.map(x => x.nome).join(', ')}</td>
      <td>R$ ${p.total.toFixed(2).replace('.',',')}</td>
      <td>${p.pagamento}</td>
      <td>
        <select onchange="mudarStatus(${i}, this.value)">
          ${statusOpts.map(s => `<option ${s===p.status?'selected':''}>${s}</option>`).join('')}
        </select>
      </td>
    </tr>
  `).join('');
}

function mudarStatus(i, status) {
  const pedidos = JSON.parse(localStorage.getItem('pizzaPedidos') || '[]');
  if (pedidos[i]) { pedidos[i].status = status; localStorage.setItem('pizzaPedidos', JSON.stringify(pedidos)); }
  showToast('Status atualizado!', 'success');
}

// ===== ADMIN: PRODUTOS =====
let editandoId = null;

function initProdutosAdmin() {
  renderTabelaProdutos();
  document.getElementById('btnNovoProduto').addEventListener('click', () => abrirModal());
  document.getElementById('btnCancelar').addEventListener('click', fecharModal);
  document.getElementById('btnSalvar').addEventListener('click', salvarProduto);
}

function renderTabelaProdutos() {
  const tbody = document.querySelector('#tabelaProdutos tbody');
  if (!tbody) return;
  tbody.innerHTML = PRODUTOS.map(p => `
    <tr>
      <td style="font-size:1.5rem">${p.emoji}</td>
      <td><strong>${p.nome}</strong><br><small style="color:#999">${p.desc}</small></td>
      <td>${p.categoria}</td>
      <td>R$ ${p.precoBase.toFixed(2).replace('.',',')}</td>
      <td><span class="status-badge status-entregue">Ativo</span></td>
      <td>
        <button class="acao-btn" onclick="editarProduto(${p.id})"><i class="fas fa-edit"></i></button>
        <button class="acao-btn" onclick="excluirProduto(${p.id})"><i class="fas fa-trash"></i></button>
      </td>
    </tr>
  `).join('');
}

function abrirModal(p = null) {
  editandoId = p ? p.id : null;
  document.getElementById('modalTitle').textContent = p ? 'Editar Produto' : 'Novo Produto';
  document.getElementById('pNome').value = p ? p.nome : '';
  document.getElementById('pDesc').value = p ? p.desc : '';
  document.getElementById('pCat').value = p ? p.categoria : 'tradicionais';
  document.getElementById('pPreco').value = p ? p.precoBase : '';
  document.getElementById('pEmoji').value = p ? p.emoji : '🍕';
  document.getElementById('modalProduto').classList.add('active');
}
function fecharModal() { document.getElementById('modalProduto').classList.remove('active'); }

function editarProduto(id) {
  const p = PRODUTOS.find(x => x.id === id);
  if (p) abrirModal(p);
}

function excluirProduto(id) {
  if (!confirm('Excluir este produto?')) return;
  const i = PRODUTOS.findIndex(x => x.id === id);
  if (i > -1) { PRODUTOS.splice(i, 1); renderTabelaProdutos(); showToast('Produto excluído', 'info'); }
}

function salvarProduto() {
  const nome = document.getElementById('pNome').value.trim();
  const desc = document.getElementById('pDesc').value.trim();
  const cat = document.getElementById('pCat').value;
  const preco = parseFloat(document.getElementById('pPreco').value);
  const emoji = document.getElementById('pEmoji').value.trim() || '🍕';
  if (!nome || !preco) { showToast('Preencha nome e preço', 'error'); return; }

  if (editandoId) {
    const p = PRODUTOS.find(x => x.id === editandoId);
    Object.assign(p, { nome, desc, categoria: cat, precoBase: preco, emoji });
    showToast('Produto atualizado!', 'success');
  } else {
    const novo = { id: Date.now(), nome, desc, categoria: cat, precoBase: preco, emoji };
    PRODUTOS.push(novo);
    showToast('Produto cadastrado!', 'success');
  }
  fecharModal();
  renderTabelaProdutos();
}

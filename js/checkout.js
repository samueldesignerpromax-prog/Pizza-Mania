// ===== CHECKOUT =====
document.addEventListener('DOMContentLoaded', () => {
  const carrinho = getCarrinho();
  const box = document.getElementById('resumoItens');

  if (!carrinho.length) {
    alert('Seu carrinho está vazio!');
    window.location.href = 'cardapio.html';
    return;
  }

  box.innerHTML = carrinho.map(i => `
    <div class="pedido-mini"><span>${i.emoji||'🍕'} ${i.nome} × ${i.qtd}</span><strong>R$ ${(i.preco*i.qtd).toFixed(2).replace('.',',')}</strong></div>
  `).join('');

  const subtotal = carrinho.reduce((s,i) => s + i.preco*i.qtd, 0);
  document.getElementById('coSub').textContent = 'R$ ' + subtotal.toFixed(2).replace('.',',');
  document.getElementById('coTotal').textContent = 'R$ ' + (subtotal + 8).toFixed(2).replace('.',',');

  // Troco
  document.querySelectorAll('input[name="pag"]').forEach(r => {
    r.addEventListener('change', () => {
      document.getElementById('trocoBox').style.display = r.value === 'Dinheiro' && r.checked ? 'block' : 'none';
    });
  });

  // Confirmar pedido
  document.getElementById('btnConfirmar').addEventListener('click', e => {
    e.preventDefault();
    const form = document.getElementById('formCheckout');
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const pag = document.querySelector('input[name="pag"]:checked').value;
    const numero = Math.floor(Math.random() * 9000) + 1000;
    const pedido = {
      numero,
      data: new Date().toLocaleString('pt-BR'),
      cliente: document.getElementById('nome').value,
      telefone: document.getElementById('telefone').value,
      endereco: `${document.getElementById('rua').value}, ${document.getElementById('numero').value} - ${document.getElementById('bairro').value}, ${document.getElementById('cidade').value}`,
      pagamento: pag,
      troco: document.getElementById('troco')?.value || '',
      itens: carrinho,
      subtotal,
      taxa: 8,
      total: subtotal + 8,
      status: 'Recebido'
    };
    localStorage.setItem('ultimoPedido', JSON.stringify(pedido));
    const pedidos = JSON.parse(localStorage.getItem('pizzaPedidos') || '[]');
    pedidos.unshift(pedido);
    localStorage.setItem('pizzaPedidos', JSON.stringify(pedidos));
    limparCarrinho();
    showToast(`Pedido #${numero} confirmado! 🍕`, 'success');
    setTimeout(() => window.location.href = 'pedido.html', 1200);
  });
});

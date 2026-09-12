// ===== HELPERS GLOBAIS =====
function showToast(msg, tipo = 'success') {
  const t = document.createElement('div');
  t.className = 'toast ' + tipo;
  const ico = tipo === 'success' ? '✅' : tipo === 'error' ? '❌' : 'ℹ️';
  t.innerHTML = `<span>${ico}</span><span>${msg}</span>`;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 50);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

function updateCartCount() {
  const c = JSON.parse(localStorage.getItem('pizzaCarrinho') || '[]');
  const total = c.reduce((s, i) => s + i.qtd, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);
}

// ===== MENU MOBILE =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  // Loading
  const loading = document.getElementById('loading');
  if (loading) setTimeout(() => loading.classList.add('hide'), 500);

  // Back to top
  const btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', () => {
      btt.classList.toggle('show', window.scrollY > 400);
    });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  updateCartCount();
});

// ===== SABOR PRÉ-SELECIONADO =====
window.addEventListener('load', () => {
  const pre = localStorage.getItem('saborPreSelecionado');
  if (pre && document.getElementById('sabor1')) {
    setTimeout(() => {
      const el = document.getElementById('sabor1');
      if (el) { el.value = pre; el.dispatchEvent(new Event('change', { bubbles: true })); }
      localStorage.removeItem('saborPreSelecionado');
    }, 200);
  }
});

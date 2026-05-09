/* MAISON DRESSÉ — js/checkout.js */
function openCheckout() {
  if (!cart.length) { showToast('Wardrobe Empty', 'Add dresses to your wardrobe first'); return; }
  closeCart();
  setTimeout(() => {
    document.getElementById('chkOverlay')?.classList.add('open');
    document.getElementById('chkModal')?.classList.add('open');
    document.body.style.overflow = 'hidden';
    goToStep('step1');
    renderOrderSummary();
  }, 450);
}
function closeCheckout() {
  document.getElementById('chkOverlay')?.classList.remove('open');
  document.getElementById('chkModal')?.classList.remove('open');
  document.body.style.overflow = '';
}
function goToStep(id) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(id)?.classList.add('active');
}
function renderOrderSummary() {
  const el = document.getElementById('orderSum');
  if (!el) return;
  const shipping = getCartTotal() >= 500000 ? 0 : 15000;
  el.innerHTML =
    cart.map(i=>`<div class="sum-row"><span>${i.brand} — ${i.name} ×${i.qty}</span><span>${naira(i.price*i.qty)}</span></div>`).join('') +
    `<div class="sum-row"><span>Delivery</span><span>${shipping ? naira(shipping) : 'Complimentary'}</span></div>` +
    `<div class="sum-row total"><span>Grand Total</span><span>${naira(getCartTotal()+shipping)}</span></div>`;
}
function initCheckout() {
  document.getElementById('goCheckout')?.addEventListener('click', openCheckout);
  document.getElementById('chkClose')?.addEventListener('click', closeCheckout);
  document.getElementById('chkOverlay')?.addEventListener('click', closeCheckout);
  document.getElementById('toStep2')?.addEventListener('click', () => {
    const name  = document.getElementById('cName')?.value.trim();
    const email = document.getElementById('cEmail')?.value.trim();
    const phone = document.getElementById('cPhone')?.value.trim();
    const addr  = document.getElementById('cAddr')?.value.trim();
    if (!name||!email||!phone||!addr) { showToast('Required Fields','Please fill all delivery details'); return; }
    renderOrderSummary();
    goToStep('step2');
  });
  document.getElementById('backStep')?.addEventListener('click', () => goToStep('step1'));
  document.querySelectorAll('.pay-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.pay-opt').forEach(o=>o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });
  document.getElementById('placeOrder')?.addEventListener('click', () => {
    const btn = document.getElementById('placeOrder');
    if(btn){btn.textContent='Processing...';btn.disabled=true;}
    setTimeout(() => {
      const ref = 'MD-' + Date.now().toString(36).toUpperCase();
      const refEl = document.getElementById('refNum');
      if(refEl) refEl.textContent = 'Order Reference: ' + ref;
      if(btn){btn.textContent='Complete Purchase';btn.disabled=false;}
      goToStep('step3');
    }, 1800);
  });
  document.getElementById('contShop')?.addEventListener('click', () => {
    closeCheckout(); cart = []; renderCart();
    showToast('Thank You!', 'Your couture order is being prepared');
  });
}

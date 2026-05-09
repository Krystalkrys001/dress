/* MAISON DRESSÉ — js/cart.js */
let cart = [];

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) existing.qty++; else cart.push({ ...product, qty: 1 });
  renderCart();
  openCart();
  showToast(product.brand, product.name + ' added to your wardrobe');
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); renderCart(); }
function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id); else renderCart();
}
function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function renderCart() {
  const count = getCartCount();
  const badge = document.getElementById('cartBadge');
  if (badge) { badge.textContent = count; badge.classList.toggle('on', count > 0); }
  const body = document.getElementById('cartBody');
  const ft   = document.getElementById('cartFt');
  const tot  = document.getElementById('cartTotal');
  if (!body) return;
  if (!cart.length) {
    body.innerHTML = '<div class="cart-empty"><p>Your wardrobe is empty</p></div>';
    if (ft) ft.style.display = 'none';
    return;
  }
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" loading="lazy" />
      <div>
        <span class="ci-brand">${item.brand}</span>
        <div class="ci-name">${item.name}</div>
        <div class="ci-price">${naira(item.price * item.qty)}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-n">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="ci-del" onclick="removeFromCart(${item.id})">×</button>
    </div>`).join('');
  if (tot) tot.textContent = naira(getCartTotal());
  if (ft)  ft.style.display = 'block';
}
function openCart() {
  document.getElementById('cartDrawer')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

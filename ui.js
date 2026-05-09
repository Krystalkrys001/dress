/* MAISON DRESSÉ — js/ui.js */
let currentFilter = 'all';
let shownCount = 8;

function renderProducts(filter, count) {
  const grid = document.getElementById('grid');
  if (!grid) return;
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter);
  const visible = list.slice(0, count);
  grid.innerHTML = visible.map((p, i) => `
    <div class="prod-card reveal d${(i % 4) + 1}">
      <div class="prod-img">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="prod-actions">
          <button class="btn-cart" onclick="addToCart(${p.id})">Add to Wardrobe</button>
          <button class="btn-wish">♡ &nbsp;Save to Wishlist</button>
        </div>
      </div>
      <div class="prod-info">
        <span class="prod-brand">${p.brand}</span>
        <div class="prod-name">${p.name}</div>
        <div class="prod-cat">${p.cat}</div>
        <div class="prod-price">${naira(p.price)}</div>
      </div>
    </div>`).join('');
  const lb = document.getElementById('loadMore');
  if (lb) lb.style.display = list.length > count ? 'inline-block' : 'none';
  setTimeout(initReveal, 80);
}

function initFilters() {
  document.querySelectorAll('.f-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.f;
      shownCount = 8;
      renderProducts(currentFilter, shownCount);
    });
  });
  document.getElementById('loadMore')?.addEventListener('click', () => {
    shownCount += 4;
    renderProducts(currentFilter, shownCount);
  });
}

function filterByBrand(brand) {
  document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' });
  const grid = document.getElementById('grid');
  if (!grid) return;
  const list = PRODUCTS.filter(p => p.brand === brand);
  document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
  grid.innerHTML = list.length
    ? list.map((p, i) => `
      <div class="prod-card reveal d${(i % 4) + 1}">
        <div class="prod-img">
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
          <div class="prod-actions">
            <button class="btn-cart" onclick="addToCart(${p.id})">Add to Wardrobe</button>
            <button class="btn-wish">♡ &nbsp;Save</button>
          </div>
        </div>
        <div class="prod-info">
          <span class="prod-brand">${p.brand}</span>
          <div class="prod-name">${p.name}</div>
          <div class="prod-price">${naira(p.price)}</div>
        </div>
      </div>`).join('')
    : `<p style="grid-column:1/-1;text-align:center;color:var(--light-grey);padding:80px 0;font-family:var(--font-serif);font-size:20px;font-style:italic">More from ${brand} arriving soon</p>`;
  setTimeout(initReveal, 80);
  const lb = document.getElementById('loadMore');
  if (lb) lb.style.display = 'none';
}

function initBrandLinks() {
  document.querySelectorAll('[data-brand]').forEach(el => {
    el.addEventListener('click', e => { e.preventDefault(); filterByBrand(el.dataset.brand); });
  });
  document.querySelectorAll('[data-cat]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => document.querySelector(`.f-btn[data-f="${el.dataset.cat}"]`)?.click(), 500);
    });
  });
}

function initCollections() {
  document.querySelectorAll('.coll-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => document.querySelector(`.f-btn[data-f="${card.dataset.cat}"]`)?.click(), 500);
    });
  });
}

function initSearch() {
  const btn   = document.getElementById('searchBtn');
  const ov    = document.getElementById('searchOv');
  const close = document.getElementById('searchClose');
  const inp   = document.getElementById('searchInput');
  const res   = document.getElementById('searchRes');
  btn?.addEventListener('click', () => { ov.classList.add('open'); document.body.style.overflow='hidden'; setTimeout(()=>inp?.focus(),300); });
  close?.addEventListener('click', () => { ov.classList.remove('open'); document.body.style.overflow=''; });
  inp?.addEventListener('input', () => {
    const q = inp.value.toLowerCase().trim();
    if (!q) { res.innerHTML=''; return; }
    const found = PRODUCTS.filter(p => p.name.toLowerCase().includes(q)||p.brand.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q)).slice(0,6);
    if (!found.length) { res.innerHTML='<p style="color:var(--light-grey);font-size:13px;grid-column:1/-1">No results found</p>'; return; }
    res.innerHTML = found.map(p=>`
      <div class="s-result" onclick="addToCart(${p.id});document.getElementById('searchOv').classList.remove('open');document.body.style.overflow=''">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        <span class="sr-brand">${p.brand}</span>
        <div class="sr-name">${p.name}</div>
        <div class="sr-price">${naira(p.price)}</div>
      </div>`).join('');
  });
}

function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);} });
  }, { threshold:0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY>60));
}

function initMobile() {
  const hb = document.getElementById('hamburger');
  const nl = document.getElementById('navLinks');
  hb?.addEventListener('click', () => {
    nl?.classList.toggle('open');
    const open = nl?.classList.contains('open');
    const spans = hb.querySelectorAll('span');
    if(spans[0]) spans[0].style.transform = open?'rotate(45deg) translate(4px,4px)':'';
    if(spans[1]) spans[1].style.opacity = open?'0':'';
    if(spans[2]) spans[2].style.transform = open?'rotate(-45deg) translate(4px,-4px)':'';
  });
}

/* HERO SLIDER */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  let cur = 0;
  let timer;

  function goTo(n) {
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('active');
  }
  function autoPlay() { timer = setInterval(() => goTo(cur + 1), 5000); }
  autoPlay();
  document.getElementById('prevSlide')?.addEventListener('click', () => { clearInterval(timer); goTo(cur-1); autoPlay(); });
  document.getElementById('nextSlide')?.addEventListener('click', () => { clearInterval(timer); goTo(cur+1); autoPlay(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { clearInterval(timer); goTo(i); autoPlay(); }));
}

function showToast(title, message) {
  const t = document.getElementById('toast');
  const tt = document.getElementById('toastTitle');
  const tm = document.getElementById('toastMsg');
  if(!t) return;
  if(tt) tt.textContent = title;
  if(tm) tm.textContent = message;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 3500);
}

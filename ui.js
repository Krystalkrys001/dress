/* MAISON DRESSÉ — js/ui.js
   Rendering, filtering (brand + category), search, toast, navbar, slider */

/* ── State ─────────────────────────────────────────────── */
let currentFilter = 'all';   // category filter ('all' | 'gowns' | 'cocktail' | 'midi' | 'mini')
let currentBrand  = null;    // brand filter (null = all brands)
let visibleCount  = 8;       // how many cards currently shown

const PER_PAGE = 8;

/* ── Render Products ────────────────────────────────────── */
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    const catMatch   = currentFilter === 'all' || p.cat === currentFilter;
    const brandMatch = !currentBrand  || p.brand.toLowerCase().includes(currentBrand.toLowerCase());
    return catMatch && brandMatch;
  });
}

function renderProducts() {
  const grid = document.getElementById('grid');
  const btn  = document.getElementById('loadMore');
  if (!grid) return;

  const filtered = getFilteredProducts();
  const slice    = filtered.slice(0, visibleCount);

  if (!slice.length) {
    grid.innerHTML = '<p class="no-results">No pieces found in this selection.</p>';
    if (btn) btn.style.display = 'none';
    return;
  }

  grid.innerHTML = slice.map(p => `
    <article class="prod-card" data-id="${p.id}">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.brand} ${p.name}" loading="lazy" />
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <div class="prod-actions">
          <button class="btn-cart" onclick="addToCart(${p.id})">Add to Wardrobe</button>
          <button class="btn-wish">♡ Save to Wishlist</button>
        </div>
      </div>
      <div class="prod-info">
        <span class="prod-brand">${p.brand}</span>
        <h3 class="prod-name">${p.name}</h3>
        <p class="prod-cat">${p.cat}</p>
        <p class="prod-price">${naira(p.price)}</p>
      </div>
    </article>
  `).join('');

  /* Load More visibility */
  if (btn) {
    btn.style.display = filtered.length > visibleCount ? 'inline-block' : 'none';
  }
}

/* ── Section heading update when brand is active ─────────── */
function updateSectionHead() {
  const tag = document.querySelector('#arrivals .tag');
  const h2  = document.querySelector('#arrivals h2');
  if (!tag || !h2) return;
  if (currentBrand) {
    tag.textContent = 'Brand Collection';
    h2.textContent  = currentBrand;
  } else {
    tag.textContent = 'New Season';
    h2.textContent  = 'Resort 2026 Collection';
  }
}

/* ── Category Filters ───────────────────────────────────── */
function initFilters() {
  document.querySelectorAll('.f-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.f;
      visibleCount  = PER_PAGE;
      renderProducts();
    });
  });

  /* Load More */
  document.getElementById('loadMore')?.addEventListener('click', () => {
    visibleCount += PER_PAGE;
    renderProducts();
  });
}

/* ── Brand Links (navbar mega-drop + footer) ─────────────── */
function initBrandLinks() {
  document.querySelectorAll('[data-brand]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      currentBrand  = link.dataset.brand;
      currentFilter = 'all';
      visibleCount  = PER_PAGE;

      /* Reset category filter buttons */
      document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('.f-btn[data-f="all"]')?.classList.add('active');

      updateSectionHead();
      renderProducts();

      /* Close mobile nav if open */
      document.getElementById('navLinks')?.classList.remove('open');

      /* Scroll to products section */
      document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── Category Collection Cards ──────────────────────────── */
function initCollections() {
  document.querySelectorAll('[data-cat]').forEach(card => {
    card.addEventListener('click', e => {
      /* Avoid double-fire from filter buttons (they have data-f) */
      if (card.classList.contains('f-btn')) return;

      const cat = card.dataset.cat;
      currentFilter = cat;
      currentBrand  = null;
      visibleCount  = PER_PAGE;

      document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      const matchBtn = document.querySelector(`.f-btn[data-f="${cat}"]`);
      if (matchBtn) matchBtn.classList.add('active');

      updateSectionHead();
      renderProducts();
      document.getElementById('arrivals')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ── Search ─────────────────────────────────────────────── */
function initSearch() {
  const btn   = document.getElementById('searchBtn');
  const close = document.getElementById('searchClose');
  const ov    = document.getElementById('searchOv');
  const input = document.getElementById('searchInput');
  const res   = document.getElementById('searchRes');

  btn?.addEventListener('click',  () => { ov?.classList.add('open'); input?.focus(); });
  close?.addEventListener('click', () => { ov?.classList.remove('open'); if(res) res.innerHTML=''; });
  document.addEventListener('keydown', e => { if(e.key==='Escape') { ov?.classList.remove('open'); if(res) res.innerHTML=''; } });

  input?.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { if(res) res.innerHTML = ''; return; }
    const hits = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q)
    ).slice(0, 8);
    if (!res) return;
    res.innerHTML = hits.map(p => `
      <div class="s-result" onclick="addToCart(${p.id})">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <span class="sr-brand">${p.brand}</span>
        <div class="sr-name">${p.name}</div>
        <div class="sr-price">${naira(p.price)}</div>
      </div>`).join('') || '<p style="color:var(--light-grey);padding:16px 0">No results found.</p>';
  });
}

/* ── Reveal Animations ──────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.feat,.ed-main,.ed-small,.coll-card').forEach(el => {
    el.classList.add('reveal');
    obs.observe(el);
  });
}

/* ── Navbar Scroll ──────────────────────────────────────── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
}

/* ── Mobile Hamburger ───────────────────────────────────── */
function initMobile() {
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  ham?.addEventListener('click', () => links?.classList.toggle('open'));
}

/* ── Hero Slider ────────────────────────────────────────── */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;

  let current = 0;
  let timer   = null;

  function goTo(idx) {
    slides[current].classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current]?.classList.add('active');
  }

  function startAuto() { timer = setInterval(() => goTo(current + 1), 5000); }
  function stopAuto()  { clearInterval(timer); }

  document.getElementById('nextSlide')?.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });
  document.getElementById('prevSlide')?.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); }));

  startAuto();
}

/* ── Toast ──────────────────────────────────────────────── */
function showToast(title, msg) {
  const toast = document.getElementById('toast');
  const tTitle = document.getElementById('toastTitle');
  const tMsg   = document.getElementById('toastMsg');
  if (!toast) return;
  if (tTitle) tTitle.textContent = title;
  if (tMsg)   tMsg.textContent   = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
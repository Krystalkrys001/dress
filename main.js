/* MAISON DRESSÉ — js/main.js */
document.addEventListener('DOMContentLoaded', () => {

  /* Boot sequence */
  renderProducts();
  initFilters();
  initBrandLinks();
  initCollections();
  initSearch();
  initReveal();
  initNavbar();
  initMobile();
  initSlider();
  initCheckout();

  /* Cart drawer */
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  /* "All Pieces" reset — clicking the logo resets brand filter */
  document.querySelector('.nav-logo')?.addEventListener('click', e => {
    e.preventDefault();
    currentBrand  = null;
    currentFilter = 'all';
    visibleCount  = 8;
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.f-btn[data-f="all"]')?.classList.add('active');
    updateSectionHead();
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* Newsletter */
  document.getElementById('nlBtn')?.addEventListener('click', () => {
    const email = document.getElementById('nlEmail')?.value?.trim();
    if (email && email.includes('@')) {
      showToast('Bienvenue!', 'You are now part of The Couture Circle');
      document.getElementById('nlEmail').value = '';
    } else {
      showToast('Error', 'Please enter a valid email address');
    }
  });

});
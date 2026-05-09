/* MAISON DRESSÉ — js/main.js */
document.addEventListener('DOMContentLoaded', () => {

  renderProducts('all', 8);
  initFilters();
  initBrandLinks();
  initCollections();
  initSearch();
  initReveal();
  initNavbar();
  initMobile();
  initSlider();
  initCheckout();

  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold:0.12 });
  document.querySelectorAll('.feat,.ed-main,.ed-small,.coll-card').forEach(el => {
    el.classList.add('reveal');
    obs.observe(el);
  });

  document.getElementById('nlBtn')?.addEventListener('click', () => {
    const email = document.getElementById('nlEmail')?.value?.trim();
    if(email && email.includes('@')) {
      showToast('Bienvenue!', 'You are now part of The Couture Circle');
      document.getElementById('nlEmail').value = '';
    } else showToast('Error','Please enter a valid email address');
  });

});

/* ============================================
   MAISON DRESSÉ — PRODUCTS DATA
   All dress products
   ============================================ */

const PRODUCTS = [
  {
    id: 1,
    brand: 'Valentino',
    name: 'Pink PP Strapless Gown',
    category: 'gowns',
    price: 2800000,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85',
    badge: 'Iconic',
    description: 'The iconic Valentino pink, floor-length silhouette.'
  },
  {
    id: 2,
    brand: 'Christian Dior',
    name: 'New Look Bar Dress',
    category: 'midi',
    price: 1950000,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85',
    badge: 'Couture',
    description: 'Inspired by the original 1947 Bar silhouette.'
  },
  {
    id: 3,
    brand: 'Chanel',
    name: 'Tweed Boucle Mini Dress',
    category: 'mini',
    price: 1650000,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85',
    badge: 'New',
    description: 'Classic Chanel tweed with gold chain trim.'
  },
  {
    id: 4,
    brand: 'Balenciaga',
    name: 'Hourglass Shift Dress',
    category: 'midi',
    price: 1380000,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85',
    badge: 'Statement',
    description: 'Sharp tailoring meets sculptural silhouette.'
  },
  {
    id: 5,
    brand: 'Givenchy',
    name: 'Audrey-Inspired LBD',
    category: 'cocktail',
    price: 1750000,
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85',
    badge: 'Timeless',
    description: 'The little black dress that defined elegance.'
  },
  {
    id: 6,
    brand: 'Versace',
    name: 'Jungle Print Medusa Gown',
    category: 'gowns',
    price: 2100000,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85',
    badge: 'Iconic',
    description: 'Bold Versace jungle print, floor-sweeping drama.'
  },
  {
    id: 7,
    brand: 'Celine',
    name: 'Bias-Cut Satin Slip Dress',
    category: 'midi',
    price: 980000,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85',
    badge: 'New',
    description: 'Minimal luxury. Fluid satin in champagne.'
  },
  {
    id: 8,
    brand: 'Prada',
    name: 'Re-Nylon Utility Mini Dress',
    category: 'mini',
    price: 870000,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85',
    badge: 'Trending',
    description: 'Prada\'s signature Re-Nylon in a bold silhouette.'
  },
  {
    id: 9,
    brand: 'Valentino',
    name: 'Lace Evening Gown',
    category: 'gowns',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85',
    badge: 'Couture',
    description: 'Delicate ivory lace over silk tulle, cathedral train.'
  },
  {
    id: 10,
    brand: 'Chanel',
    name: 'Camellia Organza Cocktail',
    category: 'cocktail',
    price: 1900000,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85',
    badge: null,
    description: 'Organza with hand-sewn camellia detailing.'
  },
  {
    id: 11,
    brand: 'Givenchy',
    name: 'Feather-Trim Mini Dress',
    category: 'mini',
    price: 1450000,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85',
    badge: 'Exclusive',
    description: 'Silk mini with ostrich feather hem.'
  },
  {
    id: 12,
    brand: 'Christian Dior',
    name: 'Miss Dior Floral Midi',
    category: 'midi',
    price: 1680000,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85',
    badge: 'New',
    description: 'Embroidered floral on ivory silk crepe.'
  }
];

function formatPrice(amount) {
  return '₦' + amount.toLocaleString('en-NG');
}

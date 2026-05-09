/* MAISON DRESSÉ — js/data.js */

const PRODUCTS = [
  { id:1,  brand:'Valentino',     name:'Pink PP Strapless Gown',        cat:'gowns',    price:2800000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'Iconic'   },
  { id:2,  brand:'Christian Dior',name:'New Look Bar Jacket Dress',      cat:'cocktail', price:1950000, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'Timeless' },
  { id:3,  brand:'Chanel',        name:'Tweed Mini Dress',               cat:'mini',     price:1650000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:'New'      },
  { id:4,  brand:'Balenciaga',    name:'Hourglass Tailored Dress',       cat:'midi',     price:1380000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'Statement'},
  { id:5,  brand:'Givenchy',      name:'Little Black Dress',             cat:'cocktail', price:1750000, img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85', badge:'Classic'  },
  { id:6,  brand:'Versace',       name:'Jungle Print Silk Gown',         cat:'gowns',    price:2100000, img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'New'      },
  { id:7,  brand:'Celine',        name:'Satin Slip Midi Dress',          cat:'midi',     price:980000,  img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:null        },
  { id:8,  brand:'Valentino',     name:'Lace Long-Sleeve Gown',          cat:'gowns',    price:3200000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'Exclusive'},
  { id:9,  brand:'Prada',         name:'Re-Nylon Belted Dress',          cat:'midi',     price:1120000, img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:'New'      },
  { id:10, brand:'Christian Dior',name:'Oblique Jacquard Mini Dress',    cat:'mini',     price:1450000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'New'      },
  { id:11, brand:'Chanel',        name:'Camellia Embroidered Gown',      cat:'gowns',    price:4200000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'Couture'  },
  { id:12, brand:'Balenciaga',    name:'Boho Floral Midi',               cat:'midi',     price:1250000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:null       },
];

function naira(n) {
  return '₦' + Number(n).toLocaleString('en-NG');
}

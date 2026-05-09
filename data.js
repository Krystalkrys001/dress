/* MAISON DRESSÉ — js/data.js
   Expanded product catalog — 8+ items per brand for rich filtering */

const PRODUCTS = [

  /* ── VALENTINO ─────────────────────────────────────────── */
  { id:1,  brand:'Valentino', name:'Pink PP Strapless Gown',          cat:'gowns',    price:2800000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'Iconic'    },
  { id:2,  brand:'Valentino', name:'Lace Long-Sleeve Gown',           cat:'gowns',    price:3200000, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'Exclusive' },
  { id:3,  brand:'Valentino', name:'Rockstud Silk Midi Dress',        cat:'midi',     price:1950000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'New'       },
  { id:4,  brand:'Valentino', name:'Crepe Couture Mini Dress',        cat:'mini',     price:1680000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:'New'       },
  { id:5,  brand:'Valentino', name:'VLogo Signature Cocktail Dress',  cat:'cocktail', price:2100000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:'Statement'  },
  { id:6,  brand:'Valentino', name:'Roman Stud Draped Gown',          cat:'gowns',    price:3650000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'Couture'   },
  { id:7,  brand:'Valentino', name:'Open-Back Floral Midi',           cat:'midi',     price:1780000, img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85', badge:null        },
  { id:8,  brand:'Valentino', name:'Plissé Organza Evening Gown',     cat:'gowns',    price:4100000, img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:'Couture'   },
  { id:9,  brand:'Valentino', name:'Embroidered Tulle Mini Dress',    cat:'mini',     price:1450000, img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'New'       },

  /* ── CHRISTIAN DIOR ─────────────────────────────────────── */
  { id:10, brand:'Christian Dior', name:'New Look Bar Jacket Dress',      cat:'cocktail', price:1950000, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'Timeless'  },
  { id:11, brand:'Christian Dior', name:'Oblique Jacquard Mini Dress',    cat:'mini',     price:1450000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'New'       },
  { id:12, brand:'Christian Dior', name:'Miss Dior Floral Midi',          cat:'midi',     price:1680000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'New'       },
  { id:13, brand:'Christian Dior', name:'Dior Cruise Silk Slip Dress',    cat:'midi',     price:1320000, img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85', badge:null        },
  { id:14, brand:'Christian Dior', name:'Dior Evening Strapless Gown',    cat:'gowns',    price:2900000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'Exclusive' },
  { id:15, brand:'Christian Dior', name:'Toile de Jouy Wrap Dress',       cat:'midi',     price:1580000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:'New'       },
  { id:16, brand:'Christian Dior', name:'Dior Haute Couture Gown',        cat:'gowns',    price:5200000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:'Couture'   },
  { id:17, brand:'Christian Dior', name:'Dior Cocktail Lace Dress',       cat:'cocktail', price:1750000, img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:'Classic'   },
  { id:18, brand:'Christian Dior', name:'CD Logo Mini Knit Dress',        cat:'mini',     price:1180000, img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'New'       },

  /* ── CHANEL ─────────────────────────────────────────────── */
  { id:19, brand:'Chanel', name:'Tweed Mini Dress',                   cat:'mini',     price:1650000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:'New'       },
  { id:20, brand:'Chanel', name:'Camellia Embroidered Gown',          cat:'gowns',    price:4200000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'Couture'   },
  { id:21, brand:'Chanel', name:'Camellia Organza Cocktail',          cat:'cocktail', price:1900000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:null        },
  { id:22, brand:'Chanel', name:'Boucle A-Line Midi Dress',           cat:'midi',     price:2150000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'Classic'   },
  { id:23, brand:'Chanel', name:'Quilted Leather Mini Dress',         cat:'mini',     price:2400000, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'Exclusive' },
  { id:24, brand:'Chanel', name:'Chantilly Lace Evening Gown',        cat:'gowns',    price:3800000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:'Couture'   },
  { id:25, brand:'Chanel', name:'Little Black Dress No. 5',           cat:'cocktail', price:1750000, img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85', badge:'Timeless'  },
  { id:26, brand:'Chanel', name:'Gold-Thread Tweed Gown',             cat:'gowns',    price:3100000, img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:'Statement' },
  { id:27, brand:'Chanel', name:'Resort Floral Slip Dress',           cat:'midi',     price:1480000, img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'New'       },

  /* ── BALENCIAGA ─────────────────────────────────────────── */
  { id:28, brand:'Balenciaga', name:'Hourglass Tailored Dress',       cat:'midi',     price:1380000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'Statement' },
  { id:29, brand:'Balenciaga', name:'Boho Floral Midi',               cat:'midi',     price:1250000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:null        },
  { id:30, brand:'Balenciaga', name:'Cocoon Structured Mini Dress',   cat:'mini',     price:1600000, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'New'       },
  { id:31, brand:'Balenciaga', name:'Logo Tape Bodycon Dress',        cat:'cocktail', price:1120000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:'New'       },
  { id:32, brand:'Balenciaga', name:'Draped Jersey Evening Gown',     cat:'gowns',    price:2400000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'Exclusive' },
  { id:33, brand:'Balenciaga', name:'Power Shoulder Wrap Dress',      cat:'cocktail', price:1350000, img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85', badge:'Statement' },
  { id:34, brand:'Balenciaga', name:'BB Monogram Knit Mini Dress',    cat:'mini',     price:980000,  img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'New'       },
  { id:35, brand:'Balenciaga', name:'Couture Cut-Out Gown',           cat:'gowns',    price:2800000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'Couture'   },
  { id:36, brand:'Balenciaga', name:'Sculptural Vinyl Midi Dress',    cat:'midi',     price:1750000, img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:'New'       },

  /* ── GIVENCHY ───────────────────────────────────────────── */
  { id:37, brand:'Givenchy', name:'Little Black Dress',               cat:'cocktail', price:1750000, img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85', badge:'Classic'   },
  { id:38, brand:'Givenchy', name:'Feather-Trim Mini Dress',          cat:'mini',     price:1450000, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'Exclusive' },
  { id:39, brand:'Givenchy', name:'4G Jacquard Midi Dress',           cat:'midi',     price:1280000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'New'       },
  { id:40, brand:'Givenchy', name:'Haute Couture Tulle Gown',         cat:'gowns',    price:3900000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:'Couture'   },
  { id:41, brand:'Givenchy', name:'Plunging V-Neck Evening Dress',    cat:'gowns',    price:2650000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'Exclusive' },
  { id:42, brand:'Givenchy', name:'Crepe Wrap Cocktail Dress',        cat:'cocktail', price:1420000, img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:'New'       },
  { id:43, brand:'Givenchy', name:'Embroidered Sheath Midi',          cat:'midi',     price:1850000, img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'Statement' },
  { id:44, brand:'Givenchy', name:'Logo Band Mini Dress',             cat:'mini',     price:1050000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'New'       },
  { id:45, brand:'Givenchy', name:'Asymmetric Draped Gown',           cat:'gowns',    price:3200000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:'Couture'   },

  /* ── VERSACE ────────────────────────────────────────────── */
  { id:46, brand:'Versace', name:'Jungle Print Silk Gown',            cat:'gowns',    price:2100000, img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'New'       },
  { id:47, brand:'Versace', name:'Medusa Head Mini Dress',            cat:'mini',     price:1350000, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'Iconic'    },
  { id:48, brand:'Versace', name:'Safety-Pin Cut-Out Dress',          cat:'cocktail', price:1900000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:'Statement' },
  { id:49, brand:'Versace', name:'Barocco Print Silk Midi',           cat:'midi',     price:1650000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'New'       },
  { id:50, brand:'Versace', name:'Crystal-Embellished Gown',          cat:'gowns',    price:3400000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'Couture'   },
  { id:51, brand:'Versace', name:'Chain Mesh Evening Dress',          cat:'gowns',    price:2800000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'Exclusive' },
  { id:52, brand:'Versace', name:'Greek Key Knit Mini Dress',         cat:'mini',     price:1120000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:'New'       },
  { id:53, brand:'Versace', name:'Greca Border Wrap Midi',            cat:'midi',     price:1480000, img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:'New'       },
  { id:54, brand:'Versace', name:'Signature Plunge Cocktail Dress',   cat:'cocktail', price:1720000, img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85', badge:'Statement' },

  /* ── CELINE ─────────────────────────────────────────────── */
  { id:55, brand:'Celine', name:'Satin Slip Midi Dress',              cat:'midi',     price:980000,  img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:null        },
  { id:56, brand:'Celine', name:'Bias-Cut Slip Gown',                 cat:'gowns',    price:1680000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'New'       },
  { id:57, brand:'Celine', name:'Arc de Triomphe Mini Dress',         cat:'mini',     price:1150000, img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'New'       },
  { id:58, brand:'Celine', name:'Structured Wool Sheath Dress',       cat:'cocktail', price:1320000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'Classic'   },
  { id:59, brand:'Celine', name:'Silk Charmeuse Wrap Midi',           cat:'midi',     price:1080000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:null        },
  { id:60, brand:'Celine', name:'Tailored Blazer Dress',              cat:'midi',     price:1420000, img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'New'       },
  { id:61, brand:'Celine', name:'Crepe De Chine Evening Gown',        cat:'gowns',    price:2200000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:'Exclusive' },
  { id:62, brand:'Celine', name:'Monogram Canvas Cocktail Dress',     cat:'cocktail', price:1250000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'New'       },
  { id:63, brand:'Celine', name:'Hedi Slip Tank Dress',               cat:'mini',     price:890000,  img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:null        },

  /* ── PRADA ──────────────────────────────────────────────── */
  { id:64, brand:'Prada', name:'Re-Nylon Belted Dress',               cat:'midi',     price:1120000, img:'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=85', badge:'New'       },
  { id:65, brand:'Prada', name:'Cloqé Jersey Midi Dress',             cat:'midi',     price:1380000, img:'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85', badge:'New'       },
  { id:66, brand:'Prada', name:'Triangle Logo Mini Dress',            cat:'mini',     price:980000,  img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85', badge:'Trending'  },
  { id:67, brand:'Prada', name:'Chiffon Pleated Evening Gown',        cat:'gowns',    price:2850000, img:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85', badge:'Exclusive' },
  { id:68, brand:'Prada', name:'Silk Faille Cocktail Dress',          cat:'cocktail', price:1650000, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85', badge:'New'       },
  { id:69, brand:'Prada', name:'Mohair Knit Mini Dress',              cat:'mini',     price:1100000, img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=85', badge:'New'       },
  { id:70, brand:'Prada', name:'Lace-Up Leather Midi Dress',          cat:'midi',     price:1920000, img:'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85', badge:'Statement' },
  { id:71, brand:'Prada', name:'Floral Organza Gown',                 cat:'gowns',    price:3100000, img:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85', badge:'Couture'   },
  { id:72, brand:'Prada', name:'Nappa Leather Sheath Dress',          cat:'cocktail', price:2100000, img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85', badge:'Exclusive' },
];

/* ── HELPER ─────────────────────────────────────────────── */
function naira(n) {
  return '₦' + Number(n).toLocaleString('en-NG');
}
import blackCreamLowUrl from './assets/images/black_cream_low_1795069391454.jpg';
import blackLeatherShoeUrl from './assets/images/black_leather_shoe_1795069391941.jpg';
import creamRetroLowUrl from './assets/images/cream_retro_low_1795069391989.jpg';
import oliveRibbedKnitUrl from './assets/images/olive_ribbed_knit_1795069354913.jpg';
import charcoalKnitUrl from './assets/images/charcoal_knit_sweater_1795069354682.jpg';
import burgundyKnitUrl from './assets/images/burgundy_knit_sweater_1795069353950.jpg';
import greyFleeceCrewUrl from './assets/images/grey_fleece_crew_1795069354017.jpg';
import blackOversizedTeeUrl from './assets/images/black_oversized_tee_1795069354004.jpg';

const CATALOG = {
  source: 'https://nike-makknzjs.myshopify.com/pages/runway',
  looks: [
    {
      name: 'The City Edit',
      description: 'A charcoal knit and easy denim.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-1.webp',
      products: ['tatum-5-orbit-copy', 'tshirt', 'sweatshirt']
    },
    {
      name: 'Gallery Opening',
      description: 'A clean white tee and relaxed denim.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-5.webp',
      products: ['tatum-5-orbit', 'hoodie-black', 'tshirt']
    },
    {
      name: 'Gallery Opening',
      description: 'Olive knitwear. A grounded palette.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-4.webp',
      products: ['sweatshirt-plus', 'tatum-5-orbit', 'tshirt']
    },
    {
      name: 'Studio Day',
      description: 'Black, white and laid-back denim.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-6.webp',
      products: ['hoodie-black', 'tatum-5-orbit-copy', 'tshirt']
    },
    {
      name: 'Studio Day',
      description: 'Burgundy layers. A tailored perspective.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-3.webp',
      products: ['sweatshirt', 'tatum-5-orbit', 'tshirt']
    },
    {
      name: 'Studio Day',
      description: 'A grey crew and your favourite denim.',
      image: 'https://reel-ref-try-the-look.vercel.app/assets/original-look-2.webp',
      products: ['hoodie', 'air-jordan-12-retro-copy', 'tshirt']
    }
  ],
  items: [
    {
      id: 'tatum-5-orbit-copy',
      name: 'Air Jordan 12 Retro',
      type: 'From the original lookbook',
      price: 17990,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-tatum-5-orbit-copy.webp',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015167025457, a: true, o: ['40'] },
        { id: 57015167058225, a: true, o: ['41'] },
        { id: 57015167090993, a: true, o: ['42'] },
        { id: 57015167123761, a: true, o: ['43'] },
        { id: 57015167156529, a: true, o: ['44'] },
        { id: 57015167189297, a: true, o: ['45'] },
        { id: 57015167222065, a: true, o: ['46'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit-copy'
    },
    {
      id: 'tshirt',
      name: 'Tshirt',
      type: 'From the original lookbook',
      price: 3490,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-tshirt.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56835911582001, a: true, o: ['S'] },
        { id: 56835911614769, a: true, o: ['L'] },
        { id: 56835911647537, a: true, o: ['M'] },
        { id: 56835911680305, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tshirt'
    },
    {
      id: 'sweatshirt',
      name: 'Sweatshirt',
      type: 'From the original lookbook',
      price: 6990,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-sweatshirt.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56835806396721, a: true, o: ['S'] },
        { id: 56835806429489, a: true, o: ['L'] },
        { id: 56835806462257, a: true, o: ['M'] },
        { id: 56835806495025, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt'
    },
    {
      id: 'tatum-5-orbit',
      name: 'Tatum 5 Orbit',
      type: 'From the original lookbook',
      price: 11490,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-tatum-5-orbit.webp',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015166730545, a: true, o: ['40'] },
        { id: 57015166763313, a: true, o: ['41'] },
        { id: 57015166796081, a: true, o: ['42'] },
        { id: 57015166828849, a: true, o: ['43'] },
        { id: 57015166861617, a: true, o: ['44'] },
        { id: 57015166894385, a: true, o: ['45'] },
        { id: 57015166927153, a: true, o: ['46'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit'
    },
    {
      id: 'hoodie-black',
      name: 'Hoodie Black',
      type: 'From the original lookbook',
      price: 9490,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-hoodie-black.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56836251681073, a: true, o: ['S'] },
        { id: 56836251713841, a: true, o: ['L'] },
        { id: 56836251746609, a: true, o: ['M'] },
        { id: 56836251779377, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/hoodie-black'
    },
    {
      id: 'sweatshirt-plus',
      name: 'Sweatshirt Plus',
      type: 'From the original lookbook',
      price: 7990,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-sweatshirt-plus.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56836143743281, a: true, o: ['S'] },
        { id: 56836143776049, a: true, o: ['L'] },
        { id: 56836143808817, a: true, o: ['M'] },
        { id: 56836143841585, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt-plus'
    },
    {
      id: 'hoodie',
      name: 'Hoodie',
      type: 'From the original lookbook',
      price: 8490,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-hoodie.webp',
      sizes: ['S', 'L', 'M', 'XL'],
      variants: [
        { id: 56836002185521, a: true, o: ['S'] },
        { id: 56836002218289, a: true, o: ['L'] },
        { id: 56836002251057, a: true, o: ['M'] },
        { id: 56836002283825, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/hoodie'
    },
    {
      id: 'air-jordan-12-retro-copy',
      name: 'Luka 5',
      type: 'From the original lookbook',
      price: 12990,
      image: 'https://reel-ref-try-the-look.vercel.app/assets/source-air-jordan-12-retro-copy.webp',
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015176364337, a: true, o: ['40'] },
        { id: 57015176397105, a: true, o: ['41'] },
        { id: 57015176429873, a: true, o: ['42'] },
        { id: 57015176462641, a: true, o: ['43'] },
        { id: 57015176495409, a: true, o: ['44'] },
        { id: 57015176528177, a: true, o: ['45'] },
        { id: 57015176560945, a: true, o: ['46'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/air-jordan-12-retro-copy'
    },
    {
      id: 'orbit-flight-court',
      name: 'Jordan Flight Court',
      type: 'Nike Orbit Collection',
      price: 13490,
      image: blackCreamLowUrl,
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015201001001, a: true, o: ['40'] },
        { id: 57015201001002, a: true, o: ['41'] },
        { id: 57015201001003, a: true, o: ['42'] },
        { id: 57015201001004, a: true, o: ['43'] },
        { id: 57015201001005, a: true, o: ['44'] },
        { id: 57015201001006, a: true, o: ['45'] },
        { id: 57015201001007, a: true, o: ['46'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit-copy'
    },
    {
      id: 'orbit-noir-low',
      name: 'Air Force 1 Noir',
      type: 'Nike Orbit Collection',
      price: 14990,
      image: blackLeatherShoeUrl,
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015202001001, a: true, o: ['40'] },
        { id: 57015202001002, a: true, o: ['41'] },
        { id: 57015202001003, a: true, o: ['42'] },
        { id: 57015202001004, a: true, o: ['43'] },
        { id: 57015202001005, a: true, o: ['44'] },
        { id: 57015202001006, a: true, o: ['45'] },
        { id: 57015202001007, a: true, o: ['46'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/air-jordan-12-retro-copy'
    },
    {
      id: 'orbit-court-vintage',
      name: 'Killshot Court Low',
      type: 'Nike Orbit Collection',
      price: 10990,
      image: creamRetroLowUrl,
      flipX: true,
      sizes: ['40', '41', '42', '43', '44', '45', '46'],
      variants: [
        { id: 57015204001001, a: true, o: ['40'] },
        { id: 57015204001002, a: true, o: ['41'] },
        { id: 57015204001003, a: true, o: ['42'] },
        { id: 57015204001004, a: true, o: ['43'] },
        { id: 57015204001005, a: true, o: ['44'] },
        { id: 57015204001006, a: true, o: ['45'] },
        { id: 57015204001007, a: true, o: ['46'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tatum-5-orbit'
    },
    {
      id: 'rail-olive-knit',
      name: 'Olive Ribbed Knit',
      type: 'Hand Rail Pro Collection',
      price: 8290,
      image: oliveRibbedKnitUrl,
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 57015301001001, a: true, o: ['S'] },
        { id: 57015301001002, a: true, o: ['M'] },
        { id: 57015301001003, a: true, o: ['L'] },
        { id: 57015301001004, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt-plus'
    },
    {
      id: 'rail-charcoal-knit',
      name: 'Charcoal Merino Crew',
      type: 'Hand Rail Pro Collection',
      price: 8990,
      image: charcoalKnitUrl,
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 57015302001001, a: true, o: ['S'] },
        { id: 57015302001002, a: true, o: ['M'] },
        { id: 57015302001003, a: true, o: ['L'] },
        { id: 57015302001004, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt'
    },
    {
      id: 'rail-burgundy-knit',
      name: 'Burgundy Knit Pullover',
      type: 'Hand Rail Pro Collection',
      price: 8690,
      image: burgundyKnitUrl,
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 57015303001001, a: true, o: ['S'] },
        { id: 57015303001002, a: true, o: ['M'] },
        { id: 57015303001003, a: true, o: ['L'] },
        { id: 57015303001004, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/sweatshirt-plus'
    },
    {
      id: 'rail-grey-fleece',
      name: 'Heather Studio Crew',
      type: 'Hand Rail Pro Collection',
      price: 6490,
      image: greyFleeceCrewUrl,
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 57015304001001, a: true, o: ['S'] },
        { id: 57015304001002, a: true, o: ['M'] },
        { id: 57015304001003, a: true, o: ['L'] },
        { id: 57015304001004, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/hoodie'
    },
    {
      id: 'rail-black-tee',
      name: 'Drop-Shoulder Studio Tee',
      type: 'Hand Rail Pro Collection',
      price: 3790,
      image: blackOversizedTeeUrl,
      sizes: ['S', 'M', 'L', 'XL'],
      variants: [
        { id: 57015305001001, a: true, o: ['S'] },
        { id: 57015305001002, a: true, o: ['M'] },
        { id: 57015305001003, a: true, o: ['L'] },
        { id: 57015305001004, a: true, o: ['XL'] }
      ],
      url: 'https://nike-makknzjs.myshopify.com/products/tshirt'
    }
  ]
};

const ORBIT_IDS = [
  'tatum-5-orbit-copy',
  'air-jordan-12-retro-copy',
  'tatum-5-orbit',
  'orbit-flight-court',
  'orbit-noir-low',
  'orbit-court-vintage'
];

const RAIL_IDS = [
  'hoodie',
  'rail-olive-knit',
  'rail-black-tee',
  'sweatshirt',
  'hoodie-black',
  'rail-grey-fleece',
  'sweatshirt-plus',
  'rail-charcoal-knit',
  'rail-burgundy-knit',
  'tshirt'
];

const PRODUCT_DETAILS = {
  'tatum-5-orbit-copy': {
    brand: 'Jordan',
    category: 'Footwear',
    sizeLabel: 'Shoe size (EU)',
    subtitle: 'Full-grain tumbled leather court silhouette with encapsulated Air cushioning and herringbone traction.',
    description: 'Constructed with stitched radial quarter panels in rich tumbled leather over a supportive carbon shank plate. Styled on the Runway to anchor relaxed wide-leg denim with clean sculptural weight.',
    fitNote: 'True to EU footwear sizing. Half sizes are advised to select the next size up.',
    material: 'Full-grain tumbled leather upper, sculpted rubber cupsole, encapsulated Air unit',
    sku: 'AJ12-RT-01'
  },
  tshirt: {
    brand: 'Nike',
    category: 'Essential Jersey',
    sizeLabel: 'Size',
    subtitle: 'Heavyweight 265 GSM combed cotton jersey tee with structured collar ribbing and dropped shoulder drape.',
    description: 'Cut in an architectural boxy block that anchors every layered chapter across the Runway collection. Dense ring-spun yarn maintains crisp neckline structure through extended daily wear.',
    fitNote: 'Boxy relaxed fit. Take your true size for studio drape or size down for a tailored line.',
    material: '100% heavyweight combed ring-spun cotton (265 GSM)',
    sku: 'NK-TS-265'
  },
  sweatshirt: {
    brand: 'Nike',
    category: 'Knitwear',
    sizeLabel: 'Size',
    subtitle: 'Midweight loopback French terry crew with wide ribbed trim and clean tonal coverstitching.',
    description: 'Tailored from dense loopback cotton-blend jersey with soft brushed finishing. Engineered to layer smoothly over heavyweight tees while holding structured sleeve volume.',
    fitNote: 'Relaxed editorial silhouette with dropped shoulders.',
    material: '84% organic combed cotton, 16% recycled polyester loopback fleece (420 GSM)',
    sku: 'NK-SW-420'
  },
  'tatum-5-orbit': {
    brand: 'Nike Orbit',
    category: 'Footwear',
    sizeLabel: 'Shoe size (EU)',
    subtitle: 'Lightweight sculpted runner pairing engineered breathable mesh with dual-density foam responsiveness.',
    description: 'Built around a contoured frame designed for effortless daily transit. Neutral layered panelling complements knitwear, oversized hoodies, and tonal denim across four Runway chapters.',
    fitNote: 'True to EU size with anatomical midfoot wrap.',
    material: 'Monofilament engineered mesh, molded TPU cage, dual-density foam midsole',
    sku: 'NK-T5O-04'
  },
  'hoodie-black': {
    brand: 'Nike',
    category: 'Heavyweight Fleece',
    sizeLabel: 'Size',
    subtitle: '500 GSM brushed cotton fleece pullover with double-lined three-panel hood and blind seams.',
    description: 'Minimal monochrome outerwear fleece featuring hidden side-seam welt pockets, zero external drawcords, and high-recovery 2×2 ribbing at the cuffs and hem.',
    fitNote: 'Oversized studio block. Select your usual size for intended volume.',
    material: '100% brushed cotton heavy fleece (500 GSM), garment-dyed matte black',
    sku: 'NK-HD-500B'
  },
  'sweatshirt-plus': {
    brand: 'Hand Rail Pro',
    category: 'Knitwear',
    sizeLabel: 'Size',
    subtitle: '5-gauge textured fisherman rib knit crewneck with articulated raglan sleeve shaping.',
    description: 'Flatbed-knit for deep textural relief and natural recovery, bringing grounded tonal depth to Gallery Opening Look 03 alongside wide corduroy trousers.',
    fitNote: 'True to size with slightly cropped ribbed waist.',
    material: '70% combed cotton, 30% fine merino wool blend (5-gauge rib)',
    sku: 'NK-SWP-05'
  },
  hoodie: {
    brand: 'Hand Rail Pro',
    category: 'Studio Fleece',
    sizeLabel: 'Size',
    subtitle: 'Heather grey brushed pullover engineered with flatlock seams and reinforced collar opening.',
    description: 'Designed as an everyday studio staple balancing plush interior warmth with clean exterior drape. Featured in Studio Day Look 06.',
    fitNote: 'Relaxed standard length; layers comfortably over jersey tees.',
    material: '88% heavyweight cotton, 12% heather fleece (460 GSM)',
    sku: 'NK-HD-460G'
  },
  'air-jordan-12-retro-copy': {
    brand: 'Jordan',
    category: 'Performance Footwear',
    sizeLabel: 'Shoe size (EU)',
    subtitle: 'Low-profile signature court shoe built with reinforced lateral containment and high-rebound Zoom Air.',
    description: 'Combines crisp suede overlays, breathable ballistic mesh, and responsive forefoot cushioning for street durability and studio proportion.',
    fitNote: 'Snug athletic midfoot. True to EU size; size up one step for wide feet.',
    material: 'Multi-layer synthetic suede, ballistic mesh upper, Zoom Air cushioning',
    sku: 'JD-LK5-06'
  },
  'orbit-flight-court': {
    brand: 'Jordan',
    category: 'Footwear',
    sizeLabel: 'Shoe size (EU)',
    subtitle: 'Low-cut suede & canvas sneaker anchored by a contrast cream vulcanized cupsole.',
    description: 'Brushed pitch-black suede paired with vintage off-white foxing tape and reinforced rubber toe bumper for crisp everyday proportions.',
    fitNote: 'True to EU size with cushioned Collar lining.',
    material: 'Brushed suede upper, vulcanized rubber sole, Ortholite insole',
    sku: 'JD-FLT-04'
  },
  'orbit-noir-low': {
    brand: 'Nike Orbit',
    category: 'Footwear',
    sizeLabel: 'Shoe size (EU)',
    subtitle: 'Tonal full-grain matte black leather court low atop a sculpted lugged outsole.',
    description: 'Monochrome matte leather panels with recessed tonal lacing and elevated lugged cupsole geometry built for rainy pavement.',
    fitNote: 'Structured leather breaks in cleanly; select your usual EU size.',
    material: 'Full-grain calfskin leather, tonal cotton laces, heavy lugged rubber sole',
    sku: 'NK-NR1-05'
  },
  'orbit-court-vintage': {
    brand: 'Nike Orbit',
    category: 'Heritage Court',
    sizeLabel: 'Shoe size (EU)',
    subtitle: 'Warm cream leather court low finished with unbleached midsole patina.',
    description: 'Minimal archival court silhouette stripped of noise, featuring tonal double-stitching and flexible gum herringbone grip.',
    fitNote: 'Standard heritage width; true to EU size.',
    material: 'Supple cream grain leather, textile tongue, gum rubber cupsole',
    sku: 'NK-KLV-07'
  },
  'rail-olive-knit': {
    brand: 'Hand Rail Pro',
    category: 'Knitwear',
    sizeLabel: 'Size',
    subtitle: 'Heavy 5-gauge fisherman rib pullover knitted in deep field olive yarn.',
    description: 'Substantial vertical rib structure with raglan shoulder shaping that drapes naturally off a hanger or studio shoulder.',
    fitNote: 'Relaxed fit with springy ribbed hem and cuffs.',
    material: '70% combed cotton, 30% virgin wool (5-gauge fisherman rib)',
    sku: 'HRP-OLV-02'
  },
  'rail-charcoal-knit': {
    brand: 'Hand Rail Pro',
    category: 'Merino Knitwear',
    sizeLabel: 'Size',
    subtitle: 'Extra-fine dark charcoal merino crewneck with dense saddle-shoulder knit.',
    description: 'Smooth matte surface finish engineered to resist pilling while maintaining architectural body under outerwear.',
    fitNote: 'True to size; slightly cropped waist.',
    material: '100% Australian extra-fine merino wool',
    sku: 'HRP-CHR-08'
  },
  'rail-burgundy-knit': {
    brand: 'Hand Rail Pro',
    category: 'Knitwear',
    sizeLabel: 'Size',
    subtitle: 'Oxblood jersey-stitch crewneck finished with turn-back cuffs and dense neck rib.',
    description: 'Woven for rich tonal depth on winter floors, pairing dark oxblood yarns with clean flatlock shoulder joins.',
    fitNote: 'Relaxed studio block.',
    material: '85% brushed cotton, 15% alpaca-wool blend',
    sku: 'HRP-BRG-09'
  },
  'rail-grey-fleece': {
    brand: 'Hand Rail Pro',
    category: 'Heavyweight Fleece',
    sizeLabel: 'Size',
    subtitle: 'Marled heather grey 480 GSM fleece crewneck with double-rib side gussets.',
    description: 'Cut oversized across the chest with drop shoulders and thick reverse-weave side panels to eliminate vertical shrinkage.',
    fitNote: 'Oversized streetwear block. Take your true size.',
    material: '100% heavyweight loopback organic cotton (480 GSM)',
    sku: 'HRP-GRY-06'
  },
  'rail-black-tee': {
    brand: 'Hand Rail Pro',
    category: 'Essential Jersey',
    sizeLabel: 'Size',
    subtitle: '300 GSM pigment-dyed jet black tee with thick high-crew mock rib.',
    description: 'Architectural boxy drape with dropped sleeves that sit cleanly below the bicep for effortless layering.',
    fitNote: 'Boxy oversized fit.',
    material: '100% organic heavyweight carded cotton (300 GSM)',
    sku: 'HRP-BLK-03'
  }
};

const cutoutCache = new Map();
function createCutoutImg(src, opts = {}) {
  const flipX = Boolean(opts && opts.flipX);
  if (!src) return Promise.resolve(src);
  const cacheKey = flipX ? `${src}::flipX` : src;
  if (cutoutCache.has(cacheKey)) return cutoutCache.get(cacheKey);

  const p = new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    if (/^https?:\/\//i.test(src)) {
      img.crossOrigin = 'anonymous';
    }
    img.onload = () => {
      try {
        const maxDim = 760;
        const scale = Math.min(1, maxDim / Math.max(img.naturalWidth || 1, img.naturalHeight || 1));
        const w = Math.max(1, Math.round(img.naturalWidth * scale));
        const h = Math.max(1, Math.round(img.naturalHeight * scale));
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) {
          resolve(src);
          return;
        }
        ctx.drawImage(img, 0, 0, w, h);
        const imgData = ctx.getImageData(0, 0, w, h);
        const d = imgData.data;

        // If all 4 corners already carry true alpha transparency, keep the source as-is
        const cTL = d[3];
        const cTR = d[(w - 1) * 4 + 3];
        const cBL = d[(h - 1) * w * 4 + 3];
        const cBR = d[((h - 1) * w + (w - 1)) * 4 + 3];
        if (cTL < 20 && cTR < 20 && cBL < 20 && cBR < 20) {
          resolve(src);
          return;
        }

        // Sample average top-left 3x3 corner background color
        let r0 = 0;
        let g0 = 0;
        let b0 = 0;
        let sampleCount = 0;
        for (let sy = 0; sy < Math.min(3, h); sy++) {
          for (let sx = 0; sx < Math.min(3, w); sx++) {
            const o = (sy * w + sx) * 4;
            r0 += d[o];
            g0 += d[o + 1];
            b0 += d[o + 2];
            sampleCount++;
          }
        }
        r0 /= Math.max(1, sampleCount);
        g0 /= Math.max(1, sampleCount);
        b0 /= Math.max(1, sampleCount);

        const cornerMin = Math.min(r0, g0, b0);
        const cornerMax = Math.max(r0, g0, b0);
        if (cornerMin < 195) {
          resolve(src);
          return;
        }

        const isPureWhiteBg = cornerMin >= 250 && cornerMax - cornerMin <= 6;
        const minLum = isPureWhiteBg ? 236 : 172;
        const maxChroma = isPureWhiteBg ? 10 : 14;
        const maxCornerDist = isPureWhiteBg ? 28 : 72;
        const maxStep = 24;

        const total = w * h;
        const visited = new Uint8Array(total);
        const queue = new Int32Array(total);
        let head = 0;
        let tail = 0;

        const isBackgroundPixel = (off, pOff) => {
          if (d[off + 3] < 20) return true;
          const r = d[off];
          const g = d[off + 1];
          const b = d[off + 2];
          const maxC = r > g ? (r > b ? r : b) : (g > b ? g : b);
          const minC = r < g ? (r < b ? r : b) : (g < b ? g : b);
          const lum = (r + g + b) / 3;
          const chroma = maxC - minC;
          if (lum < minLum || chroma > maxChroma) return false;
          if (Math.hypot(r - r0, g - g0, b - b0) > maxCornerDist) return false;
          if (pOff >= 0) {
            const stepDiff =
              Math.abs(r - d[pOff]) +
              Math.abs(g - d[pOff + 1]) +
              Math.abs(b - d[pOff + 2]);
            if (stepDiff > maxStep) return false;
          }
          return true;
        };

        const seedBorder = (idx) => {
          if (visited[idx]) return;
          if (isBackgroundPixel(idx * 4, -1)) {
            visited[idx] = 1;
            queue[tail++] = idx;
          }
        };

        for (let x = 0; x < w; x++) {
          seedBorder(x);
          seedBorder((h - 1) * w + x);
        }
        for (let y = 1; y < h - 1; y++) {
          seedBorder(y * w);
          seedBorder(y * w + w - 1);
        }

        const tryNeighbor = (nIdx, pOff) => {
          if (visited[nIdx]) return;
          if (isBackgroundPixel(nIdx * 4, pOff)) {
            visited[nIdx] = 1;
            queue[tail++] = nIdx;
          }
        };

        while (head < tail) {
          const cur = queue[head++];
          const pOff = cur * 4;
          const cx = cur % w;
          const cy = (cur - cx) / w;
          if (cx > 0) tryNeighbor(cur - 1, pOff);
          if (cx < w - 1) tryNeighbor(cur + 1, pOff);
          if (cy > 0) tryNeighbor(cur - w, pOff);
          if (cy < h - 1) tryNeighbor(cur + w, pOff);
        }

        // Remove all flood-filled studio pixels cleanly (alpha = 0)
        for (let i = 0; i < total; i++) {
          if (visited[i]) {
            d[i * 4 + 3] = 0;
          }
        }

        // Gentle 1px boundary feathering to eliminate any matte white rim
        for (let y = 1; y < h - 1; y++) {
          for (let x = 1; x < w - 1; x++) {
            const idx = y * w + x;
            if (visited[idx]) continue;
            if (!visited[idx - 1] && !visited[idx + 1] && !visited[idx - w] && !visited[idx + w]) {
              continue;
            }
            const off = idx * 4;
            const r = d[off];
            const g = d[off + 1];
            const b = d[off + 2];
            const maxC = r > g ? (r > b ? r : b) : (g > b ? g : b);
            const minC = r < g ? (r < b ? r : b) : (g < b ? g : b);
            const chroma = maxC - minC;
            const lum = (r + g + b) / 3;
            if (lum > minLum + 8 && chroma <= maxChroma + 4) {
              d[off + 3] = lum > 224 && chroma <= maxChroma ? 0 : 96;
            }
          }
        }

        let minX = w;
        let minY = h;
        let maxX = -1;
        let maxY = -1;
        for (let i = 0; i < total; i++) {
          if (d[i * 4 + 3] > 20) {
            const px = i % w;
            const py = (i - px) / w;
            if (px < minX) minX = px;
            if (px > maxX) maxX = px;
            if (py < minY) minY = py;
            if (py > maxY) maxY = py;
          }
        }

        if (maxX <= minX || maxY <= minY) {
          resolve(src);
          return;
        }

        ctx.putImageData(imgData, 0, 0);
        const pad = 4;
        const sx = Math.max(0, minX - pad);
        const sy = Math.max(0, minY - pad);
        const sw = Math.min(w - sx, maxX - minX + 1 + pad * 2);
        const sh = Math.min(h - sy, maxY - minY + 1 + pad * 2);

        const out = document.createElement('canvas');
        out.width = sw;
        out.height = sh;
        const outCtx = out.getContext('2d');
        if (!outCtx) {
          resolve(src);
          return;
        }
        outCtx.save();
        if (flipX) {
          outCtx.translate(sw, 0);
          outCtx.scale(-1, 1);
        }
        outCtx.drawImage(canvas, sx, sy, sw, sh, 0, 0, sw, sh);
        outCtx.restore();
        out.toBlob((blob) => {
          if (!blob) {
            resolve(src);
            return;
          }
          resolve(URL.createObjectURL(blob));
        }, 'image/png');
      } catch {
        resolve(src);
      }
    };
    img.onerror = () => resolve(src);
    img.src = src;
  });

  cutoutCache.set(cacheKey, p);
  return p;
}

function getProductMeta(item) {
  const meta = PRODUCT_DETAILS[item.id] || {};
  const isFootwear = item.variants.some((v) => /^\d+$/.test(v.o[0] || ''));
  const sizeOrder = { XS: 0, S: 1, M: 2, L: 3, XL: 4, XXL: 5 };
  const sortedVariants = [...item.variants].sort((a, b) => {
    const sa = a.o[0] || '';
    const sb = b.o[0] || '';
    if (isFootwear) return Number(sa) - Number(sb);
    const oa = sa in sizeOrder ? sizeOrder[sa] : 99;
    const ob = sb in sizeOrder ? sizeOrder[sb] : 99;
    return oa - ob || sa.localeCompare(sb);
  });

  const appearances = [];
  CATALOG.looks.forEach((look, idx) => {
    if (look.products.includes(item.id)) {
      appearances.push({ lookIdx: idx, look });
    }
  });

  const gallery = [
    {
      src: item.image,
      thumb: item.image,
      label: 'Studio View',
      caption: `${item.name} — Studio Isolation`,
      isStudio: true,
      isFootwear
    }
  ];
  appearances.forEach(({ lookIdx, look }) => {
    gallery.push({
      src: look.image,
      thumb: look.image,
      label: `Look ${String(lookIdx + 1).padStart(2, '0')}`,
      caption: `Styled in Look ${String(lookIdx + 1).padStart(2, '0')} · ${look.name}`,
      lookIdx,
      isStudio: false,
      isFootwear: false
    });
  });

  return {
    brand: meta.brand || 'Nike',
    category: meta.category || (isFootwear ? 'Footwear' : 'Apparel'),
    sizeLabel: meta.sizeLabel || (isFootwear ? 'Shoe size (EU)' : 'Size'),
    subtitle: meta.subtitle || item.type,
    description: meta.description || item.type,
    fitNote: meta.fitNote || 'True to size.',
    material: meta.material || 'Heavyweight cotton blend',
    sku: meta.sku || item.id.toUpperCase(),
    isFootwear,
    sortedVariants,
    appearances,
    gallery
  };
}

const STORAGE_KEY = 'runway-styling-bag-v3';
const CHECKOUT_ORIGIN = 'https://nike-makknzjs.myshopify.com';
const moneyFmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

if (
  typeof window !== 'undefined' &&
  window.location &&
  window.location.protocol === 'http:' &&
  !/^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname)
) {
  window.location.replace(`https:${window.location.href.slice(5)}`);
}

let __runwayBootError = null;
function triggerError404(info) {
  __runwayBootError = info || { reason: 'runtime', detail: 'Display recovery mode' };
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('runway:error', { detail: __runwayBootError }));
  }
}

function assertHttpsUrl(rawUrl, allowedHost) {
  const urlObj = new URL(rawUrl);
  if (urlObj.protocol !== 'https:') {
    throw new Error('Only encrypted HTTPS URLs are permitted.');
  }
  if (allowedHost && urlObj.hostname !== allowedHost) {
    throw new Error('Unverified external destination.');
  }
  return urlObj.toString();
}

function clamp(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function validateCatalog(cat) {
  if (!cat || !Array.isArray(cat.items)) {
    throw new Error('The product list is unavailable.');
  }
  const byVariant = new Map();
  for (const item of cat.items) {
    if (
      !item ||
      typeof item.id !== 'string' ||
      typeof item.name !== 'string' ||
      typeof item.price !== 'number' ||
      !Number.isFinite(item.price) ||
      item.price < 0 ||
      !Array.isArray(item.variants)
    ) {
      throw new Error('The product list is unavailable.');
    }
    for (const v of item.variants) {
      if (
        !v ||
        !Number.isSafeInteger(v.id) ||
        typeof v.a !== 'boolean' ||
        !Array.isArray(v.o) ||
        !v.o.every((s) => typeof s === 'string')
      ) {
        throw new Error('The product list is unavailable.');
      }
      byVariant.set(v.id, { item, variant: v });
    }
  }
  return byVariant;
}

const stylingBag = (() => {
  let variantIndex = null;
  let entries = [];
  let toastTimer = 0;

  const dialog = document.getElementById('bag-dialog');
  const openBtn = document.getElementById('open-bag');
  const closeBtn = document.getElementById('close-bag');
  const itemsEl = document.getElementById('bag-items');
  const totalEl = document.getElementById('bag-total');
  const checkoutBtn = document.getElementById('checkout-bag');
  const exportBtn = document.getElementById('export-bag');
  const statusEl = document.getElementById('bag-status');

  function getCatalogIndex() {
    if (variantIndex) return variantIndex;
    try {
      variantIndex = validateCatalog(CATALOG);
      return variantIndex;
    } catch (err) {
      if (err && err.message === 'The product list is unavailable.') throw err;
      throw new Error('The product list could not load.');
    }
  }

  function sanitizeEntries(rawList) {
    if (!Array.isArray(rawList)) return [];
    return rawList
      .filter(
        (e) =>
          e &&
          Number.isSafeInteger(e.id) &&
          Number.isSafeInteger(e.quantity) &&
          e.quantity >= 1 &&
          e.quantity <= 20
      )
      .slice(0, 50)
      .map((e) => ({ id: e.id, quantity: e.quantity }));
  }

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        entries = [];
        return;
      }
      entries = sanitizeEntries(JSON.parse(raw));
    } catch {
      entries = [];
    }
  }

  function save() {
    try {
      // PCI DSS SAQ-A: only non-sensitive variant IDs and quantities are persisted locally
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitizeEntries(entries)));
    } catch {
      // Ignore storage quota/privacy mode failures
    }
  }

  function showToast(text) {
    if (!statusEl) return;
    clearTimeout(toastTimer);
    statusEl.textContent = text;
    statusEl.classList.remove('is-on');
    void statusEl.offsetWidth;
    statusEl.classList.add('is-on');
    toastTimer = window.setTimeout(() => {
      statusEl.classList.remove('is-on');
    }, 2500);
  }

  function updateCounters() {
    const count = entries.reduce((sum, e) => sum + e.quantity, 0);
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = String(count);
    });
  }

  function render() {
    updateCounters();
    if (!itemsEl || !totalEl || !exportBtn) return;

    const index = getCatalogIndex();
    itemsEl.innerHTML = '';

    const validEntries = entries.filter((e) => index.has(e.id));
    if (validEntries.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'bag-note';
      empty.textContent = 'Your styling bag is empty. Choose a size beside a piece to save it.';
      itemsEl.appendChild(empty);
      totalEl.textContent = '';
      if (checkoutBtn) {
        checkoutBtn.href = `${CHECKOUT_ORIGIN}/cart`;
        checkoutBtn.setAttribute('aria-disabled', 'true');
      }
      exportBtn.disabled = true;
      return;
    }

    let subtotal = 0;
    const cartPairs = [];
    for (const entry of validEntries) {
      const { item, variant } = index.get(entry.id);
      assertHttpsUrl(item.url, 'nike-makknzjs.myshopify.com');

      subtotal += item.price * entry.quantity;
      cartPairs.push(`${variant.id}:${entry.quantity}`);

      const row = document.createElement('div');
      row.className = 'bag-row';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.width = 60;
      img.height = 80;
      img.loading = 'lazy';
      img.decoding = 'async';

      const details = document.createElement('div');
      const title = document.createElement('h3');
      title.textContent = item.name;

      const meta = document.createElement('p');
      meta.textContent = `Size ${variant.o[0]} · ${moneyFmt.format(item.price * entry.quantity)}`;

      const qtyCtrl = document.createElement('div');
      qtyCtrl.className = 'bag-qty';

      const minusBtn = document.createElement('button');
      minusBtn.type = 'button';
      minusBtn.textContent = '−';
      minusBtn.setAttribute('aria-label', `Decrease quantity of ${item.name}`);
      minusBtn.addEventListener('click', () => {
        if (entry.quantity > 1) {
          entry.quantity -= 1;
        } else {
          entries = entries.filter((e) => e.id !== entry.id);
        }
        save();
        render();
      });

      const qtyText = document.createElement('span');
      qtyText.textContent = String(entry.quantity);

      const plusBtn = document.createElement('button');
      plusBtn.type = 'button';
      plusBtn.textContent = '+';
      plusBtn.setAttribute('aria-label', `Increase quantity of ${item.name}`);
      plusBtn.addEventListener('click', () => {
        if (entry.quantity < 20) {
          entry.quantity += 1;
          save();
          render();
        }
      });

      qtyCtrl.append(minusBtn, qtyText, plusBtn);

      const link = document.createElement('a');
      link.href = `#product/${item.id}`;
      link.dataset.productLink = item.id;
      link.textContent = 'View piece →';
      link.addEventListener('click', () => {
        if (dialog && dialog.open) dialog.close();
      });

      details.append(title, meta, qtyCtrl, link);

      const removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'bag-row__remove';
      removeBtn.textContent = '×';
      removeBtn.setAttribute('aria-label', `Remove ${item.name}`);
      removeBtn.addEventListener('click', () => {
        entries = entries.filter((e) => e.id !== entry.id);
        save();
        render();
      });

      row.append(img, details, removeBtn);
      itemsEl.appendChild(row);
    }

    totalEl.textContent = `Subtotal ${moneyFmt.format(subtotal)}`;
    if (checkoutBtn) {
      checkoutBtn.href = assertHttpsUrl(`${CHECKOUT_ORIGIN}/cart/${cartPairs.join(',')}`, 'nike-makknzjs.myshopify.com');
      checkoutBtn.setAttribute('aria-disabled', 'false');
    }
    exportBtn.disabled = false;
  }

  async function add(items) {
    const index = getCatalogIndex();
    if (!Array.isArray(items) || items.length === 0) {
      throw new Error('Please choose an available size.');
    }

    const toAdd = [];
    for (const req of items) {
      const id = Number(req && req.id);
      const qty = req && Number.isSafeInteger(req.quantity) ? req.quantity : 1;
      const found = index.get(id);
      if (!found || !found.variant.a) {
        throw new Error('Please choose an available size.');
      }
      toAdd.push({ id, quantity: clamp(qty, 1, 20) });
    }

    for (const item of toAdd) {
      const existing = entries.find((e) => e.id === item.id);
      if (existing) {
        existing.quantity = Math.min(20, existing.quantity + item.quantity);
      } else if (entries.length < 50) {
        entries.push({ id: item.id, quantity: item.quantity });
      }
    }

    save();
    render();
    showToast(toAdd.length > 1 ? 'Look saved to your styling bag' : 'Piece saved to your styling bag');
  }

  function exportShortlist() {
    const index = getCatalogIndex();
    const validEntries = entries.filter((e) => index.has(e.id));
    if (validEntries.length === 0) return;

    const lines = validEntries.map((e) => {
      const { item, variant } = index.get(e.id);
      return `${item.name} · Size ${variant.o[0]} · Quantity ${e.quantity}\n${item.url}`;
    });

    const content = [
      'RUNWAY — STYLING SHORTLIST',
      'Reference prices; no order or payment has been placed.',
      '',
      ...lines
    ].join('\n\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'runway-outfit-shortlist.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  if (openBtn && dialog) {
    openBtn.addEventListener('click', () => {
      try {
        render();
        dialog.showModal();
      } catch {
        if (dialog.open) dialog.close();
        triggerError404({ reason: 'runtime', detail: 'Catalog unavailable' });
      }
    });
  }

  if (closeBtn && dialog) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  if (dialog) {
    dialog.addEventListener('click', (e) => {
      const r = dialog.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (!inside) dialog.close();
    });
  }

  if (exportBtn) {
    exportBtn.addEventListener('click', exportShortlist);
  }

  try {
    load();
    render();
  } catch {
    triggerError404({ reason: 'runtime', detail: 'Catalog initialization error' });
  }

  return { add, render, showToast };
})();

function decodeImg(img) {
  if (!img) return;
  const mark = () => {
    if (img.naturalWidth > 0) img.classList.add('is-decoded');
  };
  if (img.complete && img.naturalWidth > 0) {
    if (typeof img.decode === 'function') {
      img.decode().catch(() => {}).finally(mark);
    } else {
      mark();
    }
    return;
  }
  img.addEventListener(
    'load',
    () => {
      if (typeof img.decode === 'function') {
        img.decode().catch(() => {}).finally(mark);
      } else {
        mark();
      }
    },
    { once: true }
  );
}

class RunwaySection extends HTMLElement {
  connectedCallback() {
    if (this._init) return;
    this._init = true;

    this.classList.add('rw--js');
    this._rmQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    this._reduced = this._rmQuery.matches;

    this._leftEl = this.querySelector('.rw__left');
    this._stage = this.querySelector('[data-rw-stage]');
    this._actors = this.querySelector('[data-rw-actors]');
    this._heroesWrap = this.querySelector('[data-rw-heroes]');
    this._heroes = Array.from(this.querySelectorAll('[data-rw-hero]'));
    this._ticks = Array.from(this.querySelectorAll('[data-rw-tick]'));
    this._panels = Array.from(this.querySelectorAll('[data-rw-panel]'));
    this._panelEl = this.querySelector('.rw__panel');
    this._live = this.querySelector('[data-rw-live]');
    this._piecesEl = this.querySelector('[data-rw-pieces]');
    this._shareBtns = Array.from(this.querySelectorAll('[data-rw-share]'));
    this._autoBtn = this.querySelector('[data-rw-auto]');
    this._lb = this.querySelector('[data-rw-lb]');
    this._lbStage = this.querySelector('[data-rw-lb-stage]');
    this._lbKicker = this.querySelector('[data-rw-lb-kicker]');
    this._lbName = this.querySelector('[data-rw-lb-name]');
    this._lbClose = this.querySelector('[data-rw-zoom-close]');
    this._cursorEl = this.querySelector('[data-rw-cursor]');

    this._n = this._heroes.length;
    this._N = this._n * Math.ceil(8 / this._n); // 12
    this._K = 95;
    this._C = 2 * Math.sqrt(this._K);

    // Clone bodies 0..5 into 6..11
    const origModels = Array.from(this.querySelectorAll('[data-rw-model]'));
    for (let i = 0; i < this._N - this._n; i++) {
      const src = origModels[i % this._n];
      const clone = src.cloneNode(true);
      clone.dataset.index = String(this._n + i);
      clone.setAttribute('data-rw-clone', '');
      const img = clone.querySelector('img');
      if (img) img.setAttribute('loading', 'lazy');
      this._actors.appendChild(clone);
    }

    const params = new URLSearchParams(window.location.search);
    const lookParam = Number(params.get('look'));
    const hasLookParam = Number.isInteger(lookParam) && lookParam >= 1 && lookParam <= this._n;
    const startIdx = hasLookParam ? lookParam - 1 : 0;
    const startOffset = this._reduced ? 0 : 1.15;

    this._index = startIdx;
    this._target = startIdx;
    this._cur = startIdx - startOffset;
    this._vel = 0;
    this._still = false;
    this._heroSettled = false;
    this._stillFadeTimer = 0;
    this._visible = !this.hidden;
    this._dragging = false;
    this._panelHover = false;
    this._zoomed = false;
    this._engaged = false;
    this._userPaused = false;
    this._playing = false;
    this._autoTimer = 0;
    this._shareTimer = 0;
    this._lbClearTimer = 0;
    this._resizeTimer = 0;
    this._raf = 0;
    this._measureRaf = 0;
    this._lastTime = 0;
    this._wheelAcc = 0;
    this._wheelLock = 0;
    this._suppressClickUntil = 0;
    this._latchedW = 0;
    this._latchedVh = 0;
    this._mode = window.innerWidth <= 749 ? (this.dataset.mstyle || 'classic') : (this.dataset.style || 'ring');
    this._W = 0;
    this._H = 0;
    this._fs = 1;
    this._unit = 200;

    const allModels = Array.from(this.querySelectorAll('[data-rw-model]'));
    this._bodies = allModels.map((el, a) => {
      const goal = this._wrapN(a - this._target);
      const x = goal + startOffset;
      return {
        el,
        hit: el.querySelector('.rw__hit'),
        a,
        lookIndex: a % this._n,
        x,
        g: x,
        v: 0,
        trip: false,
        from: x,
        w: 240,
        lastBlur: ''
      };
    });

    // Decode all model images
    this.querySelectorAll('[data-model-image]').forEach(decodeImg);

    // Probe feet for each look
    this._probeFeet();

    // Initialize pickers
    this._initPickers();

    // Setup cursor
    this._initCursor();

    // Setup intro reveal
    if (this._reduced) {
      this.classList.add('is-revealed');
    } else {
      this._introObs = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            this._introObs.disconnect();
            this._introObs = null;
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                this.classList.add('is-revealed');
              });
            });
          }
        },
        { threshold: 0, rootMargin: '0px 0px -22% 0px' }
      );
      this._introObs.observe(this);
    }

    // Visibility observer for rAF & autoplay
    this._visObs = new IntersectionObserver(
      (entries) => {
        this._visible = entries.some((e) => e.isIntersecting);
        if (this._visible) {
          this._kick();
          if (this._playing) this._restartAuto();
        }
      },
      { threshold: 0 }
    );
    this._visObs.observe(this);

    // ResizeObserver on stage + debounced window resize
    this._stageObs = new ResizeObserver(() => this._scheduleMeasure());
    if (this._stage) this._stageObs.observe(this._stage);

    this._onWinResize = () => {
      clearTimeout(this._resizeTimer);
      this._resizeTimer = window.setTimeout(() => this._scheduleMeasure(), 120);
    };
    window.addEventListener('resize', this._onWinResize);

    this._onOrientationChange = () => {
      clearTimeout(this._resizeTimer);
      this._resizeTimer = window.setTimeout(() => {
        this._latchedW = 0;
        this._latchedVh = 0;
        this._scheduleMeasure();
      }, 160);
    };
    window.addEventListener('orientationchange', this._onOrientationChange);

    this._onVisChange = () => {
      if (!document.hidden && this._visible) {
        this._kick();
        if (this._playing) this._restartAuto();
      }
    };
    document.addEventListener('visibilitychange', this._onVisChange);

    // Bind interaction listeners
    this._bindEvents();

    // Initial measure & silent initial look
    if (!this.hidden) {
      this._measure();
    }
    this._setStill(this._reduced);
    this._setIndex(startIdx, true);
    const initPanel = this._panels[startIdx];
    const initTpl = initPanel ? initPanel.querySelector('template[data-rw-pieces-text]') : null;
    if (this._piecesEl && initTpl) {
      this._piecesEl.textContent = initTpl.content.textContent || '3 pieces';
    }
    if (!this.hidden) {
      this._kick();
    }

    // Start autoplay if configured
    const shopifyEditor = Boolean(window.Shopify && window.Shopify.designMode);
    if (shopifyEditor) this.classList.add('rw--design');
    if (this.dataset.autoplay === 'true' && !this._reduced && !shopifyEditor && !this.hidden) {
      this._play(true);
    }
  }

  disconnectedCallback() {
    cancelAnimationFrame(this._raf);
    cancelAnimationFrame(this._cursorRaf);
    cancelAnimationFrame(this._measureRaf);
    clearTimeout(this._autoTimer);
    clearTimeout(this._shareTimer);
    clearTimeout(this._lbClearTimer);
    clearTimeout(this._resizeTimer);
    clearTimeout(this._stillFadeTimer);
    if (this._introObs) this._introObs.disconnect();
    if (this._visObs) this._visObs.disconnect();
    if (this._stageObs) this._stageObs.disconnect();
    window.removeEventListener('resize', this._onWinResize);
    window.removeEventListener('orientationchange', this._onOrientationChange);
    document.removeEventListener('visibilitychange', this._onVisChange);
    if (this._onDocKeyDown) document.removeEventListener('keydown', this._onDocKeyDown);
    this._dockAllSheets();
    if (this._sheetHost) {
      this._sheetHost.remove();
      this._sheetHost = null;
    }
  }

  _wrapN(v) {
    return ((v % this._N) + this._N) % this._N;
  }

  _wrapIdx(v) {
    return ((v % this._n) + this._n) % this._n;
  }

  _probeFeet() {
    this._heroes.forEach((hero, lookIdx) => {
      const src = hero.dataset.probe;
      if (!src) return;
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const w = 48;
          const h = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * w));
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
          ctx.drawImage(img, 0, 0, w, h);
          const data = ctx.getImageData(0, 0, w, h).data;
          let lastRow = h - 1;
          let found = false;
          for (let y = h - 1; y >= 0; y--) {
            for (let x = 0; x < w; x++) {
              if (data[(y * w + x) * 4 + 3] > 40) {
                lastRow = y;
                found = true;
                break;
              }
            }
            if (found) break;
          }
          if (!found) return;
          const foot = clamp((h - 1 - lastRow) / h, 0, 0.4);
          const footStr = foot.toFixed(4);
          const heroArt = hero.querySelector('.rw__art');
          if (heroArt) heroArt.style.setProperty('--rw-foot', footStr);
          this._bodies.forEach((b) => {
            if (b.lookIndex === lookIdx) {
              const art = b.el.querySelector('.rw__art');
              if (art) art.style.setProperty('--rw-foot', footStr);
            }
          });
        } catch {
          // Ignore tainted canvas silently
        }
      };
      img.src = src;
    });
  }

  _initPickers() {
    this.querySelectorAll('[data-rw-card]').forEach((card) => {
      const picker = card.querySelector('[data-rw-picker]');
      if (!picker) return;
      picker._rwCard = card;
      card._rwPicker = picker;

      const script = picker.querySelector('[data-rw-variants]');
      let variants = [];
      try {
        variants = JSON.parse(script ? script.textContent : '[]');
      } catch {
        variants = [];
      }
      picker._rwVariants = variants;
      this._syncPickerState(card, picker, false);
    });
  }

  _syncPickerState(card, picker, markTouched) {
    const variants = picker._rwVariants || [];
    const radios = Array.from(picker.querySelectorAll('input[data-rw-option]'));
    const checked = radios.find((r) => r.checked) || radios[0];
    const selectedVal = checked ? checked.value : '';

    const match = variants.find((v) => v.o[0] === selectedVal);
    radios.forEach((r) => {
      const pill = r.closest('.rw__pill');
      const v = variants.find((item) => item.o[0] === r.value);
      if (pill) pill.classList.toggle('is-unavailable', !v || !v.a);
    });

    const confirmBtn = picker.querySelector('[data-rw-confirm]');
    const confirmLabel = picker.querySelector('[data-rw-confirm-label]');
    const soldOutText = this.dataset.msgSoldout || 'Sold out';

    if (match && match.a) {
      card.dataset.selected = String(match.id);
      if (confirmBtn) confirmBtn.disabled = false;
      if (confirmLabel) confirmLabel.textContent = confirmLabel.dataset.add || 'Add to bag';
    } else {
      delete card.dataset.selected;
      if (confirmBtn) confirmBtn.disabled = true;
      if (confirmLabel) confirmLabel.textContent = soldOutText;
    }

    if (markTouched) {
      card.dataset.touched = '1';
    }
  }

  _initCursor() {
    if (!this._cursorEl) return;
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!canHover) {
      this._cursorEl.remove();
      this._cursorEl = null;
      return;
    }

    this.classList.add('rw--cursor');
    this._cursorX = 0;
    this._cursorY = 0;
    this._cursorTX = 0;
    this._cursorTY = 0;
    this._cursorActive = false;
    this._cursorRaf = 0;

    const tickCursor = () => {
      this._cursorRaf = 0;
      const factor = this._reduced ? 1 : 0.18;
      this._cursorX += (this._cursorTX - this._cursorX) * factor;
      this._cursorY += (this._cursorTY - this._cursorY) * factor;
      this._cursorEl.style.transform = `translate3d(${this._cursorX.toFixed(1)}px, ${this._cursorY.toFixed(1)}px, 0)`;

      const dist = Math.hypot(this._cursorTX - this._cursorX, this._cursorTY - this._cursorY);
      if (dist >= 0.2 && this._cursorActive) {
        this._cursorRaf = requestAnimationFrame(tickCursor);
      }
    };

    this._stage.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const r = this._stage.getBoundingClientRect();
      this._cursorTX = e.clientX - r.left;
      this._cursorTY = e.clientY - r.top;

      if (!this._cursorActive) {
        this._cursorActive = true;
        this._cursorX = this._cursorTX;
        this._cursorY = this._cursorTY;
        this._cursorEl.style.transform = `translate3d(${this._cursorX.toFixed(1)}px, ${this._cursorY.toFixed(1)}px, 0)`;
        this._cursorEl.classList.add('is-on');
      }

      const target = e.target;
      const onPinOrHit = Boolean(target && target.closest('.rw__pin, .rw__hit'));
      const onZoom = Boolean(target && target.closest('.rw__zoom'));
      this._cursorEl.classList.toggle('is-link', !this._dragging && onPinOrHit);
      this._cursorEl.classList.toggle('is-view', !this._dragging && !onPinOrHit && onZoom);

      if (!this._cursorRaf) {
        this._cursorRaf = requestAnimationFrame(tickCursor);
      }
    });

    this._stage.addEventListener('pointerleave', () => {
      this._cursorActive = false;
      this._cursorEl.classList.remove('is-on', 'is-link', 'is-view');
    });
  }

  _bindEvents() {
    // Stage drag / swipe
    let dragState = null;

    this._stage.addEventListener('pointerdown', (e) => {
      if (this._zoomed) return;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      dragState = {
        id: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        t: this._target,
        active: false,
        abandoned: false,
        samples: [{ x: e.clientX, time: performance.now() }]
      };
    });

    this._stage.addEventListener('pointermove', (e) => {
      if (!dragState || e.pointerId !== dragState.id || dragState.abandoned) return;
      if (e.pointerType === 'mouse' && e.buttons === 0) {
        finishDrag(e);
        return;
      }

      const dx = e.clientX - dragState.startX;
      const dy = e.clientY - dragState.startY;
      dragState.samples.push({ x: e.clientX, time: performance.now() });
      if (dragState.samples.length > 6) dragState.samples.shift();

      if (!dragState.active) {
        if (Math.abs(dy) > 10 && Math.abs(dy) >= Math.abs(dx)) {
          dragState.abandoned = true;
          dragState = null;
          return;
        }
        if (Math.abs(dx) > 8 && Math.abs(dx) > 1.2 * Math.abs(dy)) {
          dragState.active = true;
          this._dragging = true;
          this.classList.add('is-dragging');
          this._setStill(false);
          try {
            this._stage.setPointerCapture(e.pointerId);
          } catch {
            // ignore
          }
        } else {
          return;
        }
      }

      this._target = dragState.t - dx / this._unit;
      this._engage();
      const liveIdx = this._wrapIdx(Math.round(this._target));
      if (liveIdx !== this._index) {
        this._setIndex(liveIdx, false);
      }
      this._kick();
    });

    const finishDrag = (e) => {
      if (!dragState || e.pointerId !== dragState.id) return;
      const state = dragState;
      dragState = null;

      if (!state.active) return;

      this._dragging = false;
      this.classList.remove('is-dragging');
      this._suppressClickUntil = performance.now() + 60;

      try {
        if (this._stage.hasPointerCapture(e.pointerId)) {
          this._stage.releasePointerCapture(e.pointerId);
        }
      } catch {
        // ignore
      }

      const dx = e.clientX - state.startX;
      const first = state.samples[0];
      const last = state.samples[state.samples.length - 1];
      const dt = Math.max(1, last.time - first.time);
      const vx = (last.x - first.x) / dt;
      const sign = -1;
      const from = Math.round(state.t);
      const isPhone = window.innerWidth <= 749;

      if (isPhone) {
        if (Math.abs(dx) > 30 || Math.abs(vx) > 0.3) {
          this._moveTo(from + sign * (dx > 0 ? 1 : -1));
        } else {
          this._moveTo(from);
        }
      } else {
        const landed = Math.round(this._target);
        const momentum = clamp(Math.round((sign * vx * 160) / this._unit), -2, 2);
        let i = landed + momentum;
        if (i === from && Math.abs(vx) > 0.3) {
          i = from + sign * (vx > 0 ? 1 : -1);
        }
        this._moveTo(i);
      }
    };

    this._stage.addEventListener('pointerup', finishDrag);
    this._stage.addEventListener('pointercancel', finishDrag);

    // Suppress click after drag
    this.addEventListener(
      'click',
      (e) => {
        if (performance.now() < this._suppressClickUntil) {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );

    // Trackpad & mouse wheel chapter scrolling (vertical wheel supported on desktop stage)
    const wheelTarget = this._leftEl || this._stage;
    wheelTarget.addEventListener(
      'wheel',
      (e) => {
        if (this._zoomed || e.ctrlKey) return;
        const isPhone = window.innerWidth <= 749;
        const useHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
        if (isPhone && !useHorizontal) return;
        const delta = useHorizontal ? e.deltaX : e.deltaY;
        if (!delta) return;

        e.preventDefault();
        this._engage();
        const now = performance.now();
        if (now < this._wheelLock) return;
        if ((this._wheelAcc > 0 && delta < 0) || (this._wheelAcc < 0 && delta > 0)) {
          this._wheelAcc = 0;
        }
        this._wheelAcc += delta;
        if (Math.abs(this._wheelAcc) >= 36) {
          if (this._wheelAcc > 0) this._next();
          else this._prev();
          this._wheelAcc = 0;
          this._wheelLock = now + 340;
        }
      },
      { passive: false }
    );

    // Accessible keyboard navigation (ArrowLeft / ArrowRight across runway chapters + Escape)
    this._onDocKeyDown = (e) => {
      if (this.hidden || !this._visible || e.defaultPrevented) return;
      if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;

      const bagDialog = document.getElementById('bag-dialog');
      if (bagDialog && bagDialog.open) return;

      const active = document.activeElement;
      const target = e.target;
      const inEditable =
        (target && target.closest && target.closest('input, textarea, select, [contenteditable]')) ||
        (active && active.closest && active.closest('input, textarea, select, [contenteditable]'));
      if (inEditable) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        this._engage();
        const tickFocused = this._ticks.includes(active);
        if (e.key === 'ArrowRight') this._next();
        else this._prev();
        if (tickFocused && this._ticks[this._index]) {
          this._ticks[this._index].focus({ preventScroll: true });
        }
        return;
      }

      if (
        (e.key === 'Home' || e.key === 'End') &&
        (active === this._stage || this._ticks.includes(active))
      ) {
        e.preventDefault();
        this._engage();
        const targetIdx = e.key === 'Home' ? 0 : this._n - 1;
        const tickFocused = this._ticks.includes(active);
        this._go(targetIdx);
        if (tickFocused && this._ticks[this._index]) {
          this._ticks[this._index].focus({ preventScroll: true });
        }
      }
    };
    document.addEventListener('keydown', this._onDocKeyDown);

    this.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this._closeActiveSheet(true)) {
          e.preventDefault();
        } else if (this._zoomed) {
          e.preventDefault();
          this._closeZoom();
        }
      }
    });

    // Panel hover pauses autoplay timer advance
    if (this._panelEl) {
      this._panelEl.addEventListener('pointerenter', (e) => {
        if (e.pointerType === 'mouse') this._panelHover = true;
      });
      this._panelEl.addEventListener('pointerleave', (e) => {
        if (e.pointerType === 'mouse') {
          this._panelHover = false;
          if (this._playing) this._restartAuto();
        }
      });

      // Engage on panel interaction
      this._panelEl.addEventListener('click', (e) => {
        if (e.target.closest('button, a, input, select, label')) {
          this._engage();
        }
      });

      this._panelEl.addEventListener('change', (e) => {
        this._engage();
        this._handleOptionChange(e.target);
      });

      // Row hot-linking on hover
      this._panelEl.addEventListener('pointerover', (e) => {
        if (e.pointerType !== 'mouse') return;
        const card = e.target.closest('[data-rw-card]');
        if (card) this._hot(card.dataset.rwCard, false);
      });

      this._panelEl.addEventListener('pointerout', (e) => {
        if (e.pointerType !== 'mouse') return;
        const card = e.target.closest('[data-rw-card]');
        if (card && (!e.relatedTarget || !card.contains(e.relatedTarget))) {
          this._clearHot();
        }
      });
    }

    // Delegated click handler on section
    this.addEventListener('click', (e) => this._handleClick(e));
  }

  _handleClick(e) {
    const t = e.target;
    if (!t || typeof t.closest !== 'function') return;

    // 1. pick-close
    if (t.closest('[data-rw-pick-close]')) {
      this._closeActiveSheet(true);
      return;
    }

    // 2. popup close button
    if (t.closest('[data-rw-zoom-close]')) {
      this._closeZoom();
      return;
    }

    // 3. click on popup backdrop or stage beside model
    if (this._zoomed && t.closest('[data-rw-lb]') && !t.closest('.rw__lb-model, .rw__lb-top')) {
      this._closeZoom();
      return;
    }

    // 4. [data-rw-zoom] opens popup
    if (t.closest('[data-rw-zoom]')) {
      this._openZoom();
      return;
    }

    // 5. next
    if (t.closest('[data-rw-next]')) {
      this._next();
      return;
    }

    // 6. prev
    if (t.closest('[data-rw-prev]')) {
      this._prev();
      return;
    }

    // 7. tick
    const tickBtn = t.closest('[data-rw-tick]');
    if (tickBtn) {
      const i = Number(tickBtn.dataset.rwTick);
      if (Number.isFinite(i)) this._go(i);
      return;
    }

    // 8. autoplay toggle
    if (t.closest('[data-rw-auto]')) {
      if (!this._playing) {
        this._engaged = false;
        this._userPaused = false;
        this._play(true);
      } else {
        this._userPaused = true;
        this._play(false);
      }
      return;
    }

    // 9. pin
    const pinBtn = t.closest('[data-rw-pin]');
    if (pinBtn) {
      this._engage();
      this._hot(pinBtn.dataset.rwPin, true);
      return;
    }

    // 10. queue body [data-rw-go]
    const goBtn = t.closest('[data-rw-go]');
    if (goBtn) {
      const modelEl = goBtn.closest('[data-rw-model]');
      const bodyIdx = modelEl ? Number(modelEl.dataset.index) : Number(goBtn.dataset.rwGo);
      const base = Math.round(this._target);
      let k = ((bodyIdx - base) % this._N + this._N) % this._N;
      if (k > this._N / 2) k -= this._N;
      if (k !== 0 && Math.abs(k) < 6) {
        this._moveTo(base + k);
      } else if (k === 0) {
        this._openZoom();
      }
      return;
    }

    // 11. size confirm
    const confirmBtn = t.closest('[data-rw-confirm]');
    if (confirmBtn) {
      const picker = confirmBtn.closest('[data-rw-picker]');
      const card = picker ? picker._rwCard || picker.closest('[data-rw-card]') : null;
      if (card) this._confirmCard(card);
      return;
    }

    // 12. plus button
    const addBtn = t.closest('[data-rw-add]');
    if (addBtn) {
      const card = addBtn.closest('[data-rw-card]');
      if (card) this._togglePicker(card);
      return;
    }

    // 13. share look link
    if (t.closest('[data-rw-share]')) {
      this._engage();
      this._shareLook();
      return;
    }

    // 14. add full look
    const allBtn = t.closest('[data-rw-all]');
    if (allBtn) {
      const panel = allBtn.closest('[data-rw-panel]');
      if (panel) this._addFullLook(panel, allBtn);
    }
  }

  _handleOptionChange(target) {
    if (!target || !target.matches('input[data-rw-option]')) return;
    const picker = target.closest('[data-rw-picker]');
    if (!picker) return;
    const card = picker._rwCard || picker.closest('[data-rw-card]');
    if (!card) return;
    this._syncPickerState(card, picker, true);
  }

  _scheduleMeasure() {
    if (this._measureRaf || this.hidden) return;
    this._measureRaf = requestAnimationFrame(() => {
      this._measureRaf = 0;
      if (!this.hidden) this._measure();
    });
  }

  _setStyleProp(el, prop, val) {
    if (el && el.style.getPropertyValue(prop) !== val) {
      el.style.setProperty(prop, val);
    }
  }

  _measure() {
    if (this._measureRaf) {
      cancelAnimationFrame(this._measureRaf);
      this._measureRaf = 0;
    }
    if (this.hidden || !this._stage) return;
    const isMobile = window.innerWidth <= 749;

    let frameH;
    if (!isMobile) {
      let headerH = 0;
      document
        .querySelectorAll('.shopify-section-group-header-group, #shopify-section-header, #shopify-section-announcement-bar')
        .forEach((el) => {
          if (el.contains(this)) return;
          const r = el.getBoundingClientRect();
          if (r.height > 0) headerH += r.height;
        });
      frameH = Math.max(380, window.innerHeight - headerH);
    } else {
      const w = window.innerWidth;
      const h = window.innerHeight;
      if (!this._latchedVh || w !== this._latchedW || Math.abs(h - this._latchedVh) >= 160) {
        this._latchedW = w;
        this._latchedVh = h;
      }
      const pct = clamp(Number(this.dataset.mheightVh || 109), 50, 120);
      frameH = (this._latchedVh * pct) / 100;
    }

    this._setStyleProp(this, '--rw-frame-h', `${Math.round(frameH)}px`);

    this._mode = isMobile ? this.dataset.mstyle || 'classic' : this.dataset.style || 'ring';
    const rect = this._stage.getBoundingClientRect();
    this._W = rect.width;
    this._H = rect.height;
    if (!this._W || !this._H) return;

    this._fs = this._mode === 'ring' ? 1.08 : 1;
    this._setStyleProp(this._stage, '--rw-fs', String(this._fs));

    let modelH;
    if (this._mode === 'ring') {
      modelH = Math.max(200, Math.round((this._H - 34 - 18) / 1.08));
      modelH = Math.min(modelH, Math.max(200, Math.round((this._W * 0.64) / 0.5625)));
    } else {
      modelH = Math.max(200, Math.round(this._H - (isMobile ? 24 : 36) - 18));
      modelH = Math.min(modelH, Math.max(200, Math.round((this._W * (isMobile ? 0.68 : 0.64)) / 0.5625)));
    }
    this._setStyleProp(this._stage, '--rw-model-h', `${modelH}px`);

    let hx;
    let hy;
    if (this._mode === 'ring') {
      hx = 0.5 * this._W;
      hy = 34;
    } else {
      hx = (isMobile ? 0.3 : 0.4) * this._W;
      hy = isMobile ? 22 : 36;
    }
    this._setStyleProp(this._stage, '--rw-hx', `${hx.toFixed(1)}px`);
    this._setStyleProp(this._stage, '--rw-hy', `${hy}px`);
    if (this._W > 0) {
      this._setStyleProp(this, '--rw-ax', `${((hx / this._W) * 100).toFixed(2)}%`);
    }

    if (this._mode === 'ring') {
      this._unit = Math.max(isMobile ? 90 : 120, 0.3 * this._W);
    } else {
      this._unit = Math.max(isMobile ? 90 : 120, this._W * (isMobile ? 0.32 : 0.125) * 1.6);
    }

    this._bodies.forEach((b) => {
      b.w = b.el.offsetWidth || modelH * 0.5625;
    });

    if (!isMobile) {
      this._dockAllSheets();
    }

    this._renderAll();
  }

  _setStill(val) {
    if (this._still === val) return;
    this._still = val;
    clearTimeout(this._stillFadeTimer);
    if (!val) {
      this._heroSettled = false;
      this.classList.remove('rw--still');
      return;
    }
    this.classList.add('rw--still');
    if (this._reduced) {
      this._heroSettled = true;
      return;
    }
    this._heroSettled = false;
    this._stillFadeTimer = window.setTimeout(() => {
      this._stillFadeTimer = 0;
      if (this._still) {
        this._heroSettled = true;
        this._renderAll();
      }
    }, 390);
  }

  _kick() {
    if (!this._visible || document.hidden || this._raf) return;
    this._lastTime = 0;
    this._raf = requestAnimationFrame((ts) => this._tick(ts));
  }

  _tick(ts) {
    this._raf = 0;
    if (!this._visible || document.hidden) return;

    const dt = this._lastTime ? Math.min(0.034, (ts - this._lastTime) / 1000) : 1 / 60;
    this._lastTime = ts;

    let moving = this._dragging;

    if (this._mode === 'ring') {
      if (!this._dragging) {
        if (this._reduced) {
          this._cur = this._target;
          this._vel = 0;
        } else {
          const h = dt / 3;
          for (let s = 0; s < 3; s++) {
            const acc = -this._K * (this._cur - this._target) - this._C * this._vel;
            this._vel += acc * h;
            this._cur += this._vel * h;
          }
          if (Math.abs(this._cur - this._target) <= 0.0005 && Math.abs(this._vel) <= 0.0005) {
            this._cur = this._target;
            this._vel = 0;
          } else {
            moving = true;
          }
        }
      } else {
        this._cur = this._target;
        this._vel = 0;
      }
    } else {
      // Classic mode
      const h = dt / 3;
      for (const b of this._bodies) {
        const goal = this._wrapN(b.a - this._target);
        if (this._reduced) {
          b.x = goal;
          b.g = goal;
          b.v = 0;
          b.trip = false;
          continue;
        }
        const prevGoal = b._prevGoal !== undefined ? b._prevGoal : goal;
        if (Math.abs(goal - prevGoal) > this._N / 2) {
          b.trip = true;
          b.from = b.x;
        }
        b._prevGoal = goal;

        const tau = this._dragging ? 0.016 : b.trip ? 0.1 : 0.03 + 0.04 * Math.min(goal, 4);
        b.g += (goal - b.g) * (1 - Math.exp(-dt / tau));

        for (let s = 0; s < 3; s++) {
          const acc = -this._K * (b.x - b.g) - this._C * b.v;
          b.v += acc * h;
          b.x += b.v * h;
        }

        if (b.trip && Math.abs(b.x - goal) < 0.02) {
          b.trip = false;
        }
        if (
          !this._dragging &&
          !b.trip &&
          Math.abs(b.g - goal) <= 0.0006 &&
          Math.abs(b.x - goal) <= 0.0006 &&
          Math.abs(b.v) <= 0.0006
        ) {
          b.x = goal;
          b.g = goal;
          b.v = 0;
        } else {
          moving = true;
        }
      }
    }

    if (moving) {
      this._setStill(false);
      this._renderAll();
      this._raf = requestAnimationFrame((nextTs) => this._tick(nextTs));
    } else {
      this._setStill(true);
      this._renderAll();
    }
  }

  _put(b, x, bottom, scale, opacity, blur, z, forceNoPointer = false) {
    const W = this._W;
    const halfW = (b.w * scale) / 2;
    let op = opacity;
    if (x + halfW < -4 || x - halfW > W + 4) {
      op = 0;
    }

    const s = b.el.style;
    s.transform = `translate3d(${x.toFixed(2)}px, ${(-bottom).toFixed(2)}px, 0) translateX(-50%) scale(${scale.toFixed(4)})`;
    s.opacity = op.toFixed(3);
    s.zIndex = String(z);
    s.visibility = op < 0.01 ? 'hidden' : '';
    s.pointerEvents = forceNoPointer || op < 0.5 ? 'none' : '';

    const br = blur <= 0.05 ? '' : `blur(${blur.toFixed(1)}px)`;
    if (br !== b.lastBlur) {
      b.lastBlur = br;
      s.filter = br;
    }
  }

  _renderAll() {
    const W = this._W;
    const H = this._H;
    if (!W || !H) return;
    const isMobile = window.innerWidth <= 749;
    const useBlur = this.dataset.blur !== 'false';

    if (this._mode === 'ring') {
      const cx = 0.5 * W;
      const R = (isMobile ? 0.72 : 0.62) * W;
      const P = (isMobile ? 1.9 : 1.65) * W;
      const floor = H - 34;
      const horizon = 0.36 * H;
      const step = (Math.PI * 2) / this._N;

      for (const b of this._bodies) {
        let phi = (((b.a - this._cur) * step) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        if (phi > Math.PI) phi -= Math.PI * 2;

        const zDepth = R * (1 - Math.cos(phi));
        const persp = P / (P + zDepth);
        const sl = Math.abs(phi) / step;
        const scale = persp * (1 + (this._fs - 1) * clamp(1 - sl, 0, 1));
        const x = cx + R * Math.sin(phi) * persp;
        const feet = horizon + (floor - horizon) * persp;
        const bottom = H - feet;
        const blur = useBlur ? (sl <= 1 ? 1.8 * sl : Math.min(1.8 + (sl - 1) * 2, 6.5)) : 0;
        const focusFade = sl <= 1.2 ? 1 - 0.22 * clamp(sl, 0, 1) : 0.78;
        let opacity = clamp((Math.cos(phi) + 0.55) / 0.3, 0, 1) * focusFade;
        const isCenter = sl < 0.02;
        if (this._still && this._heroSettled && isCenter) opacity = 0;
        const zi = Math.round(scale * 1000);

        this._put(b, x, bottom, scale, opacity, blur, zi, this._still && isCenter);
      }
    } else {
      const ax = isMobile ? 0.3 : 0.4;
      const ay = isMobile ? 22 : 36;
      const sx = isMobile ? 0.32 : 0.125;
      const sy = isMobile ? 22 : 58;
      const sr = 0.76;
      const ex = isMobile ? 0.55 : 0.38;
      const d = isMobile ? 4 : 5;

      for (const b of this._bodies) {
        const goal = this._wrapN(b.a - this._target);
        let k = b.x;
        let e = -1;

        if (b.trip) {
          const span = Math.abs(goal - b.from) || 1;
          const u = clamp(Math.abs(b.x - b.from) / span, 0, 1);
          if (goal > b.from) {
            if (u < 0.5) e = 2 * u * 1.4;
            else k = goal + 2 * (1 - u);
          } else {
            if (u < 0.5) k = b.from + 2 * u;
            else e = 2 * (1 - u) * 1.4;
          }
        } else if (k < 0) {
          e = Math.min(-k, 1.4);
        }

        if (e >= 0) {
          const px = W * (ax - ex * e);
          const bottom = ay - 22 * e;
          const scale = 1 + 0.14 * e;
          const opacity = Math.max(0, 1 - 1.05 * e);
          const blur = useBlur ? 4 * Math.min(e, 1) : 0;
          this._put(b, px, bottom, scale, opacity, blur, 1100);
        } else {
          const px = W * (ax + sx * k);
          const bottom = ay + sy * k;
          const scale = Math.pow(sr, k);
          let opacity = k <= d - 1 ? 1 - 0.16 * k : Math.max(0, 0.52 * (d - k));
          const isCenter = Math.abs(k) < 0.02;
          if (this._still && this._heroSettled && isCenter) opacity = 0;
          const blur = useBlur ? Math.min(0.9 * k, 3.2) : 0;
          const zi = 1000 - Math.round(10 * k);
          this._put(b, px, bottom, scale, opacity, blur, zi, this._still && isCenter);
        }
      }
    }
  }

  _setIndex(i, silent = false) {
    const prevIdx = this._index;
    this._index = i;
    this._kick();

    const base = Math.round(this._target);
    for (const b of this._bodies) {
      let k;
      if (this._mode === 'ring') {
        k = ((b.a - base) % this._N + this._N) % this._N;
        if (k > this._N / 2) k -= this._N;
      } else {
        k = ((b.a - base) % this._N + this._N) % this._N;
      }
      const focusable = k !== 0 && (this._mode === 'ring' ? Math.abs(k) <= 2 : Math.abs(k) <= 3);
      if (focusable) {
        b.el.removeAttribute('aria-hidden');
        if (b.hit) b.hit.tabIndex = 0;
      } else {
        b.el.setAttribute('aria-hidden', 'true');
        if (b.hit) b.hit.tabIndex = -1;
      }
    }

    if (!silent) {
      if (this._zoomed) this._closeZoom();
      if (window.innerWidth <= 749) this._closeActiveSheet(false);
    }

    this.style.setProperty('--rw-progress', ((i + 1) / this._n).toFixed(3));

    this._heroes.forEach((h, idx) => {
      const on = idx === i;
      h.classList.toggle('is-on', on);
      h.classList.toggle('was', !on && idx === prevIdx);
      if (on) h.removeAttribute('aria-hidden');
      else h.setAttribute('aria-hidden', 'true');
      const zoomBtn = h.querySelector('[data-rw-zoom]');
      if (zoomBtn) zoomBtn.tabIndex = on ? 0 : -1;
    });

    this._ticks.forEach((tick, j) => {
      tick.setAttribute('aria-current', j === i ? 'true' : 'false');
      tick.classList.toggle('is-past', j < i);
    });

    this._panels.forEach((p, idx) => {
      const active = idx === i;
      p.hidden = !active;
    });

    const activePanel = this._panels[i];
    if (activePanel && this._piecesEl) {
      const tpl = activePanel.querySelector('template[data-rw-pieces-text]');
      if (tpl) {
        this._piecesEl.textContent = tpl.content.textContent || '3 pieces';
      }
    }

    if (!silent) {
      // Light sweep
      if (!this._reduced && this._stage) {
        this._stage.classList.remove('is-sweep');
        void this._stage.offsetWidth;
        this._stage.classList.add('is-sweep');
      }

      // Live announcement
      const activeHero = this._heroes[i];
      if (this._live && activeHero) {
        this._live.textContent = activeHero.dataset.label || '';
      }

      // Replay panel row entrance
      this._panels.forEach((p) => p.classList.remove('is-in'));
      if (activePanel) {
        void activePanel.offsetWidth;
        activePanel.classList.add('is-in');
        if (this._piecesEl) {
          this._piecesEl.classList.remove('is-swap');
          void this._piecesEl.offsetWidth;
          this._piecesEl.classList.add('is-swap');
        }
      }

      this._clearHot();
    }

    if (this._playing) {
      this._restartAuto();
    }
  }

  _moveTo(T) {
    this._target = T;
    this._setStill(false);
    this._setIndex(this._wrapIdx(T), false);
  }

  _next() {
    this._moveTo(Math.round(this._target) + 1);
  }

  _prev() {
    this._moveTo(Math.round(this._target) - 1);
  }

  _go(i) {
    let d = ((i - this._index) % this._n + this._n) % this._n;
    if (d > this._n / 2) d -= this._n;
    this._moveTo(Math.round(this._target) + d);
  }

  _play(on) {
    this._playing = on;
    this.classList.toggle('is-playing', on);
    if (this._autoBtn) {
      this._autoBtn.classList.toggle('is-playing', on);
      this._autoBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    if (on) {
      this._restartAuto();
    } else {
      clearTimeout(this._autoTimer);
      this._ticks.forEach((t) => t.classList.remove('is-run'));
    }
  }

  _restartAuto() {
    clearTimeout(this._autoTimer);
    this._ticks.forEach((t) => t.classList.remove('is-run'));
    if (!this._playing) return;
    const activeTick = this._ticks[this._index];
    if (activeTick) {
      void activeTick.offsetWidth;
      activeTick.classList.add('is-run');
    }
    const speed = Number(this.dataset.speed || 5000);
    this._autoTimer = window.setTimeout(() => {
      if (
        this._playing &&
        this._visible &&
        !this._dragging &&
        !document.hidden &&
        !this._panelHover &&
        !this._zoomed &&
        !this._engaged
      ) {
        this._next();
      } else if (this._playing) {
        this._restartAuto();
      }
    }, speed);
  }

  _engage() {
    if (this._engaged) return;
    this._engaged = true;
    this._play(false);
  }

  _clearHot() {
    this.querySelectorAll('.is-hot').forEach((el) => el.classList.remove('is-hot'));
  }

  _hot(n, scroll) {
    this._clearHot();
    const pinScope = this._zoomed ? this._lbStage : this._heroes[this._index];
    if (pinScope) {
      const pin = pinScope.querySelector(`[data-rw-pin="${n}"]`);
      if (pin) pin.classList.add('is-hot');
    }
    const panel = this._panels[this._index];
    if (!panel) return;
    const card = panel.querySelector(`[data-rw-card="${n}"]`);
    if (card) {
      card.classList.add('is-hot');
      if (scroll) this._revealCard(card);
    }
  }

  _revealCard(card) {
    const list = card.closest('.rw__items');
    if (!list) return;
    const behavior = this._reduced ? 'auto' : 'smooth';

    if (list.scrollWidth > list.clientWidth + 2) {
      const lr = list.getBoundingClientRect();
      const cr = card.getBoundingClientRect();
      list.scrollTo({
        left: list.scrollLeft + (cr.left - lr.left - 20),
        behavior
      });
    } else if (list.scrollHeight > list.clientHeight + 2) {
      list.scrollTo({
        top: card.offsetTop - list.offsetTop - 12,
        behavior
      });
    } else {
      const r = card.getBoundingClientRect();
      if (r.top < 0 || r.bottom > window.innerHeight - 140) {
        window.scrollBy({
          top: r.top - 0.3 * window.innerHeight,
          behavior
        });
      }
    }
  }

  _openZoom() {
    if (this._zoomed) return;
    const hero = this._heroes[this._index];
    if (!hero || !this._lb || !this._lbStage) return;

    this._engage();
    this._clearHot();
    clearTimeout(this._lbClearTimer);

    const heroFig = hero.querySelector('.rw__figure');
    const heroShadow = hero.querySelector('.rw__shadow');
    if (!heroFig) return;

    const a = heroFig.getBoundingClientRect();

    const modelWrap = document.createElement('div');
    modelWrap.className = 'rw__lb-model';

    if (heroShadow) {
      modelWrap.appendChild(heroShadow.cloneNode(true));
    }

    const figClone = heroFig.cloneNode(true);
    const zoomBtn = figClone.querySelector('[data-rw-zoom]');
    if (zoomBtn) zoomBtn.remove();

    figClone.querySelectorAll('[data-rw-pin]').forEach((pin) => {
      pin.tabIndex = 0;
    });

    const heroArt = hero.querySelector('.rw__art');
    const cloneArt = figClone.querySelector('.rw__art');
    if (heroArt && cloneArt) {
      const foot = heroArt.style.getPropertyValue('--rw-foot');
      if (foot) cloneArt.style.setProperty('--rw-foot', foot);
    }

    modelWrap.appendChild(figClone);
    this._lbStage.innerHTML = '';
    this._lbStage.appendChild(modelWrap);

    const stageRect = this._lbStage.getBoundingClientRect();
    const h = Math.max(160, Math.min(stageRect.height, stageRect.width / 0.5625));
    modelWrap.style.setProperty('--rw-model-h', `${h}px`);

    const img = figClone.querySelector('img');
    if (img) {
      img.setAttribute('loading', 'eager');
      img.setAttribute('sizes', `${Math.round(h * 0.5625)}px`);
      decodeImg(img);
    }

    if (this._lbKicker) {
      const word = this._lb.dataset.word || 'Look';
      this._lbKicker.textContent = `${word} ${String(this._index + 1).padStart(2, '0')}`;
    }
    if (this._lbName) {
      this._lbName.textContent = hero.dataset.name || '';
    }

    this._zoomed = true;
    this.classList.add('rw--zoom');
    this._lb.setAttribute('aria-hidden', 'false');

    if (!this._reduced) {
      const b = figClone.getBoundingClientRect();
      if (b.height > 0 && a.height > 0) {
        modelWrap.style.transition = 'none';
        modelWrap.style.transformOrigin = '0 100%';
        modelWrap.style.transform = `translate3d(${a.left - b.left}px, ${a.bottom - b.bottom}px, 0) scale(${a.height / b.height})`;
        void modelWrap.offsetWidth;
        modelWrap.style.transition = '';
        modelWrap.style.transform = '';
      }
    }

    if (this._lbClose) {
      this._lbClose.focus({ preventScroll: true });
    }
  }

  _closeZoom() {
    if (!this._zoomed) return;
    const focusInside = this._lb && this._lb.contains(document.activeElement);
    const hero = this._heroes[this._index];
    const heroFig = hero ? hero.querySelector('.rw__figure') : null;
    const modelWrap = this._lbStage ? this._lbStage.querySelector('.rw__lb-model') : null;
    const lbFig = modelWrap ? modelWrap.querySelector('.rw__figure') : null;

    if (!this._reduced && modelWrap && lbFig && heroFig) {
      const a = heroFig.getBoundingClientRect();
      modelWrap.style.transform = '';
      const b = lbFig.getBoundingClientRect();
      if (b.height > 0 && a.height > 0) {
        modelWrap.style.transformOrigin = '0 100%';
        modelWrap.style.transform = `translate3d(${a.left - b.left}px, ${a.bottom - b.bottom}px, 0) scale(${a.height / b.height})`;
      }
    }

    this._zoomed = false;
    this.classList.remove('rw--zoom');
    if (this._lb) this._lb.setAttribute('aria-hidden', 'true');

    clearTimeout(this._lbClearTimer);
    this._lbClearTimer = window.setTimeout(
      () => {
        if (!this._zoomed && this._lbStage) {
          this._lbStage.innerHTML = '';
        }
      },
      this._reduced ? 0 : 950
    );

    if (focusInside && this._stage) {
      this._stage.focus({ preventScroll: true });
    }
  }

  _ensureSheetHost() {
    if (this._sheetHost) return this._sheetHost;
    const host = document.createElement('div');
    host.className = 'rw-sheet-host';

    const scrim = document.createElement('button');
    scrim.type = 'button';
    scrim.className = 'rw__pick-scrim';
    scrim.setAttribute('data-rw-pick-close', '');
    scrim.tabIndex = -1;
    scrim.setAttribute('aria-hidden', 'true');
    host.appendChild(scrim);

    host.addEventListener('click', (e) => this._handleClick(e));
    host.addEventListener('change', (e) => {
      this._engage();
      this._handleOptionChange(e.target);
    });
    host.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        this._closeActiveSheet(true);
      }
    });

    this._sheetHost = host;
    return host;
  }

  _syncHostTokens(host) {
    const cs = getComputedStyle(this);
    const vars = [
      '--rw-panel',
      '--rw-text',
      '--rw-muted',
      '--rw-line',
      '--rw-accent',
      '--rw-on-accent',
      '--rw-btn-bg',
      '--rw-btn-fg',
      '--rw-btn-radius',
      '--rw-pill-radius',
      '--rw-bar-r',
      '--rw-thumb-radius',
      '--rw-pt-size',
      '--rw-price',
      '--rw-opt',
      '--rw-ease',
      '--rw-ease-sheet',
      '--rw-ease-spring'
    ];
    for (const v of vars) {
      host.style.setProperty(v, cs.getPropertyValue(v));
    }
    host.style.fontFamily = cs.fontFamily;
    host.style.color = cs.color;
  }

  _openPicker(card) {
    const picker = card._rwPicker || card.querySelector('[data-rw-picker]');
    const addBtn = card.querySelector('[data-rw-add]');
    if (!picker || card.classList.contains('is-added')) return;

    const isPhone = window.innerWidth <= 749;
    if (isPhone) {
      this._closeActiveSheet(false);
      const host = this._ensureSheetHost();
      this._syncHostTokens(host);
      if (!host.parentElement) document.body.appendChild(host);
      picker.hidden = false;
      host.appendChild(picker);
      void host.offsetWidth;
      host.classList.add('is-open');
      this.classList.add('rw--picking');
    } else {
      picker.hidden = false;
      this._revealCard(card);
    }

    card.classList.add('is-picking');
    if (addBtn) addBtn.setAttribute('aria-expanded', 'true');

    const checked = picker.querySelector('input[data-rw-option]:checked') || picker.querySelector('input[data-rw-option]');
    if (checked) {
      checked.focus({ preventScroll: true });
    }
  }

  _closePicker(card, returnFocus) {
    const picker = card._rwPicker || card.querySelector('[data-rw-picker]');
    const addBtn = card.querySelector('[data-rw-add]');
    if (!picker) return;

    if (picker.parentElement !== card) {
      card.appendChild(picker);
    }
    picker.hidden = true;
    card.classList.remove('is-picking');
    if (addBtn && !card.classList.contains('is-added')) {
      addBtn.setAttribute('aria-expanded', 'false');
    }

    if (this._sheetHost && !this._sheetHost.querySelector('[data-rw-picker]')) {
      this._sheetHost.classList.remove('is-open');
      this.classList.remove('rw--picking');
    }

    if (returnFocus && addBtn) {
      addBtn.focus({ preventScroll: true });
    }
  }

  _closeActiveSheet(returnFocus) {
    if (!this._sheetHost) return false;
    const picker = this._sheetHost.querySelector('[data-rw-picker]');
    if (!picker) return false;
    const card = picker._rwCard;
    if (card) {
      this._closePicker(card, returnFocus);
    }
    return true;
  }

  _dockAllSheets() {
    if (this._sheetHost) {
      this._sheetHost.querySelectorAll('[data-rw-picker]').forEach((picker) => {
        if (picker._rwCard) this._closePicker(picker._rwCard, false);
      });
    }
  }

  _togglePicker(card) {
    if (card.classList.contains('is-added') || card.classList.contains('is-loading')) return;
    if (card.classList.contains('is-picking')) {
      this._closePicker(card, false);
    } else {
      this._openPicker(card);
    }
  }

  _setPanelMsg(panel, text) {
    const msg = panel ? panel.querySelector('[data-rw-msg]') : null;
    if (!msg) return;
    if (text) {
      msg.textContent = text;
      msg.hidden = false;
    } else {
      msg.textContent = '';
      msg.hidden = true;
    }
  }

  _markCardAdded(card) {
    card.classList.remove('is-loading');
    card.classList.add('is-added');
    this._closePicker(card, false);
    const addBtn = card.querySelector('[data-rw-add]');
    if (addBtn) {
      if (addBtn.dataset.addedLabel) {
        addBtn.setAttribute('aria-label', addBtn.dataset.addedLabel);
      }
      addBtn.removeAttribute('aria-expanded');
    }
    if (window.innerWidth <= 749 && !this._reduced && navigator.vibrate) {
      try {
        navigator.vibrate(12);
      } catch {
        // ignore
      }
    }
    const panel = card.closest('[data-rw-panel]');
    this._checkPanelComplete(panel);
  }

  _checkPanelComplete(panel) {
    if (!panel) return;
    const cards = Array.from(panel.querySelectorAll('[data-rw-card]'));
    if (cards.length >= 2 && cards.every((c) => c.classList.contains('is-added'))) {
      panel.classList.add('is-complete');
      this._setPanelMsg(panel, '');
    }
  }

  async _confirmCard(card) {
    if (card.classList.contains('is-added') || card.classList.contains('is-loading')) return;
    const panel = card.closest('[data-rw-panel]');
    this._setPanelMsg(panel, '');

    card.dataset.touched = '1';
    const variantId = Number(card.dataset.selected);
    if (!Number.isSafeInteger(variantId)) {
      this._setPanelMsg(panel, this.dataset.msgError || 'Couldn’t add to bag. Please try again.');
      return;
    }

    card.classList.add('is-loading');
    try {
      await stylingBag.add([{ id: variantId, quantity: 1 }]);
      this._markCardAdded(card);
    } catch {
      card.classList.remove('is-loading');
      this._setPanelMsg(panel, this.dataset.msgError || 'Couldn’t add to bag. Please try again.');
    }
  }

  async _addFullLook(panel, cta) {
    if (panel.classList.contains('is-complete') || cta.classList.contains('is-loading')) return;
    this._setPanelMsg(panel, '');

    const cards = Array.from(panel.querySelectorAll('[data-rw-card]')).filter((c) => {
      if (c.classList.contains('is-added')) return false;
      const picker = c._rwPicker || c.querySelector('[data-rw-picker]');
      const confirmBtn = picker ? picker.querySelector('[data-rw-confirm]') : null;
      if (confirmBtn && confirmBtn.disabled && !c.dataset.selected) return false;
      return true;
    });

    if (cards.length === 0) return;

    const ready = [];
    const pending = [];

    for (const c of cards) {
      const directId = Number(c.dataset.variantId);
      if (Number.isSafeInteger(directId)) {
        ready.push({ card: c, id: directId });
      } else if (c.dataset.touched === '1' && c.dataset.selected) {
        ready.push({ card: c, id: Number(c.dataset.selected) });
      } else {
        pending.push(c);
      }
    }

    if (ready.length > 0) {
      cta.classList.add('is-loading');
      ready.forEach((r) => r.card.classList.add('is-loading'));
      try {
        await stylingBag.add(ready.map((r) => ({ id: r.id, quantity: 1 })));
        ready.forEach((r) => this._markCardAdded(r.card));
      } catch {
        ready.forEach((r) => r.card.classList.remove('is-loading'));
        cta.classList.remove('is-loading');
        this._setPanelMsg(panel, this.dataset.msgError || 'Couldn’t add to bag. Please try again.');
        return;
      }
      cta.classList.remove('is-loading');
    }

    if (pending.length > 0) {
      const isPhone = window.innerWidth <= 749;
      if (isPhone) {
        this._openPicker(pending[0]);
      } else {
        pending.forEach((c) => this._openPicker(c));
        this._revealCard(pending[0]);
      }
      const titles = pending.map((c) => c.dataset.title || '').filter(Boolean);
      const tpl = this.dataset.msgChoose || 'Pick a size for: [items]';
      this._setPanelMsg(panel, tpl.replace('[items]', titles.join(', ')));
    }
  }

  async _shareLook() {
    const url = new URL(window.location.href);
    url.searchParams.delete('page');
    url.searchParams.set('look', String(this._index + 1));
    url.hash = '';
    const shareUrl = url.toString();

    let copied = false;
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(shareUrl);
        copied = true;
      } catch {
        copied = false;
      }
    }

    if (!copied) {
      const ta = document.createElement('textarea');
      ta.value = shareUrl;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      ta.style.pointerEvents = 'none';
      document.body.appendChild(ta);
      ta.select();
      try {
        copied = document.execCommand('copy');
      } catch {
        copied = false;
      }
      ta.remove();
    }

    if (!copied) {
      stylingBag.showToast('Could not copy link');
      return;
    }

    clearTimeout(this._shareTimer);
    this._shareBtns.forEach((btn) => {
      btn.classList.add('is-copied');
      const label = btn.querySelector('[data-rw-share-label]');
      if (label) label.textContent = 'Copied';
    });
    this._shareTimer = window.setTimeout(() => {
      this._shareBtns.forEach((btn) => {
        btn.classList.remove('is-copied');
        const label = btn.querySelector('[data-rw-share-label]');
        if (label) label.textContent = 'Share';
      });
    }, 2000);

    stylingBag.showToast('Look link copied to clipboard');
  }

  pauseForNavigation() {
    if (this._zoomed) this._closeZoom();
    this._dockAllSheets();
    this._visible = false;
    clearTimeout(this._autoTimer);
    clearTimeout(this._stillFadeTimer);
    this._heroSettled = false;
    cancelAnimationFrame(this._raf);
    cancelAnimationFrame(this._measureRaf);
    this._raf = 0;
    this._measureRaf = 0;
  }

  resumeFromNavigation(lookIdx) {
    this._visible = true;
    if (typeof lookIdx === 'number' && Number.isFinite(lookIdx)) {
      const idx = this._wrapIdx(lookIdx);
      this._target = idx;
      this._cur = idx;
      this._vel = 0;
      this._bodies.forEach((b) => {
        b.x = this._wrapN(b.a - idx);
        b.g = b.x;
        b.v = 0;
        b.trip = false;
        b.from = b.x;
      });
      this._setIndex(idx, false);
      const activePanel = this._panels[idx];
      const tpl = activePanel ? activePanel.querySelector('template[data-rw-pieces-text]') : null;
      if (this._piecesEl && tpl) {
        this._piecesEl.textContent = tpl.content.textContent || '3 pieces';
      }
      this._setStill(true);
      this._heroSettled = true;
      clearTimeout(this._stillFadeTimer);
    }

    requestAnimationFrame(() => {
      this._measure();
      this._kick();
      const shopifyEditor = Boolean(window.Shopify && window.Shopify.designMode);
      if (this.dataset.autoplay === 'true' && !this._userPaused && !this._engaged && !this._reduced && !shopifyEditor) {
        this._play(true);
      }
    });
  }
}

if (!customElements.get('runway-section')) {
  customElements.define('runway-section', RunwaySection);
}

(() => {
  const homeView = document.getElementById('home-view');
  const orbitViewEl = document.getElementById('orbit-view');
  const railViewEl = document.getElementById('rail-view');
  const runwayEl = document.querySelector('runway-section');
  const productView = document.getElementById('product-view');
  const error404View = document.getElementById('error-404-view');
  const pdpRoot = document.getElementById('pdp-root');
  const chaptersList = document.getElementById('home-chapters-list');
  const navLinks = Array.from(document.querySelectorAll('[data-nav]'));

  const lbEl = document.getElementById('pdp-lightbox');
  const lbStage = lbEl ? lbEl.querySelector('[data-pdp-lb-stage]') : null;
  const lbImg = lbEl ? lbEl.querySelector('[data-pdp-lb-img]') : null;
  const lbTitle = lbEl ? lbEl.querySelector('[data-pdp-lb-title]') : null;
  const lbCount = lbEl ? lbEl.querySelector('[data-pdp-lb-count]') : null;
  const lbZoomBtn = lbEl ? lbEl.querySelector('[data-pdp-lb-zoom]') : null;
  const lbCloseBtn = lbEl ? lbEl.querySelector('[data-pdp-lb-close]') : null;
  const lbPrevBtn = lbEl ? lbEl.querySelector('[data-pdp-lb-prev]') : null;
  const lbNextBtn = lbEl ? lbEl.querySelector('[data-pdp-lb-next]') : null;
  const lbHint = lbEl ? lbEl.querySelector('[data-pdp-lb-hint]') : null;

  if (!homeView || !runwayEl) return;

  let activeLookCtx = 0;
  let lastSourceView = 'runway';
  let hasEnteredRunway = (() => {
    try {
      return window.sessionStorage.getItem('nike_runway_entered') === '1';
    } catch {
      return false;
    }
  })();

  function formatStackedTitle(name) {
    const words = String(name || '').trim().split(/\s+/);
    if (words.length <= 2) return words.join('<br>');
    const mid = Math.ceil(words.length / 2);
    return `${words.slice(0, mid).join(' ')}<br>${words.slice(mid).join(' ')}`;
  }

  function catmull(p0, p1, p2, p3, t) {
    const t2 = t * t;
    const t3 = t2 * t;
    return 0.5 * (
      2 * p1 +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3
    );
  }

  const orbitView = (() => {
    if (!orbitViewEl) {
      return { mount() {}, unmount() {}, handleKeyDown: () => false };
    }

    const stage = orbitViewEl.querySelector('[data-orbit-stage]');
    const infoEl = orbitViewEl.querySelector('[data-orbit-info]');
    const counterEl = orbitViewEl.querySelector('[data-orbit-counter]');
    const titleEl = orbitViewEl.querySelector('[data-orbit-title]');
    const priceEl = orbitViewEl.querySelector('[data-orbit-price]');
    const detailsEl = orbitViewEl.querySelector('[data-orbit-details]');
    const arcEl = orbitViewEl.querySelector('[data-orbit-arc]');
    const thumbImg = orbitViewEl.querySelector('[data-orbit-thumb]');
    const wheelTrack = orbitViewEl.querySelector('[data-orbit-wheel]');
    const knurlEl = orbitViewEl.querySelector('[data-orbit-knurl]');
    const totalEl = orbitViewEl.querySelector('[data-orbit-total]');
    const sizesEl = orbitViewEl.querySelector('[data-orbit-sizes]');
    const addBtn = orbitViewEl.querySelector('[data-orbit-add]');
    const addLabelEl = orbitViewEl.querySelector('[data-orbit-add-label]');

    const items = ORBIT_IDS.map((id) => CATALOG.items.find((x) => x.id === id)).filter(Boolean);
    const n = items.length;
    const nodes = [];

    const state = {
      active: false,
      cur: 0,
      target: 0,
      vel: 0,
      index: 0,
      selectedSize: '40',
      raf: 0,
      lastTime: 0,
      wheelLock: 0,
      wheelAcc: 0,
      wheelSnapTimer: 0,
      dragging: false,
      suppressClickUntil: 0,
      addTimer: 0,
      reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };

    const ANCHORS = [
      { d: -3.5, x: -2, y: 106, s: 0.10, o: 0 },
      { d: -3, x: 4, y: 98, s: 0.14, o: 0 },
      { d: -2, x: 15.0, y: 85.5, s: 0.25, o: 0.72 },
      { d: -1, x: 29.5, y: 71.0, s: 0.50, o: 0.94 },
      { d: 0, x: 51.0, y: 38.0, s: 1.0, o: 1.0 },
      { d: 1, x: 76.5, y: 25.0, s: 0.48, o: 0.96 },
      { d: 2, x: 91.5, y: 17.5, s: 0.24, o: 0.85 },
      { d: 3, x: 103.5, y: 13.5, s: 0.13, o: 0.22 },
      { d: 3.5, x: 112.0, y: 11.5, s: 0.09, o: 0 }
    ];

    const PHONE_ANCHORS = [
      { d: -2.4, x: 2, y: 102, s: 0.14, o: 0 },
      { d: -1.65, x: 9, y: 96, s: 0.23, o: 0 },
      { d: -1.0, x: 22, y: 84, s: 0.44, o: 0.96 },
      { d: 0.0, x: 50, y: 50, s: 1.0, o: 1.0 },
      { d: 1.0, x: 78, y: 16, s: 0.44, o: 0.96 },
      { d: 1.65, x: 91, y: 4, s: 0.23, o: 0 },
      { d: 2.4, x: 98, y: -2, s: 0.14, o: 0 }
    ];

    function sampleCurve(d, isPhone) {
      const curve = isPhone ? PHONE_ANCHORS : ANCHORS;
      const minD = curve[0].d;
      const maxD = curve[curve.length - 1].d;
      const clampedD = clamp(d, minD, maxD);
      let seg = 0;
      for (let i = 0; i < curve.length - 1; i++) {
        if (clampedD >= curve[i].d && clampedD <= curve[i + 1].d) {
          seg = i;
          break;
        }
      }
      const p1 = curve[seg];
      const p2 = curve[Math.min(curve.length - 1, seg + 1)];
      const p0 = curve[Math.max(0, seg - 1)];
      const p3 = curve[Math.min(curve.length - 1, seg + 2)];
      const span = Math.max(0.0001, p2.d - p1.d);
      const t = (clampedD - p1.d) / span;

      const x = catmull(p0.x, p1.x, p2.x, p3.x, t);
      const y = catmull(p0.y, p1.y, p2.y, p3.y, t);
      const s = clamp(catmull(p0.s, p1.s, p2.s, p3.s, t), 0.1, 1.06);
      const o = clamp(catmull(p0.o, p1.o, p2.o, p3.o, t), 0, 1);

      return { x, y, s, o };
    }

    function wrapDelta(raw) {
      let d = ((raw % n) + n) % n;
      if (d > n / 2) d -= n;
      return d;
    }

    function wrapIdx(idx) {
      return ((idx % n) + n) % n;
    }

    function syncReadout(forceIdx) {
      const idx = typeof forceIdx === 'number' ? forceIdx : state.index;
      const item = items[idx] || items[0];
      if (!item) return;

      if (counterEl) {
        counterEl.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
      }
      if (titleEl) {
        titleEl.innerHTML = formatStackedTitle(item.name).toUpperCase();
      }
      if (priceEl) {
        priceEl.textContent = moneyFmt.format(item.price);
      }
      if (detailsEl) {
        detailsEl.href = `#product/${item.id}`;
        detailsEl.dataset.productLink = item.id;
      }
      if (thumbImg) {
        const node = nodes[idx];
        thumbImg.alt = item.name;
        if (node && node.cutReady) {
          thumbImg.src = node.resolvedSrc;
          thumbImg.style.opacity = '1';
        } else {
          thumbImg.style.opacity = '0';
        }
      }
      if (wheelTrack) {
        wheelTrack.setAttribute('aria-valuenow', String(idx + 1));
      }
      updateSizeUI();
    }

    function updateSizeUI() {
      const item = items[state.index] || items[0];
      if (!item || !sizesEl) return;
      const validSizes = item.variants.filter((v) => v.a).map((v) => v.o[0]);
      if (!validSizes.includes(state.selectedSize)) {
        state.selectedSize = validSizes[0] || '40';
      }
      sizesEl.querySelectorAll('[data-orbit-size]').forEach((btn) => {
        const active = btn.dataset.orbitSize === state.selectedSize;
        btn.classList.toggle('is-selected', active);
        btn.setAttribute('aria-checked', active ? 'true' : 'false');
      });
      if (addLabelEl && !addBtn.classList.contains('is-added')) {
        addLabelEl.textContent = `Add EU ${state.selectedSize} to bag`;
      }
    }

    function goTo(targetPos) {
      state.target = targetPos;
      if (state.reduced) {
        state.cur = targetPos;
        state.vel = 0;
        const settledIdx = wrapIdx(Math.round(targetPos));
        if (settledIdx !== state.index) {
          state.index = settledIdx;
          syncReadout(settledIdx);
        }
        renderPositions();
        return;
      }
      kick();
    }

    function stepBy(delta) {
      const base = Math.round(state.target);
      goTo(base + delta);
    }

    function renderPositions() {
      const isPhone = window.innerWidth <= 749;
      nodes.forEach((node, i) => {
        const d = wrapDelta(i - state.cur);
        const { x, y, s, o } = sampleCurve(d, isPhone);
        const absD = Math.abs(d);
        const blurPx = absD > 1.35 ? clamp((absD - 1.35) * 1.1, 0, 2.2) : 0;
        const z = Math.round(100 - absD * 20);

        node.el.style.left = `${x.toFixed(2)}%`;
        node.el.style.top = `${y.toFixed(2)}%`;
        node.el.style.opacity = o.toFixed(3);
        node.el.style.zIndex = String(z);
        node.el.style.filter = blurPx > 0.05 ? `blur(${blurPx.toFixed(1)}px)` : '';
        node.el.style.transform = `translate3d(-50%, -50%, 0) scale(${s.toFixed(4)})`;
        node.el.style.pointerEvents = o > 0.15 ? 'auto' : 'none';
        node.el.classList.toggle('is-center', absD < 0.35);
      });

      if (knurlEl) {
        knurlEl.style.backgroundPositionX = `${(-state.cur * 56).toFixed(1)}px`;
      }

      if (infoEl) {
        const speedBlur = state.reduced ? 0 : clamp(Math.abs(state.vel) * 0.48, 0, 5.5);
        infoEl.style.filter = speedBlur > 0.15 ? `blur(${speedBlur.toFixed(2)}px)` : '';
        infoEl.style.opacity = speedBlur > 0.15 ? clamp(1 - speedBlur * 0.11, 0.32, 1).toFixed(2) : '';
      }
    }

    function tick(now) {
      state.raf = 0;
      if (!state.active) return;
      const dt = Math.min(0.05, Math.max(0.001, (now - state.lastTime) / 1000));
      state.lastTime = now;

      if (!state.dragging) {
        const K = 115;
        const C = 2 * Math.sqrt(K) * 0.96;
        const diff = state.target - state.cur;
        const acc = K * diff - C * state.vel;
        state.vel += acc * dt;
        state.cur += state.vel * dt;
      } else {
        const prev = state.cur;
        state.cur += (state.target - state.cur) * 0.38;
        state.vel = (state.cur - prev) / dt;
      }

      const nearest = wrapIdx(Math.round(state.cur));
      if (nearest !== state.index) {
        state.index = nearest;
        syncReadout(nearest);
      }

      renderPositions();

      const settled =
        !state.dragging &&
        Math.abs(state.target - state.cur) < 0.0008 &&
        Math.abs(state.vel) < 0.002;
      if (!settled) {
        state.raf = requestAnimationFrame(tick);
      } else {
        state.cur = state.target;
        state.vel = 0;
        renderPositions();
      }
    }

    function kick() {
      if (!state.active || state.raf) return;
      state.lastTime = performance.now();
      state.raf = requestAnimationFrame(tick);
    }

    // Build sneaker arc & size grid once
    if (arcEl) {
      arcEl.innerHTML = '';
      items.forEach((item, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'orbit-shoe';
        btn.dataset.orbitIdx = String(idx);
        btn.setAttribute('aria-label', `${item.name} — ${moneyFmt.format(item.price)}`);

        const img = document.createElement('img');
        img.alt = item.name;
        img.draggable = false;
        img.decoding = 'async';
        img.style.opacity = '0';

        const shadow = document.createElement('span');
        shadow.className = 'orbit-shoe__shadow';
        shadow.setAttribute('aria-hidden', 'true');

        btn.append(shadow, img);
        btn.addEventListener('click', (e) => {
          if (performance.now() < state.suppressClickUntil) {
            e.preventDefault();
            return;
          }
          const d = wrapDelta(idx - state.cur);
          if (Math.abs(d) > 0.35) {
            goTo(Math.round(state.cur) + d);
          } else {
            lastSourceView = 'orbit';
            setView('product', { id: item.id, source: 'orbit' }, true);
            window.scrollTo({ top: 0, behavior: 'auto' });
          }
        });

        arcEl.appendChild(btn);
        const node = { el: btn, img, resolvedSrc: item.image, cutReady: false };
        nodes.push(node);

        createCutoutImg(item.image, { flipX: Boolean(item.flipX) }).then((cutUrl) => {
          node.resolvedSrc = cutUrl;
          node.cutReady = true;
          img.src = cutUrl;
          img.style.opacity = '1';
          if (idx === state.index && thumbImg) {
            thumbImg.src = cutUrl;
            thumbImg.style.opacity = '1';
          }
        });
      });
    }

    if (sizesEl) {
      sizesEl.innerHTML = '';
      ['40', '41', '42', '43', '44', '45', '46'].forEach((sz) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'orbit__size-btn';
        btn.dataset.orbitSize = sz;
        btn.setAttribute('role', 'radio');
        btn.setAttribute('aria-checked', sz === state.selectedSize ? 'true' : 'false');
        btn.textContent = sz;
        btn.addEventListener('click', () => {
          state.selectedSize = sz;
          updateSizeUI();
        });
        sizesEl.appendChild(btn);
      });
    }

    if (totalEl) totalEl.textContent = String(n).padStart(2, '0');
    if (wheelTrack) wheelTrack.setAttribute('aria-valuemax', String(n));

    if (addBtn) {
      addBtn.addEventListener('click', async () => {
        const item = items[state.index] || items[0];
        if (!item) return;
        const variant = item.variants.find((v) => v.o[0] === state.selectedSize && v.a) || item.variants[0];
        if (!variant) return;
        addBtn.disabled = true;
        try {
          await stylingBag.add([{ id: variant.id, quantity: 1 }]);
          addBtn.classList.add('is-added');
          if (addLabelEl) addLabelEl.textContent = `Added EU ${state.selectedSize} ✓`;
          clearTimeout(state.addTimer);
          state.addTimer = window.setTimeout(() => {
            addBtn.disabled = false;
            addBtn.classList.remove('is-added');
            updateSizeUI();
          }, 1500);
        } catch {
          addBtn.disabled = false;
          stylingBag.showToast('Could not save sneaker.');
        }
      });
    }

    // Bind thumbwheel scrubbing
    if (wheelTrack) {
      let wheelDrag = null;
      wheelTrack.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        e.stopPropagation();
        wheelDrag = { id: e.pointerId, startX: e.clientX, startTarget: state.target, moved: false };
        state.dragging = true;
        wheelTrack.classList.add('is-dragging');
        try {
          wheelTrack.setPointerCapture(e.pointerId);
        } catch {
          // ignore
        }
      });

      wheelTrack.addEventListener('pointermove', (e) => {
        if (!wheelDrag || e.pointerId !== wheelDrag.id) return;
        const dx = e.clientX - wheelDrag.startX;
        if (Math.abs(dx) > 3) wheelDrag.moved = true;
        state.target = wheelDrag.startTarget + dx / 42;
        kick();
      });

      const endWheel = (e) => {
        if (!wheelDrag || e.pointerId !== wheelDrag.id) return;
        wheelDrag = null;
        state.dragging = false;
        wheelTrack.classList.remove('is-dragging');
        try {
          if (wheelTrack.hasPointerCapture(e.pointerId)) wheelTrack.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
        goTo(Math.round(state.target));
      };

      wheelTrack.addEventListener('pointerup', endWheel);
      wheelTrack.addEventListener('pointercancel', endWheel);
    }

    // Stage drag & scroll wheel (allow starting horizontal swipe directly over orbit shoes on touch/mouse)
    if (stage) {
      let stageDrag = null;
      stage.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.orbit__info a, .orbit__info button, [data-orbit-wheel], .orbit__sizes-wrap')) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        stageDrag = { id: e.pointerId, startX: e.clientX, startY: e.clientY, startTarget: state.target, moved: false, abandoned: false };
      });
      stage.addEventListener('pointermove', (e) => {
        if (!stageDrag || e.pointerId !== stageDrag.id || stageDrag.abandoned) return;
        const dx = e.clientX - stageDrag.startX;
        const dy = e.clientY - stageDrag.startY;
        if (!stageDrag.moved) {
          if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx) * 1.15) {
            stageDrag.abandoned = true;
            stageDrag = null;
            return;
          }
          if (Math.abs(dx) > 7 && Math.abs(dx) >= Math.abs(dy)) {
            stageDrag.moved = true;
            state.dragging = true;
            stage.classList.add('is-dragging');
            try {
              stage.setPointerCapture(e.pointerId);
            } catch {
              // ignore
            }
          }
        }
        if (!stageDrag.moved) return;
        const dragScale = window.innerWidth <= 749 ? 105 : 130;
        state.target = stageDrag.startTarget - dx / dragScale;
        kick();
      });
      const endStageDrag = (e) => {
        if (!stageDrag || e.pointerId !== stageDrag.id) return;
        const moved = stageDrag.moved;
        stageDrag = null;
        state.dragging = false;
        stage.classList.remove('is-dragging');
        try {
          if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
        if (moved) {
          state.suppressClickUntil = performance.now() + 90;
          goTo(Math.round(state.target));
        }
      };
      stage.addEventListener('pointerup', endStageDrag);
      stage.addEventListener('pointercancel', endStageDrag);
    }

    const handleWheel = (e) => {
      if (!state.active || e.ctrlKey) return;
      const target = e.target;
      if (target && typeof target.closest === 'function' && target.closest('dialog')) return;

      const modeMult = e.deltaMode === 1 ? 28 : e.deltaMode === 2 ? 320 : 1;
      const dx = e.deltaX * modeMult;
      const dy = e.deltaY * modeMult;
      const useHorizontal = Math.abs(dx) > Math.abs(dy);
      const delta = useHorizontal ? dx : dy;
      if (!delta) return;

      // On compact mobile viewports that vertically overflow, allow vertical page scroll outside the arc/wheel
      const isPhone = window.innerWidth <= 749;
      const onInteractiveTrack = target && typeof target.closest === 'function' && target.closest('[data-orbit-arc], [data-orbit-wheel]');
      if (isPhone && !useHorizontal && !onInteractiveTrack && document.documentElement.scrollHeight > window.innerHeight + 8) {
        return;
      }

      e.preventDefault();

      if (state.reduced) {
        const now = performance.now();
        if (now < state.wheelLock) return;
        if ((state.wheelAcc > 0 && delta < 0) || (state.wheelAcc < 0 && delta > 0)) {
          state.wheelAcc = 0;
        }
        state.wheelAcc += delta;
        if (Math.abs(state.wheelAcc) >= 30) {
          stepBy(state.wheelAcc > 0 ? 1 : -1);
          state.wheelAcc = 0;
          state.wheelLock = now + 220;
        }
        return;
      }

      state.target += delta / 145;
      kick();
      clearTimeout(state.wheelSnapTimer);
      state.wheelSnapTimer = window.setTimeout(() => {
        if (state.active && !state.dragging) {
          goTo(Math.round(state.target));
        }
      }, 140);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    function handleKeyDown(e) {
      if (!state.active) return false;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        stepBy(1);
        return true;
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        stepBy(-1);
        return true;
      }
      return false;
    }

    function mount() {
      state.active = true;
      if (!state.reduced) {
        state.cur = state.index - 0.85;
        state.target = state.index;
        state.vel = 0;
      }
      syncReadout(state.index);
      renderPositions();
      kick();
    }

    function unmount() {
      state.active = false;
      clearTimeout(state.wheelSnapTimer);
      cancelAnimationFrame(state.raf);
      state.raf = 0;
    }

    function selectSize(sz) {
      if (!sz) return false;
      const item = items[state.index] || items[0];
      const validSizes = item ? item.variants.filter((v) => v.a).map((v) => v.o[0]) : ['40', '41', '42', '43', '44', '45', '46'];
      if (!validSizes.includes(String(sz))) return false;
      state.selectedSize = String(sz);
      updateSizeUI();
      return true;
    }

    const onResize = () => {
      if (state.active) renderPositions();
    };
    window.addEventListener('resize', onResize);

    return { mount, unmount, handleKeyDown, renderPositions, selectSize };
  })();

  const railView = (() => {
    if (!railViewEl) {
      return { mount() {}, unmount() {}, handleKeyDown: () => false };
    }

    const stage = railViewEl.querySelector('[data-rail-stage]');
    const svg = railViewEl.querySelector('[data-rail-svg]');
    const rodPath = railViewEl.querySelector('[data-rail-rod-path]');
    const rodSpec = railViewEl.querySelector('[data-rail-rod-spec]');
    const rodEdge = railViewEl.querySelector('[data-rail-rod-edge]');
    const rackEl = railViewEl.querySelector('[data-rail-rack]');
    const nameEl = railViewEl.querySelector('[data-rail-name]');
    const priceEl = railViewEl.querySelector('[data-rail-price]');
    const detailsEl = railViewEl.querySelector('[data-rail-details]');
    const guideBtnEl = railViewEl.querySelector('[data-open-size-guide]');
    const progressEl = railViewEl.querySelector('[data-rail-progress]');

    const items = RAIL_IDS.map((id) => CATALOG.items.find((x) => x.id === id)).filter(Boolean);
    const n = items.length;
    const nodes = [];

    const state = {
      active: false,
      W: 1200,
      H: 700,
      gap: 205,
      yEdge: 92,
      dip: 48,
      scroll: 0,
      target: 0,
      vel: 0,
      activeIdx: 0,
      raf: 0,
      lastTime: 0,
      dragging: false,
      suppressClickUntil: 0,
      reduced: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    };

    function measure() {
      if (!stage) return;
      const r = stage.getBoundingClientRect();
      state.W = Math.max(320, r.width || window.innerWidth);
      state.H = Math.max(420, r.height || window.innerHeight - 88);
      const isPhone = state.W <= 749;
      state.gap = isPhone ? clamp(state.W * 0.37, 134, 170) : clamp(state.W * 0.155, 180, 232);
      state.yEdge = isPhone ? 66 : 90;
      state.dip = isPhone ? 24 : clamp(state.W * 0.036, 36, 52);

      if (svg && rodPath && rodSpec) {
        const svgH = Math.round(state.yEdge + state.dip + 40);
        svg.setAttribute('viewBox', `0 0 ${state.W} ${svgH}`);
        svg.style.height = `${svgH}px`;
        const ctrlY = state.yEdge + 2 * state.dip;
        const midX = (state.W / 2).toFixed(1);
        const d = `M -16,${state.yEdge} Q ${midX},${ctrlY.toFixed(1)} ${state.W + 16},${state.yEdge}`;
        rodPath.setAttribute('d', d);
        rodSpec.setAttribute('d', `M -16,${state.yEdge - 2.1} Q ${midX},${(ctrlY - 2.1).toFixed(1)} ${state.W + 16},${state.yEdge - 2.1}`);
        if (rodEdge) {
          rodEdge.setAttribute('d', `M -16,${state.yEdge + 3.6} Q ${midX},${(ctrlY + 3.6).toFixed(1)} ${state.W + 16},${state.yEdge + 3.6}`);
        }
      }
    }

    function railYAt(x) {
      const u = clamp(x / Math.max(1, state.W), 0, 1);
      return state.yEdge + state.dip * 4 * u * (1 - u);
    }

    function maxScroll() {
      return Math.max(0, (n - 1) * state.gap);
    }

    function syncActiveUI(idx) {
      const item = items[idx] || items[0];
      if (!item) return;
      if (nameEl) nameEl.textContent = item.name;
      if (priceEl) priceEl.textContent = moneyFmt.format(item.price);
      if (detailsEl) {
        detailsEl.href = `#product/${item.id}`;
        detailsEl.dataset.productLink = item.id;
      }
      if (guideBtnEl) {
        guideBtnEl.dataset.openSizeGuide = /hoodie/i.test(item.id) ? 'outerwear' : 'topwear';
      }
      nodes.forEach((node, i) => {
        node.el.classList.toggle('is-center', i === idx);
      });
    }

    function render() {
      const centerX = state.W / 2;
      const isPhone = state.W <= 749;
      const max = maxScroll();
      const swayDeg = state.reduced ? 0 : clamp(-state.vel * 0.0085, -10, 10);

      let bestIdx = 0;
      let bestDist = Infinity;

      nodes.forEach((node, idx) => {
        const x = centerX + (idx * state.gap - state.scroll);
        const y = railYAt(x);
        const offsetX = x - centerX;
        const dist = Math.abs(offsetX);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }

        const visible = x > -260 && x < state.W + 260;
        if (!visible) {
          node.el.style.visibility = 'hidden';
          node.el.style.opacity = '0';
          return;
        }

        const edgeFade = clamp(1 - Math.max(0, dist - state.W * 0.4) / 130, 0, 1);
        const focusScale = 1 - clamp(dist / (state.W * 0.85), 0, 0.11);
        const rel = clamp(offsetX / Math.max(1, state.gap * 1.4), -1, 1);
        const rackTurnDeg = -Math.sin(rel * Math.PI * 0.5) * (isPhone ? 46 : 54);
        const rotY = clamp(rackTurnDeg + node.hoverDeg * 0.6, -62, 62);
        const shade = (1 - Math.abs(rel) * 0.08).toFixed(3);

        node.el.style.visibility = 'visible';
        node.el.style.opacity = edgeFade.toFixed(3);
        node.el.style.zIndex = String(Math.round(80 - (dist / Math.max(1, state.W)) * 45));
        node.el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${focusScale.toFixed(3)})`;
        node.el.style.filter = `brightness(${shade})`;

        if (node.swingEl) {
          node.swingEl.style.transform = `rotateZ(${swayDeg.toFixed(2)}deg) rotateY(${rotY.toFixed(1)}deg)`;
        }
      });

      if (bestIdx !== state.activeIdx) {
        state.activeIdx = bestIdx;
        syncActiveUI(bestIdx);
      }

      if (progressEl && max > 0) {
        const pct = clamp(state.scroll / max, 0, 1);
        progressEl.style.transform = `translateX(${(pct * 220).toFixed(1)}%)`;
      }
    }

    function tick(now) {
      state.raf = 0;
      if (!state.active) return;
      const dt = Math.min(0.05, Math.max(0.001, (now - state.lastTime) / 1000));
      state.lastTime = now;

      let hovering = false;
      nodes.forEach((node) => {
        const diff = node.hoverTarget - node.hoverDeg;
        if (Math.abs(diff) > 0.05) {
          node.hoverDeg += diff * Math.min(1, dt * 11);
          hovering = true;
        } else {
          node.hoverDeg = node.hoverTarget;
        }
      });

      if (!state.dragging) {
        const K = 72;
        const C = 2 * Math.sqrt(K) * 0.94;
        const acc = K * (state.target - state.scroll) - C * state.vel;
        state.vel += acc * dt;
        state.scroll += state.vel * dt;
      } else {
        const prev = state.scroll;
        state.scroll += (state.target - state.scroll) * 0.42;
        state.vel = (state.scroll - prev) / dt;
      }

      render();

      const settled =
        !state.dragging &&
        !hovering &&
        Math.abs(state.target - state.scroll) < 0.25 &&
        Math.abs(state.vel) < 1.2;

      if (!settled) {
        state.raf = requestAnimationFrame(tick);
      } else {
        state.scroll = state.target;
        state.vel = 0;
        render();
      }
    }

    function kick() {
      if (!state.active || state.raf) return;
      state.lastTime = performance.now();
      state.raf = requestAnimationFrame(tick);
    }

    if (rackEl) {
      rackEl.innerHTML = '';
      items.forEach((item, idx) => {
        const wrap = document.createElement('div');
        wrap.className = 'rail-item';
        wrap.dataset.railIdx = String(idx);

        const hookHtml = `
          <svg class="rail-hook" width="32" height="44" viewBox="0 0 32 44" fill="none" aria-hidden="true">
            <path d="M11 16 C11 5.5, 22 5.5, 22 14 C22 19.5, 16 20.5, 16 25.5 L16 39" stroke="#62666d" stroke-width="2.6" stroke-linecap="round"/>
            <path d="M11.8 14 C11.8 6.8, 21.2 6.8, 21.2 14" stroke="#f3f4f6" stroke-width="1.2" stroke-linecap="round"/>
            <ellipse cx="16" cy="10.2" rx="4.2" ry="1.4" fill="rgba(14,16,20,0.34)"/>
            <rect x="13" y="29" width="6" height="4.2" rx="1.6" fill="#3a3d42" stroke="#a6abb2" stroke-width="0.8"/>
          </svg>
        `;

        const hangerBodyHtml = `
          <svg class="rail-hanger-body" width="136" height="34" viewBox="0 0 136 34" fill="none" aria-hidden="true">
            <path d="M68 4 C54 4, 16 21, 5 26 C2 27.4, 2.5 31, 6.5 31 L129.5 31 C133.5 31, 134 27.4, 131 26 C120 21, 82 4, 68 4 Z" fill="#232220"/>
            <path d="M8 25.5 C22 19, 54 5.5, 68 5.5 C82 5.5, 114 19, 128 25.5" stroke="rgba(255,255,255,0.22)" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        `;

        const tagBtn = document.createElement('button');
        tagBtn.type = 'button';
        tagBtn.className = 'rail-garment-btn';
        tagBtn.setAttribute('aria-label', `${item.name} — ${moneyFmt.format(item.price)}. Click to open details`);

        const swing = document.createElement('div');
        swing.className = 'rail-swing';
        swing.innerHTML = `
          ${hookHtml}
          ${hangerBodyHtml}
          <span class="rail-tag" aria-hidden="true">
            <span class="rail-tag__eyelet"></span>
            <span class="rail-tag__price">${moneyFmt.format(item.price)}</span>
          </span>
        `;

        const garmentImg = document.createElement('img');
        garmentImg.className = 'rail-garment-img';
        garmentImg.alt = item.name;
        garmentImg.draggable = false;
        garmentImg.decoding = 'async';
        garmentImg.style.opacity = '0';

        swing.appendChild(garmentImg);
        tagBtn.appendChild(swing);
        wrap.appendChild(tagBtn);
        rackEl.appendChild(wrap);

        const node = {
          el: wrap,
          swingEl: swing,
          hoverDeg: 0,
          hoverTarget: 0
        };
        nodes.push(node);

        tagBtn.addEventListener('pointermove', (e) => {
          if (e.pointerType !== 'mouse' || state.dragging) return;
          const r = tagBtn.getBoundingClientRect();
          const nx = (e.clientX - r.left) / Math.max(1, r.width) - 0.5;
          node.hoverTarget = clamp(nx * 36, -18, 18);
          kick();
        });

        tagBtn.addEventListener('pointerleave', () => {
          node.hoverTarget = 0;
          kick();
        });

        tagBtn.addEventListener('click', (e) => {
          if (performance.now() < state.suppressClickUntil) {
            e.preventDefault();
            return;
          }
          const targetPx = idx * state.gap;
          if (Math.abs(targetPx - state.scroll) > state.gap * 0.65) {
            state.target = targetPx;
            kick();
          } else {
            lastSourceView = 'rail';
            setView('product', { id: item.id, source: 'rail' }, true);
            window.scrollTo({ top: 0, behavior: 'auto' });
          }
        });

        createCutoutImg(item.image).then((cutUrl) => {
          garmentImg.src = cutUrl;
          garmentImg.style.opacity = '1';
        });
      });
    }

    if (stage) {
      let drag = null;
      stage.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.rail__footer a, .rail__footer button')) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        drag = { id: e.pointerId, startX: e.clientX, startY: e.clientY, startScroll: state.target, moved: false, abandoned: false };
      });
      stage.addEventListener('pointermove', (e) => {
        if (!drag || e.pointerId !== drag.id || drag.abandoned) return;
        const dx = e.clientX - drag.startX;
        const dy = e.clientY - drag.startY;
        if (!drag.moved) {
          if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx) * 1.15) {
            drag.abandoned = true;
            drag = null;
            return;
          }
          if (Math.abs(dx) > 6 && Math.abs(dx) >= Math.abs(dy)) {
            drag.moved = true;
            state.dragging = true;
            stage.classList.add('is-dragging');
            try {
              stage.setPointerCapture(e.pointerId);
            } catch {
              // ignore
            }
          }
        }
        if (!drag.moved) return;
        state.target = clamp(drag.startScroll - dx * 1.15, -60, maxScroll() + 60);
        kick();
      });
      const endDrag = (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        const moved = drag.moved;
        drag = null;
        state.dragging = false;
        stage.classList.remove('is-dragging');
        try {
          if (stage.hasPointerCapture(e.pointerId)) stage.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
        state.target = clamp(state.target + clamp(-state.vel * 0.14, -state.gap * 1.2, state.gap * 1.2), 0, maxScroll());
        if (moved) state.suppressClickUntil = performance.now() + 90;
        kick();
      };
      stage.addEventListener('pointerup', endDrag);
      stage.addEventListener('pointercancel', endDrag);

      stage.addEventListener(
        'wheel',
        (e) => {
          if (!state.active || e.ctrlKey) return;
          const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
          if (!delta) return;
          e.preventDefault();
          state.target = clamp(state.target + delta * 1.05, 0, maxScroll());
          kick();
        },
        { passive: false }
      );
    }

    function handleKeyDown(e) {
      if (!state.active) return false;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIdx = clamp(state.activeIdx + 1, 0, n - 1);
        state.target = nextIdx * state.gap;
        kick();
        return true;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIdx = clamp(state.activeIdx - 1, 0, n - 1);
        state.target = prevIdx * state.gap;
        kick();
        return true;
      }
      return false;
    }

    const onResize = () => {
      if (!state.active) return;
      measure();
      state.target = clamp(state.activeIdx * state.gap, 0, maxScroll());
      state.scroll = clamp(state.scroll, 0, maxScroll());
      render();
    };
    window.addEventListener('resize', onResize);

    function mount() {
      state.active = true;
      measure();
      const startIdx = clamp(state.activeIdx || 3, 0, n - 1);
      const settledPx = clamp(startIdx * state.gap, 0, maxScroll());
      if (state.reduced) {
        state.scroll = settledPx;
        state.target = settledPx;
        state.vel = 0;
      } else {
        state.scroll = Math.max(-state.gap * 1.6, settledPx - state.gap * 2.1);
        state.target = settledPx;
        state.vel = 0;
      }
      syncActiveUI(startIdx);
      render();
      kick();
    }

    function unmount() {
      state.active = false;
      cancelAnimationFrame(state.raf);
      state.raf = 0;
    }

    return { mount, unmount, handleKeyDown };
  })();

  document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    const bagDialog = document.getElementById('bag-dialog');
    if (bagDialog && bagDialog.open) return;
    const t = e.target;
    if (t && t.closest && t.closest('input, textarea, select, [contenteditable]')) return;
    if (orbitView.handleKeyDown(e)) return;
    railView.handleKeyDown(e);
  });

  if (chaptersList) {
    chaptersList.innerHTML = '';
    CATALOG.looks.forEach((look, idx) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'home-chapter';
      row.dataset.goRunway = String(idx);
      row.setAttribute('aria-label', `Open Look ${idx + 1}: ${look.name} in Runway`);

      const num = document.createElement('span');
      num.className = 'home-chapter__num';
      num.textContent = String(idx + 1).padStart(2, '0');

      const name = document.createElement('span');
      name.className = 'home-chapter__name';
      name.textContent = look.name;

      const desc = document.createElement('span');
      desc.className = 'home-chapter__desc';
      desc.textContent = look.description;

      const cta = document.createElement('span');
      cta.className = 'home-chapter__cta';
      cta.textContent = 'Enter look →';

      row.append(num, name, desc, cta);
      chaptersList.appendChild(row);
    });
  }

  const productPage = (() => {
    const state = {
      item: null,
      meta: null,
      lookCtx: 0,
      frameIdx: 0,
      selectedVariant: null,
      qty: 1,
      zoom: 1,
      panX: 0,
      panY: 0,
      sizeGuideOpen: false,
      lbOpen: false,
      lbZoom: 1,
      lbPanX: 0,
      lbPanY: 0,
      addTimer: 0,
      mobileBarObs: null
    };

    function clearObs() {
      if (state.mobileBarObs) {
        state.mobileBarObs.disconnect();
        state.mobileBarObs = null;
      }
      clearTimeout(state.addTimer);
    }

    function applyZoomTransform(imgEl, stageEl, zoomVal, px, py) {
      if (!imgEl || !stageEl) return;
      if (zoomVal <= 1) {
        imgEl.style.transform = '';
        stageEl.classList.remove('is-zoomed');
        return;
      }
      stageEl.classList.add('is-zoomed');
      imgEl.style.transform = `translate3d(${px.toFixed(1)}px, ${py.toFixed(1)}px, 0) scale(${zoomVal})`;
    }

    function clampPan(stageEl, zoomVal, px, py) {
      if (!stageEl || zoomVal <= 1) return { x: 0, y: 0 };
      const r = stageEl.getBoundingClientRect();
      const maxX = ((zoomVal - 1) * r.width) / 2;
      const maxY = ((zoomVal - 1) * r.height) / 2;
      return {
        x: clamp(px, -maxX, maxX),
        y: clamp(py, -maxY, maxY)
      };
    }

    function updateStageUI() {
      if (!pdpRoot || !state.meta) return;
      const stageEl = pdpRoot.querySelector('[data-pdp-stage]');
      const imgEl = pdpRoot.querySelector('[data-pdp-main-img]');
      const levelEl = pdpRoot.querySelector('[data-pdp-zoom-level]');
      const zoomOutBtn = pdpRoot.querySelector('[data-pdp-zoom-out]');
      const zoomInBtn = pdpRoot.querySelector('[data-pdp-zoom-in]');
      const captionEl = pdpRoot.querySelector('[data-pdp-caption]');
      const frame = state.meta.gallery[state.frameIdx] || state.meta.gallery[0];

      if (imgEl && frame) {
        if (imgEl.dataset.srcLoaded !== frame.src) {
          imgEl.dataset.srcLoaded = frame.src;
          imgEl.src = frame.src;
          imgEl.alt = `${state.item.name} — ${frame.label}`;
          imgEl.classList.toggle('is-studio', Boolean(frame.isStudio));
        }
        const clamped = clampPan(stageEl, state.zoom, state.panX, state.panY);
        state.panX = clamped.x;
        state.panY = clamped.y;
        applyZoomTransform(imgEl, stageEl, state.zoom, state.panX, state.panY);
      }

      if (captionEl && frame) {
        captionEl.textContent = frame.caption;
      }

      if (levelEl) {
        levelEl.textContent = `${Math.round(state.zoom * 100)}%`;
      }
      if (zoomOutBtn) zoomOutBtn.disabled = state.zoom <= 1;
      if (zoomInBtn) zoomInBtn.disabled = state.zoom >= 3;

      pdpRoot.querySelectorAll('[data-pdp-thumb]').forEach((btn, idx) => {
        const active = idx === state.frameIdx;
        btn.setAttribute('aria-current', active ? 'true' : 'false');
        btn.classList.toggle('is-active', active);
      });
    }

    function updateLightboxUI() {
      if (!lbEl || !state.meta || !state.lbOpen) return;
      const frame = state.meta.gallery[state.frameIdx] || state.meta.gallery[0];
      if (lbTitle) lbTitle.textContent = `${state.item.name} — ${frame.label}`;
      if (lbCount) lbCount.textContent = `${String(state.frameIdx + 1).padStart(2, '0')} / ${String(state.meta.gallery.length).padStart(2, '0')}`;
      if (lbImg && lbImg.dataset.srcLoaded !== frame.src) {
        lbImg.dataset.srcLoaded = frame.src;
        lbImg.src = frame.src;
        lbImg.alt = `${state.item.name} — ${frame.label}`;
      }
      const clamped = clampPan(lbStage, state.lbZoom, state.lbPanX, state.lbPanY);
      state.lbPanX = clamped.x;
      state.lbPanY = clamped.y;
      applyZoomTransform(lbImg, lbStage, state.lbZoom, state.lbPanX, state.lbPanY);
      if (lbZoomBtn) {
        lbZoomBtn.textContent = state.lbZoom > 1 ? '1× Reset' : '2.5× Zoom';
        lbZoomBtn.setAttribute('aria-pressed', state.lbZoom > 1 ? 'true' : 'false');
      }
      if (lbHint) {
        lbHint.textContent = state.lbZoom > 1
          ? 'Drag to inspect detail · Click or press Esc to exit zoom'
          : 'Click or tap image to zoom 2.5×';
      }
      const multi = state.meta.gallery.length > 1;
      if (lbPrevBtn) lbPrevBtn.disabled = !multi;
      if (lbNextBtn) lbNextBtn.disabled = !multi;
    }

    function openLightbox() {
      if (!lbEl || !state.meta) return;
      state.lbOpen = true;
      state.lbZoom = 1;
      state.lbPanX = 0;
      state.lbPanY = 0;
      lbEl.hidden = false;
      document.body.classList.add('pdp-lb-open');
      updateLightboxUI();
      if (lbCloseBtn) lbCloseBtn.focus({ preventScroll: true });
    }

    function closeLightbox() {
      if (!lbEl || !state.lbOpen) return;
      state.lbOpen = false;
      state.lbZoom = 1;
      state.lbPanX = 0;
      state.lbPanY = 0;
      lbEl.hidden = true;
      document.body.classList.remove('pdp-lb-open');
      const expandBtn = pdpRoot ? pdpRoot.querySelector('[data-pdp-expand]') : null;
      if (expandBtn) expandBtn.focus({ preventScroll: true });
    }

    function setZoom(nextZoom, clientX, clientY) {
      const target = clamp(nextZoom, 1, 3);
      const stageEl = pdpRoot ? pdpRoot.querySelector('[data-pdp-stage]') : null;
      if (target <= 1) {
        state.zoom = 1;
        state.panX = 0;
        state.panY = 0;
      } else if (stageEl && typeof clientX === 'number' && typeof clientY === 'number') {
        const r = stageEl.getBoundingClientRect();
        const nx = (clientX - r.left) / Math.max(1, r.width) - 0.5;
        const ny = (clientY - r.top) / Math.max(1, r.height) - 0.5;
        state.zoom = target;
        state.panX = -nx * r.width * (target - 1);
        state.panY = -ny * r.height * (target - 1);
      } else {
        state.zoom = target;
      }
      updateStageUI();
    }

    function setFrame(idx) {
      if (!state.meta) return;
      const n = state.meta.gallery.length;
      state.frameIdx = ((idx % n) + n) % n;
      state.zoom = 1;
      state.panX = 0;
      state.panY = 0;
      state.lbZoom = 1;
      state.lbPanX = 0;
      state.lbPanY = 0;
      updateStageUI();
      if (state.lbOpen) updateLightboxUI();
    }

    function formatIndianEquiv(sizeVal, isFootwear) {
      const shoeMap = { '40': 'IND 6', '41': 'IND 7', '42': 'IND 7.5', '43': 'IND 8.5', '44': 'IND 9', '45': 'IND 10', '46': 'IND 11' };
      const topMap = { S: 'IND 36', M: 'IND 38', L: 'IND 40', XL: 'IND 42' };
      return isFootwear ? (shoeMap[sizeVal] || '') : (topMap[sizeVal] || '');
    }

    function updateVariantUI() {
      if (!pdpRoot || !state.meta || !state.selectedVariant) return;
      const sizeVal = state.selectedVariant.o[0] || '';
      const indEquiv = formatIndianEquiv(sizeVal, state.meta.isFootwear);
      const selectedOut = pdpRoot.querySelector('[data-pdp-selected-size]');
      if (selectedOut) {
        selectedOut.textContent = indEquiv
          ? `${indEquiv} (${state.meta.isFootwear ? 'EU ' : ''}${sizeVal}) — In stock`
          : `${state.meta.isFootwear ? 'EU ' : ''}${sizeVal} — In stock`;
      }
      const mobileMeta = pdpRoot.querySelector('[data-pdp-mobile-meta]');
      if (mobileMeta) {
        mobileMeta.textContent = indEquiv
          ? `${indEquiv} · ${state.meta.isFootwear ? 'EU ' : ''}${sizeVal} · Qty ${state.qty}`
          : `${state.meta.isFootwear ? 'EU ' : 'Size '}${sizeVal} · Qty ${state.qty}`;
      }
      pdpRoot.querySelectorAll('[data-pdp-variant]').forEach((btn) => {
        const vid = Number(btn.dataset.pdpVariant);
        const on = vid === state.selectedVariant.id;
        btn.classList.toggle('is-selected', on);
        btn.setAttribute('aria-checked', on ? 'true' : 'false');
      });
    }

    function selectVariantBySize(sizeLabel) {
      if (!state.meta) return false;
      const found = state.meta.sortedVariants.find((v) => v.a && v.o[0] === String(sizeLabel));
      if (!found) return false;
      state.selectedVariant = found;
      updateVariantUI();
      return true;
    }

    function updateQtyUI() {
      if (!pdpRoot) return;
      const valEl = pdpRoot.querySelector('[data-pdp-qty-val]');
      const decBtn = pdpRoot.querySelector('[data-pdp-qty-dec]');
      const incBtn = pdpRoot.querySelector('[data-pdp-qty-inc]');
      if (valEl) valEl.textContent = String(state.qty);
      if (decBtn) decBtn.disabled = state.qty <= 1;
      if (incBtn) incBtn.disabled = state.qty >= 10;
      updateVariantUI();
    }

    async function handleAddToBag() {
      if (!state.selectedVariant || !state.selectedVariant.a) return;
      const ctaBtns = pdpRoot ? Array.from(pdpRoot.querySelectorAll('[data-pdp-add-bag]')) : [];
      ctaBtns.forEach((btn) => {
        btn.disabled = true;
        btn.classList.add('is-loading');
      });
      try {
        await stylingBag.add([{ id: state.selectedVariant.id, quantity: state.qty }]);
        ctaBtns.forEach((btn) => {
          btn.classList.remove('is-loading');
          btn.classList.add('is-added');
          const txt = btn.querySelector('[data-pdp-cta-text]');
          if (txt) txt.textContent = 'Added to styling bag ✓';
        });
        clearTimeout(state.addTimer);
        state.addTimer = window.setTimeout(() => {
          ctaBtns.forEach((btn) => {
            btn.disabled = false;
            btn.classList.remove('is-added');
            const txt = btn.querySelector('[data-pdp-cta-text]');
            if (txt) txt.textContent = btn.dataset.defaultLabel || 'Add to styling bag';
          });
        }, 1600);
      } catch {
        ctaBtns.forEach((btn) => {
          btn.disabled = false;
          btn.classList.remove('is-loading');
        });
        stylingBag.showToast('Could not save piece. Please try again.');
      }
    }

    function bindStageInteractions(stageEl) {
      if (!stageEl) return;
      let drag = null;

      stageEl.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        drag = {
          id: e.pointerId,
          type: e.pointerType,
          startX: e.clientX,
          startY: e.clientY,
          panX: state.panX,
          panY: state.panY,
          moved: false
        };
        if (state.zoom > 1 && e.pointerType !== 'mouse') {
          try {
            stageEl.setPointerCapture(e.pointerId);
          } catch {
            // ignore
          }
        }
      });

      stageEl.addEventListener('pointermove', (e) => {
        if (state.zoom > 1 && e.pointerType === 'mouse' && (!drag || drag.id !== e.pointerId)) {
          const r = stageEl.getBoundingClientRect();
          const nx = (e.clientX - r.left) / Math.max(1, r.width) - 0.5;
          const ny = (e.clientY - r.top) / Math.max(1, r.height) - 0.5;
          const maxX = ((state.zoom - 1) * r.width) / 2;
          const maxY = ((state.zoom - 1) * r.height) / 2;
          state.panX = clamp(-nx * 2 * maxX, -maxX, maxX);
          state.panY = clamp(-ny * 2 * maxY, -maxY, maxY);
          const imgEl = pdpRoot ? pdpRoot.querySelector('[data-pdp-main-img]') : null;
          applyZoomTransform(imgEl, stageEl, state.zoom, state.panX, state.panY);
          return;
        }

        if (!drag || e.pointerId !== drag.id || state.zoom <= 1) return;
        const dx = e.clientX - drag.startX;
        const dy = e.clientY - drag.startY;
        if (Math.hypot(dx, dy) > 5) drag.moved = true;
        if (!drag.moved) return;

        const clamped = clampPan(stageEl, state.zoom, drag.panX + dx, drag.panY + dy);
        state.panX = clamped.x;
        state.panY = clamped.y;
        const imgEl = pdpRoot ? pdpRoot.querySelector('[data-pdp-main-img]') : null;
        applyZoomTransform(imgEl, stageEl, state.zoom, state.panX, state.panY);
      });

      const endDrag = (e) => {
        if (!drag || e.pointerId !== drag.id) return;
        const wasMoved = drag.moved;
        drag = null;
        try {
          if (stageEl.hasPointerCapture(e.pointerId)) {
            stageEl.releasePointerCapture(e.pointerId);
          }
        } catch {
          // ignore
        }
        if (!wasMoved) {
          if (state.zoom > 1) {
            setZoom(1);
          } else {
            setZoom(2.25, e.clientX, e.clientY);
          }
        }
      };

      stageEl.addEventListener('pointerup', endDrag);
      stageEl.addEventListener('pointercancel', endDrag);

      stageEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setZoom(state.zoom > 1 ? 1 : 2.25);
        } else if (e.key === '+' || e.key === '=') {
          e.preventDefault();
          setZoom(state.zoom === 1 ? 2.25 : 3);
        } else if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          setZoom(state.zoom > 2.25 ? 2.25 : 1);
        } else if (e.key === '0') {
          e.preventDefault();
          setZoom(1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          setFrame(state.frameIdx + 1);
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          setFrame(state.frameIdx - 1);
        }
      });
    }

    if (lbStage) {
      let lbDrag = null;
      lbStage.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        lbDrag = {
          id: e.pointerId,
          startX: e.clientX,
          startY: e.clientY,
          panX: state.lbPanX,
          panY: state.lbPanY,
          moved: false
        };
        if (state.lbZoom > 1 && e.pointerType !== 'mouse') {
          try {
            lbStage.setPointerCapture(e.pointerId);
          } catch {
            // ignore
          }
        }
      });
      lbStage.addEventListener('pointermove', (e) => {
        if (state.lbZoom > 1 && e.pointerType === 'mouse' && (!lbDrag || lbDrag.id !== e.pointerId)) {
          const r = lbStage.getBoundingClientRect();
          const nx = (e.clientX - r.left) / Math.max(1, r.width) - 0.5;
          const ny = (e.clientY - r.top) / Math.max(1, r.height) - 0.5;
          const maxX = ((state.lbZoom - 1) * r.width) / 2;
          const maxY = ((state.lbZoom - 1) * r.height) / 2;
          state.lbPanX = clamp(-nx * 2 * maxX, -maxX, maxX);
          state.lbPanY = clamp(-ny * 2 * maxY, -maxY, maxY);
          applyZoomTransform(lbImg, lbStage, state.lbZoom, state.lbPanX, state.lbPanY);
          return;
        }
        if (!lbDrag || e.pointerId !== lbDrag.id || state.lbZoom <= 1) return;
        const dx = e.clientX - lbDrag.startX;
        const dy = e.clientY - lbDrag.startY;
        if (Math.hypot(dx, dy) > 5) lbDrag.moved = true;
        if (!lbDrag.moved) return;
        const clamped = clampPan(lbStage, state.lbZoom, lbDrag.panX + dx, lbDrag.panY + dy);
        state.lbPanX = clamped.x;
        state.lbPanY = clamped.y;
        applyZoomTransform(lbImg, lbStage, state.lbZoom, state.lbPanX, state.lbPanY);
      });
      const endLbDrag = (e) => {
        if (!lbDrag || e.pointerId !== lbDrag.id) return;
        const moved = lbDrag.moved;
        lbDrag = null;
        try {
          if (lbStage.hasPointerCapture(e.pointerId)) lbStage.releasePointerCapture(e.pointerId);
        } catch {
          // ignore
        }
        if (!moved) {
          if (state.lbZoom > 1) {
            state.lbZoom = 1;
            state.lbPanX = 0;
            state.lbPanY = 0;
          } else {
            const r = lbStage.getBoundingClientRect();
            const nx = (e.clientX - r.left) / Math.max(1, r.width) - 0.5;
            const ny = (e.clientY - r.top) / Math.max(1, r.height) - 0.5;
            state.lbZoom = 2.5;
            state.lbPanX = -nx * r.width * 1.5;
            state.lbPanY = -ny * r.height * 1.5;
          }
          updateLightboxUI();
        }
      };
      lbStage.addEventListener('pointerup', endLbDrag);
      lbStage.addEventListener('pointercancel', endLbDrag);
    }

    if (lbZoomBtn) {
      lbZoomBtn.addEventListener('click', () => {
        if (state.lbZoom > 1) {
          state.lbZoom = 1;
          state.lbPanX = 0;
          state.lbPanY = 0;
        } else {
          state.lbZoom = 2.5;
          state.lbPanX = 0;
          state.lbPanY = 0;
        }
        updateLightboxUI();
      });
    }
    if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);
    if (lbPrevBtn) lbPrevBtn.addEventListener('click', () => setFrame(state.frameIdx - 1));
    if (lbNextBtn) lbNextBtn.addEventListener('click', () => setFrame(state.frameIdx + 1));

    document.addEventListener('keydown', (e) => {
      if (!state.lbOpen) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        if (state.lbZoom > 1) {
          state.lbZoom = 1;
          state.lbPanX = 0;
          state.lbPanY = 0;
          updateLightboxUI();
        } else {
          closeLightbox();
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setFrame(state.frameIdx + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setFrame(state.frameIdx - 1);
      }
    });

    function render(item, lookCtx, sourceView) {
      if (!pdpRoot) return;
      clearObs();
      closeLightbox();

      const meta = getProductMeta(item);
      state.item = item;
      state.meta = meta;
      state.lookCtx = typeof lookCtx === 'number' && Number.isFinite(lookCtx)
        ? lookCtx
        : (meta.appearances[0] ? meta.appearances[0].lookIdx : 0);
      const origin = sourceView || (meta.appearances.length > 0 ? 'runway' : (meta.isFootwear ? 'orbit' : 'rail'));
      state.frameIdx = 0;
      state.selectedVariant = meta.sortedVariants.find((v) => v.a) || meta.sortedVariants[0];
      state.qty = 1;
      state.zoom = 1;
      state.panX = 0;
      state.panY = 0;
      state.sizeGuideOpen = false;

      const lookData = CATALOG.looks[state.lookCtx] || CATALOG.looks[0];
      const lookNumStr = String(state.lookCtx + 1).padStart(2, '0');
      let companionIds = [];
      let relTitleText = '';
      if (origin === 'orbit') {
        companionIds = ORBIT_IDS.filter((pid) => pid !== item.id).slice(0, 2);
        relTitleText = 'More from Nike Orbit';
      } else if (origin === 'rail') {
        companionIds = RAIL_IDS.filter((pid) => pid !== item.id).slice(0, 2);
        relTitleText = 'More from Hand Rail Pro';
      } else {
        companionIds = (lookData ? lookData.products : []).filter((pid) => pid !== item.id);
        relTitleText = `Paired in Look ${lookNumStr}`;
      }
      const companions = companionIds
        .map((pid) => CATALOG.items.find((x) => x.id === pid))
        .filter(Boolean);

      pdpRoot.innerHTML = '';

      // Breadcrumb & back navigation
      const topBar = document.createElement('div');
      topBar.className = 'pdp__top';

      const backBtn = document.createElement('button');
      backBtn.type = 'button';
      backBtn.className = 'pdp__back';
      if (origin === 'orbit') {
        backBtn.dataset.nav = 'orbit';
        backBtn.innerHTML = '<svg width="18" height="10" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M25 7H1M7 1L1 7l6 6"/></svg><span>Back to Nike Orbit</span>';
      } else if (origin === 'rail') {
        backBtn.dataset.nav = 'rail';
        backBtn.innerHTML = '<svg width="18" height="10" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M25 7H1M7 1L1 7l6 6"/></svg><span>Back to Hand Rail Pro</span>';
      } else {
        backBtn.dataset.goRunway = String(state.lookCtx);
        backBtn.innerHTML = '<svg width="18" height="10" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M25 7H1M7 1L1 7l6 6"/></svg><span>Back to Look ' + lookNumStr + '</span>';
      }

      const crumbMid = origin === 'orbit'
        ? '<a href="#orbit" class="pdp__crumb-btn" data-nav="orbit">Nike Orbit</a>'
        : origin === 'rail'
          ? '<a href="#rail" class="pdp__crumb-btn" data-nav="rail">Hand Rail Pro</a>'
          : `<button type="button" class="pdp__crumb-btn" data-go-runway="${state.lookCtx}">Look ${lookNumStr}</button>`;

      const crumb = document.createElement('nav');
      crumb.className = 'pdp__crumb';
      crumb.setAttribute('aria-label', 'Breadcrumb');
      crumb.innerHTML = `<a href="#home" data-nav="home">Home</a><span aria-hidden="true">/</span>${crumbMid}<span aria-hidden="true">/</span><span aria-current="page">${item.name}</span>`;

      topBar.append(backBtn, crumb);

      // 2-Column PDP Grid
      const grid = document.createElement('div');
      grid.className = 'pdp__grid';

      // Left Gallery Column
      const galleryCol = document.createElement('div');
      galleryCol.className = 'pdp-gallery';

      const thumbsWrap = document.createElement('div');
      thumbsWrap.className = 'pdp-thumbs';
      thumbsWrap.setAttribute('role', 'tablist');
      thumbsWrap.setAttribute('aria-label', 'Product images');

      meta.gallery.forEach((frame, idx) => {
        const tBtn = document.createElement('button');
        tBtn.type = 'button';
        tBtn.className = 'pdp-thumb' + (idx === 0 ? ' is-active' : '');
        tBtn.dataset.pdpThumb = String(idx);
        tBtn.setAttribute('aria-label', `View ${frame.label}`);
        tBtn.setAttribute('aria-current', idx === 0 ? 'true' : 'false');

        const tImg = document.createElement('img');
        tImg.src = frame.thumb;
        tImg.alt = '';
        tImg.loading = 'lazy';
        tImg.decoding = 'async';
        tImg.referrerPolicy = 'no-referrer';
        if (frame.isStudio) {
          tImg.className = item.flipX ? 'is-studio is-flipped-x' : 'is-studio';
        }

        const tLbl = document.createElement('span');
        tLbl.className = 'pdp-thumb__label';
        tLbl.textContent = frame.label;

        tBtn.append(tImg, tLbl);
        tBtn.addEventListener('click', () => setFrame(idx));
        thumbsWrap.appendChild(tBtn);
      });

      const stageWrap = document.createElement('div');
      stageWrap.className = 'pdp-stage-wrap';

      const stageToolbar = document.createElement('div');
      stageToolbar.className = 'pdp-stage__tools';
      stageToolbar.innerHTML = `
        <button type="button" class="pdp-tool-btn" data-pdp-zoom-out aria-label="Zoom out" disabled>−</button>
        <span class="pdp-tool-level" data-pdp-zoom-level>100%</span>
        <button type="button" class="pdp-tool-btn" data-pdp-zoom-in aria-label="Zoom in">+</button>
        <button type="button" class="pdp-tool-btn pdp-tool-btn--expand" data-pdp-expand aria-label="Open fullscreen zoom">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </button>
      `;

      const stageEl = document.createElement('div');
      stageEl.className = 'pdp-stage';
      stageEl.dataset.pdpStage = '1';
      stageEl.tabIndex = 0;
      stageEl.setAttribute('role', 'region');
      stageEl.setAttribute('aria-label', `${item.name} high-resolution viewer. Click or tap to zoom, drag or move pointer to pan.`);

      const mainImg = document.createElement('img');
      mainImg.className = item.flipX ? 'pdp-stage__img is-studio is-flipped-x' : 'pdp-stage__img is-studio';
      mainImg.dataset.pdpMainImg = '1';
      mainImg.src = meta.gallery[0].src;
      mainImg.alt = `${item.name} — ${meta.gallery[0].label}`;
      mainImg.decoding = 'async';
      mainImg.referrerPolicy = 'no-referrer';
      mainImg.draggable = false;
      mainImg.addEventListener('error', () => stageEl.classList.add('is-fallback'));

      const fallbackBox = document.createElement('div');
      fallbackBox.className = 'pdp-stage__fallback';
      fallbackBox.innerHTML = `<span>${meta.brand}</span><strong>${item.name}</strong>`;

      stageEl.append(mainImg, fallbackBox);

      const stageFoot = document.createElement('div');
      stageFoot.className = 'pdp-stage__foot';
      stageFoot.innerHTML = `
        <span class="pdp-stage__caption" data-pdp-caption>${meta.gallery[0].caption}</span>
        <span class="pdp-stage__hint">Click image to zoom · Drag or move to inspect</span>
      `;

      stageWrap.append(stageToolbar, stageEl, stageFoot);
      galleryCol.append(thumbsWrap, stageWrap);

      // Toolbar events
      const zOut = stageToolbar.querySelector('[data-pdp-zoom-out]');
      const zIn = stageToolbar.querySelector('[data-pdp-zoom-in]');
      const expBtn = stageToolbar.querySelector('[data-pdp-expand]');
      if (zOut) zOut.addEventListener('click', () => setZoom(state.zoom > 2.25 ? 2.25 : 1));
      if (zIn) zIn.addEventListener('click', () => setZoom(state.zoom === 1 ? 2.25 : 3));
      if (expBtn) expBtn.addEventListener('click', openLightbox);
      bindStageInteractions(stageEl);

      // Right Contiguous Purchase Column
      const infoCol = document.createElement('div');
      infoCol.className = 'pdp-info';

      const kicker = document.createElement('p');
      kicker.className = 'pdp-kicker';
      kicker.innerHTML = `<span>${meta.brand}</span><span aria-hidden="true">·</span><span>${meta.category}</span><span aria-hidden="true">·</span><span>${meta.sku}</span>`;

      const title = document.createElement('h1');
      title.className = 'pdp-title';
      title.textContent = item.name;

      const subtitle = document.createElement('p');
      subtitle.className = 'pdp-subtitle';
      subtitle.textContent = meta.subtitle;

      const priceRow = document.createElement('div');
      priceRow.className = 'pdp-price-row';
      priceRow.innerHTML = `<span class="pdp-price">${moneyFmt.format(item.price)}</span><span class="pdp-price-note">Incl. of reference styling price</span>`;

      // Variants (Size)
      const variantSection = document.createElement('div');
      variantSection.className = 'pdp-variants';

      const varHead = document.createElement('div');
      varHead.className = 'pdp-variants__head';

      const varLabelWrap = document.createElement('div');
      varLabelWrap.className = 'pdp-variants__label-wrap';
      varLabelWrap.innerHTML = `<span class="pdp-variants__label">${meta.sizeLabel}</span><span class="pdp-variants__selected" data-pdp-selected-size></span>`;

      const guideToggle = document.createElement('button');
      guideToggle.type = 'button';
      guideToggle.className = 'pdp-guide-btn';
      guideToggle.textContent = 'Interactive Size Guide (IND)';
      guideToggle.addEventListener('click', () => {
        const cat = meta.isFootwear ? 'footwear' : (/hoodie/i.test(item.id) ? 'outerwear' : 'topwear');
        openSizeGuideDialog(cat, { source: 'pdp', isFootwear: meta.isFootwear });
      });

      varHead.append(varLabelWrap, guideToggle);

      const sizesGrid = document.createElement('div');
      sizesGrid.className = 'pdp-sizes' + (meta.isFootwear ? ' pdp-sizes--shoe' : '');
      sizesGrid.setAttribute('role', 'radiogroup');
      sizesGrid.setAttribute('aria-label', meta.sizeLabel);

      meta.sortedVariants.forEach((v) => {
        const sBtn = document.createElement('button');
        sBtn.type = 'button';
        sBtn.className = 'pdp-size-btn' + (state.selectedVariant && v.id === state.selectedVariant.id ? ' is-selected' : '');
        sBtn.setAttribute('role', 'radio');
        sBtn.setAttribute('aria-checked', state.selectedVariant && v.id === state.selectedVariant.id ? 'true' : 'false');
        sBtn.dataset.pdpVariant = String(v.id);
        sBtn.disabled = !v.a;
        sBtn.textContent = v.o[0];
        sBtn.addEventListener('click', () => {
          if (!v.a) return;
          state.selectedVariant = v;
          updateVariantUI();
        });
        sizesGrid.appendChild(sBtn);
      });

      variantSection.append(varHead, sizesGrid);

      // Quantity & Primary Add to Bag Row
      const buyRow = document.createElement('div');
      buyRow.className = 'pdp-buy-row';

      const qtyWrap = document.createElement('div');
      qtyWrap.className = 'pdp-qty';
      qtyWrap.setAttribute('role', 'group');
      qtyWrap.setAttribute('aria-label', 'Quantity');

      const decBtn = document.createElement('button');
      decBtn.type = 'button';
      decBtn.className = 'pdp-qty__btn';
      decBtn.dataset.pdpQtyDec = '1';
      decBtn.setAttribute('aria-label', 'Decrease quantity');
      decBtn.textContent = '−';

      const qtyVal = document.createElement('span');
      qtyVal.className = 'pdp-qty__val';
      qtyVal.dataset.pdpQtyVal = '1';
      qtyVal.textContent = '1';

      const incBtn = document.createElement('button');
      incBtn.type = 'button';
      incBtn.className = 'pdp-qty__btn';
      incBtn.dataset.pdpQtyInc = '1';
      incBtn.setAttribute('aria-label', 'Increase quantity');
      incBtn.textContent = '+';

      decBtn.addEventListener('click', () => {
        if (state.qty > 1) {
          state.qty -= 1;
          updateQtyUI();
        }
      });
      incBtn.addEventListener('click', () => {
        if (state.qty < 10) {
          state.qty += 1;
          updateQtyUI();
        }
      });
      qtyWrap.append(decBtn, qtyVal, incBtn);

      const addBagBtn = document.createElement('button');
      addBagBtn.type = 'button';
      addBagBtn.className = 'pdp-cta';
      addBagBtn.dataset.pdpAddBag = '1';
      addBagBtn.dataset.defaultLabel = 'Add to styling bag';
      addBagBtn.innerHTML = `<span data-pdp-cta-text>Add to styling bag</span><svg width="20" height="12" viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 7h24M19 1l6 6-6 6"/></svg>`;
      addBagBtn.addEventListener('click', handleAddToBag);

      buyRow.append(qtyWrap, addBagBtn);

      // Fit & Construction Specs
      const detailsWrap = document.createElement('div');
      detailsWrap.className = 'pdp-specs';

      const descP = document.createElement('p');
      descP.className = 'pdp-desc';
      descP.textContent = meta.description;

      const safeListingUrl = assertHttpsUrl(item.url, 'nike-makknzjs.myshopify.com');
      const specList = document.createElement('dl');
      specList.className = 'pdp-spec-list';
      specList.innerHTML = `
        <div class="pdp-spec-row"><dt>Material</dt><dd>${meta.material}</dd></div>
        <div class="pdp-spec-row"><dt>Fit &amp; Sizing</dt><dd>${meta.fitNote}</dd></div>
        <div class="pdp-spec-row"><dt>Returns</dt><dd>30-day unworn returns · Free size exchange · Refund in 5–7 business days. <button type="button" class="pdp-policy-btn" data-open-policy="returns">Full Policy</button></dd></div>
        <div class="pdp-spec-row"><dt>Security</dt><dd>TLS 1.3 SSL encrypted · PCI DSS Level 1 tokenized checkout. <button type="button" class="pdp-policy-btn" data-open-policy="security">Details</button></dd></div>
        <div class="pdp-spec-row"><dt>Reference</dt><dd><a href="${safeListingUrl}" target="_blank" rel="noopener noreferrer">View encrypted listing ↗</a></dd></div>
      `;
      detailsWrap.append(descP, specList);

      // Appears in Runway Chapters (when featured on runway)
      if (meta.appearances.length > 0) {
        const looksSection = document.createElement('div');
        looksSection.className = 'pdp-looks';
        const looksHeading = document.createElement('h2');
        looksHeading.className = 'pdp-section-label';
        looksHeading.textContent = 'Styled in Runway';

        const looksList = document.createElement('div');
        looksList.className = 'pdp-looks__list';
        meta.appearances.forEach(({ lookIdx, look }) => {
          const lBtn = document.createElement('button');
          lBtn.type = 'button';
          lBtn.className = 'pdp-look-link';
          lBtn.dataset.goRunway = String(lookIdx);
          lBtn.innerHTML = `<span class="pdp-look-link__num">${String(lookIdx + 1).padStart(2, '0')}</span><span class="pdp-look-link__name">${look.name}</span><span class="pdp-look-link__go">View look →</span>`;
          looksList.appendChild(lBtn);
        });
        looksSection.append(looksHeading, looksList);
        infoCol.append(kicker, title, subtitle, priceRow, variantSection, buyRow, detailsWrap, looksSection);
      } else {
        infoCol.append(kicker, title, subtitle, priceRow, variantSection, buyRow, detailsWrap);
      }
      grid.append(galleryCol, infoCol);

      // Companion Pieces from Active Look / Collection
      const relatedSection = document.createElement('section');
      relatedSection.className = 'pdp-related';
      if (companions.length > 0) {
        const relHead = document.createElement('div');
        relHead.className = 'pdp-related__head';
        if (origin === 'orbit') {
          relHead.innerHTML = `<h2 class="pdp-related__title">${relTitleText}</h2><a href="#orbit" class="pdp-related__all" data-nav="orbit">Open Nike Orbit →</a>`;
        } else if (origin === 'rail') {
          relHead.innerHTML = `<h2 class="pdp-related__title">${relTitleText}</h2><a href="#rail" class="pdp-related__all" data-nav="rail">Open Hand Rail Pro →</a>`;
        } else {
          relHead.innerHTML = `<h2 class="pdp-related__title">${relTitleText}</h2><button type="button" class="pdp-related__all" data-go-runway="${state.lookCtx}">Open full look →</button>`;
        }

        const relGrid = document.createElement('div');
        relGrid.className = 'pdp-related__grid';
        companions.forEach((comp) => {
          const compMeta = getProductMeta(comp);
          const card = document.createElement('a');
          card.className = 'pdp-rel-card';
          card.href = `#product/${comp.id}`;
          card.dataset.productLink = comp.id;
          card.dataset.sourceView = origin;
          card.dataset.lookCtx = String(state.lookCtx);
          card.innerHTML = `
            <div class="pdp-rel-card__media">
              <img src="${comp.image}" alt="${comp.name}" class="${comp.flipX ? 'is-flipped-x' : ''}" loading="lazy" decoding="async" referrerPolicy="no-referrer">
            </div>
            <div class="pdp-rel-card__body">
              <span class="pdp-rel-card__meta">${compMeta.brand} · ${compMeta.category}</span>
              <span class="pdp-rel-card__name">${comp.name}</span>
              <span class="pdp-rel-card__price">${moneyFmt.format(comp.price)}</span>
            </div>
          `;
          relGrid.appendChild(card);
        });
        relatedSection.append(relHead, relGrid);
      }

      // Mobile Sticky Buy Bar (<60px compact footer bar, visible only when primary CTA scrolls out of view)
      const mobileBar = document.createElement('div');
      mobileBar.className = 'pdp-mobile-bar';
      mobileBar.innerHTML = `
        <div class="pdp-mobile-bar__info">
          <span class="pdp-mobile-bar__price">${moneyFmt.format(item.price)}</span>
          <span class="pdp-mobile-bar__meta" data-pdp-mobile-meta></span>
        </div>
        <button type="button" class="pdp-cta pdp-cta--compact" data-pdp-add-bag data-default-label="Add to bag">
          <span data-pdp-cta-text>Add to bag</span>
        </button>
      `;
      const mCta = mobileBar.querySelector('[data-pdp-add-bag]');
      if (mCta) mCta.addEventListener('click', handleAddToBag);

      pdpRoot.append(topBar, grid, relatedSection, mobileBar);
      updateQtyUI();

      if ('IntersectionObserver' in window) {
        state.mobileBarObs = new IntersectionObserver(
          (entries) => {
            const visible = entries.some((entry) => entry.isIntersecting);
            mobileBar.classList.toggle('is-visible', !visible);
          },
          { threshold: 0 }
        );
        state.mobileBarObs.observe(buyRow);
      }
    }

    return {
      render,
      closeLightbox,
      clearObs,
      selectVariantBySize,
      isOpen: () => Boolean(productView && !productView.hidden),
      getCurrentItemMeta: () => state.meta
    };
  })();

  function render404Details(info) {
    if (!error404View) return;
    const eyebrowEl = error404View.querySelector('[data-err404-eyebrow]');
    const detailEl = error404View.querySelector('[data-err404-detail]');
    const titleEl = error404View.querySelector('[data-err404-title]');
    const descEl = error404View.querySelector('[data-err404-desc]');

    const reason = info && info.reason ? info.reason : 'route';
    const rawDetail = info && (info.path || info.slug || info.detail) ? String(info.path || info.slug || info.detail) : '';
    const safeDetail = rawDetail.replace(/[\r\n\t]+/g, ' ').slice(0, 72);

    if (eyebrowEl) {
      if (reason === 'product') eyebrowEl.textContent = 'Error 404 · Piece Not Found';
      else if (reason === 'look') eyebrowEl.textContent = 'Error 404 · Look Unavailable';
      else if (reason === 'runtime') eyebrowEl.textContent = 'Error 404 · Page Recovered';
      else eyebrowEl.textContent = 'Error 404 · Page Not Found';
    }
    if (titleEl) {
      if (reason === 'product') titleEl.textContent = 'That silhouette piece is not on the floor.';
      else if (reason === 'look') titleEl.textContent = 'That look chapter does not exist.';
      else if (reason === 'runtime') titleEl.textContent = 'We couldn’t display that view right now.';
      else titleEl.textContent = 'This piece or runway room could not be found.';
    }
    if (descEl) {
      if (reason === 'runtime') {
        descEl.textContent = 'Instead of an error screen, we routed you safely here. Step back to the Home gallery or re-enter the Runway.';
      } else {
        descEl.textContent = 'The link may be outdated, the route may have moved off the floor, or the item slug does not match the current collection.';
      }
    }
    if (detailEl) {
      if (safeDetail) {
        detailEl.hidden = false;
        detailEl.textContent = `Requested: ${safeDetail}`;
      } else {
        detailEl.hidden = true;
        detailEl.textContent = '';
      }
    }
  }

  function setView(view, param, updateHash) {
    if ((view === 'orbit' || view === 'rail') && !hasEnteredRunway) {
      view = 'home';
      updateHash = true;
    }

    let targetItem = null;
    let pdpSource = lastSourceView;
    if (view === 'product') {
      const pid = typeof param === 'string' ? param : (param && param.id);
      targetItem = CATALOG.items.find((x) => x.id === pid) || null;
      if (!targetItem) {
        view = '404';
        param = { reason: 'product', slug: pid ? `#product/${pid}` : 'Unknown piece' };
        updateHash = false;
      }
    }

    const isHome = view === 'home';
    const isOrbit = view === 'orbit';
    const isRail = view === 'rail';
    const isProduct = view === 'product';
    const isRunway = view === 'runway';
    const is404 = view === '404';

    if (isRunway) {
      hasEnteredRunway = true;
      try {
        window.sessionStorage.setItem('nike_runway_entered', '1');
      } catch {
        // ignore storage restrictions
      }
    }

    try {
      if (isProduct && targetItem) {
        const lookHint = param && typeof param === 'object' && typeof param.lookCtx === 'number'
          ? param.lookCtx
          : activeLookCtx;
        pdpSource = (param && typeof param === 'object' && param.source) || lastSourceView;
        productPage.render(targetItem, lookHint, pdpSource);
      } else {
        if (!is404) lastSourceView = view;
        productPage.closeLightbox();
        productPage.clearObs();
      }

      if (is404) {
        render404Details(param);
      }

      homeView.hidden = !isHome;
      if (orbitViewEl) orbitViewEl.hidden = !isOrbit;
      if (railViewEl) railViewEl.hidden = !isRail;
      runwayEl.hidden = !isRunway;
      if (productView) productView.hidden = !isProduct;
      if (error404View) error404View.hidden = !is404;

      navLinks.forEach((link) => {
        const target = link.dataset.nav;
        if (link.classList.contains('brand')) {
          if (isHome) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
          return;
        }
        if (target === 'orbit' || target === 'rail') {
          link.hidden = isHome || is404 || !hasEnteredRunway;
        }
        const matchesProductParent = isProduct && target === (pdpSource === 'orbit' || pdpSource === 'rail' ? pdpSource : 'runway');
        if (
          (isHome && target === 'home') ||
          (isOrbit && target === 'orbit') ||
          (isRail && target === 'rail') ||
          (isRunway && target === 'runway') ||
          matchesProductParent
        ) {
          link.setAttribute('aria-current', 'page');
        } else {
          link.removeAttribute('aria-current');
        }
      });

      if (isOrbit) orbitView.mount();
      else orbitView.unmount();

      if (isRail) railView.mount();
      else railView.unmount();

      if (isRunway) {
        if (typeof param === 'number' && Number.isFinite(param)) {
          activeLookCtx = ((param % CATALOG.looks.length) + CATALOG.looks.length) % CATALOG.looks.length;
        }
        if (typeof runwayEl.resumeFromNavigation === 'function') {
          runwayEl.resumeFromNavigation(typeof param === 'number' ? param : undefined);
        }
      } else if (typeof runwayEl.pauseForNavigation === 'function') {
        runwayEl.pauseForNavigation();
      }

      if (updateHash) {
        let nextHash = '#home';
        if (isOrbit) nextHash = '#orbit';
        else if (isRail) nextHash = '#rail';
        else if (isRunway) nextHash = '#runway';
        else if (isProduct && targetItem) nextHash = `#product/${targetItem.id}`;
        else if (is404) nextHash = '#404';
        if (window.location.hash !== nextHash || (window.location.pathname !== '/' && window.location.pathname !== '/index.html')) {
          try {
            window.history.pushState(null, '', `/${nextHash}`);
          } catch {
            window.location.hash = nextHash;
          }
        }
      }
    } catch {
      render404Details({ reason: 'runtime' });
      homeView.hidden = true;
      if (orbitViewEl) orbitViewEl.hidden = true;
      if (railViewEl) railViewEl.hidden = true;
      runwayEl.hidden = true;
      if (productView) productView.hidden = true;
      if (error404View) error404View.hidden = false;
    }
  }

  const policyDialog = document.getElementById('policy-dialog');
  const closePolicyBtn = document.getElementById('close-policy');
  function openPolicyDialog(sectionName) {
    if (!policyDialog) return;
    if (!policyDialog.open) {
      policyDialog.showModal();
    }
    const sec = sectionName ? policyDialog.querySelector(`[data-policy-section="${sectionName}"]`) : null;
    if (sec && typeof sec.scrollIntoView === 'function') {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  if (closePolicyBtn && policyDialog) {
    closePolicyBtn.addEventListener('click', () => policyDialog.close());
  }
  if (policyDialog) {
    policyDialog.addEventListener('click', (e) => {
      const r = policyDialog.getBoundingClientRect();
      const inside =
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom;
      if (!inside) policyDialog.close();
    });
  }

  const sizeGuide = (() => {
    const dialog = document.getElementById('size-guide-dialog');
    const closeBtn = document.getElementById('close-size-guide');
    const fieldsEl = dialog ? dialog.querySelector('[data-sg-fields]') : null;
    const fitsEl = dialog ? dialog.querySelector('[data-sg-fits]') : null;
    const fitLabelEl = dialog ? dialog.querySelector('[data-sg-fit-label]') : null;
    const recSizeEl = dialog ? dialog.querySelector('[data-sg-rec-size]') : null;
    const recBadgeEl = dialog ? dialog.querySelector('[data-sg-rec-label]') : null;
    const recNoteEl = dialog ? dialog.querySelector('[data-sg-rec-note]') : null;
    const applyBtn = dialog ? dialog.querySelector('[data-sg-apply]') : null;
    const chartTitleEl = dialog ? dialog.querySelector('[data-sg-chart-title]') : null;
    const tableEl = dialog ? dialog.querySelector('[data-sg-table]') : null;
    const tipEl = dialog ? dialog.querySelector('[data-sg-tip]') : null;
    const catBtns = dialog ? Array.from(dialog.querySelectorAll('[data-sg-cat]')) : [];
    const unitBtns = dialog ? Array.from(dialog.querySelectorAll('[data-sg-unit]')) : [];

    const SG_STORAGE_KEY = 'nike_runway_ind_size_profile_v1';
    const state = {
      category: 'topwear',
      unit: 'cm',
      context: null,
      fit: 'regular',
      width: 'regular',
      measuresCm: {
        chest: 99,
        shoulder: 46,
        waist: 78,
        hip: 96,
        height: 174,
        weight: 70,
        footLength: 26.0
      }
    };

    try {
      const saved = window.sessionStorage.getItem(SG_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          if (parsed.unit === 'cm' || parsed.unit === 'in') state.unit = parsed.unit;
          if (parsed.fit === 'tailored' || parsed.fit === 'regular' || parsed.fit === 'oversized') state.fit = parsed.fit;
          if (parsed.width === 'narrow' || parsed.width === 'regular' || parsed.width === 'wide') state.width = parsed.width;
          if (parsed.measuresCm && typeof parsed.measuresCm === 'object') {
            for (const k of Object.keys(state.measuresCm)) {
              const v = Number(parsed.measuresCm[k]);
              if (Number.isFinite(v) && v > 0 && v < 300) state.measuresCm[k] = v;
            }
          }
        }
      }
    } catch {
      // ignore storage errors
    }

    function saveProfile() {
      try {
        window.sessionStorage.setItem(SG_STORAGE_KEY, JSON.stringify({
          unit: state.unit,
          fit: state.fit,
          width: state.width,
          measuresCm: state.measuresCm
        }));
      } catch {
        // ignore storage errors
      }
    }

    const CHARTS = {
      topwear: {
        title: 'Indian Topwear & Knitwear Chart (IND Base)',
        tip: 'Measure chest horizontally at its fullest point over a light tee. Runway tees & knits feature an architectural studio drape.',
        rows: [
          { ind: 'IND 36', label: 'S', chestMin: 91, chestMax: 96, shoulder: 44, length: 68, garmentChest: 108 },
          { ind: 'IND 38', label: 'M', chestMin: 97, chestMax: 102, shoulder: 46, length: 70, garmentChest: 114 },
          { ind: 'IND 40', label: 'L', chestMin: 103, chestMax: 108, shoulder: 48, length: 72, garmentChest: 120 },
          { ind: 'IND 42', label: 'XL', chestMin: 109, chestMax: 116, shoulder: 50, length: 74, garmentChest: 126 }
        ]
      },
      outerwear: {
        title: 'Indian Outerwear & Hoodies Chart (IND Base)',
        tip: 'Hoodies and heavyweight fleece (460–500 GSM) include layering ease over standard Indian tees.',
        rows: [
          { ind: 'IND 36', label: 'S', chestMin: 89, chestMax: 95, shoulder: 45, length: 68, garmentChest: 112 },
          { ind: 'IND 38', label: 'M', chestMin: 96, chestMax: 102, shoulder: 47, length: 70, garmentChest: 118 },
          { ind: 'IND 40', label: 'L', chestMin: 103, chestMax: 110, shoulder: 49, length: 73, garmentChest: 124 },
          { ind: 'IND 42', label: 'XL', chestMin: 111, chestMax: 118, shoulder: 51, length: 75, garmentChest: 130 }
        ]
      },
      bottoms: {
        title: 'Indian Bottoms & Denim Chart (IND Base)',
        tip: 'Measure waist around your natural waistband level. Runway denim uses wide-leg cuts with relaxed seat ease.',
        rows: [
          { ind: 'IND 28', label: 'S', waistMin: 71, waistMax: 75, hipMin: 89, hipMax: 94, outseam: 101 },
          { ind: 'IND 30', label: 'M', waistMin: 76, waistMax: 80, hipMin: 95, hipMax: 99, outseam: 103 },
          { ind: 'IND 32', label: 'L', waistMin: 81, waistMax: 86, hipMin: 100, hipMax: 105, outseam: 105 },
          { ind: 'IND 34', label: 'XL', waistMin: 87, waistMax: 92, hipMin: 106, hipMax: 111, outseam: 107 }
        ]
      },
      footwear: {
        title: 'Indian Footwear Conversion Chart (IND Base → EU / US)',
        tip: 'Place heel against a wall on paper at evening width and measure to your longest toe.',
        rows: [
          { ind: 'IND 6', label: '40', us: '7', footMin: 24.6, footMax: 25.4 },
          { ind: 'IND 7', label: '41', us: '8', footMin: 25.5, footMax: 26.1 },
          { ind: 'IND 7.5', label: '42', us: '8.5', footMin: 26.2, footMax: 26.8 },
          { ind: 'IND 8.5', label: '43', us: '9.5', footMin: 26.9, footMax: 27.6 },
          { ind: 'IND 9', label: '44', us: '10', footMin: 27.7, footMax: 28.4 },
          { ind: 'IND 10', label: '45', us: '11', footMin: 28.5, footMax: 29.2 },
          { ind: 'IND 11', label: '46', us: '12', footMin: 29.3, footMax: 30.1 }
        ]
      }
    };

    function fmtLen(cmVal, precision = 0) {
      if (state.unit === 'in') {
        const inches = cmVal / 2.54;
        return inches.toFixed(1);
      }
      return precision > 0 ? cmVal.toFixed(precision) : String(Math.round(cmVal));
    }

    function computeRecommendation() {
      const m = state.measuresCm;
      if (state.category === 'footwear') {
        const rows = CHARTS.footwear.rows;
        const widthBias = state.width === 'narrow' ? -0.15 : state.width === 'wide' ? 0.65 : 0.25;
        const effectiveCm = m.footLength + widthBias;
        let idx = rows.findIndex((r) => effectiveCm <= r.footMax);
        if (idx === -1) idx = rows.length - 1;
        const row = rows[idx];
        const widthDesc = state.width === 'wide' ? 'wide forefoot allowance' : state.width === 'narrow' ? 'snug athletic lock' : 'standard Indian toe room';
        const note = `${fmtLen(m.footLength, 1)} ${state.unit} foot length + ${widthDesc} maps cleanly to ${row.ind} (EU ${row.label} / US ${row.us}).`;
        return { row, idx, catalogSize: row.label, badge: `EU ${row.label} · US ${row.us}`, note };
      }

      if (state.category === 'bottoms') {
        const rows = CHARTS.bottoms.rows;
        const waistIdx = (m.waist - 73.0) / 5.5;
        const hipIdx = (m.hip - 91.5) / 5.5;
        const heightBias = m.height > 183 ? 0.22 : m.height < 165 ? -0.15 : 0;
        const fitBias = state.fit === 'tailored' ? -0.45 : state.fit === 'oversized' ? 0.45 : 0;
        const rawScore = waistIdx * 0.65 + hipIdx * 0.25 + heightBias + fitBias;
        const idx = clamp(Math.round(rawScore), 0, rows.length - 1);
        const row = rows[idx];
        const fitWord = state.fit === 'tailored' ? 'closer waist fit' : state.fit === 'oversized' ? 'relaxed drape' : 'standard Indian fit';
        const borderNote = Math.abs(rawScore - idx) > 0.34 ? ' Close to the next size boundary.' : '';
        const note = `${fmtLen(m.waist)} ${state.unit} waist & ${fmtLen(m.hip)} ${state.unit} hip for ${fitWord} matches ${row.ind} (Label ${row.label}).${borderNote}`;
        return { row, idx, catalogSize: row.label, badge: `Catalog Size ${row.label}`, note };
      }

      const isOuter = state.category === 'outerwear';
      const rows = CHARTS[state.category].rows;
      const chestIdx = (m.chest - 93.5) / 6.0;
      const shoulderIdx = (m.shoulder - 44.0) / 2.2;
      const bmi = m.weight / Math.pow(Math.max(1.35, m.height / 100), 2);
      const frameBias = (bmi > 27 ? 0.28 : bmi < 19 ? -0.22 : 0) + (m.height > 183 ? 0.22 : m.height < 164 ? -0.14 : 0);
      const fitBias = state.fit === 'tailored' ? -0.45 : state.fit === 'oversized' ? 0.48 : 0;
      const rawScore = chestIdx * 0.62 + shoulderIdx * 0.23 + frameBias + fitBias - (isOuter ? 0.1 : 0);
      const idx = clamp(Math.round(rawScore), 0, rows.length - 1);
      const row = rows[idx];
      const fitWord = state.fit === 'tailored' ? 'tailored silhouette' : state.fit === 'oversized' ? 'oversized studio drape' : 'regular Indian fit';
      const borderNote = Math.abs(rawScore - idx) > 0.34 ? ' Between sizes — adjusted for your fit preference.' : '';
      const note = `${fmtLen(m.chest)} ${state.unit} chest, ${fmtLen(m.shoulder)} ${state.unit} shoulder (${m.weight} kg) for ${fitWord} maps to ${row.ind} (Garment chest ${fmtLen(row.garmentChest)} ${state.unit}).${borderNote}`;
      return { row, idx, catalogSize: row.label, badge: `Catalog Size ${row.label}`, note };
    }

    function renderFields() {
      if (!fieldsEl || !fitsEl) return;
      const isIn = state.unit === 'in';
      const u = isIn ? 'in' : 'cm';
      const m = state.measuresCm;

      let fieldSpecs = [];
      if (state.category === 'footwear') {
        fieldSpecs = [
          {
            key: 'footLength',
            label: `Foot Length (${u})`,
            min: isIn ? 9.0 : 23.0,
            max: isIn ? 12.2 : 31.0,
            step: isIn ? 0.1 : 0.2,
            val: isIn ? Number((m.footLength / 2.54).toFixed(1)) : Number(m.footLength.toFixed(1)),
            fromDisplay: (v) => (isIn ? v * 2.54 : v)
          }
        ];
      } else if (state.category === 'bottoms') {
        fieldSpecs = [
          {
            key: 'waist',
            label: `Natural Waist (${u})`,
            min: isIn ? 25 : 64,
            max: isIn ? 42 : 106,
            step: isIn ? 0.5 : 1,
            val: isIn ? Number((m.waist / 2.54).toFixed(1)) : Math.round(m.waist),
            fromDisplay: (v) => (isIn ? v * 2.54 : v)
          },
          {
            key: 'hip',
            label: `Hip / Seat (${u})`,
            min: isIn ? 32 : 82,
            max: isIn ? 48 : 122,
            step: isIn ? 0.5 : 1,
            val: isIn ? Number((m.hip / 2.54).toFixed(1)) : Math.round(m.hip),
            fromDisplay: (v) => (isIn ? v * 2.54 : v)
          },
          {
            key: 'height',
            label: `Height (${u})`,
            min: isIn ? 59 : 150,
            max: isIn ? 81 : 205,
            step: isIn ? 0.5 : 1,
            val: isIn ? Number((m.height / 2.54).toFixed(1)) : Math.round(m.height),
            fromDisplay: (v) => (isIn ? v * 2.54 : v)
          }
        ];
      } else {
        fieldSpecs = [
          {
            key: 'chest',
            label: `Chest (${u})`,
            min: isIn ? 31 : 78,
            max: isIn ? 51 : 130,
            step: isIn ? 0.5 : 1,
            val: isIn ? Number((m.chest / 2.54).toFixed(1)) : Math.round(m.chest),
            fromDisplay: (v) => (isIn ? v * 2.54 : v)
          },
          {
            key: 'shoulder',
            label: `Shoulder Width (${u})`,
            min: isIn ? 15 : 38,
            max: isIn ? 23 : 58,
            step: isIn ? 0.5 : 1,
            val: isIn ? Number((m.shoulder / 2.54).toFixed(1)) : Math.round(m.shoulder),
            fromDisplay: (v) => (isIn ? v * 2.54 : v)
          },
          {
            key: 'height',
            label: `Height (${u})`,
            min: isIn ? 59 : 150,
            max: isIn ? 81 : 205,
            step: isIn ? 0.5 : 1,
            val: isIn ? Number((m.height / 2.54).toFixed(1)) : Math.round(m.height),
            fromDisplay: (v) => (isIn ? v * 2.54 : v)
          },
          {
            key: 'weight',
            label: 'Weight (kg)',
            min: 42,
            max: 125,
            step: 1,
            val: Math.round(m.weight),
            fromDisplay: (v) => v
          }
        ];
      }

      fieldsEl.innerHTML = '';
      fieldSpecs.forEach((spec) => {
        const row = document.createElement('div');
        row.className = 'sg-field';

        const top = document.createElement('div');
        top.className = 'sg-field__top';

        const lbl = document.createElement('label');
        lbl.className = 'sg-field__label';
        lbl.htmlFor = `sg-num-${spec.key}`;
        lbl.textContent = spec.label;

        const num = document.createElement('input');
        num.id = `sg-num-${spec.key}`;
        num.type = 'number';
        num.className = 'sg-field__num';
        num.min = String(spec.min);
        num.max = String(spec.max);
        num.step = String(spec.step);
        num.value = String(spec.val);

        const range = document.createElement('input');
        range.type = 'range';
        range.className = 'sg-field__range';
        range.min = String(spec.min);
        range.max = String(spec.max);
        range.step = String(spec.step);
        range.value = String(spec.val);
        range.setAttribute('aria-label', spec.label);

        const commit = (raw) => {
          const parsed = Number(raw);
          if (!Number.isFinite(parsed)) return;
          const clampedDisp = clamp(parsed, spec.min, spec.max);
          num.value = String(clampedDisp);
          range.value = String(clampedDisp);
          state.measuresCm[spec.key] = spec.fromDisplay(clampedDisp);
          saveProfile();
          renderOutput();
        };

        range.addEventListener('input', () => commit(range.value));
        num.addEventListener('change', () => commit(num.value));
        num.addEventListener('input', () => {
          const parsed = Number(num.value);
          if (Number.isFinite(parsed) && parsed >= spec.min && parsed <= spec.max) {
            range.value = String(parsed);
            state.measuresCm[spec.key] = spec.fromDisplay(parsed);
            saveProfile();
            renderOutput();
          }
        });

        top.append(lbl, num);
        row.append(top, range);
        fieldsEl.appendChild(row);
      });

      fitsEl.innerHTML = '';
      if (state.category === 'footwear') {
        if (fitLabelEl) fitLabelEl.textContent = 'Indian Foot Width';
        const widths = [
          { id: 'narrow', label: 'Narrow' },
          { id: 'regular', label: 'Regular Width' },
          { id: 'wide', label: 'Wide (+Ease)' }
        ];
        widths.forEach((w) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'sg-fit-btn' + (state.width === w.id ? ' is-selected' : '');
          btn.setAttribute('role', 'radio');
          btn.setAttribute('aria-checked', state.width === w.id ? 'true' : 'false');
          btn.textContent = w.label;
          btn.addEventListener('click', () => {
            state.width = w.id;
            saveProfile();
            renderFields();
            renderOutput();
          });
          fitsEl.appendChild(btn);
        });
      } else {
        if (fitLabelEl) fitLabelEl.textContent = 'Fit Preference';
        const fits = [
          { id: 'tailored', label: 'Tailored' },
          { id: 'regular', label: 'Regular (IND)' },
          { id: 'oversized', label: state.category === 'bottoms' ? 'Relaxed' : 'Oversized' }
        ];
        fits.forEach((f) => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = 'sg-fit-btn' + (state.fit === f.id ? ' is-selected' : '');
          btn.setAttribute('role', 'radio');
          btn.setAttribute('aria-checked', state.fit === f.id ? 'true' : 'false');
          btn.textContent = f.label;
          btn.addEventListener('click', () => {
            state.fit = f.id;
            saveProfile();
            renderFields();
            renderOutput();
          });
          fitsEl.appendChild(btn);
        });
      }
    }

    function renderOutput() {
      const cfg = CHARTS[state.category];
      const rec = computeRecommendation();
      const u = state.unit;

      if (recSizeEl) recSizeEl.textContent = rec.row.ind;
      if (recBadgeEl) recBadgeEl.textContent = rec.badge;
      if (recNoteEl) recNoteEl.textContent = rec.note;
      if (chartTitleEl) chartTitleEl.textContent = cfg.title;
      if (tipEl) tipEl.textContent = cfg.tip;

      if (applyBtn) {
        const canApplyPdp =
          state.context &&
          state.context.source === 'pdp' &&
          productPage.isOpen() &&
          (state.context.isFootwear ? state.category === 'footwear' : (state.category === 'topwear' || state.category === 'outerwear'));
        const canApplyOrbit =
          state.context &&
          state.context.source === 'orbit' &&
          orbitViewEl &&
          !orbitViewEl.hidden &&
          state.category === 'footwear';

        if (canApplyPdp || canApplyOrbit) {
          applyBtn.hidden = false;
          applyBtn.textContent = state.category === 'footwear'
            ? `Apply ${rec.row.ind} (EU ${rec.catalogSize})`
            : `Apply ${rec.row.ind} (Size ${rec.catalogSize})`;
          applyBtn.dataset.sgTargetSize = rec.catalogSize;
          applyBtn.dataset.sgTargetInd = rec.row.ind;
        } else {
          applyBtn.hidden = true;
        }
      }

      if (tableEl) {
        let headHtml = '';
        let bodyHtml = '';
        if (state.category === 'footwear') {
          headHtml = `<tr><th>India (Base)</th><th>EU</th><th>US</th><th>Foot (${u})</th></tr>`;
          bodyHtml = cfg.rows.map((r, i) => `
            <tr class="${i === rec.idx ? 'is-recommended' : ''}">
              <td><strong>${r.ind}</strong></td>
              <td>${r.label}</td>
              <td>${r.us}</td>
              <td>${fmtLen(r.footMin, 1)}–${fmtLen(r.footMax, 1)}</td>
            </tr>
          `).join('');
        } else if (state.category === 'bottoms') {
          headHtml = `<tr><th>India (Base)</th><th>Label</th><th>Waist (${u})</th><th>Hip (${u})</th><th>Outseam (${u})</th></tr>`;
          bodyHtml = cfg.rows.map((r, i) => `
            <tr class="${i === rec.idx ? 'is-recommended' : ''}">
              <td><strong>${r.ind}</strong></td>
              <td>${r.label}</td>
              <td>${fmtLen(r.waistMin)}–${fmtLen(r.waistMax)}</td>
              <td>${fmtLen(r.hipMin)}–${fmtLen(r.hipMax)}</td>
              <td>${fmtLen(r.outseam)}</td>
            </tr>
          `).join('');
        } else {
          headHtml = `<tr><th>India (Base)</th><th>Label</th><th>Chest (${u})</th><th>Shoulder (${u})</th><th>Garment (${u})</th></tr>`;
          bodyHtml = cfg.rows.map((r, i) => `
            <tr class="${i === rec.idx ? 'is-recommended' : ''}">
              <td><strong>${r.ind}</strong></td>
              <td>${r.label}</td>
              <td>${fmtLen(r.chestMin)}–${fmtLen(r.chestMax)}</td>
              <td>${fmtLen(r.shoulder)}</td>
              <td>${fmtLen(r.garmentChest)}</td>
            </tr>
          `).join('');
        }
        tableEl.innerHTML = `<thead>${headHtml}</thead><tbody>${bodyHtml}</tbody>`;
      }
    }

    function renderAll() {
      catBtns.forEach((btn) => {
        const active = btn.dataset.sgCat === state.category;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      unitBtns.forEach((btn) => {
        const active = btn.dataset.sgUnit === state.unit;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      renderFields();
      renderOutput();
    }

    if (dialog) {
      catBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          state.category = btn.dataset.sgCat || 'topwear';
          renderAll();
        });
      });

      unitBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const next = btn.dataset.sgUnit;
          if (next === 'cm' || next === 'in') {
            state.unit = next;
            saveProfile();
            renderAll();
          }
        });
      });

      if (applyBtn) {
        applyBtn.addEventListener('click', () => {
          const targetSize = applyBtn.dataset.sgTargetSize;
          const targetInd = applyBtn.dataset.sgTargetInd || '';
          if (!targetSize) return;
          let applied = false;
          if (state.context && state.context.source === 'pdp') {
            applied = productPage.selectVariantBySize(targetSize);
          } else if (state.context && state.context.source === 'orbit') {
            applied = orbitView.selectSize(targetSize);
          }
          if (applied) {
            dialog.close();
            stylingBag.showToast(`Selected ${targetInd} (${state.category === 'footwear' ? 'EU ' : 'Size '}${targetSize})`);
          }
        });
      }

      if (closeBtn) closeBtn.addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', (e) => {
        const r = dialog.getBoundingClientRect();
        const inside =
          e.clientX >= r.left &&
          e.clientX <= r.right &&
          e.clientY >= r.top &&
          e.clientY <= r.bottom;
        if (!inside) dialog.close();
      });
    }

    function open(cat, context) {
      if (!dialog) return;
      if (cat && CHARTS[cat]) {
        state.category = cat;
      }
      state.context = context || null;
      renderAll();
      if (!dialog.open) dialog.showModal();
    }

    return { open };
  })();

  function openSizeGuideDialog(category, context) {
    sizeGuide.open(category, context);
  }

  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t || typeof t.closest !== 'function') return;

    const sgTrigger = t.closest('[data-open-size-guide]');
    if (sgTrigger) {
      e.preventDefault();
      const cat = sgTrigger.dataset.openSizeGuide || 'topwear';
      const inOrbit = Boolean(sgTrigger.closest('#orbit-view'));
      openSizeGuideDialog(cat, inOrbit ? { source: 'orbit', isFootwear: true } : null);
      return;
    }

    const policyTrigger = t.closest('[data-open-policy]');
    if (policyTrigger) {
      e.preventDefault();
      const bagDlg = document.getElementById('bag-dialog');
      if (bagDlg && bagDlg.open) bagDlg.close();
      if (document.getElementById('size-guide-dialog')?.open) {
        document.getElementById('size-guide-dialog').close();
      }
      openPolicyDialog(policyTrigger.dataset.openPolicy);
      return;
    }

    const prodLink = t.closest('[data-product-link]');
    if (prodLink) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      const pid = prodLink.dataset.productLink;
      const panelEl = prodLink.closest('[data-rw-panel]');
      let sourceHint = prodLink.dataset.sourceView;
      if (!sourceHint) {
        if (prodLink.closest('#orbit-view')) sourceHint = 'orbit';
        else if (prodLink.closest('#rail-view')) sourceHint = 'rail';
        else if (panelEl) sourceHint = 'runway';
      }
      if (panelEl) {
        activeLookCtx = Number(panelEl.dataset.rwPanel) || 0;
      } else if (prodLink.dataset.lookCtx !== undefined) {
        activeLookCtx = Number(prodLink.dataset.lookCtx) || 0;
      } else if (typeof runwayEl._index === 'number') {
        activeLookCtx = runwayEl._index;
      }
      setView('product', { id: pid, lookCtx: activeLookCtx, source: sourceHint }, true);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const goBtn = t.closest('[data-go-runway]');
    if (goBtn) {
      const idx = Number(goBtn.dataset.goRunway);
      const lookIdx = Number.isFinite(idx) ? idx : 0;
      activeLookCtx = lookIdx;
      setView('runway', lookIdx, true);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const errHomeBtn = t.closest('[data-err404-home]');
    if (errHomeBtn) {
      e.preventDefault();
      try {
        window.history.replaceState(null, '', '/#home');
      } catch {
        // ignore
      }
      setView('home', undefined, true);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const errRunwayBtn = t.closest('[data-err404-runway]');
    if (errRunwayBtn) {
      e.preventDefault();
      try {
        window.history.replaceState(null, '', '/#runway');
      } catch {
        // ignore
      }
      setView('runway', 0, true);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const errLookBtn = t.closest('[data-err404-look]');
    if (errLookBtn) {
      e.preventDefault();
      const idx = Number(errLookBtn.dataset.err404Look);
      const lookIdx = Number.isFinite(idx) ? clamp(idx, 0, CATALOG.looks.length - 1) : 0;
      try {
        window.history.replaceState(null, '', '/#runway');
      } catch {
        // ignore
      }
      activeLookCtx = lookIdx;
      setView('runway', lookIdx, true);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const navEl = t.closest('[data-nav]');
    if (navEl) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      const raw = navEl.dataset.nav;
      const targetView =
        raw === 'home' || raw === 'orbit' || raw === 'rail' || raw === 'runway'
          ? raw
          : '404';
      setView(targetView, targetView === '404' ? { reason: 'route', path: `#${raw || ''}` } : undefined, true);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  });

  const HOME_ANCHORS = new Set(['', '#home', '#home-experience', '#home-chapters', '#home-policies']);

  function isValidRootPathname(pathname) {
    const p = pathname || '/';
    return p === '/' || p === '/index.html';
  }

  function resolveRouteFromUrl() {
    const pathname = window.location.pathname || '/';
    const hash = window.location.hash || '';
    const params = new URLSearchParams(window.location.search);
    const prodParam = params.get('product');
    const rawLook = params.get('look');

    if (!isValidRootPathname(pathname)) {
      return { view: '404', param: { reason: 'route', path: pathname + hash } };
    }

    if (hash === '#404' || hash === '#not-found') {
      return { view: '404', param: { reason: 'route', path: hash } };
    }

    if (hash.startsWith('#product/')) {
      const slug = decodeURIComponent(hash.slice('#product/'.length));
      if (CATALOG.items.some((x) => x.id === slug)) {
        return { view: 'product', param: { id: slug, lookCtx: activeLookCtx } };
      }
      return { view: '404', param: { reason: 'product', slug: `#product/${slug}` } };
    }

    if (prodParam !== null) {
      if (CATALOG.items.some((x) => x.id === prodParam)) {
        return { view: 'product', param: { id: prodParam, lookCtx: activeLookCtx } };
      }
      return { view: '404', param: { reason: 'product', slug: `?product=${prodParam}` } };
    }

    if (hash === '#orbit') return { view: 'orbit', param: undefined };
    if (hash === '#rail') return { view: 'rail', param: undefined };

    if (rawLook !== null) {
      const lookParam = Number(rawLook);
      const hasValidLook = Number.isInteger(lookParam) && lookParam >= 1 && lookParam <= CATALOG.looks.length;
      if (hasValidLook) {
        return { view: 'runway', param: lookParam - 1 };
      }
      return { view: '404', param: { reason: 'look', slug: `?look=${rawLook}` } };
    }

    if (hash === '#runway') {
      return { view: 'runway', param: undefined };
    }

    if (!HOME_ANCHORS.has(hash)) {
      return { view: '404', param: { reason: 'route', path: hash } };
    }

    return { view: 'home', param: undefined };
  }

  function syncCurrentRoute() {
    if (__runwayBootError) {
      const bootErr = __runwayBootError;
      __runwayBootError = null;
      setView('404', bootErr, false);
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const resolved = resolveRouteFromUrl();
    setView(resolved.view, resolved.param, false);
    if (resolved.view === '404' || resolved.view === 'product') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  window.addEventListener('hashchange', syncCurrentRoute);
  window.addEventListener('popstate', syncCurrentRoute);
  window.addEventListener('runway:error', (ev) => {
    __runwayBootError = null;
    setView('404', (ev && ev.detail) || { reason: 'runtime', detail: 'Display recovery mode' }, false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  });

  window.addEventListener('error', (ev) => {
    // Ignore benign non-fatal resource / ResizeObserver notifications
    if (ev && ev.target && ev.target !== window) return;
    if (ev && typeof ev.message === 'string' && /ResizeObserver/i.test(ev.message)) return;
    setView('404', { reason: 'runtime', detail: 'Display recovery mode' }, false);
  });

  window.addEventListener('unhandledrejection', (ev) => {
    if (ev && typeof ev.preventDefault === 'function') ev.preventDefault();
    setView('404', { reason: 'runtime', detail: 'Async request interrupted' }, false);
  });

  syncCurrentRoute();
})();



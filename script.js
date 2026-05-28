/* ============================================
   RAGA ISOD NUSANTARA — 3D LUXURY SCRIPTS
   ============================================ */

'use strict';

/* ── Utility ── */
const qs = (s, p = document) => p.querySelector(s);
const qsa = (s, p = document) => [...p.querySelectorAll(s)];

/* ── Scroll Progress Bar ── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    if (bar._ticking) return;
    bar._ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement;
      const denom = h.scrollHeight - h.clientHeight;
      const r = denom > 0 ? window.scrollY / denom : 0;
      bar.style.transform = 'scaleX(' + r + ')';
      bar._ticking = false;
    });
  }, { passive: true });
}

/* ── Custom Cursor ── */
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);

  let tx = -100, ty = -100, cx = -100, cy = -100;
  let visible = false;

  document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    if (!visible) { visible = true; ring.classList.add('visible'); }
  }, { passive: true });

  function lerp(a, b, t) { return a + (b - a) * t; }
  function animate() {
    cx = lerp(cx, tx, 0.14);
    cy = lerp(cy, ty, 0.14);
    ring.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
    requestAnimationFrame(animate);
  }
  animate();

  const hoverSel = 'a, button, .product-card, .split-panel, .vision-card, .activity-card, .brand-card';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverSel)) ring.classList.add('hovered');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverSel)) ring.classList.remove('hovered');
  });
  document.addEventListener('mouseleave', () => ring.classList.remove('visible'));
  document.addEventListener('mouseenter', () => ring.classList.add('visible'));
}

/* ── Header Scroll ── */
function initHeader() {
  const header = qs('#header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const btn = qs('#mobileMenuBtn');
  const overlay = qs('#mobileNavOverlay');
  if (!btn || !overlay) return;

  btn.addEventListener('click', () => {
    const open = overlay.classList.toggle('open');
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  qsa('.mobile-nav-link').forEach(l => {
    l.addEventListener('click', () => {
      overlay.classList.remove('open');
      btn.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Reveal on Scroll ── */
function initReveal() {
  const els = qsa('.reveal-up, .reveal-left, .reveal-right');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ── Language Toggle ── */
const translations = {
  en: {
    nav_brand: 'Brand', nav_about: 'About Us', nav_activity: 'Activity', nav_shop: 'Shop',
    coffee_subtitle: 'Premium Coffee', coffee_desc: 'Discover the rich heritage of Indonesian coffee, crafted with passion and precision.',
    coffee_cta: 'Explore Coffee →', coconut_subtitle: 'Premium Coconut',
    coconut_desc: "Experience the tropical freshness of Indonesian coconut, nature's finest gift.",
    coconut_cta: 'Explore Coconut →',
    coffeenesia_hero_desc: 'From the volcanic highlands of Indonesia to your cup — every sip tells a story of heritage, craftsmanship, and unparalleled quality.',
    coffeenesia_hero_cta: 'Discover Our Coffee',
    coconesia_hero_desc: "From the sun-kissed coconut groves of Indonesia — pure, sustainable, and crafted for those who seek nature's finest tropical treasures.",
    coconesia_hero_cta: 'Discover Our Coconut',
    our_story: 'Our Story', our_products: 'Our Products', our_process: 'Our Process',
    scroll_down: 'Scroll Down',
    coffeenesia_story_title: 'Rooted in the Richness of Indonesian Soil',
    coffeenesia_story_desc: "Nuri Coffeenesia was born from a deep reverence for Indonesia's coffee heritage. Our beans are hand-selected from the finest estates across Sumatra, Java, and Sulawesi.",
    coffeenesia_story_desc2: 'Every step, from cherry to cup, is guided by master artisans who understand that great coffee is not merely produced — it is crafted with patience, reverence, and an unwavering commitment to excellence.',
    coffeenesia_products_title: 'Crafted for the Discerning Palate',
    coffeenesia_process_title: 'From Bean to Cup',
    coffeenesia_cta_title: 'Begin Your Coffee Journey',
    coffeenesia_cta_desc: 'Experience the essence of Indonesian coffee culture — where every cup connects you to a century-old tradition.',
    coconesia_story_title: 'Nurtured by the Tropical Sun',
    coconesia_story_desc: "Nuri Coconesia celebrates the extraordinary versatility of Indonesia's coconut heritage. From pristine coastal groves to your table, we transform nature's most versatile fruit.",
    coconesia_story_desc2: 'Every harvest is a testament to sustainable farming practices, working hand-in-hand with local communities who have cultivated coconuts for generations.',
    coconesia_products_title: "Nature's Finest Offerings",
    coconesia_process_title: 'From Grove to Goodness',
    coconesia_cta_title: 'Embrace the Tropical Essence',
    coconesia_cta_desc: "Discover the extraordinary versatility of Indonesia's coconut heritage — sustainable, pure, and crafted with care.",
    process_harvest: 'Harvest', process_roast: 'Roast', process_brew: 'Brew', process_savor: 'Savor',
    process_cultivate: 'Cultivate', process_extract: 'Extract', process_certify: 'Certify', process_enjoy: 'Enjoy',
    coff_product1_desc: 'Full-bodied with earthy depth, hints of dark chocolate and herbal notes.',
    coff_product2_desc: 'Smooth and balanced, a harmonious marriage of Java and Sulawesi beans.',
    coff_product3_desc: 'Exotic and complex, with vibrant acidity and a lingering fruity finish.',
    coff_process_harvest_desc: "Hand-picked at peak ripeness from the highlands of Indonesia.",
    coff_process_roast_desc: "Artisan roasting to unlock each bean's full flavor potential.",
    coff_process_brew_desc: "Precision brewing techniques for the perfect extraction.",
    coff_process_savor_desc: "An experience that transcends the ordinary — pure indulgence.",
    coco_product1_desc: 'Cold-pressed, unrefined. The purest expression of tropical coconut.',
    coco_product2_desc: 'Delicately balanced, sourced from select highland coconut groves.',
    coco_product3_desc: 'Low-glycemic, artisan-crafted sweetener with rich caramel undertones.',
    coco_process_cultivate_desc: "Sustainably grown in Indonesia's pristine tropical coastal groves.",
    coco_process_extract_desc: 'Gentle cold-press extraction preserving all natural goodness.',
    coco_process_certify_desc: 'Rigorous quality standards ensuring organic, sustainable purity.',
    coco_process_enjoy_desc: 'Pure tropical nourishment — for body, skin, and culinary artistry.',
    shop_now: 'Shop Now',
    footer_tagline: 'Crafting premium Indonesian heritage, one sip at a time.',
    footer_brands: 'Brands', footer_company: 'Company', footer_connect: 'Connect',
    company_subtitle: 'About Us', company_hero_title: 'Raga Isod Nusantara',
    company_hero_desc: "Planting Hope, Managing Diversity. Integrating the wealth of Nusantara's natural resources with inclusive values.",
    our_heritage: 'Genesis & Evolution', company_story_title: 'From Idea to Economic Sovereignty',
    company_story_desc1: 'Our journey began in 2017 in Bekasi City as a youth movement dedicated to inclusivity studies, establishing the Indonesian School of Diversity (ISOD).',
    company_story_desc2: 'The year 2025 marks our grand transformation. Raga ISOD Nusantara channels these inclusive values into productive economic sectors.',
    philosophy_label: 'Name Philosophy', philosophy_title: 'Unity of Thought & Action',
    phil_raga: 'Represents the living organizational body that moves, operates, and acts tangibly within an inclusive environment.',
    phil_isod: 'Our soul and intellectual compass. A knowledge hub ensuring every corporate milestone is grounded in social justice and mutual respect.',
    phil_nusantara: 'The geographical and cultural space where we are deeply rooted. The land where biodiversity and humanity converge to unlock infinite potential.',
    global_vision_label: 'Global Vision', global_vision_title: 'An Ethical Supply Chain for the World',
    global_vision_desc: "We bring Nusantara's premium commodities to the global market with the highest standards of integrity.",
    nav_activity: 'Activity', company_activity_title: 'Our Latest Endeavors',
    activity_1_title: 'Sustainable Farming Summit', activity_1_desc: 'Bringing together agricultural innovators to share sustainable practices.',
    activity_2_title: 'Community Harvest Festival', activity_2_desc: 'Celebrating the dedication of our farming communities with cultural events.',
    activity_3_title: 'International Trade Expo', activity_3_desc: "Showcasing Indonesia's finest coffee and coconut products to global markets.",
    company_cta_title: 'Join Our Journey', company_cta_desc: 'Become part of a movement that celebrates diversity, empowers farming communities, and delivers nature\'s finest to the world stage.',
    explore_coffee: 'Explore Coffee', explore_coconut: 'Explore Coconut', explore_brand: 'Explore Brand →',
    company_brand_coffee_desc: 'Premium Indonesian single-origin and blended coffees, roasted to perfection.',
    company_brand_coconut_desc: "Pure, sustainable coconut products crafted from Indonesia's finest harvests.",
  },
  id: {
    nav_brand: 'Brand', nav_about: 'Tentang Kami', nav_activity: 'Aktivitas', nav_shop: 'Toko',
    coffee_subtitle: 'Kopi Premium', coffee_desc: 'Temukan warisan kopi Indonesia yang kaya, diracik dengan penuh semangat dan presisi.',
    coffee_cta: 'Jelajahi Kopi →', coconut_subtitle: 'Kelapa Premium',
    coconut_desc: 'Rasakan kesegaran tropis kelapa Indonesia, anugerah terbaik dari alam.',
    coconut_cta: 'Jelajahi Kelapa →',
    coffeenesia_hero_desc: 'Dari dataran tinggi vulkanik Indonesia ke cangkir Anda — setiap tegukan menceritakan kisah warisan, keahlian, dan kualitas tak tertandingi.',
    coffeenesia_hero_cta: 'Temukan Kopi Kami',
    coconesia_hero_desc: 'Dari perkebunan kelapa Indonesia yang disinari matahari — murni, berkelanjutan, dan diracik untuk mereka yang mencari permata tropis terbaik.',
    coconesia_hero_cta: 'Temukan Kelapa Kami',
    our_story: 'Kisah Kami', our_products: 'Produk Kami', our_process: 'Proses Kami',
    scroll_down: 'Gulir ke Bawah',
    coffeenesia_story_title: 'Berakar pada Kekayaan Tanah Indonesia',
    coffeenesia_story_desc: 'Nuri Coffeenesia lahir dari rasa hormat yang mendalam terhadap warisan kopi Indonesia. Biji kopi kami dipilih tangan dari perkebunan terbaik di Sumatra, Jawa, dan Sulawesi.',
    coffeenesia_story_desc2: 'Setiap langkah, dari buah ceri hingga cangkir, dipandu oleh pengrajin ahli yang memahami bahwa kopi hebat tidak hanya diproduksi — melainkan dibuat dengan kesabaran dan komitmen.',
    coffeenesia_products_title: 'Diracik untuk Lidah yang Pilih',
    coffeenesia_process_title: 'Dari Biji ke Cangkir',
    coffeenesia_cta_title: 'Mulai Perjalanan Kopi Anda',
    coffeenesia_cta_desc: 'Rasakan esensi budaya kopi Indonesia — di mana setiap cangkir menghubungkan Anda dengan tradisi berabad-abad.',
    coconesia_story_title: 'Dibesarkan oleh Matahari Tropis',
    coconesia_story_desc: 'Nuri Coconesia merayakan keberagaman luar biasa warisan kelapa Indonesia. Dari perkebunan pesisir yang masih alami ke meja makan Anda.',
    coconesia_story_desc2: 'Setiap panen adalah bukti praktik pertanian berkelanjutan, bekerja sama dengan komunitas lokal yang telah membudidayakan kelapa selama generasi.',
    coconesia_products_title: 'Persembahan Terbaik Alam',
    coconesia_process_title: 'Dari Kebun ke Kebaikan',
    coconesia_cta_title: 'Rangkul Esensi Tropis',
    coconesia_cta_desc: 'Temukan keberagaman luar biasa warisan kelapa Indonesia — berkelanjutan, murni, dan dibuat dengan penuh perhatian.',
    process_harvest: 'Panen', process_roast: 'Sangrai', process_brew: 'Seduh', process_savor: 'Nikmati',
    process_cultivate: 'Budidaya', process_extract: 'Ekstrak', process_certify: 'Sertifikasi', process_enjoy: 'Nikmati',
    coff_product1_desc: 'Bertubuh penuh dengan kedalaman tanah, sentuhan cokelat gelap dan nuansa herbal.',
    coff_product2_desc: 'Halus dan seimbang, perpaduan harmonis biji Jawa dan Sulawesi.',
    coff_product3_desc: 'Eksotis dan kompleks, dengan keasaman yang hidup dan akhir rasa buah yang bertahan.',
    coff_process_harvest_desc: 'Dipetik tangan saat kematangan puncak dari dataran tinggi Indonesia.',
    coff_process_roast_desc: 'Pemanggangan artisan untuk membuka potensi rasa penuh setiap biji.',
    coff_process_brew_desc: 'Teknik penyeduhan presisi untuk ekstraksi yang sempurna.',
    coff_process_savor_desc: 'Pengalaman yang melampaui biasa — kemewahan murni.',
    coco_product1_desc: 'Cold-pressed, tidak dimurnikan. Ekspresi kelapa tropis yang paling murni.',
    coco_product2_desc: 'Seimbang dan halus, bersumber dari perkebunan kelapa dataran tinggi pilihan.',
    coco_product3_desc: 'Pemanis artisan indeks glikemik rendah dengan nuansa karamel kaya.',
    coco_process_cultivate_desc: 'Ditanam secara berkelanjutan di perkebunan pesisir tropis Indonesia yang masih alami.',
    coco_process_extract_desc: 'Ekstraksi cold-press lembut yang mempertahankan semua kebaikan alami.',
    coco_process_certify_desc: 'Standar kualitas ketat yang memastikan kemurnian organik dan berkelanjutan.',
    coco_process_enjoy_desc: 'Nutrisi tropis murni — untuk tubuh, kulit, dan seni kuliner.',
    shop_now: 'Beli Sekarang',
    footer_tagline: 'Meracik warisan premium Indonesia, satu tegukan dalam satu waktu.',
    footer_brands: 'Brand', footer_company: 'Perusahaan', footer_connect: 'Hubungi',
    company_subtitle: 'Tentang Kami', company_hero_title: 'Raga Isod Nusantara',
    company_hero_desc: 'Menanam Harapan, Mengelola Keberagaman. Mengintegrasikan kekayaan sumber daya alam Nusantara dengan nilai-nilai inklusif.',
    our_heritage: 'Asal Usul & Evolusi', company_story_title: 'Dari Ide Menuju Kedaulatan Ekonomi',
    company_story_desc1: 'Perjalanan kami dimulai pada 2017 di Kota Bekasi sebagai gerakan pemuda yang berdedikasi pada studi inklusivitas, mendirikan Indonesian School of Diversity (ISOD).',
    company_story_desc2: 'Tahun 2025 menandai transformasi besar kami. Raga ISOD Nusantara menyalurkan nilai-nilai inklusif ini ke sektor ekonomi produktif.',
    philosophy_label: 'Filosofi Nama', philosophy_title: 'Kesatuan Pikiran & Tindakan',
    phil_raga: 'Mewakili tubuh organisasi yang hidup, bergerak, beroperasi, dan bertindak nyata dalam lingkungan yang inklusif.',
    phil_isod: 'Jiwa dan kompas intelektual kami. Pusat pengetahuan yang memastikan setiap pencapaian perusahaan didasarkan pada keadilan sosial.',
    phil_nusantara: 'Ruang geografis dan budaya tempat kami berakar. Tanah di mana keanekaragaman hayati dan kemanusiaan bertemu untuk membuka potensi tak terbatas.',
    global_vision_label: 'Visi Global', global_vision_title: 'Rantai Pasokan Etis untuk Dunia',
    global_vision_desc: 'Kami membawa komoditas premium Nusantara ke pasar global dengan standar integritas tertinggi.',
    company_activity_title: 'Karya Terbaru Kami',
    activity_1_title: 'Summit Pertanian Berkelanjutan', activity_1_desc: 'Mempertemukan inovator pertanian untuk berbagi praktik berkelanjutan.',
    activity_2_title: 'Festival Panen Komunitas', activity_2_desc: 'Merayakan dedikasi komunitas pertanian kami dengan acara budaya.',
    activity_3_title: 'Pameran Dagang Internasional', activity_3_desc: 'Memamerkan produk kopi dan kelapa terbaik Indonesia ke pasar global.',
    company_cta_title: 'Bergabunglah dalam Perjalanan Kami', company_cta_desc: 'Jadilah bagian dari gerakan yang merayakan keberagaman, memberdayakan komunitas petani, dan menghadirkan yang terbaik dari alam ke panggung dunia.',
    explore_coffee: 'Jelajahi Kopi', explore_coconut: 'Jelajahi Kelapa', explore_brand: 'Jelajahi Brand →',
    company_brand_coffee_desc: 'Kopi single-origin dan blend premium Indonesia, disangrai dengan sempurna.',
    company_brand_coconut_desc: 'Produk kelapa murni dan berkelanjutan dari panen terbaik Indonesia.',
  }
};

function initLanguage() {
  const btn = qs('#langToggle');
  const label = qs('#langLabel');
  if (!btn) return;

  let lang = localStorage.getItem('lang') || 'en';
  applyLang(lang);

  btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'id' : 'en';
    localStorage.setItem('lang', lang);
    applyLang(lang);
  });

  function applyLang(l) {
    label.textContent = l === 'en' ? 'ID' : 'EN';
    const t = translations[l];
    qsa('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });
  }
}

/* ── Parallax Hero BG ── */
function initParallax() {
  const hero = qs('.brand-hero');
  const bg = qs('.brand-hero-bg');
  if (!bg) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      // only translate the hero while it is still on screen
      if (y < window.innerHeight) {
        bg.style.transform = `translateY(${y * 0.3}px)`;
      }
      ticking = false;
    });
  }, { passive: true });

  // pause the Ken-Burns zoom whenever the hero is scrolled out of view
  if (hero && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      entries.forEach(e => bg.classList.toggle('anim-paused', !e.isIntersecting));
    }, { threshold: 0 }).observe(hero);
  }
}

/* ── Landing Page Canvas Particles (Three.js-style via Canvas 2D) ── */
function initLandingCanvas() {
  const canvas = qs('#bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -1000, y: -1000 };

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  const isLeft = i => particles[i].x < W / 2;

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.4 + 0.1;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.01 + Math.random() * 0.02;
    }
    update() {
      this.pulse += this.pulseSpeed;
      this.x += this.speedX;
      this.y += this.speedY;

      // Mouse repulsion
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        const force = (100 - dist) / 100;
        this.x += (dx / dist) * force * 1.5;
        this.y += (dy / dist) * force * 1.5;
      }

      if (this.x < -10) this.x = W + 10;
      if (this.x > W + 10) this.x = -10;
      if (this.y < -10) this.y = H + 10;
      if (this.y > H + 10) this.y = -10;
    }
    draw(idx) {
      const a = this.alpha * (0.7 + 0.3 * Math.sin(this.pulse));
      const left = this.x < W / 2;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = left
        ? `rgba(201,169,110,${a})`
        : `rgba(78,200,130,${a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 180; i++) particles.push(new Particle());

  // Connection lines
  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) {
          const alpha = (1 - d / 90) * 0.08;
          const left = (particles[i].x + particles[j].x) / 2 < W / 2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = left
            ? `rgba(201,169,110,${alpha})`
            : `rgba(78,200,130,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    drawLines();
    particles.forEach((p, i) => { p.update(); p.draw(i); });
    requestAnimationFrame(animate);
  }
  animate();
}

/* ── Split Panel 3D Tilt ── */
function initSplitTilt() {
  const panels = qsa('.split-panel');
  panels.forEach(panel => {
    const content = panel.querySelector('.split-content');
    if (!content) return;

    panel.addEventListener('mousemove', e => {
      const rect = panel.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = (e.clientY - cy) / rect.height * 8;
      const ry = (cx - e.clientX) / rect.width * 8;
      content.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px)`;
    });

    panel.addEventListener('mouseleave', () => {
      content.style.transform = '';
      content.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)';
      setTimeout(() => { content.style.transition = ''; }, 600);
    });
  });
}

/* ── 3D Card Tilt ── */
function initCardTilt() {
  qsa('.product-card, .vision-card, .activity-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const rx = (e.clientY - cy) / rect.height * 10;
      const ry = (cx - e.clientX) / rect.width * 10;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(20px) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s, border-color 0.4s';
      card.style.transform = '';
      setTimeout(() => { card.style.transition = ''; }, 600);
    });
  });
}

/* ── Counter Animation ── */
function initCounters() {
  const counters = qsa('.stat-number[data-count]');
  if (!counters.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let start = 0;
      const duration = 1800;
      const step = timestamp => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => obs.observe(c));
}

/* ── Floating particles for brand hero ── */
function initHeroParticles() {
  const hero = qs('.brand-hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2;opacity:0.5;';
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H, pts = [];

  const isGreen = document.body.classList.contains('coconesia-page');
  const color = isGreen ? '78,200,130' : '201,169,110';

  function resize() {
    W = canvas.width = hero.offsetWidth;
    H = canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  for (let i = 0; i < 60; i++) {
    pts.push({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -Math.random() * 0.4 - 0.1,
      a: Math.random() * 0.5 + 0.1,
      p: Math.random() * Math.PI * 2
    });
  }

  function frame() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.p += 0.015;
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
      if (p.x < -5) p.x = W + 5;
      if (p.x > W + 5) p.x = -5;
      const a = p.a * (0.6 + 0.4 * Math.sin(p.p));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${a})`;
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  frame();
}

/* ── Smooth Scroll for anchor links ── */
function initSmoothScroll() {
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ── 3D Text Effect on Hero Title ── */
function initHero3DText() {
  const title = qs('.split-title, .brand-hero-title');
  if (!title) return;
  // subtle shadow depth animation
  let tick = 0;
  function frame() {
    tick += 0.02;
    const ox = Math.sin(tick) * 2;
    const oy = Math.cos(tick * 0.7) * 2;
    // Only for solid color (not gradient text)
    if (!title.classList.contains('brand-hero-title')) {
      title.style.textShadow =
        `${ox}px ${oy}px 0 rgba(0,0,0,0.4),
         ${ox*2}px ${oy*2}px 0 rgba(0,0,0,0.2),
         0 16px 48px rgba(0,0,0,0.5)`;
    }
    requestAnimationFrame(frame);
  }
  frame();
}

/* ── Noise overlay ── */
function addNoiseOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'noise-overlay';
  document.body.appendChild(overlay);
}

/* ── Init Everything ── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initCursor();
  initHeader();
  initMobileMenu();
  initReveal();
  initLanguage();
  initParallax();
  initLandingCanvas();
  initSplitTilt();
  initCardTilt();
  initCounters();
  initHeroParticles();
  initSmoothScroll();
  addNoiseOverlay();
});

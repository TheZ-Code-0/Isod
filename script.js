/* ================================================
   NURI GLOBAL — Main JavaScript
   Language Switcher · Animations · Navigation
   ================================================ */

// ==========================================
// LANGUAGE SYSTEM
// ==========================================
const translations = {
    en: {
        // Navigation
        'nav.about': 'About Us',
        'nav.activity': 'Activity',
        'nav.shop': 'Shop',
        'nav.back': 'Back',

        // Landing Page
        'landing.coffee.title': 'Nuri Coffenesia',
        'landing.coffee.tagline': 'The Soul of Indonesian Coffee',
        'landing.coffee.cta': 'Explore Brand',
        'landing.coconut.title': 'Nuri Coconutnesia',
        'landing.coconut.tagline': 'The Essence of Tropical Coconut',
        'landing.coconut.cta': 'Explore Brand',

        // Coffenesia
        'coffee.hero.label': 'Established 2018',
        'coffee.hero.title': 'Nuri Coffenesia',
        'coffee.hero.subtitle': 'From the volcanic highlands of Indonesia to your cup — experience the authentic taste of nature\'s finest coffee.',
        'coffee.about.label': 'Our Heritage',
        'coffee.about.title': 'A Legacy Brewed in Tradition',
        'coffee.about.desc1': 'Nuri Coffenesia was born from a deep reverence for Indonesia\'s centuries-old coffee heritage. The archipelago\'s unique volcanic soil and tropical climate create the perfect conditions for growing some of the world\'s finest coffee beans.',
        'coffee.about.desc2': 'From the highlands of Sumatra to the slopes of Java, our journey began with a simple mission: to bring the authentic taste of Indonesian coffee to the world while empowering the local farming communities that make it possible.',
        'coffee.about.f1.title': 'Premium Arabica',
        'coffee.about.f1.desc': 'Sourced from highland farms at 1,200m+ elevation',
        'coffee.about.f2.title': 'Artisan Roasting',
        'coffee.about.f2.desc': 'Traditional roasting with modern precision',
        'coffee.about.f3.title': 'Community First',
        'coffee.about.f3.desc': 'Direct trade supporting 500+ local farmers',
        'coffee.products.label': 'Our Collection',
        'coffee.products.title': 'Signature Coffee Products',
        'coffee.products.desc': 'Each blend tells a story of its origin, carefully crafted to deliver an unparalleled coffee experience.',
        'coffee.p1.name': 'Sumatra Mandheling',
        'coffee.p1.desc': 'Full-bodied with earthy chocolate notes and a silky finish',
        'coffee.p2.name': 'Java Robusta Premium',
        'coffee.p2.desc': 'Bold and intense with smoky caramel undertones',
        'coffee.p3.name': 'Toraja Sapan',
        'coffee.p3.desc': 'Rich and complex with dark fruit and spice accents',
        'coffee.p4.name': 'Gayo Highland',
        'coffee.p4.desc': 'Clean and bright with floral honey sweetness',
        'coffee.p5.name': 'Bali Kintamani',
        'coffee.p5.desc': 'Vibrant citrus acidity with a smooth nutty body',
        'coffee.p6.name': 'Liberica Rarest Blend',
        'coffee.p6.desc': 'Exotic and unique with tropical mango and woody aroma',
        'coffee.activity.label': 'What We Do',
        'coffee.activity.title': 'Our Activities',
        'coffee.activity.desc': 'Beyond coffee, we cultivate communities and preserve traditions.',
        'coffee.a1.title': 'Sustainable Farming',
        'coffee.a1.desc': 'Organic cultivation methods that protect the ecosystem and enhance bean quality.',
        'coffee.a2.title': 'Artisan Roasting',
        'coffee.a2.desc': 'Small-batch roasting to unlock each bean\'s unique flavor profile.',
        'coffee.a3.title': 'Farmer Education',
        'coffee.a3.desc': 'Training programs empowering the next generation of coffee growers.',
        'coffee.a4.title': 'Global Distribution',
        'coffee.a4.desc': 'Bringing Indonesian coffee heritage to tables across 25+ countries.',
        'coffee.shop.label': 'Order Now',
        'coffee.shop.title': 'Ready to Taste Excellence?',
        'coffee.shop.desc': 'Place your order directly via email. We deliver worldwide with care and precision.',
        'coffee.shop.btn': 'Order via Email',
        'coffee.badge.number': '6+',
        'coffee.badge.text': 'Years of Heritage',

        // Coconutnesia
        'coconut.hero.label': 'Established 2020',
        'coconut.hero.title': 'Nuri Coconutnesia',
        'coconut.hero.subtitle': 'Harnessing the versatility of the tropical coconut — nature\'s gift for wellness, beauty, and sustenance.',
        'coconut.about.label': 'Our Story',
        'coconut.about.title': 'From the Tree of Life',
        'coconut.about.desc1': 'Nuri Coconutnesia emerged from the lush tropical landscapes of Indonesia, where the coconut tree is revered as the "tree of life." For generations, Indonesian communities have harnessed the versatility of coconuts.',
        'coconut.about.desc2': 'Our mission is to share this incredible natural resource with the world while supporting sustainable farming practices and preserving the traditional knowledge of our coconut farming communities.',
        'coconut.about.f1.title': '100% Organic',
        'coconut.about.f1.desc': 'Naturally grown without chemicals or pesticides',
        'coconut.about.f2.title': 'Cold-Pressed',
        'coconut.about.f2.desc': 'Raw processing preserving all natural nutrients',
        'coconut.about.f3.title': 'Eco Packaging',
        'coconut.about.f3.desc': 'Sustainable packaging reducing environmental impact',
        'coconut.products.label': 'Our Products',
        'coconut.products.title': 'Premium Coconut Products',
        'coconut.products.desc': 'Pure, natural, and sustainable — every product reflects our commitment to quality.',
        'coconut.p1.name': 'Virgin Coconut Oil',
        'coconut.p1.desc': 'Cold-pressed premium oil for cooking and wellness',
        'coconut.p2.name': 'Coconut Water Premium',
        'coconut.p2.desc': 'Fresh natural hydration packed with electrolytes',
        'coconut.p3.name': 'Organic Coconut Sugar',
        'coconut.p3.desc': 'Low-glycemic natural sweetener from coconut nectar',
        'coconut.p4.name': 'Coconut Milk Fresh',
        'coconut.p4.desc': 'Rich and creamy for culinary and beverage use',
        'coconut.p5.name': 'Desiccated Coconut',
        'coconut.p5.desc': 'Fine-grade shredded coconut for baking and cooking',
        'coconut.p6.name': 'Coconut Flour',
        'coconut.p6.desc': 'Gluten-free flour alternative high in fiber',
        'coconut.activity.label': 'Our Impact',
        'coconut.activity.title': 'Activities & Initiatives',
        'coconut.activity.desc': 'Sustainability and community are at the heart of everything we do.',
        'coconut.a1.title': 'Coconut Cultivation',
        'coconut.a1.desc': 'Partnering with 300+ farmers for sustainable coconut harvesting.',
        'coconut.a2.title': 'Processing Innovation',
        'coconut.a2.desc': 'State-of-the-art facilities ensuring maximum quality and freshness.',
        'coconut.a3.title': 'Environmental Care',
        'coconut.a3.desc': 'Zero-waste processing with full coconut utilization methods.',
        'coconut.a4.title': 'Community Uplift',
        'coconut.a4.desc': 'Education and healthcare programs for farming families.',
        'coconut.shop.label': 'Get Yours',
        'coconut.shop.title': 'Experience Nature\'s Finest',
        'coconut.shop.desc': 'Order directly via email. Pure coconut goodness delivered to your doorstep.',
        'coconut.shop.btn': 'Order via Email',
        'coconut.badge.number': '300+',
        'coconut.badge.text': 'Partner Farmers',

        // Footer
        'footer.desc.coffee': 'Bringing the authentic taste of Indonesian coffee to the world, one cup at a time.',
        'footer.desc.coconut': 'Sharing the versatility of Indonesian coconuts with the world, sustainably.',
        'footer.quicklinks': 'Quick Links',
        'footer.contact': 'Contact',
        'footer.follow': 'Follow Us',
        'footer.rights': 'All rights reserved.',

        // Scroll
        'scroll.down': 'Scroll Down',
    },
    id: {
        // Navigation
        'nav.about': 'Tentang Kami',
        'nav.activity': 'Aktivitas',
        'nav.shop': 'Toko',
        'nav.back': 'Kembali',

        // Landing Page
        'landing.coffee.title': 'Nuri Coffenesia',
        'landing.coffee.tagline': 'Jiwa Kopi Indonesia',
        'landing.coffee.cta': 'Jelajahi Brand',
        'landing.coconut.title': 'Nuri Coconutnesia',
        'landing.coconut.tagline': 'Essensi Kelapa Tropis',
        'landing.coconut.cta': 'Jelajahi Brand',

        // Coffenesia
        'coffee.hero.label': 'Berdiri 2018',
        'coffee.hero.title': 'Nuri Coffenesia',
        'coffee.hero.subtitle': 'Dari dataran tinggi vulkanik Indonesia hingga cangkir Anda — rasakan keaslian cita rasa kopi terbaik alam.',
        'coffee.about.label': 'Warisan Kami',
        'coffee.about.title': 'Warisan yang Diseduh dalam Tradisi',
        'coffee.about.desc1': 'Nuri Coffenesia lahir dari penghormatan mendalam terhadap warisan kopi Indonesia yang telah berusia berabad-abad. Tanah vulkanik dan iklim tropis kepulauan menciptakan kondisi sempurna untuk menumbuhkan biji kopi terbaik dunia.',
        'coffee.about.desc2': 'Dari dataran tinggi Sumatra hingga lereng Jawa, perjalanan kami dimulai dengan misi sederhana: membawa cita rasa kopi Indonesia yang otentik ke dunia sekaligus memberdayakan komunitas petani lokal.',
        'coffee.about.f1.title': 'Arabika Premium',
        'coffee.about.f1.desc': 'Ber-asal dari perkebunan dataran tinggi ketinggian 1.200m+',
        'coffee.about.f2.title': 'Sangrai Artisan',
        'coffee.about.f2.desc': 'Sangrai tradisional dengan presisi modern',
        'coffee.about.f3.title': 'Komunitas Utama',
        'coffee.about.f3.desc': 'Perdagangan langsung mendukung 500+ petani lokal',
        'coffee.products.label': 'Koleksi Kami',
        'coffee.products.title': 'Produk Kopi Unggulan',
        'coffee.products.desc': 'Setiap racikan menceritakan asal-usulnya, dirancang dengan cermat untuk pengalaman kopi yang tak tertandingi.',
        'coffee.p1.name': 'Sumatra Mandheling',
        'coffee.p1.desc': 'Berbadan penuh dengan nota cokelat bumi dan akhiran halus',
        'coffee.p2.name': 'Java Robusta Premium',
        'coffee.p2.desc': 'Tegas dan intens dengan undertone karamel berasap',
        'coffee.p3.name': 'Toraja Sapan',
        'coffee.p3.desc': 'Kaya dan kompleks dengan aksen buah gelap dan rempah',
        'coffee.p4.name': 'Gayo Highland',
        'coffee.p4.desc': 'Bersih dan cerah dengan kemanisan madu bunga',
        'coffee.p5.name': 'Bali Kintamani',
        'coffee.p5.desc': 'Keasaman sitrus cerah dengan body kacang halus',
        'coffee.p6.name': 'Liberica Rarest Blend',
        'coffee.p6.desc': 'Eksotis dan unik dengan aroma mangga tropis dan kayu',
        'coffee.activity.label': 'Apa Yang Kami Lakukan',
        'coffee.activity.title': 'Aktivitas Kami',
        'coffee.activity.desc': 'Di luar kopi, kami membina komunitas dan melestarikan tradisi.',
        'coffee.a1.title': 'Pertanian Berkelanjutan',
        'coffee.a1.desc': 'Metode budidaya organik yang melindungi ekosistem dan meningkatkan kualitas biji.',
        'coffee.a2.title': 'Sangrai Artisan',
        'coffee.a2.desc': 'Sangrai skala kecil untuk membuka profil rasa unik setiap biji.',
        'coffee.a3.title': 'Pendidikan Petani',
        'coffee.a3.desc': 'Program pelatihan memberdayakan generasi petani kopi berikutnya.',
        'coffee.a4.title': 'Distribusi Global',
        'coffee.a4.desc': 'Membawa warisan kopi Indonesia ke meja di 25+ negara.',
        'coffee.shop.label': 'Pesan Sekarang',
        'coffee.shop.title': 'Siap Merasakan Keunggulan?',
        'coffee.shop.desc': 'Pesan langsung melalui email. Kami mengirim ke seluruh dunia dengan penuh perhatian.',
        'coffee.shop.btn': 'Pesan via Email',
        'coffee.badge.number': '6+',
        'coffee.badge.text': 'Tahun Warisan',

        // Coconutnesia
        'coconut.hero.label': 'Berdiri 2020',
        'coconut.hero.title': 'Nuri Coconutnesia',
        'coconut.hero.subtitle': 'Memanfaatkan keajaiban kelapa tropis — hadiah alam untuk kesehatan, kecantikan, dan kehidupan.',
        'coconut.about.label': 'Cerita Kami',
        'coconut.about.title': 'Dari Pohon Kehidupan',
        'coconut.about.desc1': 'Nuri Coconutnesia muncul dari lanskap tropis Indonesia yang subur, di mana pohon kelapa dihormati sebagai "pohon kehidupan." Selama turun temurun, masyarakat Indonesia memanfaatkan kelapa.',
        'coconut.about.desc2': 'Misi kami adalah berbagi sumber daya alam ini dengan dunia sekaligus mendukung praktik pertanian berkelanjutan dan melestarikan pengetahuan tradisional komunitas petani kelapa.',
        'coconut.about.f1.title': '100% Organik',
        'coconut.about.f1.desc': 'Ditanam secara alami tanpa bahan kimia atau pestisida',
        'coconut.about.f2.title': 'Cold-Pressed',
        'coconut.about.f2.desc': 'Proses mentah mempertahankan semua nutrisi alami',
        'coconut.about.f3.title': 'Kemasan Ekologis',
        'coconut.about.f3.desc': 'Kemasan berkelanjutan mengurangi dampak lingkungan',
        'coconut.products.label': 'Produk Kami',
        'coconut.products.title': 'Produk Kelapa Premium',
        'coconut.products.desc': 'Murni, alami, dan berkelanjutan — setiap produk mencerminkan komitmen kami terhadap kualitas.',
        'coconut.p1.name': 'Minyak Kelapa Virgin',
        'coconut.p1.desc': 'Minyak premium cold-pressed untuk memasak dan kesehatan',
        'coconut.p2.name': 'Air Kelapa Premium',
        'coconut.p2.desc': 'Hidrasi alami segar kaya elektrolit',
        'coconut.p3.name': 'Gula Kelapa Organik',
        'coconut.p3.desc': 'Pemanis alami rendah glikemik dari nira kelapa',
        'coconut.p4.name': 'Santan Kelapa Segar',
        'coconut.p4.desc': 'Kaya dan krem untuk kuliner dan minuman',
        'coconut.p5.name': 'Kelapa Parut Kering',
        'coconut.p5.desc': 'Kelapa parut kelas fine untuk memanggang dan memasak',
        'coconut.p6.name': 'Tepung Kelapa',
        'coconut.p6.desc': 'Tepung bebas gluten tinggi serat',
        'coconut.activity.label': 'Dampak Kami',
        'coconut.activity.title': 'Aktivitas & Inisiatif',
        'coconut.activity.desc': 'Keberlanjutan dan komunitas adalah jantung dari segala yang kami lakukan.',
        'coconut.a1.title': 'Budidaya Kelapa',
        'coconut.a1.desc': 'Bermitra dengan 300+ petani untuk panen kelapa berkelanjutan.',
        'coconut.a2.title': 'Inovasi Pengolahan',
        'coconut.a2.desc': 'Fasilitas modern memastikan kualitas dan kesegaran maksimal.',
        'coconut.a3.title': 'Peduli Lingkungan',
        'coconut.a3.desc': 'Pengolahan tanpa limbah dengan pemanfaatan kelapa sepenuhnya.',
        'coconut.a4.title': 'Pemberdayaan Komunitas',
        'coconut.a4.desc': 'Program pendidikan dan kesehatan untuk keluarga petani.',
        'coconut.shop.label': 'Dapatkan Milikmu',
        'coconut.shop.title': 'Rasakan Yang Terbaik dari Alam',
        'coconut.shop.desc': 'Pesan langsung melalui email. Kebaikan kelapa murni sampai ke ambang pintu Anda.',
        'coconut.shop.btn': 'Pesan via Email',
        'coconut.badge.number': '300+',
        'coconut.badge.text': 'Petani Mitra',

        // Footer
        'footer.desc.coffee': 'Membawa cita rasa kopi Indonesia yang otentik ke dunia, satu cangkir pada satu waktu.',
        'footer.desc.coconut': 'Berbagi keajaiban kelapa Indonesia dengan dunia, secara berkelanjutan.',
        'footer.quicklinks': 'Tautan Cepat',
        'footer.contact': 'Kontak',
        'footer.follow': 'Ikuti Kami',
        'footer.rights': 'Hak cipta dilindungi.',

        // Scroll
        'scroll.down': 'Gulir ke Bawah',
    }
};

let currentLang = localStorage.getItem('nuri-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nuri-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'id' : 'en');
}

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================
function initHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        header.classList.toggle('scrolled', scrollY > 60);
        lastScroll = scrollY;
    }, { passive: true });
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ==========================================
// SMOOTH ANCHOR SCROLLING
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// ==========================================
// LANDING PAGE HOVER
// ==========================================
function initLandingPage() {
    const sides = document.querySelectorAll('.landing-side');
    if (!sides.length) return;

    sides.forEach(side => {
        side.addEventListener('click', function () {
            const overlay = document.querySelector('.page-transition');
            if (!overlay) {
                const link = this.dataset.link;
                if (link) window.location.href = link;
                return;
            }

            const theme = this.dataset.theme;
            overlay.className = 'page-transition active page-transition--' + theme;

            setTimeout(() => {
                const link = this.dataset.link;
                if (link) window.location.href = link;
            }, 600);
        });
    });
}

// ==========================================
// ORDER VIA EMAIL
// ==========================================
function orderProduct(productName) {
    const lang = currentLang;
    const subject = lang === 'id'
        ? `Pertanyaan Pesanan - ${productName}`
        : `Order Inquiry - ${productName}`;

    const body = lang === 'id'
        ? `Halo Nuri Global,\n\nSaya tertarik untuk memesan:\n\nProduk: ${productName}\nJumlah: \nNama: \nAlamat: \nNomor Telepon: \n\nTerima kasih.`
        : `Hello Nuri Global,\n\nI would like to place an order for:\n\nProduct: ${productName}\nQuantity: \nName: \nAddress: \nPhone: \n\nThank you.`;

    // 🔧 CHANGE THIS EMAIL to your actual order email
    const email = 'order@nuriglobal.com';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function orderGeneral() {
    const lang = currentLang;
    const brand = document.body.classList.contains('theme-coffee') ? 'Coffenesia' : 'Coconutnesia';
    const subject = lang === 'id'
        ? `Pertanyaan Pesanan - Nuri ${brand}`
        : `Order Inquiry - Nuri ${brand}`;

    const body = lang === 'id'
        ? `Halo Nuri ${brand},\n\nSaya tertarik untuk memesan produk Anda.\n\nNama: \nAlamat: \nNomor Telepon: \nProduk yang diinginkan: \nJumlah: \n\nTerima kasih.`
        : `Hello Nuri ${brand},\n\nI am interested in ordering your products.\n\nName: \nAddress: \nPhone: \nDesired Products: \nQuantity: \n\nThank you.`;

    // 🔧 CHANGE THIS EMAIL to your actual order email
    const email = 'order@nuriglobal.com';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ==========================================
// PARALLAX SUBTLE EFFECT
// ==========================================
function initParallax() {
    const heroBgs = document.querySelectorAll('.hero-bg');
    if (!heroBgs.length) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroBgs.forEach(bg => {
            if (bg) {
                bg.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
        });
    }, { passive: true });
}

// ==========================================
// INIT ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initSmoothScroll();
    initLandingPage();
    initParallax();

    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Order buttons
    document.querySelectorAll('[data-order]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            orderProduct(btn.dataset.order);
        });
    });

    document.querySelectorAll('[data-order-general]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            orderGeneral();
        });
    });
});
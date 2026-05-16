/* ========================================
   RAGA ISOD NUSANTARA — Script
   ======================================== */

// ========================================
// LANGUAGE SWITCHER
// ========================================

const translations = {
    en: {
        nav_brand: "Brand",
        nav_about: "About Us",
        nav_activity: "Activity",
        nav_shop: "Shop",
        coffee_subtitle: "Premium Coffee",
        coffee_desc: "Discover the rich heritage of Indonesian coffee, crafted with passion and precision.",
        coffee_cta: "Explore Coffee →",
        coconut_subtitle: "Premium Coconut",
        coconut_desc: "Experience the tropical freshness of Indonesian coconut, nature's finest gift.",
        coconut_cta: "Explore Coconut →",
        coffenesia_hero_desc: "From the volcanic highlands of Indonesia to your cup — every sip tells a story of heritage, craftsmanship, and unparalleled quality.",
        coffenesia_hero_cta: "Discover Our Coffee",
        coconesia_hero_desc: "From the sun-kissed coconut groves of Indonesia — pure, sustainable, and crafted for those who seek nature's finest tropical treasures.",
        coconesia_hero_cta: "Discover Our Coconut",
        our_story: "Our Story",
        our_heritage: "Our Heritage",
        coffenesia_story_title: "Rooted in the Richness of Indonesian Soil",
        coffenesia_story_desc: "Nuri Coffenesia was born from a deep reverence for Indonesia's coffee heritage. Our beans are hand-selected from the finest estates across Sumatra, Java, and Sulawesi — each region imparting its unique character, each cup a journey through the archipelago's most treasured landscapes.",
        coffenesia_story_desc2: "Every step, from cherry to cup, is guided by master artisans who understand that great coffee is not merely produced — it is crafted with patience, reverence, and an unwavering commitment to excellence.",
        coconesia_story_title: "Nurtured by the Tropical Sun",
        coconesia_story_desc: "Nuri Coconesia celebrates the extraordinary versatility of Indonesia's coconut heritage. From pristine coastal groves to your table, we transform nature's most versatile fruit into products of exceptional quality and purity.",
        coconesia_story_desc2: "Every harvest is a testament to sustainable farming practices, working hand-in-hand with local communities who have cultivated coconuts for generations, preserving ancestral wisdom while embracing innovation.",
        our_products: "Our Products",
        coffenesia_products_title: "Crafted for the Discerning Palate",
        coconesia_products_title: "Nature's Finest Offerings",
        coff_product1_desc: "Full-bodied with earthy depth, hints of dark chocolate and herbal notes.",
        coff_product2_desc: "Smooth and balanced with a silky finish, caramel sweetness and spice.",
        coff_product3_desc: "Exotic and complex, with vibrant acidity and a lingering fruity finish.",
        coco_product1_desc: "Cold-pressed purity — versatile for culinary, cosmetic, and wellness use.",
        coco_product2_desc: "Naturally hydrating, rich in electrolytes — straight from the coconut.",
        coco_product3_desc: "Low-glycemic, artisan-crafted sweetener with rich caramel undertones.",
        our_process: "Our Process",
        coffenesia_process_title: "From Bean to Cup",
        coconesia_process_title: "From Grove to Goodness",
        process_harvest: "Harvest",
        process_roast: "Roast",
        process_brew: "Brew",
        process_savor: "Savor",
        process_cultivate: "Cultivate",
        process_extract: "Extract",
        process_certify: "Certify",
        process_enjoy: "Enjoy",
        coff_process_harvest_desc: "Hand-picked at peak ripeness from the highlands of Indonesia.",
        coff_process_roast_desc: "Artisan roasting to unlock each bean's full flavor potential.",
        coff_process_brew_desc: "Precision brewing techniques for the perfect extraction.",
        coff_process_savor_desc: "An experience that transcends the ordinary — pure indulgence.",
        coco_process_cultivate_desc: "Sustainably grown in Indonesia's pristine tropical coastal groves.",
        coco_process_extract_desc: "Gentle cold-press extraction preserving all natural goodness.",
        coco_process_certify_desc: "Rigorous quality standards ensuring organic, sustainable purity.",
        coco_process_enjoy_desc: "Pure tropical nourishment — for body, skin, and culinary artistry.",
        coffenesia_cta_title: "Begin Your Coffee Journey",
        coffenesia_cta_desc: "Experience the essence of Indonesian coffee culture — where every cup connects you to a century-old tradition.",
        coconesia_cta_title: "Embrace the Tropical Essence",
        coconesia_cta_desc: "Discover the extraordinary versatility of Indonesia's coconut heritage — sustainable, pure, and crafted with care.",
        company_subtitle: "About Us",
        company_hero_title: "Raga Isod<br>Nusantara",
        company_hero_desc: "Two brands, one vision — to elevate Indonesia's finest natural commodities to the world stage, honoring tradition while embracing the future.",
        our_vision: "Our Vision",
        our_mission: "Our Mission",
        our_values: "Our Values",
        company_vision_desc: "To be the global benchmark for premium Indonesian commodities, inspiring the world through quality, sustainability, and authentic heritage.",
        company_mission_desc: "To empower Indonesian farmers, preserve traditional craftsmanship, and deliver products that honor both people and planet — ensuring every purchase creates a positive impact.",
        company_values_desc: "Integrity in every process. Sustainability in every harvest. Excellence in every product. We believe premium quality flows from genuine care — for land, community, and craft.",
        company_story_title: "Where Heritage Meets Innovation",
        company_story_desc: "Raga Isod Nusantara was founded with a singular passion: to bring Indonesia's extraordinary natural bounty to the world. From the volcanic coffee highlands to the sun-drenched coconut coasts, we seek out the purest, most authentic expressions of this land.",
        company_story_desc2: "Our journey is interwoven with the stories of thousands of farming families across the archipelago. We don't just source ingredients — we build partnerships, preserve traditions, and create sustainable futures for the communities that make our products possible.",
        our_brands: "Our Brands",
        company_brands_title: "Two Pillars of Excellence",
        company_brand_coffee_desc: "Premium Indonesian single-origin and blended coffees, roasted to perfection.",
        company_brand_coconut_desc: "Pure, sustainable coconut products crafted from Indonesia's finest harvests.",
        explore_brand: "Explore Brand →",
        company_activity_title: "Our Latest Endeavors",
        activity_1_title: "Sustainable Farming Summit",
        activity_1_desc: "Bringing together agricultural innovators to share sustainable practices and shape the future of Indonesian farming.",
        activity_2_title: "Community Harvest Festival",
        activity_2_desc: "Celebrating the dedication of our farming communities with cultural events, workshops, and shared gratitude.",
        activity_3_title: "International Trade Expo",
        activity_3_desc: "Showcasing Indonesia's finest coffee and coconut products to global markets and distribution partners.",
        company_cta_title: "Join Our Journey",
        company_cta_desc: "Be part of a movement that celebrates Indonesian heritage, empowers communities, and delivers nature's finest to the world.",
        explore_coffee: "Explore Coffee",
        explore_coconut: "Explore Coconut",
        shop_now: "Shop Now",
        scroll_down: "Scroll Down",
        footer_tagline: "Crafting premium Indonesian heritage, one sip at a time.",
        footer_brands: "Brands",
        footer_company: "Company",
        footer_connect: "Connect"
    },
    id: {
        nav_brand: "Merek",
        nav_about: "Tentang Kami",
        nav_activity: "Aktivitas",
        nav_shop: "Belanja",
        coffee_subtitle: "Kopi Premium",
        coffee_desc: "Temukan kekayaan warisan kopi Indonesia, yang dikemas dengan penuh gairah dan presisi.",
        coffee_cta: "Jelajahi Kopi →",
        coconut_subtitle: "Kelapa Premium",
        coconut_desc: "Rasakan kesegaran tropis kelapa Indonesia, hadiah terbaik dari alam.",
        coconut_cta: "Jelajahi Kelapa →",
        coffenesia_hero_desc: "Dari dataran tinggi vulkanik Indonesia ke cangkir Anda — setiap tegukan menceritakan kisah warisan, keahlian, dan kualitas yang tak tertandingi.",
        coffenesia_hero_cta: "Temukan Kopi Kami",
        coconesia_hero_desc: "Dari perkebunan kelapa yang disinari matahari Indonesia — murni, berkelanjutan, dan dirancang bagi mereka yang mencari harta tropis terbaik dari alam.",
        coconesia_hero_cta: "Temukan Kelapa Kami",
        our_story: "Kisah Kami",
        our_heritage: "Warisan Kami",
        coffenesia_story_title: "Berakar pada Kekayaan Tanah Indonesia",
        coffenesia_story_desc: "Nuri Coffenesia lahir dari penghormatan mendalam terhadap warisan kopi Indonesia. Bijinya dipilih secara manual dari perkebunan terbaik di Sumatera, Jawa, dan Sulawesi — setiap wilayah memberikan karakternya yang unik, setiap cangkir adalah perjalanan melalui lanskap paling berharga di kepulauan ini.",
        coffenesia_story_desc2: "Setiap langkah, dari ceri ke cangkir, dibimbing oleh para maestro yang memahami bahwa kopi hebat bukan sekadar diproduksi — melainkan diracik dengan kesabaran, penghormatan, dan komitmen tanpa kompromi terhadap keunggulan.",
        coconesia_story_title: "Dirawat oleh Matahari Tropis",
        coconesia_story_desc: "Nuri Coconesia merayakan fleksibilitas luar biasa dari warisan kelapa Indonesia. Dari perkebunan pantai yang murni ke meja Anda, kami mengubah buah paling serbaguna dari alam menjadi produk dengan kualitas dan kemurnian yang luar biasa.",
        coconesia_story_desc2: "Setiap panen adalah bukti praktik pertanian berkelanjutan, bekerja bersama komunitas lokal yang telah membudidayakan kelapa selama generasi, melestarikan kearifan nenek moyang sambil merangkul inovasi.",
        our_products: "Produk Kami",
        coffenesia_products_title: "Diracik untuk Lidah yang Taju",
        coconesia_products_title: "Persembahan Terbaik Alam",
        coff_product1_desc: "Penuh badan dengan kedalaman earthy, sentuhan cokelat gelap dan catatan herbal.",
        coff_product2_desc: "Halus dan seimbang dengan akhiran sutra, kemanisan karamel dan rempah.",
        coff_product3_desc: "Eksotis dan kompleks, dengan keasaman cerah dan akhiran buah yang bertahan.",
        coco_product1_desc: "Kemurnian cold-pressed — serbaguna untuk kuliner, kosmetik, dan kesehatan.",
        coco_product2_desc: "Menghidrasi secara alami, kaya elektrolit — langsung dari kelapa.",
        coco_product3_desc: "Pemanis rendah glikemik, buatan tangan dengan sentuhan karamel.",
        our_process: "Proses Kami",
        coffenesia_process_title: "Dari Biji ke Cangkir",
        coconesia_process_title: "Dari Perkebunan ke Kebaikan",
        process_harvest: "Panen",
        process_roast: "Sangrai",
        process_brew: "Seduh",
        process_savor: "Nikmati",
        process_cultivate: "Budidayakan",
        process_extract: "Ekstraksi",
        process_certify: "Sertifikasi",
        process_enjoy: "Nikmati",
        coff_process_harvest_desc: "Dipetik tangan pada puncak kematangan dari dataran tinggi Indonesia.",
        coff_process_roast_desc: "Pengoengan artisan untuk membuka potensi rasa penuh setiap biji.",
        coff_process_brew_desc: "Teknik penyeduhan presisi untuk ekstraksi sempurna.",
        coff_process_savor_desc: "Pengalaman yang melampaui biasa — kemewahan murni.",
        coco_process_cultivate_desc: "Ditanam secara berkelanjutan di perkebunan pantai tropis Indonesia.",
        coco_process_extract_desc: "Ekstraksi cold-press lembut mempertahankan semua kebaikan alami.",
        coco_process_certify_desc: "Standar kualitas ketat memastikan kemurnian organik dan berkelanjutan.",
        coco_process_enjoy_desc: "Nutrisi tropis murni — untuk tubuh, kulit, dan seni kuliner.",
        coffenesia_cta_title: "Mulai Perjalanan Kopi Anda",
        coffenesia_cta_desc: "Rasakan esensi budaya kopi Indonesia — di mana setiap cangkir menghubungkan Anda pada tradisi berabad-abad.",
        coconesia_cta_title: "Rangkul Esensi Tropis",
        coconesia_cta_desc: "Temukan fleksibilitas luar biasa dari warisan kelapa Indonesia — berkelanjutan, murni, dan diracik dengan penuh kasih.",
        company_subtitle: "Tentang Kami",
        company_hero_title: "Raga Isod<br>Nusantara",
        company_hero_desc: "Dua merek, satu visi — mengangkat komoditas alam terbaik Indonesia ke panggung dunia, menghormati tradisi sambil merangkul masa depan.",
        our_vision: "Visi Kami",
        our_mission: "Misi Kami",
        our_values: "Nilai Kami",
        company_vision_desc: "Menjadi tolak ukur global untuk komoditas premium Indonesia, menginspirasi dunia melalui kualitas, keberlanjutan, dan warisan autentik.",
        company_mission_desc: "Memberdayakan petani Indonesia, melestarikan keahlian tradisional, dan menghadirkan produk yang menghormati manusia dan planet — memastikan setiap pembelian menciptakan dampak positif.",
        company_values_desc: "Integritas dalam setiap proses. Keberlanjutan dalam setiap panen. Keunggulan dalam setiap produk. Kami percaya kualitas premium mengalir dari kepedulian tulus — untuk tanah, komunitas, dan kerajinan.",
        company_story_title: "Di Mana Warisan Bertemu Inovasi",
        company_story_desc: "Raga Isod Nusantara didirikan dengan hasrat tunggal: membawa kekayaan alam luar biasa Indonesia ke dunia. Dari dataran tinggi kopi vulkanik hingga pantai kelapa yang disinari matahari, kami mencari ekspresi termurni dan paling autentik dari tanah ini.",
        company_story_desc2: "Perjalanan kami terjalin dengan kisah ribuan keluarga petani di seluruh kepulauan. Kami tidak hanya mencari bahan — kami membangun kemitraan, melestarikan tradisi, dan menciptakan masa depan berkelanjutan bagi komunitas yang membuat produk kami mungkin.",
        our_brands: "Merek Kami",
        company_brands_title: "Dua Pilar Keunggulan",
        company_brand_coffee_desc: "Kopi tunggal asal dan campuran premium Indonesia, disangrai sempurna.",
        company_brand_coconut_desc: "Produk kelapa murni dan berkelanjutan dari panen terbaik Indonesia.",
        explore_brand: "Jelajahi Merek →",
        company_activity_title: "Upaya Terbaru Kami",
        activity_1_title: "KKT Pertanian Berkelanjutan",
        activity_1_desc: "Mengumpulkan inovator pertanian untuk berbagi praktik berkelanjutan dan membentuk masa depan pertanian Indonesia.",
        activity_2_title: "Festival Panen Komunitas",
        activity_2_desc: "Merayakan dedikasi komunitas petani kami dengan acara budaya, lokakarya, dan rasa syukur bersama.",
        activity_3_title: "Pameran Perdagangan Internasional",
        activity_3_desc: "Menampilkan produk kopi dan kelapa terbaik Indonesia ke pasar global dan mitra distribusi.",
        company_cta_title: "Bergabunglah dalam Perjalanan Kami",
        company_cta_desc: "Jadilah bagian dari gerakan yang merayakan warisan Indonesia, memberdayakan komunitas, dan menghadirkan yang terbaik dari alam ke dunia.",
        explore_coffee: "Jelajahi Kopi",
        explore_coconut: "Jelajahi Kelapa",
        shop_now: "Belanja Sekarang",
        scroll_down: "Gulir ke Bawah",
        footer_tagline: "Meracik warisan premium Indonesia, seteguk demi seteguk.",
        footer_brands: "Merek",
        footer_company: "Perusahaan",
        footer_connect: "Hubungi"
    }
};

// ========================================
// DOM READY
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Language Switcher ---
    let currentLang = localStorage.getItem('lang') || 'en';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'id' ? 'id' : 'en';

        // Update toggle button label
        const langLabel = document.getElementById('langLabel');
        if (langLabel) {
            langLabel.textContent = lang === 'en' ? 'ID' : 'EN';
        }
    }

    // Apply saved language on load
    applyLanguage(currentLang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'id' : 'en';
            applyLanguage(newLang);
        });
    }

    // --- Mobile Menu ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');

    if (mobileMenuBtn && mobileNavOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileNavOverlay.classList.toggle('active');
            document.body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : '';
        });

        const mobileLinks = mobileNavOverlay.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    let lastScrollY = 0;

    function handleHeaderScroll() {
        const scrollY = window.scrollY;

        if (header && !header.classList.contains('header-solid')) {
            // Landing page header — transparent at top, solid on scroll
            if (scrollY > 80) {
                header.style.background = 'rgba(30, 16, 10, 0.9)';
                header.style.backdropFilter = 'blur(20px)';
                header.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            } else {
                header.style.background = 'transparent';
                header.style.backdropFilter = 'none';
                header.style.borderBottom = '1px solid transparent';
            }
        }

        lastScrollY = scrollY;
    }

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll();

    // --- Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const revealPoint = windowHeight * 0.88;

            if (rect.top < revealPoint) {
                el.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', checkReveal, { passive: true });
    window.addEventListener('resize', checkReveal, { passive: true });

    // Initial check
    setTimeout(checkReveal, 100);
    // Also check after all images might have loaded
    setTimeout(checkReveal, 800);

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile nav if open
                if (mobileMenuBtn && mobileNavOverlay) {
                    mobileMenuBtn.classList.remove('active');
                    mobileNavOverlay.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });

    // --- Landing Page Split Hover ---
    const splitLeft = document.getElementById('splitLeft');
    const splitRight = document.getElementById('splitRight');

    if (splitLeft && splitRight) {
        // Touch support for mobile
        splitLeft.addEventListener('touchstart', () => {
            splitLeft.style.flex = '0.55';
            splitRight.style.flex = '0.45';
        });
        splitLeft.addEventListener('touchend', () => {
            splitLeft.style.flex = '';
            splitRight.style.flex = '';
        });
        splitRight.addEventListener('touchstart', () => {
            splitRight.style.flex = '0.55';
            splitLeft.style.flex = '0.45';
        });
        splitRight.addEventListener('touchend', () => {
            splitRight.style.flex = '';
            splitLeft.style.flex = '';
        });
    }

    // --- Parallax on brand hero ---
    const brandHeroBgs = document.querySelectorAll('.brand-hero-bg');
    if (brandHeroBgs.length > 0) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            brandHeroBgs.forEach(bg => {
                bg.style.transform = `translateY(${scrollY * 0.3}px)`;
            });
        }, { passive: true });
    }

    // --- WhatsApp Float Visibility ---
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                whatsappFloat.style.opacity = '1';
                whatsappFloat.style.pointerEvents = 'all';
            } else {
                whatsappFloat.style.opacity = '0';
                whatsappFloat.style.pointerEvents = 'none';
            }
        }, { passive: true });

        // Set initial state
        whatsappFloat.style.opacity = '0';
        whatsappFloat.style.pointerEvents = 'none';
        whatsappFloat.style.transition = 'opacity 0.4s ease, transform 0.3s ease';
    }

});
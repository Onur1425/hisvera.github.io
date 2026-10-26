// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling is handled by CSS (scroll-behavior: smooth)
// But we can add it for older browsers or specific fine-tuning if needed

// Intersection Observer for scroll animations (Fade-in effect)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Element is now visible, stop observing to keep it visible
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Prepare elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Select all major sections/cards to animate
    const elementsToAnimate = document.querySelectorAll('.hero-content, .hero-image, .section-header, .about-content, .app-card, .contact-content, .contact-wrapper, .founder-card, .whisper-card');

    elementsToAnimate.forEach(el => {
        // Initial state before animation
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';

        // Add a class when visible that sets opacity to 1 and transform to translateY(0)
        // We'll define the 'visible' class dynamically here or in CSS.
        // For simplicity, let's just observe and change inline styles in the observer above.
    });

    // Redefine observer logic to directly modify inline styles since we set them above
    const animatedObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on index for staggered effect
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // 100ms stagger
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => {
        animatedObserver.observe(el);
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]'); // Sadece sayfa içi linkler

if (sections.length > 0 && navLinks.length > 0) {
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Sayfanın 1/3'üne gelindiğinde o section'ı aktif kabul et
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Sayfa yüklendiğinde bir kere tetikle
    window.dispatchEvent(new Event('scroll'));
}

// --- YENİ EKLENEN ANİMASYON JS KODLARI ---

// 1. Yükleme Ekranı (Preloader) ve Typewriter Başlatıcı
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';

            // Preloader bittikten sonra daktilo efektini başlat
            startTypewriter();
        }, 1200); // 1.2 saniye logoyu göster
    } else {
        startTypewriter();
    }
});

// 2. Daktilo (Typewriter) Efekti
function startTypewriter() {
    const subtitle = document.getElementById('typewriter-text');
    if (subtitle) {
        const text = "Keşfet, hisset, deneyimle";
        subtitle.textContent = "";
        let i = 0;

        // Biraz gecikmeyle başla
        setTimeout(() => {
            const typeWriter = setInterval(() => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeWriter);
                }
            }, 80); // Yazma hızı
        }, 500);
    }
}

// 3. Arka Plan Yıldız Tozları (Particles)
document.addEventListener('DOMContentLoaded', () => {
    const bgContainer = document.querySelector('.background-effects');
    if (bgContainer) {
        const particlesContainer = document.createElement('div');
        particlesContainer.id = 'particles-container';
        bgContainer.appendChild(particlesContainer);

        // 60 adet rastgele particle oluştur
        for (let i = 0; i < 60; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Boyut: 1px ile 4px arası
            const size = Math.random() * 3 + 1;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Konum
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;

            // Animasyon süresi: 5s ile 12s arası (yavaş ve huzurlu)
            const duration = Math.random() * 7 + 5;
            particle.style.animationDuration = `${duration}s`;

            // Animasyon gecikmesi
            particle.style.animationDelay = `${Math.random() * 5}s`;

            // Renkler (Beyaz, Morumsu, Mavi)
            const colors = ['#ffffff', '#8b5cf6', '#06b6d4'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];

            // Hafif parlama efekti
            particle.style.boxShadow = `0 0 ${size * 2}px ${particle.style.background}`;

            particlesContainer.appendChild(particle);
        }
    }
});

// 4. 3D Tilt Efekti (VanillaTilt)
// Sayfa yüklendiğinde glass-card'lara eğilme (tilt) efekti ekle
document.addEventListener('DOMContentLoaded', () => {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".glass-card"), {
            max: 8,           // Maksimum eğilme açısı (çok abartmamak için 8)
            speed: 400,       // Eğilme hızı
            glare: true,      // Üzerinde ışık yansıması
            "max-glare": 0.15,// Maksimum ışık parlaklığı
            scale: 1.02       // Üzerine gelince çok çok hafif büyüme
        });
    }
});

// Mobile menu toggle logic
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a:not([data-lang-switch])');
    const navContainer = document.querySelector('.nav-links');
    
    if (navLinks && navContainer) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if(navContainer.classList.contains('active')) {
                    navContainer.classList.remove('active');
                }
            });
        });
    }
});


// 5. Animasyonlu Sayaçlar (Stats)
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 150; // Sayma hızı

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const increment = target / speed;

                const updateCount = () => {
                    const count = +counter.innerText;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCount();
                obs.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// 6. Modern İletişim Bölümü Etkileşimleri (FAQ, Kategori Seçimi, Form & Spam Korumalı E-posta)
document.addEventListener('DOMContentLoaded', () => {
    // E-posta adresi (Bot tarayıcılarından gizlenmiş birleştirme)
    const getContactEmail = () => {
        const u = 'hisvera';
        const s = 'apps';
        const d = 'gmail.com';
        return `${u}.${s}@${d}`;
    };

    // Toast Gösterici Yardımcı Fonksiyonu
    const showContactToast = (message) => {
        const toast = document.getElementById('contactToast');
        const toastText = document.getElementById('contactToastText');
        if (toast && toastText) {
            if (message) toastText.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3200);
        }
    };

    // A) FAQ Accordion Mantığı
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const currentItem = btn.closest('.faq-item');
            const currentAnswer = currentItem.querySelector('.faq-answer');
            const isActive = currentItem.classList.contains('active');

            // Diğer açık olanları kapat
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                    const ans = item.querySelector('.faq-answer');
                    if (ans) ans.style.maxHeight = null;
                }
            });

            // Tıklananı aç / kapat
            if (isActive) {
                currentItem.classList.remove('active');
                currentAnswer.style.maxHeight = null;
            } else {
                currentItem.classList.add('active');
                currentAnswer.style.maxHeight = currentAnswer.scrollHeight + 'px';
            }
        });
    });

    // B) Kategori Kartlarına Tıklama ve Forma Otomatik Aktarma
    const categoryCards = document.querySelectorAll('.contact-category-card');
    const topicSelect = document.getElementById('contactTopic');
    const formSection = document.getElementById('contactFormSection');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category');
            
            categoryCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');

            if (topicSelect && cat) {
                topicSelect.value = cat;
            }

            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                formSection.style.transition = 'box-shadow 0.4s ease';
                formSection.style.boxShadow = '0 0 35px rgba(139, 92, 246, 0.45)';
                setTimeout(() => {
                    formSection.style.boxShadow = '';
                }, 1200);
            }
        });
    });

    // C) E-posta Uygulamasında Aç Butonu (Spam korumalı)
    const btnOpenMail = document.getElementById('btnOpenMail');
    if (btnOpenMail) {
        btnOpenMail.addEventListener('click', () => {
            const email = getContactEmail();
            const subject = encodeURIComponent('HisVera Studio // İletişim');
            window.location.href = `mailto:${email}?subject=${subject}`;
        });
    }

    // D) E-postayı Kopyala Butonu
    const btnCopyEmail = document.getElementById('btnCopyEmail');
    if (btnCopyEmail) {
        btnCopyEmail.addEventListener('click', () => {
            const email = getContactEmail();
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    const currentLang = localStorage.getItem('site_lang') || 'tr';
                    const msg = currentLang === 'en' 
                        ? 'Email address copied to clipboard! ✨' 
                        : 'E-posta adresi panoya kopyalandı! ✨';
                    showContactToast(msg);
                });
            } else {
                // Fallback
                const tempInput = document.createElement('input');
                tempInput.value = email;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                showContactToast('E-posta adresi panoya kopyalandı! ✨');
            }
        });
    }

    // E) İletişim Formu Gönderimi (Supabase web_contact_messages tablosuna kayıt)
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('btnSubmitContact');
    const successMsg = document.getElementById('contactSuccessMsg');

    // Supabase Client (uyum.html ile aynı bağlantı)
    const SUPABASE_URL = 'https://kfjvmyzfomfnaxptbmqt.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmanZteXpmb21mbmF4cHRibXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MzA3MjYsImV4cCI6MjA4ODIwNjcyNn0.YTrKlu_grQMcS1hOQu2QD8TZQ4HSgYa2Bx-ye24jQwI';
    const supabaseClient = (window.supabase && typeof window.supabase.createClient === 'function') 
        ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
        : null;

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('contactName')?.value.trim();
            const email = document.getElementById('contactEmail')?.value.trim();
            const topic = document.getElementById('contactTopic')?.value;
            const message = document.getElementById('contactMessage')?.value.trim();

            if (!name || !email || !message) return;

            // Butonu yükleniyor durumuna getir
            if (submitBtn) {
                const originalHtml = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Gönderiliyor...</span>';

                try {
                    if (supabaseClient) {
                        const { error } = await supabaseClient
                            .from('web_contact_messages')
                            .insert([
                                {
                                    name: name,
                                    email: email,
                                    topic: topic || 'general',
                                    message: message
                                }
                            ]);

                        if (error) {
                            console.warn('Supabase web_contact_messages insert note:', error);
                        } else {
                            console.log('✅ Supabase web_contact_messages saved successfully');
                        }
                    }

                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalHtml;
                    contactForm.reset();

                    if (successMsg) {
                        successMsg.style.display = 'flex';
                        setTimeout(() => {
                            successMsg.style.display = 'none';
                        }, 5000);
                    }

                    const currentLang = localStorage.getItem('site_lang') || 'tr';
                    const toastText = currentLang === 'en' 
                        ? 'Your message has been sent successfully! ✨' 
                        : 'Mesajınız başarıyla iletildi! ✨';
                    showContactToast(toastText);
                } catch (err) {
                    console.error('Supabase form submission error:', err);
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalHtml;
                    contactForm.reset();
                    if (successMsg) successMsg.style.display = 'flex';
                    showContactToast('Mesajınız alındı! ✨');
                }
            }
        });
    }
});

// 7. QR Kod ile Telefona İndir Modalı
document.addEventListener('DOMContentLoaded', () => {
    const qrModal = document.getElementById('qrModal');
    const qrCloseBtn = document.getElementById('qrCloseBtn');
    const qrAppLogo = document.getElementById('qrAppLogo');
    const qrAppTitle = document.getElementById('qrAppTitle');
    const qrCodeImage = document.getElementById('qrCodeImage');
    const qrDirectLink = document.getElementById('qrDirectLink');
    const qrAppleLink = document.getElementById('qrAppleLink');
    const qrTabPlay = document.getElementById('qrTabPlay');
    const qrTabApple = document.getElementById('qrTabApple');

    const appData = {
        kuytu: {
            title: 'Kuytu',
            logo: 'assets/images/kuytu%20logo.png',
            qrPlay: 'assets/images/qr_kuytu.png',
            qrApple: 'assets/images/qr_kuytu_apple.png',
            playUrl: 'https://play.google.com/store/apps/details?id=com.hisvera.kuytu.app',
            appleUrl: 'https://apps.apple.com/app/id6801835741'
        },
        his: {
            title: 'HİS',
            logo: 'assets/images/his-noktas%C4%B1-logo.png',
            qrPlay: 'assets/images/qr_his.png',
            qrApple: 'assets/images/qr_his_apple.png',
            playUrl: 'https://play.google.com/store/apps/details?id=com.hisvera.hisnoktasi.app',
            appleUrl: 'https://apps.apple.com/app/id6800705124'
        }
    };

    let currentApp = 'kuytu';
    let currentPlatform = 'playstore';

    function updateModalView() {
        const data = appData[currentApp];
        if (!data) return;

        if (qrAppTitle) qrAppTitle.textContent = data.title;
        if (qrAppLogo) qrAppLogo.src = data.logo;
        if (qrDirectLink) qrDirectLink.href = data.playUrl;
        if (qrAppleLink) qrAppleLink.href = data.appleUrl;

        if (currentPlatform === 'playstore') {
            if (qrCodeImage) qrCodeImage.src = data.qrPlay;
            if (qrTabPlay) qrTabPlay.classList.add('active');
            if (qrTabApple) qrTabApple.classList.remove('active');
        } else {
            if (qrCodeImage) qrCodeImage.src = data.qrApple;
            if (qrTabApple) qrTabApple.classList.add('active');
            if (qrTabPlay) qrTabPlay.classList.remove('active');
        }
    }

    if (qrTabPlay) {
        qrTabPlay.addEventListener('click', () => {
            currentPlatform = 'playstore';
            updateModalView();
        });
    }

    if (qrTabApple) {
        qrTabApple.addEventListener('click', () => {
            currentPlatform = 'appstore';
            updateModalView();
        });
    }

    document.querySelectorAll('.btn-qr-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Kart tıklamasını engelle
            currentApp = btn.getAttribute('data-app') || 'kuytu';
            currentPlatform = 'playstore'; // Her açılışta Google Play varsayılan
            updateModalView();
            if (qrModal) {
                qrModal.classList.add('active');
            }
        });
    });

    if (qrCloseBtn && qrModal) {
        qrCloseBtn.addEventListener('click', () => {
            qrModal.classList.remove('active');
        });
    }

    if (qrModal) {
        qrModal.addEventListener('click', (e) => {
            if (e.target === qrModal) {
                qrModal.classList.remove('active');
            }
        });
    }
});

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
    const elementsToAnimate = document.querySelectorAll('.hero-content, .hero-image, .section-header, .about-content, .app-card, .contact-content');
    
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

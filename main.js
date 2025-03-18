gsap.registerPlugin(ScrollTrigger);

// Global animations
gsap.defaults({ ease: "power3.out", duration: 0.8 });

// Hero animations
gsap.to("#heroTitle", { opacity: 1, y: 0, duration: 1.2 });
gsap.to("#heroSubtitle", { opacity: 1, y: 0, delay: 0.3 });

// Section animations
gsap.utils.toArray(".feature-card, .portfolio-item").forEach((el, i) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        delay: i * 0.1
    });
});

// Navigation animations
gsap.from(".nav-link", {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    delay: 0.5
});

// Interactive elements
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { 
            scale: 1.05,
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { 
            scale: 1,
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)'
        });
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: this.hash,
            ease: "power3.inOut"
        });
    });
});
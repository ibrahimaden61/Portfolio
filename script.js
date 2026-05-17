// ============================================
// Smooth Scrolling (Already handled by CSS)
// ============================================

// ============================================
// Navigation Active Link
// ============================================

const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Mobile Menu Toggle (Optional Enhancement)
// ============================================

// Smooth scroll behavior enhancement for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Animation on Scroll (Fade in effect)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(skill => {
    skill.style.opacity = '0';
    skill.style.transform = 'translateY(20px)';
    skill.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(skill);
});

// ============================================
// Add Active Class Styling
// ============================================

const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
        padding-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);

// ============================================
// Scroll to Top Button (Optional)
// ============================================

window.addEventListener('scroll', () => {
    // You can add a scroll-to-top button here if needed
    if (window.pageYOffset > 300) {
        // Show button
    } else {
        // Hide button
    }
});

// ============================================
// Contact Form Interaction (Optional)
// ============================================

// Add any contact form handling here if needed in the future

console.log('Portfolio website loaded successfully! 🚀');

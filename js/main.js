/* ============================================
   MAIN JS - Logique JavaScript
   ============================================ */

// ===== Menu Hamburger =====
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul a');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// ============================================
// FAQ Accordéons
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
});

// ========================================
// LANGUAGE DROPDOWN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const langDropdown = document.querySelector('.lang-dropdown');
    const langToggle = document.querySelector('.lang-dropdown-toggle');
    
    if (langToggle) {
        langToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove('active');
            }
        });
    }
});

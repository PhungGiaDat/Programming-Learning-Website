// tutorials_script.js
document.addEventListener('DOMContentLoaded', () => {
    // Animate header items
    gsap.from('.header-item a', {
        opacity: 0,
        y: -50,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate search bar
    gsap.from('.search', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    // Animate popular courses section
    gsap.from('.popular-courses', {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
    });

    // Animate course cards (assuming you'll add them later)
    gsap.from('.course-card', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        delay: 1.5,
        ease: 'power3.out'
    });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for course cards (assuming you'll add them later)
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            duration: 0.3
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            duration: 0.3
        });
    });
});


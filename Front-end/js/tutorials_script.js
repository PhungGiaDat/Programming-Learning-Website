document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Header animation
    gsap.from('header', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  
    // Stagger animation for nav links
    gsap.from('.nav-link', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.5
    });
  
    // Search bar animation
    gsap.from('.search', {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.search',
        start: 'top 80%'
      }
    });
  
    // Popular tutorials section animation
    gsap.from('.mid', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.mid',
        start: 'top 80%'
      }
    });
  
    // Animate elements when they come into view
    gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%'
        }
      });
    });
  });
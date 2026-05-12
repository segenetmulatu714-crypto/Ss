/**
 * Segenet Mulatu - Portfolio
 * Smart, Modern, Attractive Portfolio Website
 */

(function() {
  'use strict';

  // Console greeting
  console.log('✨ Segenet Mulatu · Portfolio — smart, modern, attractive ✨');
  
  // Add smooth scroll behavior for all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

  // Intersection Observer for fade-up animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all elements with fade-up class
  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });

  // Add subtle parallax effect to background glow on mouse move
  document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.bg-glow');
    if (glow) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      glow.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
      glow.style.transition = 'transform 0.3s ease-out';
    }
  });

  // Project card hover effect enhancement
  document.querySelectorAll('.project-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Skill chips hover effect
  document.querySelectorAll('.skill-chip').forEach(chip => {
    chip.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Current year update (always up to date)
  const yearSpan = document.querySelector('footer p');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', currentYear);
  }

  // Optional: Add loading indicator (uncomment if needed)
  /*
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    console.log('Portfolio fully loaded!');
  });
  */

})();

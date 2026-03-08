// ========================================
// NIDHI — PRODUCT & DATA ANALYST
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Active nav link on scroll ---
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));

  // --- Fade-in on scroll for project cards ---
  const cards = document.querySelectorAll('.project-card, .project-featured, .timeline-entry');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.classList.add('fade-in');
    fadeObserver.observe(card);
  });

});

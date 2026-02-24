/**
 * Reveal on Scroll Animation
 * Fait apparaître les éléments avec la classe 'reveal' au scroll
 */

(function initReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (!revealElements.length) return;

  // Observer pour détecter l'entrée en viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Ajoute la classe active quand l'élément entre en viewport
        entry.target.classList.add('active');
        
        // Peut désabonner après la première apparition (optionnel)
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Déclenche quand 10% de l'élément est visible
    rootMargin: '0px 0px -100px 0px', // Ajuste le point de déclenchement
  });

  // Observe tous les éléments avec la classe 'reveal'
  revealElements.forEach((element) => {
    observer.observe(element);
  });

  // Appel initial pour les éléments visibles au chargement
  revealElements.forEach((element) => {
    if (element.getBoundingClientRect().top < window.innerHeight - 100) {
      element.classList.add('active');
    }
  });
})();

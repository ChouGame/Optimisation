/**
 * Sakura Flowers Animation
 * Crée et anime les fleurs de cerisier en arrière-plan
 */

(function initSakura() {
  const sakuraContainer = document.getElementById('sakura');
  
  if (!sakuraContainer) return;

  // Détecte si on est sur la page produits ou accueil
  const isProductsPage = window.location.pathname.includes('produits');
  
  const config = {
    count: isProductsPage ? 25 : 28,
    minSize: isProductsPage ? 50 : 60,
    maxSize: isProductsPage ? 90 : 100,
    minDuration: isProductsPage ? 12 : 10,
    maxDuration: isProductsPage ? 30 : 25,
    maxDelay: 10,
  };

  // Crée les fleurs
  for (let i = 0; i < config.count; i++) {
    const flower = document.createElement('img');
    
    // Chemin correct vers le fichier fleur.png
    flower.src = 'assets/fleur.png';
    flower.className = 'flower';
    flower.alt = ''; // Image décoration, pas de label
    flower.setAttribute('aria-hidden', 'true');
    
    // Gère les erreurs de chargement
    flower.onerror = function() {
      this.style.display = 'none';
    };
    
    // Randomise la position et l'animation
    const left = Math.random() * 100;
    const size = config.minSize + Math.random() * (config.maxSize - config.minSize);
    const duration = config.minDuration + Math.random() * (config.maxDuration - config.minDuration);
    const delay = Math.random() * config.maxDelay;
    
    flower.style.left = `${left}vw`;
    flower.style.width = `${size}px`;
    flower.style.height = 'auto';
    flower.style.animationDuration = `${duration}s`;
    flower.style.animationDelay = `${delay}s`;
    
    sakuraContainer.appendChild(flower);
  }
})();

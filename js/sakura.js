/**
 * Sakura Flowers Animation
 * Crée et anime les fleurs de cerisier en arrière-plan avec des emojis
 */

(function initSakura() {
  const sakuraContainer = document.getElementById('sakura');
  
  if (!sakuraContainer) return;

  // Détecte si on est sur la page produits ou accueil
  const isProductsPage = window.location.pathname.includes('produits');
  
  const config = {
    count: isProductsPage ? 25 : 28,
    minSize: isProductsPage ? 40 : 50,
    maxSize: isProductsPage ? 80 : 90,
    minDuration: isProductsPage ? 12 : 10,
    maxDuration: isProductsPage ? 30 : 25,
    maxDelay: 10,
  };

  // Crée les fleurs avec des emojis
  for (let i = 0; i < config.count; i++) {
    const flower = document.createElement('div');
    
    // Utilise des emojis fleur
    flower.textContent = '🌸';
    flower.className = 'flower';
    flower.style.fontSize = (config.minSize + Math.random() * (config.maxSize - config.minSize)) + 'px';
    flower.style.position = 'absolute';
    flower.style.top = '-100px';
    flower.style.opacity = '0.85';
    flower.style.pointerEvents = 'none';
    flower.style.userSelect = 'none';
    
    // Randomise la position et l'animation
    const left = Math.random() * 100;
    const duration = config.minDuration + Math.random() * (config.maxDuration - config.minDuration);
    const delay = Math.random() * config.maxDelay;
    
    flower.style.left = `${left}vw`;
    flower.style.animationDuration = `${duration}s`;
    flower.style.animationDelay = `${delay}s`;
    flower.style.animation = `fall linear infinite`;
    
    sakuraContainer.appendChild(flower);
  }
})();

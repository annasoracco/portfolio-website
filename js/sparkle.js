// Sparkle effect for profile photo
const sparkleContainer = document.getElementById('sparkles');
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  const size = Math.random() * 8 + 6;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.opacity = Math.random() * 0.6 + 0.4;
  sparkleContainer.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1200);
}
setInterval(createSparkle, 350);

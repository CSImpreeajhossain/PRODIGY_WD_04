// main.js
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth',
      });
    });
  });
});

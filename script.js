// Navbar toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact form popup
const form = document.getElementById('contactForm');
const modal = document.getElementById('thankYouModal');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
  form.reset();
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

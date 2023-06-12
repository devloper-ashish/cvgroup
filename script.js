const navLinks = document.querySelectorAll('nav ul li a');

for (const link of navLinks) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

// Display current year in the footer
const footerYear = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footerYear.textContent = `&copy; ${currentYear} Travel Website. All rights reserved.`;
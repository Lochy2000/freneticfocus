const button = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(returnFocus = false) {
  button.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  if (returnFocus) button.focus();
}
button.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') closeMenu(true);
});

// Active section scroll spy for Services quick-nav
const serviceNavLinks = Array.from(document.querySelectorAll('.service-nav a[href^="#"]'));
if (serviceNavLinks.length > 0) {
  const sections = serviceNavLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function updateActiveServiceLink() {
    const triggerOffset = 180;
    let currentSectionId = sections[0]?.id;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= triggerOffset) {
        currentSectionId = section.id;
      }
    }

    serviceNavLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentSectionId}`;
      const wasActive = link.classList.contains('active');
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'location');
        if (!wasActive && link.parentElement) {
          const container = link.parentElement;
          const targetScroll = link.offsetLeft - container.clientWidth / 2 + link.clientWidth / 2;
          container.scrollTo({ left: targetScroll, behavior: 'smooth' });
        }
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', updateActiveServiceLink, { passive: true });
  window.addEventListener('resize', updateActiveServiceLink, { passive: true });
  updateActiveServiceLink();
}

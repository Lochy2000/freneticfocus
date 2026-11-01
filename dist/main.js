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

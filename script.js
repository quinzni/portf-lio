// animação ao carregar a página
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// transição suave entre páginas
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', e => {
    if (link.href && link.href.includes(window.location.origin)) {
      e.preventDefault();
      document.body.classList.remove('loaded');

      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    }
  });
});
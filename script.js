// Simple JS to add keyboard navigation and subtle prefetch
document.addEventListener('DOMContentLoaded', () => {
  // prefetch linked pages for faster navigation
  document.querySelectorAll('.thumb a, .thumb').forEach((link) => {
    const href = link.getAttribute ? link.getAttribute('href') : null;
    if (href && href.endsWith('.html')) {
      const l = document.createElement('link');
      l.rel = 'prefetch';
      l.href = href;
      document.head.appendChild(l);
    }
  });

  // keyboard left/right to focus gallery items (accessibility)
  const thumbs = Array.from(document.querySelectorAll('.thumb'));
  let index = 0;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      index = Math.min(index + 1, thumbs.length - 1);
      thumbs[index].querySelector('img').scrollIntoView({behavior:'smooth', inline:'center'});
      thumbs[index].classList.add('focused');
      setTimeout(()=> thumbs[index].classList.remove('focused'),300);
    } else if (e.key === 'ArrowLeft') {
      index = Math.max(index - 1, 0);
      thumbs[index].querySelector('img').scrollIntoView({behavior:'smooth', inline:'center'});
      thumbs[index].classList.add('focused');
      setTimeout(()=> thumbs[index].classList.remove('focused'),300);
    }
  });
});
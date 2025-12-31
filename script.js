// Lightweight JS for prefetch and keyboard navigation
document.addEventListener('DOMContentLoaded', () => {
  // prefetch linked profile pages for faster navigation
  document.querySelectorAll('.thumb').forEach((link) => {
    const href = link.getAttribute('href');
    if (href && href.endsWith('.html')) {
      const l = document.createElement('link');
      l.rel = 'prefetch';
      l.href = href;
      document.head.appendChild(l);
    }
  });

  // keyboard left/right to focus gallery items (accessibility)
  const thumbs = Array.from(document.querySelectorAll('.thumb'));
  if (thumbs.length === 0) return;
  let index = 0;
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      index = Math.min(index + 1, thumbs.length - 1);
      thumbs[index].focus();
      thumbs[index].querySelector('img')?.scrollIntoView({behavior:'smooth', inline:'center'});
    } else if (e.key === 'ArrowLeft') {
      index = Math.max(index - 1, 0);
      thumbs[index].focus();
      thumbs[index].querySelector('img')?.scrollIntoView({behavior:'smooth', inline:'center'});
    }
  });

  // ensure thumbs are keyboard-focusable
  thumbs.forEach(t => t.setAttribute('tabindex', '0'));
});

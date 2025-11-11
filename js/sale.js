// gallery.js — без eval/new Function/строкових таймаутів
document.addEventListener('DOMContentLoaded', () => {
  const thumbs = Array.from(document.querySelectorAll('.thumb'));
  const mainImage = document.getElementById('mainImage');

  // Optional: preload large images to avoid flicker
  const preload = (url) => {
    const i = new Image();
    i.src = url;
  };
  thumbs.forEach(t => {
    const large = t.dataset.large;
    if (large) preload(large);
  });

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', (e) => {
      const src = thumb.dataset.large || thumb.src;
      if (!src) return;
      // змінюємо головне фото
      mainImage.src = src;

      // оновлюємо класи
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
});

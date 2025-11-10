document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('show-more');
  const hiddenItems = document.querySelectorAll('.catalog-item.hidden');

  btn.addEventListener('click', () => {
    hiddenItems.forEach(item => item.classList.remove('hidden'));
    btn.style.display = 'none'; // приховуємо кнопку після показу
  });
});

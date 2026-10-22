'use strict';
const views = {
  rgb: {name: 'Natural-color', description: 'Natural color uses red, green, and blue bands. It is intuitive to inspect, but haze, shadows, and soil can make vegetation changes difficult to judge.'},
  nir: {name: 'Near-infrared false-color', description: 'False color maps near-infrared, red, and green bands to display red, green, and blue. Vegetation often appears red or pink; that color is a spectral visualization, not a loss label.'},
  ndvi: {name: 'NDVI', description: 'NDVI compares near-infrared and red reflectance: (NIR − Red) / (NIR + Red). Greener tones in these previews indicate higher NDVI. Seasonal crops, moisture, and atmosphere can also change the signal, so NDVI alone is not ground truth.'}
};
const dates = [{year: 2023, label: '18 May 2023'}, {year: 2024, label: '27 April 2024'}, {year: 2025, label: '12 May 2025'}];
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.dataset.view;
    dates.forEach((date, index) => {
      const src = `static/images/hanoi-${date.year}-${key}.png`;
      const image = document.getElementById(`scene-${index}`);
      image.src = src;
      image.alt = `${views[key].name} Sentinel-2 preview near Hanoi, ${date.label}`;
      document.getElementById(`scene-link-${index}`).href = src;
    });
    document.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('view-explanation').textContent = views[key].description;
  });
});
const back = document.querySelector('.back-to-top');
function updateBackButton() { back.hidden = window.scrollY < 650; }
window.addEventListener('scroll', updateBackButton, {passive: true});
back.addEventListener('click', () => { window.scrollTo({top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); });
updateBackButton();

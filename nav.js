const sliderImgs = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

let contador = 1;
let intervalo = 3000;
let width = 720;
window.onload = () => {
  width = sliderImgs[0].clientWidth
}

window.addEventListener('resize', () => {
  width = sliderImgs[0].clientWidth
})

const slides = () => {
  slider.style.transform
}
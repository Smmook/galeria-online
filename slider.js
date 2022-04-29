const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');
let slides = document.querySelectorAll('.slides');
let slidesLast = slides[slides.length - 1];

const automaticTimer = 5000;

const btnLeft = document.querySelector('#slider-left-btn');
const btnRight = document.querySelector('#slider-right-btn');

window.onload = () => {
  const sliderImg = document.querySelectorAll('.slides img')[0];
  sliderContainer.style.maxWidth = sliderImg.clientWidth;
}
window.addEventListener('resize', () => {
  const sliderImg = document.querySelectorAll('.slides img')[0];
  sliderContainer.style.maxWidth = sliderImg.clientWidth;
});

slider.insertAdjacentElement('afterbegin', slidesLast);

btnRight.addEventListener('click', () => {
  moveNext();
  resetMovement();
})
btnLeft.addEventListener('click', () => {
  movePrev();
  resetMovement();
})

const moveNext = () => {
  slidesFirst = document.querySelectorAll('.slides')[0];
  slider.style.marginLeft = '-200%';
  slider.style.transition = 'all 1s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('beforeend', slidesFirst);
    slider.style.marginLeft = "-100%"
  }, 1000);
}

const movePrev = () => {
  slides = document.querySelectorAll('.slides');
  slidesLast = slides[slides.length - 1];
  slider.style.marginLeft = '0%';
  slider.style.transition = 'all 1s';
  setTimeout(() => {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', slidesLast);
    slider.style.marginLeft = "-100%"
  }, 1000);
}

let movement = setInterval(() => {
  moveNext();
}, automaticTimer);

const resetMovement = () => {
  clearInterval(movement);
  movement = setInterval(() => {
    moveNext();
  }, automaticTimer);
}

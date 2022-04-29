const slide = document.querySelector('.slide');
const slideImgs = document.querySelectorAll('.slide img');
let slideIndex = 1;
let isMoving = false;

slide.insertAdjacentElement('afterbegin', slideImgs[slideImgs.length - 1].cloneNode(true));
slide.insertAdjacentElement('beforeend', slideImgs[0].cloneNode(true));

const moveSlides = () => {
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  const slidesArray = slide.querySelectorAll('img');
}

const moveHandler = (direction) => {
  isMoving = true;
  slide.style.transition = 'transform .8s ease-in-out';
  if (direction === 'right') {
    slideIndex++;
  } else {
    slideIndex--;
  }
  moveSlides();
}

window.onload = () => moveSlides();

window.addEventListener('resize', () => {
  const someSliderImg = slide.querySelectorAll('img')[0];
  document.querySelector('.slider').style.maxWidth = someSliderImg.clientWidth;
})

document.querySelector('.slider-btn-left').addEventListener('click', () => {
  if (isMoving) return;
  moveHandler('left');
});

document.querySelector('.slider-btn-right').addEventListener('click', () => {
  if (isMoving) return;
  moveHandler('right');
});

slide.addEventListener('transitionend', () => {
  isMoving = false;
  const slidesArray = slide.querySelectorAll('img');
  if (slideIndex === 0) {
    slide.style.transition = 'none';
    slideIndex = slidesArray.length - 2;
    moveSlides();
  } else if (slideIndex === slidesArray.length - 1) {
    slide.style.transition = 'none';
    slideIndex = 1;
    moveSlides();
  }
})

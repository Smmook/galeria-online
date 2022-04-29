const slide = document.querySelector('.slide');
const slideImgs = document.querySelectorAll('.slide img');
let slideIndex = 1;

slide.insertAdjacentElement('afterbegin', slideImgs[slideImgs.length - 1].cloneNode(true));
slide.insertAdjacentElement('beforeend', slideImgs[0].cloneNode(true));

const moveSlides = () => {
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  const slidesArray = slide.querySelectorAll('img');
  
}

const moveHandler = () => {
  slide.style.transition = 'transform 1s ease-in-out';
  slideIndex++;
  slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}

moveSlides();

document.querySelector('.slider-btn-left').addEventListener('click', () => {
  moveHandler('left');
});

document.querySelector('.slider-btn-right').addEventListener('click', () => {
  moveHandler('right');
});

const slides = document.querySelectorAll('.slides');
let counter = 0;

let movement = setInterval(() => {
  counter++;
  if (counter > slides.length - 1) {
    counter = 0;
  }
  slides.forEach(slide => {
    slide.classList.remove('active');
  })
  slides[counter].classList.add('active');
}, 3000);
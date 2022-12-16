const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const nextBtn = document.querySelector('#nextBtn');
const backBtn = document.querySelector('#backBtn');

// Next by clicking on image

(sliderItems).forEach(function(slide, index) {

    if (index !== 0) {
slide.classList.add('hidden');
    }

    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

    slide.addEventListener('click', function () {
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');
       
    })
});

// Next by button

nextBtn.onclick = function () {
   
    const currentSlide = slider.querySelector('[data-active]');
const currentSlideIndex = +currentSlide.dataset.index;

currentSlide.classList.add('hidden');
currentSlide.removeAttribute('data-active');

let nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;

const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
nextSlide.classList.remove('hidden');
nextSlide.setAttribute('data-active', '');

}

// Back by button

backBtn.onclick = function () {
   
    const currentSlide = slider.querySelector('[data-active]');
const currentSlideIndex = +currentSlide.dataset.index;

currentSlide.classList.add('hidden');
currentSlide.removeAttribute('data-active');

let nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;

const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
nextSlide.classList.remove('hidden');
nextSlide.setAttribute('data-active', '');

}
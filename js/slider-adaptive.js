window.addEventListener('DOMContentLoaded', function() {
    // Слайдер, сделанный вручную
let offset = 0;
const arrowLeft = document.querySelector('.slider__btn-left');
const arrowRight = document.querySelector('.slider__btn-right');
const sliderWrapper = document.querySelector('.slider__section-wrapper');
sliderButton_1 = document.querySelector('.btn-click-1');
sliderButton_2 = document.querySelector('.btn-click-2');
sliderButton_3 = document.querySelector('.btn-click-3');
sliderButton_4 = document.querySelector('.btn-click-4');
sliderButton_5 = document.querySelector('.btn-click-5');
sliderButton_6 = document.querySelector('.btn-click-6');
arrowRight.addEventListener('click', function() {
    offset = offset + 704; // Смещение от левого края
    if (offset > 3520 || offset === -2816) {
        offset = 0; 
    } 
    sliderWrapper.style.left = -offset + 'px';

});
arrowLeft.addEventListener('click', function() {
    offset = offset - 704; // Смещение от левого края
    if (offset < 0) {
        offset = 3520;
    }
    sliderWrapper.style.left = -offset + 'px';

});
sliderButton_1.addEventListener('click', function() {
    offset = 0;
    sliderWrapper.style.left = offset + 'px';
})
sliderButton_2.addEventListener('click', function() {
    offset = -704;
    sliderWrapper.style.left = offset + 'px';
})
sliderButton_3.addEventListener('click', function() {
    offset = -1408;
    sliderWrapper.style.left = offset + 'px';
})
sliderButton_4.addEventListener('click', function() {
    offset = -2112;
    sliderWrapper.style.left = offset + 'px';
})
sliderButton_5.addEventListener('click', function() {
    offset = -2816;
    sliderWrapper.style.left = offset + 'px';
})
sliderButton_6.addEventListener('click', function() {
    offset = -3520;
    sliderWrapper.style.left = offset + 'px';
})

});
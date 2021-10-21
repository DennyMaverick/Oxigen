window.addEventListener('DOMContentLoaded', function() {
    // Слайдер, сделанный вручную - адаптив
let count = 0;
let width;
const sliderButtons = document.querySelectorAll('.sliderButton');
const arrowLeft = document.querySelector('.slider__btn-left');
const arrowRight = document.querySelector('.slider__btn-right');
const sliderWrapper = document.querySelector('.slider__section-wrapper');
const sliderItems = document.querySelectorAll('.slider__item');

// sliderButton_1 = document.querySelector('.btn-click-1');
// sliderButton_2 = document.querySelector('.btn-click-2');
// sliderButton_3 = document.querySelector('.btn-click-3');
// sliderButton_4 = document.querySelector('.btn-click-4');
// sliderButton_5 = document.querySelector('.btn-click-5');
// sliderButton_6 = document.querySelector('.btn-click-6');
// Масштабирование элемента внутри слайдера при изменении размеров экрана
function init() {
    width = document.querySelector('.slider__section-slider').offsetWidth;
    sliderWrapper.style.width = width*sliderItems.length + 'px';
    sliderItems.forEach(function(item) {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
init();
window.addEventListener('resize', init);


arrowRight.addEventListener('click', function() {
   count++;
   if (count >= sliderItems.length) {
       count = 0;
   }
   rollSlider();
});
arrowLeft.addEventListener('click', function() {
    count--;

    if (count < 0) {
        count = sliderItems.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderWrapper.style.transform = 'translate(-'+ count*width + 'px)';
}

// arrowLeft.addEventListener('click', function() {
   
// });
// sliderButton_1.addEventListener('click', function() {
//     offset = 0;
//     sliderWrapper.style.left = offset + 'px';
// })
// sliderButton_2.addEventListener('click', function() {
//     offset = -704;
//     sliderWrapper.style.left = offset + 'px';
// })
// sliderButton_3.addEventListener('click', function() {
//     offset = -1408;
//     sliderWrapper.style.left = offset + 'px';
// })
// sliderButton_4.addEventListener('click', function() {
//     offset = -2112;
//     sliderWrapper.style.left = offset + 'px';
// })
// sliderButton_5.addEventListener('click', function() {
//     offset = -2816;
//     sliderWrapper.style.left = offset + 'px';
// })
// sliderButton_6.addEventListener('click', function() {
//     offset = -3520;
//     sliderWrapper.style.left = offset + 'px';
// })

// Подсвечивание кнопки выбранного слайда при нажатии на кнопку
ButtonChangeStatus();

function ButtonChangeStatus() {
    sliderButtons.forEach(function(item) {
        item.addEventListener('click', function() {
            sliderButtons.forEach(function(item) {
                item.classList.remove('slider-btn--active');
            });
            this.classList.add('slider-btn--active');
        })
    });
}
   
// Подсвечивание кнопки выбранного слайда при изменении слайда


    // Работа слайдера при нажатии на кнопку
    sliderButtons.forEach(function(item, index) {
        item.addEventListener('click', function() {
            sliderWrapper.style.transform = 'translate(-'+ index*width + 'px)';
        });
        
    });



});
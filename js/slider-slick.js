// Слайдер Slick

const portfolioSlider = document.querySelector('.portfolio__items');
if (document.documentElement.clientWidth <= 1090) {

    showPropertiesForSlider();

    $(function() {
        $('.portfolio__items').not('.slick-initialized').slick({
           prevArrow: '<button type="button" class="slick-prev slick-btn btn"><img src="../js/slider/arrow_left.svg"></button>',
           nextArrow: '<button type="button" class="slick-next slick-btn btn"><img src="../js/slider/arrow_right.svg "></button>'
        }); 
    
    });
   
 } 

window.addEventListener('resize', function() {
    if (document.documentElement.clientWidth <= 1090) {

       
        showPropertiesForSlider();
       
        $(function() {
            $('.portfolio__items').not('.slick-initialized').slick({
                prevArrow: '<button type="button" class="slick-prev slick-btn btn"><img src="../js/slider/arrow_left.svg"></button>',
                 nextArrow: '<button type="button"    class="slick-next slick-btn btn"><img src="../js/slider/arrow_right.svg "></button>'
            });       
        });
       
    } else if (document.documentElement.clientWidth > 1090) {
        if (portfolioSlider.classList.contains('slick-initialized')) {
                $(function() {
                    $('.portfolio__items').slick('unslick');     
                 }); 
        } 
    
            
        showPropertiesForGridContainer();
    };
});
function showPropertiesForSlider() {
    portfolioSlider.style.display = 'block';
    portfolioSlider.style.maxWidth = '650px';       
    portfolioSlider.style.marginRight = 'auto';
    portfolioSlider.style.marginLeft = 'auto';
};
function showPropertiesForGridContainer() {
        portfolioSlider.style.display = 'grid';
        portfolioSlider.style.maxWidth = '100%'; 
        portfolioSlider.style.marginRight = '0';
        portfolioSlider.style.marginLeft = '0';
        
}
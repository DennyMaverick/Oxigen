window.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('#logo');
    const h1 = document.getElementById('mainTitle');
    const mouse = document.querySelector('.header__content-decor');
    const desc = document.querySelector('.header__content-description'); 
   const clicks = [
       {
        switchOnOff: [
           orange = {
                
                colorChanging: function() {
                    h1.style.color = "#fcbb08";
                    desc.style.color = "#fff";
                    h1.style.transition = "color .4s linear";
                    desc.style.transition = "color .4s linear";
                }
            },
           white = {
                
                colorChangingDefault: function() {
                    h1.style.color = "#fff";
                    desc.style.color = "#fcbb08";
                }
            }
        ]       
    }
     
]
let counter = 0;
    h1.addEventListener('click', function() { 
        changingColor_h1();
    });
    mouse.addEventListener('click', function() {
        changingColor_h1();
    });

   const changingColor_h1 = function () {
        if (counter === 0) {
            clicks[0].switchOnOff[orange.colorChanging()];
            counter = counter + 1;
            console.log(counter)
        } else if (counter === 1) {
            clicks[0].switchOnOff[white.colorChangingDefault()];
            counter = counter - 1;
        }
    }

    // Hover on logo
    logo.addEventListener('mouseenter', function() {
        changingColor_h1();
    });
    logo.addEventListener('mouseleave', function() {
        changingColor_h1();
    });


});




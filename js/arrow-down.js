// window.addEventListener('DOMContentLoaded', function() {
    // const expertiseItemBox = document.querySelector('.expertise__item-box');
    // При нажатии на стрелку выпадает / скрывается нужный контент
    // но работает только по отдельности
    // если одновременно попробовать позакрывать / открывать 
    // контент, будет срабатывать иногда со второго раза
    // дело в счетчиках. Они находятся в трех разных обьектах, которые лежат в массиве. Они плюсуются / минусуются при нажатии на стрелку сразу все одновременно, нужно чтобы при нажатии в каждом отдельном обьекте массива свойство счетчика count менялось индивидуально
    
 
       
    // const arrowsDown = document.querySelectorAll('.arrow-down');
    // const arrowDown = document.querySelector('.arrow-down');

    // arrowsDown.forEach(function(item) {
    //         item.addEventListener('click', function(event) {
    //             const expertiseItem = event.target.closest('.expertise__item');
    //             const currentArrow = event.target;
    //             const expertiseItemBoxCurrent = expertiseItem.querySelector('.expertise__item-box');
    //             // const start = function(index) {
                                  
    //                    let count = 0;

    //                    if (count === 0) {
    //                         expertiseItem.style.height = "auto";
    //                         expertiseItemBoxCurrent.style.overflow = "unset"; 
    //                         currentArrow.classList.add('arrow-down-rotate');
    //                         count = count + 1;
    //                     console.log(count);
    //                    } else if (count === 1) {
    //                         expertiseItem.style.height = "106px";
    //                         expertiseItemBoxCurrent.style.overflow = "hidden";
    //                         currentArrow.classList.remove('arrow-down-rotate');
    //                         count = count - 1;
    //                         console.log(count);
    //                    }
                       
                        // console.log(item[index].count); 
                        // if (item.count === 0) {     
                        //     expertiseItem.style.height = "200px";
                        //     expertiseItemBoxCurrent.style.overflow = "unset"; 
                             
                        //     item.count++;
                           
                        //             currentArrow.classList.add('arrow-down-rotate');
                                  
                              
                            //     } else if (item.count === 1) {
                            //          expertiseItem.style.height = "auto";
             
                            //          expertiseItemBoxCurrent.style.overflow = "hidden";
                            //          item.count--; 
                                     
                            //        currentArrow.classList.remove('arrow-down-rotate');
           
                            //  }
                             
                   
                // }
                // start();
           
            
            // })
            
               

                   
            
       
//     }); 
// });  
    


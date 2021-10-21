window.addEventListener('DOMContentLoaded', function() {

    const video = document.querySelector('#video');
    const videoWrapper = document.querySelector('.video-wrapper');
    const playBtn = document.querySelector('.play-btn');
    const playVideoIcon = document.querySelector('.play-video-icon');

    playBtn.onclick = playVideoCheck;
   

   function playVideoCheck() {

    if (!video.ended) {
            playVideoIcon.style.display = "none";
            video.setAttribute('controls', 'controls'); 
            video.play();  
       } 
        
   }
 

//    function stopVideo() {
//     if (video.ended) {
//         playVideoIcon.style.display = "block";
//         // video.setAttribute('controls', 'none'); 
//         video.currentTime = 0; 
//    }
//    }
//    stopVideo();














});
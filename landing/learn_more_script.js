// JavaScript code to control video actions
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('cta secondary');

    // Play the video when the user clicks the video
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Event listener for when the video ends
    video.addEventListener('ended', function () {
        console.log('Video has ended');
        alert('The video has finished playing.');
    });

    // You can also trigger some actions on play or pause
    video.addEventListener('play', function () {
        console.log('Video started playing');
    });

    video.addEventListener('pause', function () {
        console.log('Video paused');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var backgroundMusic = document.getElementById('background-music');

    function handleScroll() {
        backgroundMusic.play();
        backgroundMusic.volume = 0;

        backgroundMusic.currentTime = 17;

        var interval = setInterval(function () {
            backgroundMusic.volume += 0.05;
            if (backgroundMusic.volume >= 1) {
                clearInterval(interval);
            }
        }, 1000);

        window.removeEventListener('scroll', handleScroll);
    }

    window.addEventListener('scroll', handleScroll);
});

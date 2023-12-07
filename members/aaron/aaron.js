document.addEventListener('DOMContentLoaded', function() {
    var backgroundMusic = document.getElementById('background-music');

    function handleScroll() {
        console.log('Handling scroll event');

        if (!backgroundMusic) {
            console.error('Background music object not found');
            return;
        }

        backgroundMusic.play();
        backgroundMusic.volume = 0; // Set initial volume to 0

        // Seek to 5 seconds into the music
        backgroundMusic.currentTime = 17;

        // Fade in the music over 5 seconds
        var interval = setInterval(function() {
            backgroundMusic.volume += 0.05;
            if (backgroundMusic.volume >= 1) {
                clearInterval(interval);
            }
        }, 1000);

        window.removeEventListener('scroll', handleScroll);
    }

    window.addEventListener('scroll', handleScroll);
});
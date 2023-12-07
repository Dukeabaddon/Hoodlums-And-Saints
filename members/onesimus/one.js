let profile = document.querySelector('.profile');
let audio = document.getElementsByTagName('audio');
const video = document.querySelector(".loki video");
console.log(audio)

profile.addEventListener('mouseenter', () => {
    audio[0].play()
    audio[0].currentTime = 0
    audio[0].volume = 0.4
    video.play()
    video.volume = 0
    video.currentTime = 0
});
profile.addEventListener('mouseleave', () => {
    audio[0].pause()
    audio[1].play()
    video.pause()
    video.volume = 0
    
});


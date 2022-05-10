import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function() {
    console.log('played the video!');
});
const PLAY_TIME = "videoplayer-current-time"

 player.on('timeupdate', throttle(onPlay, 1000));
 function onPlay (data) {
    console.log (data.seconds)

localStorage.setItem (PLAY_TIME, data.seconds)
}

const savedData = localStorage.getItem(PLAY_TIME)
if (savedData) {
player.setCurrentTime(localStorage.getItem(PLAY_TIME))
}



const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

//on
const onPlay = function(data) {
    data.currentTime.Player

    localStorage.setItem("videoplayer-current-time", JSON.stringify(onPlay))

};

player.on('play', onPlay);

//setCurrentTime(seconds: number)
player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
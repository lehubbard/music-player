const audio = document.querySelector('audio');
const btnPlay = document.querySelector('#button-play');
const btnback = document.querySelector('#button-skip-left');
const btnForward = document.querySelector('#button-skip-right');
const progressBar = document.querySelector('.progress-bar')
let playing = false;

btnPlay.addEventListener("click", playPause);
btnback.addEventListener("click", goBack);
btnForward.addEventListener("click", skipAhead);
audio.addEventListener("timeupdate", showProgress);
audio.addEventListener("ended", audioEnded);


function goBack(){
    audio.currentTime = 0;
};

function playPause(){
    if(playing === false){
        playing = true;
        btnPlay.innerHTML = "pause_circle"
        audio.play();
    } else{
        playing = false;
        btnPlay.innerHTML = "play_circle"
        audio.pause();
    };
};

function showProgress(){
    let percentComplete = (audio.currentTime * 100) / audio.duration;
    progressBar.style.background = `conic-gradient(var(--blue) ${percentComplete}%, rgba(245, 40, 145, 0) 0)`;
}

function skipAhead(){
    audio.currentTime = audio.currentTime + 5;
}

function audioEnded(){
    playing = false;
    btnPlay.innerHTML = "play_circle"
}


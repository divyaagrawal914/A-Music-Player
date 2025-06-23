const cntrlIcon = document.getElementById("cntrl-icon");
const song = document.getElementById("song");
const progress = document.getElementById("progress");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}  

function playPause(){
    if (cntrlIcon.classList.contains('fa-pause')) {
        song.pause();
        cntrlIcon.classList.remove('fa-pause');
        cntrlIcon.classList.add('fa-play');
    } else {
         song.play();
         cntrlIcon.classList.remove('fa-play');
        cntrlIcon.classList.add('fa-pause');
    }
}

if(song.play()) {
    setInterval( () => {
       progress.value = song.currentTime;
    },500)
} 
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
     cntrlIcon.classList.remove('fa-play');
     cntrlIcon.classList.add('fa-pause');
}
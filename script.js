const playBtn = document.getElementById("playBtn"),
status = document.getElementById("status"),
cdImage = document.getElementById("cdImage")

let playList = {
    "Don't Let Me Down (Remix)" : "Musics/Don't Let Me Down (feat. Daya) (Hipst3r Edit).wav",
    "Work From Home (Remix)" : "Musics/Fifth Harmony  feat. Ty Dolla $ign - Work From Home (Dr Gobbers Edit) FINAL.mp3",
    "Shape Of You (Remix sample)" : "Musics/Shape Of You (Marimba Remix).mp3"
},
nowPlaying = new Audio("Musics/Don't Let Me Down (feat. Daya) (Hipst3r Edit).wav")

console.log(playList)

function handlePlay(){
    status.style.animation = "showStatus 0.3s forwards";
    cdImage.style.animation = "rotateCD 5s linear infinite";
    playBtn.innerHTML = "◼";
    nowPlaying.play()
    playBtn.removeEventListener("click", handlePlay);
    playBtn.addEventListener("click", handlePause);
}

function handlePause(){
    status.style.animation = "hideStatus 0.3s forwards";
    cdImage.style.animationPlayState = "paused";
    playBtn.innerHTML = "▶";
    nowPlaying.pause()
    playBtn.removeEventListener("click", handlePause);
    playBtn.addEventListener("click", handlePlay);
}

function init(){
    playBtn.addEventListener("click", handlePlay);
}

init()
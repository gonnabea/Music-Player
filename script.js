const playBtn = document.getElementById("playBtn"),
status = document.getElementById("status")

function handlePlay(){
    status.style.animation = "showStatus 0.3s forwards";
    playBtn.removeEventListener("click", handlePlay);
    playBtn.addEventListener("click", handlePause);
}

function handlePause(){
    status.style.animation = "hideStatus 0.3s forwards";
    playBtn.removeEventListener("click", handlePause);
    playBtn.addEventListener("click", handlePlay);
}

function init(){
    playBtn.addEventListener("click", handlePlay);
}

init()
const playBtn = document.getElementById("playBtn"),
status = document.getElementById("status"),
cdImage = document.getElementById("cdImage")

function handlePlay(){
    status.style.animation = "showStatus 0.3s forwards";
    cdImage.style.animation = "rotateCD 5s linear infinite";
    playBtn.innerHTML = "◼";
    playBtn.removeEventListener("click", handlePlay);
    playBtn.addEventListener("click", handlePause);
}

function handlePause(){
    status.style.animation = "hideStatus 0.3s forwards";
    cdImage.style.animationPlayState = "paused";
    playBtn.innerHTML = "▶";
    playBtn.removeEventListener("click", handlePause);
    playBtn.addEventListener("click", handlePlay);
}

function init(){
    playBtn.addEventListener("click", handlePlay);
}

init()
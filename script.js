const playBtn = document.getElementById("playBtn"),
status = document.getElementById("status"),
cdImage = document.getElementById("cdImage"),
nextBtn = document.getElementById("nextBtn"),
preBtn = document.getElementById("preBtn"),
musicTitle = document.getElementById("musicTitle"),
progressBar = document.getElementById("progressBar")

/* let playList = {
    "Don't Let Me Down (Remix)" : "Musics/Don't Let Me Down (feat. Daya) (Hipst3r Edit).wav",
    "Work From Home (Remix)" : "Musics/Fifth Harmony  feat. Ty Dolla $ign - Work From Home (Dr Gobbers Edit) FINAL.mp3",
    "Shape Of You (Remix sample)" : "Musics/Shape Of You (Marimba Remix).mp3"
}, */
let playList = ["Musics/Don't Let Me Down (feat. Daya) (Hipst3r Edit).wav",
"Musics/Fifth Harmony  feat. Ty Dolla $ign - Work From Home (Dr Gobbers Edit) FINAL.mp3",
"Musics/Ed Sheraan x P.A.F.F. x Salvatore Ganacci - Shape Of You.mp3"],
imageList = ["Images/Don't Let Me Down.jpg","Images/Work From Home.jpg","Images/Shape Of You.jpg"],
names = ["Don't Let Me Down (Remix)",
"Work From Home (Remix)",
"Shape Of You (Remix)"],
orderIndex = 0,
nowPlaying = new Audio(playList[orderIndex]);


console.log(playList)

function handlePlay(){
    status.style.animation = "showStatus 0.3s forwards";
    cdImage.style.animation = "rotateCD 5s linear infinite";
    cdImage.src = imageList[orderIndex];
    musicTitle.innerHTML = names[orderIndex];
    playBtn.innerHTML = "◼";
    nowPlaying.play();
    progressBar.max = nowPlaying.duration;
    setInterval(()=>{
        progressBar.value = nowPlaying.currentTime
    }, 1000);
    nowPlaying.addEventListener("ended", handleNext)
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

function handleNext(){
    handlePause()
    orderIndex +=1;
    if(orderIndex >=playList.length){
        orderIndex = 0;
    }
    console.log(orderIndex)
    nowPlaying = new Audio(playList[orderIndex])
    handlePlay()
}

function handlePre(){
    handlePause()
    orderIndex -=1;
    if(orderIndex < 0){
        orderIndex = playList.length-1;
    }
    console.log(orderIndex)
    nowPlaying = new Audio(playList[orderIndex])
    handlePlay()
}

function handleBar(){
    nowPlaying.currentTime = progressBar.value;
}

function init(){
    playBtn.addEventListener("click", handlePlay);
    nextBtn.addEventListener("click", handleNext);
    preBtn.addEventListener("click", handlePre);
    progressBar.addEventListener("change", handleBar);
}

init()
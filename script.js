console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Pachchadanamey", filePath: "./songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Vaalu-Kanuladaanaa", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Snehithudaa", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Prema-Ane", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Kailove-Chedugudu", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Yemi-Cheyamanduve", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Roja-Roja", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    
]

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play', 'fa-beat');
        masterPlay.classList.add('fa-pause', 'fa-beat');
        gif.style.opacity=1;
// Listen to Events
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause', 'fa-beat');
        masterPlay.classList.add('fa-play', 'fa-beat');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;

})
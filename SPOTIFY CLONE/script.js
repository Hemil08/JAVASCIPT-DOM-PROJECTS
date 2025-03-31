console.log('Lets write Javascript');

// async function getSongs(){
//     let a = await fetch("http://127.0.01:3000/songs/")
//     let response = await a.text();
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as= div.getElementsByTagName("a")
//     let songs = []

//     for(let index=0;index<as.length;index++){
//         const element = as[index];
//         if(element.href.endsWith(".mp3")){
//             songs.push(element.href.split("/songs/")[1])
//         }
//     }
//     return songs
// }

const playMusic = (track) =>{
    let audio = new Audio ("/songs/" + track)
    currentSong.currentSrc = "/songs/" + track
    currentSong.play()
    play.src = "pause.svg"
    document.querySelector(".songinfo").innerHTML = ""
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00 "
}

async function main(){

    let currentSong = new Audio();

    // Get the list of all the song 
    let songs = await getSongs()
    console.log(songs);

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]

    for(const song of songs){
        songUL.innerHTML = songUL.innerHTML + `<li> <img class="invert" width="34" src="music.svg" alt="">
            <div class="info">
                <div> ${song.replaceAll("%20"," ")}</div>
                <div> Harry </div>
            </div>

            <div class="playnow">
                <span> Play Now </span>
                <img class="invert" src="play.svg" alt="">
            </div> 
        </li>`;
    }

    Array.from(document.querySelector(".songList").getELementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })



    // play the first song
    var audio = new Audio(songs[0]);
    audio.play();

    audio.addEventListener("onetimeupdate",() =>{
        let duration = audio.duration;
        // console.log(audio.duration);
    });

    // Attach an event to play , next and previous 
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src = "pause.svg"
        }
        else{
            currentSong.pause()
            play.src = "pause.svg"
        }
    })

    // Listen for timeupdate event
    currentSong.addEventListener("timeupdate",()=>{
        console.log(currentSong.currentTime,currentSong.duration);
    })


}

// main()




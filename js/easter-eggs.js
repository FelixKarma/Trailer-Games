var audioSmashBall = new Audio();
    audioSmashBall.src="";

var euroBeatsSmashBall = new Audio();
euroBeatsSmashBall.src="";


let ImgEasterEgg = document.getElementById('');

function Actived(){
    ImgEasterEgg.style.display = "block";
    euroBeatsSmashBall.play();
}

let paf = 0;

function (){
    paf++;

    if(paf==3){
        audioSmashBall.play();
        ImgEasterEgg.style.display = "none";
        euroBeatsSmashBall.pause();
    }
}
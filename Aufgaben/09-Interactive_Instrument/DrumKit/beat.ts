window.addEventListener("load", Clicker);
window.addEventListener("load", Keypress);

var allbeats: string [] = [
    "../assets/Drumpad/kick.mp3",
    "../assets/Drumpad/snare.mp3",
    "../assets/Drumpad/hihat.mp3",
    "../assets/Drumpad/F.mp3",
    "../assets/Drumpad/G.mp3",
    "../assets/Drumpad/A.mp3",
    "../assets/Drumpad/C.mp3",
    "../assets/Drumpad/laugh-1.mp3",
    "../assets/Drumpad/laugh-2.mp3"
    ];

var sickbeat: string [] = [
    "../assets/Drumpad/kick.mp3",
    "../assets/Drumpad/snare.mp3",
    "../assets/Drumpad/hihat.mp3"
];

var counter:number = 0;
var playing: boolean;
let x: number;
var num: number = 0;
var rnd:number = 0;

function Clicker() {
    document.querySelector(".pad-1").addEventListener("click", function() {playSample(allbeats[0]); });          
    document.querySelector(".pad-2").addEventListener("click", function() {playSample(allbeats[1]); });
    document.querySelector(".pad-3").addEventListener("click", function() {playSample(allbeats[2]); });
    document.querySelector(".pad-4").addEventListener("click", function() {playSample(allbeats[3]); });
    document.querySelector(".pad-5").addEventListener("click", function() {playSample(allbeats[4]); });
    document.querySelector(".pad-6").addEventListener("click", function() {playSample(allbeats[5]); });
    document.querySelector(".pad-7").addEventListener("click", function() {playSample(allbeats[6]); });    
    document.querySelector(".pad-8").addEventListener("click", function() {playSample(allbeats[7]); });
    document.querySelector(".pad-9").addEventListener("click", function() {playSample(allbeats[8]); });
    document.querySelector(".fa-play").addEventListener("click", function() {PlayButton(); });
    document.querySelector(".fa-random").addEventListener("click", function() {Remix(); });
}

function playSample(allbeats: string) { 
    var sound: HTMLAudioElement = new Audio(allbeats);  
    sound.volume = .25; 
    sound.play();
}

function Keypress() {
    document.addEventListener("keydown", (event) => {                
        if (event.key == "7") {
            playSample("../assets/Drumpad/kick.mp3");
            document.querySelector(".pad-1").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-1").setAttribute("style", "transform: scale(0.8)");  
        }        
        else if (event.key == "8") {
            playSample("../assets/Drumpad/snare.mp3");
            document.querySelector(".pad-2").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-2").setAttribute("style", "transform: scale(0.8)");              
        }
        else if (event.key == "9") {
            playSample("../assets/Drumpad/hihat.mp3");
            document.querySelector(".pad-3").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-3").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "4") {
            playSample("../assets/Drumpad/F.mp3");
            document.querySelector(".pad-4").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-4").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "5") {
            playSample("../assets/Drumpad/G.mp3");
            document.querySelector(".pad-5").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-5").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "6") {
            playSample("../assets/Drumpad/A.mp3");
            document.querySelector(".pad-6").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-6").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "1") {
            playSample("../assets/Drumpad/C.mp3");
            document.querySelector(".pad-7").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-7").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "2") {
            playSample("../assets/Drumpad/laugh-1.mp3");
            document.querySelector(".pad-8").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-8").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "3") {
            playSample("../assets/Drumpad/laugh-2.mp3");
            document.querySelector(".pad-9").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-9").setAttribute("style", "transform: scale(0.8)"); 
        }
        document.addEventListener("keyup", (event) => {
            document.querySelector(".pad-1").setAttribute("style", "transform: ");
            document.querySelector(".pad-2").setAttribute("style", "transform: ");
            document.querySelector(".pad-3").setAttribute("style", "transform: ");
            document.querySelector(".pad-4").setAttribute("style", "transform: ");
            document.querySelector(".pad-5").setAttribute("style", "transform: ");
            document.querySelector(".pad-6").setAttribute("style", "transform: ");
            document.querySelector(".pad-7").setAttribute("style", "transform: ");
            document.querySelector(".pad-8").setAttribute("style", "transform: ");
            document.querySelector(".pad-9").setAttribute("style", "transform: ");
        });
    });
}

function Remix(){
    num = setInterval(StartMix, 500);

    function StartMix(){
        for (var i = 0; i<= sickbeat.length; i++){
            rnd = Math.floor(Math.random() * 3);
            playSample(sickbeat[rnd]);
            playing = true;
        }
    }
}

function PlayMix() { 
        setInterval(function() {   
                            
                playSample(sickbeat[counter]);
                counter++;
                if (counter == 3) {
                    counter = 0;         
                }   
        },          500);
}  

function PlayButton(){ 
        document.querySelector("#player").setAttribute("class", "fas fa-stop fa-4x");
        document.querySelector("#player").classList.remove("fa-play");
        x = PlayMix();
        playing = true;
        console.log("PLAY");

        if (document.querySelector("#player").getAttribute("class") == " fas fa-stop fa-4x"){
            document.querySelector("#player").setAttribute("class", "fas fa-play fa-4x");
            document.querySelector("#player").classList.remove("fa-stop");
            clearInterval(x);
            playing = false;
            ResetMix();
            console.log("STOP");
        }
}

function ResetMix(){
    sickbeat.length = 0;
    sickbeat.length = 3;
}


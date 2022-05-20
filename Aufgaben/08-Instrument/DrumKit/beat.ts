

window.addEventListener("load", function(){
    document.querySelector(".beat").addEventListener('click', playSample); 
    document.addEventListener('keypress', playSample);     
});

function playSample(){     

    //activate on keypress
    document.addEventListener('keydown', (event) => {                
        if (event.key == "7"){
            Pad1(); 
            document.querySelector(".pad-1").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-1").setAttribute("style", "transform: scale(0.8)");  
        }        
        else if (event.key == "8"){
            Pad2();
            document.querySelector(".pad-2").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-2").setAttribute("style", "transform: scale(0.8)");              
        }
        else if (event.key == "9"){
            Pad3();
            document.querySelector(".pad-3").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-3").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "4"){
            Pad4();
            document.querySelector(".pad-4").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-4").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "5"){
            Pad5();
            document.querySelector(".pad-5").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-5").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "6"){
            Pad6();
            document.querySelector(".pad-6").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-6").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "1"){
            Pad7();
            document.querySelector(".pad-7").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-7").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "2"){
            Pad8();
            document.querySelector(".pad-8").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-8").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "3"){
            Pad9();
            document.querySelector(".pad-9").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".pad-9").setAttribute("style", "transform: scale(0.8)"); 
        }
        else if (event.key == "0"){
            PlayButton();
            document.querySelector(".play").setAttribute("style", "transition: all .3s"); 
            document.querySelector(".play").setAttribute("style", "transform: scale(0.8)"); 
        }
        document.addEventListener('keyup', (event) => {
            document.querySelector(".pad-1").setAttribute("style", "transform: ");
            document.querySelector(".pad-2").setAttribute("style", "transform: ");
            document.querySelector(".pad-3").setAttribute("style", "transform: ");
            document.querySelector(".pad-4").setAttribute("style", "transform: ");
            document.querySelector(".pad-5").setAttribute("style", "transform: ");
            document.querySelector(".pad-6").setAttribute("style", "transform: ");
            document.querySelector(".pad-7").setAttribute("style", "transform: ");
            document.querySelector(".pad-8").setAttribute("style", "transform: ");
            document.querySelector(".pad-9").setAttribute("style", "transform: ");
            document.querySelector(".play").setAttribute("style", "transform: ");
        });
    });

    //Activate on click
    
    document.querySelector(".pad-1").addEventListener('click', Pad1);      
    function Pad1(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/kick.mp3');
        sound.play();
        sound.volume = 0.2;        
    }
    document.querySelector(".pad-2").addEventListener('click', Pad2);
    function Pad2(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/snare.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-3").addEventListener('click', Pad3);
    function Pad3(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/hihat.mp3');
        sound.play();
        sound.volume = 0.2;
    } 
    document.querySelector(".pad-4").addEventListener('click', Pad4);
    function Pad4(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/F.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-5").addEventListener('click', Pad5);
    function Pad5(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/G.mp3');
        sound.play();
        sound.volume = 0.2;
    }          
    document.querySelector(".pad-6").addEventListener('click', Pad6);
    function Pad6(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/A.mp3');
        sound.play();
        sound.volume = 0.2;
    }    
    document.querySelector(".pad-7").addEventListener('click', Pad7);
    function Pad7(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/C.mp3');
        sound.play();
        sound.volume = 0.2;
    }       
    document.querySelector(".pad-8").addEventListener('click', Pad8);
    function Pad8(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/laugh-1.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".pad-9").addEventListener('click', Pad9);
    function Pad9(){
        var sound:HTMLAudioElement = new Audio('../assets/Drumpad/laugh-2.mp3');
        sound.play();
        sound.volume = 0.2;
    }   
    document.querySelector(".play").addEventListener('click', PlayButton);
    var sound:HTMLAudioElement [] = [new Audio("../assets/Drumpad/snare.mp3"), new Audio("../assets/Drumpad/kick.mp3"), new Audio("../assets/Drumpad/hihat.mp3")];

    function PlayButton(){     
        alert("volume warning");       

        setInterval(function() {                       
            sound[0].play();
            sound[1].play();
            sound[2].play();           
         }, 500);
    }    
}



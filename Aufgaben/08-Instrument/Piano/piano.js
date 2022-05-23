window.addEventListener("load", Click);
window.addEventListener("load", Press);
function playSample(keys) {
    var sound = new Audio(keys);
    sound.play();
}
function Click() {
    document.querySelector(".key-1").addEventListener('click', function () { playSample("../assets/Keyboard/c.mp3"); });
    document.querySelector(".key-2").addEventListener('click', function () { playSample("../assets/Keyboard/d.mp3"); });
    document.querySelector(".key-3").addEventListener('click', function () { playSample("../assets/Keyboard/e.mp3"); });
    document.querySelector(".key-4").addEventListener('click', function () { playSample("../assets/Keyboard/f.mp3"); });
    document.querySelector(".key-5").addEventListener('click', function () { playSample("../assets/Keyboard/g.mp3"); });
    document.querySelector(".key-6").addEventListener('click', function () { playSample("../assets/Keyboard/a.mp3"); });
    document.querySelector(".key-7").addEventListener('click', function () { playSample("../assets/Keyboard/b.mp3"); });
    document.querySelector(".black-1").addEventListener('click', function () { playSample("../assets/Keyboard/df.mp3"); });
    document.querySelector(".black-2").addEventListener('click', function () { playSample("../assets/Keyboard/ef.mp3"); });
    document.querySelector(".black-3").addEventListener('click', function () { playSample("../assets/Keyboard/gf.mp3"); });
    document.querySelector(".black-4").addEventListener('click', function () { playSample("../assets/Keyboard/af.mp3"); });
    document.querySelector(".black-5").addEventListener('click', function () { playSample("../assets/Keyboard/bf.mp3"); });
    document.querySelector(".play").addEventListener('click', function () { playButton(); });
}
function Press() {
    document.addEventListener('keydown', (event) => {
        if (event.key == "A" || event.key == "a") {
            document.querySelector(".key-1").addEventListener('click', function () { playSample("../assets/Keyboard/c.mp3"); });
            document.querySelector(".key-1").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-1").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "W" || event.key == "w") {
            document.querySelector(".black-1").addEventListener('click', function () { playSample("../assets/Keyboard/df.mp3"); });
            document.querySelector(".black-1").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-1").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "S" || event.key == "s") {
            document.querySelector(".key-2").addEventListener('click', function () { playSample("../assets/Keyboard/d.mp3"); });
            document.querySelector(".key-2").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-2").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "E" || event.key == "e") {
            document.querySelector(".black-2").addEventListener('click', function () { playSample("../assets/Keyboard/ef.mp3"); });
            document.querySelector(".black-2").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-2").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "D" || event.key == "d") {
            document.querySelector(".key-3").addEventListener('click', function () { playSample("../assets/Keyboard/e.mp3"); });
            document.querySelector(".key-3").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-3").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "F" || event.key == "f") {
            document.querySelector(".key-4").addEventListener('click', function () { playSample("../assets/Keyboard/f.mp3"); });
            document.querySelector(".key-4").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-4").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "R" || event.key == "r") {
            document.querySelector(".black-3").addEventListener('click', function () { playSample("../assets/Keyboard/gf.mp3"); });
            document.querySelector(".black-3").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-3").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "G" || event.key == "g") {
            document.querySelector(".key-5").addEventListener('click', function () { playSample("../assets/Keyboard/g.mp3"); });
            document.querySelector(".key-5").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-5").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "T" || event.key == "t") {
            document.querySelector(".black-4").addEventListener('click', function () { playSample("../assets/Keyboard/af.mp3"); });
            document.querySelector(".black-4").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-4").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "H" || event.key == "h") {
            document.querySelector(".key-6").addEventListener('click', function () { playSample("../assets/Keyboard/a.mp3"); });
            document.querySelector(".key-6").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-6").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "Z" || event.key == "z") {
            document.querySelector(".black-5").addEventListener('click', function () { playSample("../assets/Keyboard/bf.mp3"); });
            document.querySelector(".black-5").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-5").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "J" || event.key == "j") {
            document.querySelector(".key-7").addEventListener('click', function () { playSample("../assets/Keyboard/b.mp3"); });
            document.querySelector(".key-7").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-7").setAttribute("style", "transform: scale(0.8)");
        }
        document.addEventListener('keyup', (event) => {
            document.querySelector(".key-1").setAttribute("style", "transform: ");
            document.querySelector(".black-1").setAttribute("style", "transform: ");
            document.querySelector(".key-2").setAttribute("style", "transform: ");
            document.querySelector(".black-2").setAttribute("style", "transform: ");
            document.querySelector(".key-3").setAttribute("style", "transform: ");
            document.querySelector(".key-4").setAttribute("style", "transform: ");
            document.querySelector(".black-3").setAttribute("style", "transform: ");
            document.querySelector(".key-5").setAttribute("style", "transform: ");
            document.querySelector(".black-4").setAttribute("style", "transform: ");
            document.querySelector(".key-6").setAttribute("style", "transform: ");
            document.querySelector(".black-5").setAttribute("style", "transform: ");
            document.querySelector(".key-7").setAttribute("style", "transform: ");
        });
    });
}
var Pianokeys = [
    "../assets/Keyboard/c.mp3",
    "../assets/Keyboard/df.mp3",
    "../assets/Keyboard/d.mp3",
    "../assets/Keyboard/ef.mp3",
    "../assets/Keyboard/e.mp3",
    "../assets/Keyboard/f.mp3",
    "../assets/Keyboard/gf.mp3",
    "../assets/Keyboard/g.mp3",
    "../assets/Keyboard/af.mp3",
    "../assets/Keyboard/a.mp3",
    "../assets/Keyboard/bf.mp3",
    "../assets/Keyboard/b.mp3"
];
function playButton() {
    var counter = 0;
    setInterval(function () {
        playSample(Pianokeys[counter]);
        counter++;
        if (counter == 11) {
            counter = 0;
        }
    }, 500);
}
//# sourceMappingURL=piano.js.map
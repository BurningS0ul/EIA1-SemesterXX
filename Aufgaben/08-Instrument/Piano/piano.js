window.addEventListener("load", function () {
    document.querySelector(".piano").addEventListener('click', playSample);
    document.addEventListener('keypress', playSample);
});
function playSample() {
    //activate on keypress
    document.addEventListener('keydown', (event) => {
        if (event.key == "A" || event.key == "a") {
            Key1();
            document.querySelector(".key-1").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-1").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "W" || event.key == "w") {
            Black1();
            document.querySelector(".black-1").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-1").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "S" || event.key == "s") {
            Key2();
            document.querySelector(".key-2").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-2").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "E" || event.key == "e") {
            Black2();
            document.querySelector(".black-2").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-2").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "D" || event.key == "d") {
            Key3();
            document.querySelector(".key-3").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-3").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "F" || event.key == "f") {
            Key4();
            document.querySelector(".key-4").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-4").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "R" || event.key == "r") {
            Black3();
            document.querySelector(".black-3").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-3").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "G" || event.key == "g") {
            Key5();
            document.querySelector(".key-5").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-5").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "T" || event.key == "t") {
            Black4();
            document.querySelector(".black-4").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-4").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "H" || event.key == "h") {
            Key6();
            document.querySelector(".key-6").setAttribute("style", "transition: all .3s");
            document.querySelector(".key-6").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "Z" || event.key == "z") {
            Black5();
            document.querySelector(".black-5").setAttribute("style", "transition: all .3s");
            document.querySelector(".black-5").setAttribute("style", "transform: scale(0.8)");
        }
        else if (event.key == "J" || event.key == "j") {
            Key7();
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
    //Activate on click
    document.querySelector(".key-1").addEventListener('click', Key1);
    function Key1() {
        var sound = new Audio('../assets/Keyboard/c.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".black-1").addEventListener('click', Black1);
    function Black1() {
        var sound = new Audio('../assets/Keyboard/df.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".key-2").addEventListener('click', Key2);
    function Key2() {
        var sound = new Audio('../assets/Keyboard/d.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".black-2").addEventListener('click', Black2);
    function Black2() {
        var sound = new Audio('../assets/Keyboard/ef.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".key-3").addEventListener('click', Key3);
    function Key3() {
        var sound = new Audio('../assets/Keyboard/e.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".key-4").addEventListener('click', Key4);
    function Key4() {
        var sound = new Audio('../assets/Keyboard/f.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".black-3").addEventListener('click', Black3);
    function Black3() {
        var sound = new Audio('../assets/Keyboard/gf.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".key-5").addEventListener('click', Key5);
    function Key5() {
        var sound = new Audio('../assets/Keyboard/g.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".black-4").addEventListener('click', Black4);
    function Black4() {
        var sound = new Audio('../assets/Keyboard/af.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".key-6").addEventListener('click', Key6);
    function Key6() {
        var sound = new Audio('../assets/Keyboard/a.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".black-5").addEventListener('click', Black5);
    function Black5() {
        var sound = new Audio('../assets/Keyboard/bf.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    document.querySelector(".key-7").addEventListener('click', Key7);
    function Key7() {
        var sound = new Audio('../assets/Keyboard/b.mp3');
        sound.play();
        sound.volume = 0.2;
    }
    var sound = [
        new Audio("../assets/Keyboard/a.mp3"),
        new Audio("../assets/Keyboard/af.mp3"),
        new Audio("../assets/Keyboard/b.mp3"),
        new Audio("../assets/Keyboard/bf.mp3"),
        new Audio("../assets/Keyboard/c.mp3"),
        new Audio("../assets/Keyboard/d.mp3"),
        new Audio("../assets/Keyboard/df.mp3"),
        new Audio("../assets/Keyboard/e.mp3"),
        new Audio("../assets/Keyboard/ef.mp3"),
        new Audio("../assets/Keyboard/f.mp3"),
        new Audio("../assets/Keyboard/g.mp3"),
        new Audio("../assets/Keyboard/gf.mp3"),
    ];
    document.querySelector(".play").addEventListener('click', PlayButton);
    function PlayButton() {
        alert("Volume Warning");
        setInterval(function () {
            sound[0].play();
            sound[1].play();
            sound[2].play();
            sound[3].play();
            sound[4].play();
            sound[5].play();
            sound[6].play();
            sound[7].play();
            sound[8].play();
            sound[9].play();
            sound[10].play();
            sound[11].play();
            sound.volume = 0.2;
        }, 500);
    }
}
//# sourceMappingURL=piano.js.map
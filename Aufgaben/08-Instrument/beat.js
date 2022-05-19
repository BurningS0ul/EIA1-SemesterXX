window.addEventListener("load", function () {
    document.querySelector(".pad-1").addEventListener('click', playSample);
    document.querySelector(".pad-2").addEventListener('click', playSample);
    document.querySelector(".pad-3").addEventListener('click', playSample);
    document.querySelector(".pad-4").addEventListener('click', playSample);
    document.querySelector(".pad-5").addEventListener('click', playSample);
    document.querySelector(".pad-6").addEventListener('click', playSample);
    document.querySelector(".pad-7").addEventListener('click', playSample);
    document.querySelector(".pad-8").addEventListener('click', playSample);
    document.querySelector(".pad-9").addEventListener('click', playSample);
});
function playSample() {
    if (".pad-1") {
        var sound = new Audio('assets/Drumpad/A.mp3');
        sound.play();
    }
    if (".pad-2") {
        var sound = new Audio('assets/Drumpad/C.mp3');
        sound.play();
    }
    if (".pad-3") {
        var sound = new Audio('assets/Drumpad/F.mp3');
        sound.play();
    }
    if (".pad-4") {
        var sound = new Audio('assets/Drumpad/G.mp3');
        sound.play();
    }
    if (".pad-5") {
        var sound = new Audio('assets/Drumpad/hihat.mp3');
        sound.play();
    }
    if (".pad-6") {
        var sound = new Audio('assets/Drumpad/kick.mp3');
        sound.play();
    }
    if (".pad-7") {
        var sound = new Audio('assets/Drumpad/laugh-1.mp3');
        sound.play();
    }
    if (".pad-8") {
        var sound = new Audio('assets/Drumpad/laugh-2.mp3');
        sound.play();
    }
    if (".pad-9") {
        var sound = new Audio('assets/Drumpad/snare.mp3');
        sound.play();
    }
}
//# sourceMappingURL=beat.js.map
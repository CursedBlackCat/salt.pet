let salt = document.getElementById("salt");
let nyaAudio = new Audio('assets/Salt1-Perfect.mp3');

function nya(){
    if (nyaAudio.paused || nyaAudio.ended) {
        let random = Math.floor(Math.random() * 100) + 1 // random 1-100
        if (random === 1) {
            nyaAudio = new Audio('assets/Salt1-Slide.mp3');
        } else if (random <= 40){
            nyaAudio = new Audio('assets/Salt1-GreatGood.mp3');
        } else {
            nyaAudio = new Audio('assets/Salt1-Perfect.mp3');
        }
        nyaAudio.play();
        salt.play();
    }
}

salt.addEventListener("click", nya);
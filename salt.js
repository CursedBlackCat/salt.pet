let salt = document.getElementById("salt");
let nyaAudio = new Audio('assets/Salt1-Perfect.mp3');;

function nya(){
    if (nyaAudio.paused || nyaAudio.ended) {
        let random = Math.floor(Math.random() * 10) + 1 // random 1-10
        if (random <= 4){
            nyaAudio = new Audio('assets/Salt1-GreatGood.mp3');
        } else {
            nyaAudio = new Audio('assets/Salt1-Perfect.mp3');
        }
        nyaAudio.play();
        salt.play();
    }
}

salt.addEventListener("click", nya);
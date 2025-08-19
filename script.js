let button = document.getElementById("button");
let buttonText = document.getElementById("button-text")
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let timer;
let count = 0;
let hrs = 0;
let mins = 0;
let sec = 0;

button.addEventListener("click", () => {
    if(buttonText.innerText === "Start"){
        buttonText.innerText = "Stop";
        timer = true;
        start();

    } else{
        buttonText.innerText = "Start";
        timer = false;
    }
})

function start() {
    if (timer) {
        count++;
        if (count === 100) {
            sec++;
            count = 0;
        }
        
        if(sec === 59){
            mins++;
            sec = 0;
        }

        if(mins === 59){
            hrs++;
            mins = 0;
        }

        let hrString = hrs;
        let minString = mins;
        let secString = sec;

        if (hrs < 10) {
            hrString = "0" + hrString;
        }

        if (mins < 10) {
            minString = "0" + minString;
        }

        if (sec < 10) {
            secString = "0" + secString;
        }

        hours.innerText = hrString;
        minutes.innerText = minString;
        seconds.innerText = secString;
        //dunction that repeats a function after the timer (10) expires
        setTimeout(start, 10);
    }
}
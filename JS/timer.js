let timerRef = document.querySelector('#timerDisplay');
let startTime;
let pausetime = 0;
let minutes2 = parseInt(localStorage.getItem("minutes")) || 0;
let seconds2 = parseInt(localStorage.getItem("seconds")) || 0;
let minutes = 0;
let seconds = 0;
let filenum = parseInt(localStorage.getItem("filenum")) || 1;
let int = null;

// startButton.addEventListener('click', displayTimer());
window.onload = function () {
    displayTimer();
}

function displayTimer() {
    minutes = parseInt(localStorage.getItem("minutes")) || 0;
    seconds = (parseInt(localStorage.getItem("seconds"))) + 1 || 0;
    startTime = new Date().getTime() - pausetime; // get the starting time by subtracting the elapsed paused time from the current time
    stopwatchInterval = setInterval(function () {
        savetime();
        updateStopwatch();
    }, 1000);
}
function updateStopwatch() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    seconds = seconds2 + Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    minutes = minutes2 + Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    let displayTime = pad(minutes) + ":" + pad(seconds);
    timerRef.innerHTML = displayTime;
}

function savetime() {
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    pausetime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable

}

function pad(number) {
    return (number < 10 ? "0" : "") + number;
}
let timerRef = document.querySelector('#timerDisplay');
let startButton = document.querySelector('#stq');
let startTime;
let pausetime = 0;
let minutes = parseInt(localStorage.getItem("minutes")) || 0;
let seconds = parseInt(localStorage.getItem("seconds")) || 0;
let int = null;

startButton.addEventListener('click', displayTimer());

function displayTimer() {
    startTime = new Date().getTime() - pausetime; // get the starting time by subtracting the elapsed paused time from the current time

    stopwatchInterval = setInterval(function () {
        updateStopwatch();
        savetime();
    }, 1000);
}
function updateStopwatch() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    let displayTime = pad(minutes) + ":" + pad(seconds);
    console.log(localStorage.getItem("seconds"))
    timerRef.innerHTML = displayTime;
}

function savetime() {
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
    // console.log(localStorage.getItem("seconds"))
}

function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    pausetime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable

}

function pad(number) {
    return (number < 10 ? "0" : "") + number;
}
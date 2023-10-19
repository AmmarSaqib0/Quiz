let timerRef = document.querySelector('#timerDisplay');
let startTime;
let pausetime = 0;
let minutes = 0;
let seconds = 0;
let int = null;

window.onload = function () {
    if (int != null) {
        clearInterval(int);
    }
    displayTimer();
};

function displayTimer() {
    startTime = new Date().getTime() - pausetime; // get the starting time by subtracting the elapsed paused time from the current time
    stopwatchInterval = setInterval(updateStopwatch, 1000);
}
function updateStopwatch() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    let displayTime = pad(minutes) + ":" + pad(seconds);
    timerRef.innerHTML = displayTime;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    pausetime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("seconds", seconds);
    console.log(minutes + "  " + seconds)
}

function pad(number) {
    return (number < 10 ? "0" : "") + number;
}
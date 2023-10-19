let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector('#timerDisplay');
let m = 0;
let s = 0;
let int = null;

window.onload = function () {
    if (int != null) {
        clearInterval(int);
    }
    setInterval(displayTimer, 1000);
};

function displayTimer() {
    milliseconds += 1000;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    // let min = localStorage.getItem('m');
    // let sec = localStorage.getItem('s');
    // let h = hours < 10 ? "0" + hours : hours;
    let test = eval(minutes);
    let test2 = eval(seconds);

    m = minutes < 10 ? "0" + test : test;
    s = seconds < 10 ? "0" + test2 : test2;

    // console.log(`${m}, ${s}`)
    timerRef.innerHTML = `${m} : ${s}`;
}
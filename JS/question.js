let score = localStorage.getItem('score') || 0;
const buttons = document.querySelectorAll(".button");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
const question = document.querySelector("#question");
filenum = localStorage.getItem('filenum') || 1;

function nextQuestion() {
    if (filenum < 3) {
        filenum++;
        localStorage.setItem('filenum', filenum);
        window.location.href = `q${filenum}.html`;
    } else {
        window.location.href = `result.html`;
    }
}

let questions = [
    {
        answer: "Regina"
    },
    {
        answer: "Sk"
    },
    {
        answer: "10"
    }
];

// loop through each button and add a click event listener
buttons.forEach(addEvent);
function addEvent(button) {
    button.addEventListener("click", function () {
        // console.log(eval(q[0] + q[1] + q[2]));
        if (score >= 3) {
            score = 3;
        } else if (button.innerHTML == questions[filenum - 1].answer) {
            score++;
            localStorage.setItem('score', score);
            nextQuestion();
            console.log(score);
            document.getElementById(".button").disabled = true;
        } else {
            ans1.setAttribute('disabled', true)
            ans2.setAttribute('disabled', true)
            ans3.setAttribute('disabled', true)
            ans4.setAttribute('disabled', true)
            nextQuestion();
            console.log(score);
        }
    });
}
let score = 0;
const buttons = document.querySelectorAll(".button");
const question = document.querySelector("#question");
filenum = localStorage.getItem('filenum');

function nextQuestion() {
    if (filenum < 3) {
        filenum++;
        localStorage.setItem('filenum', filenum);
        window.location.href = `q${filenum}.html`;
    } else {
        alert("This is the last question");
    }
}

let questions = question.innerHTML;
// }
// ];
let q = questions.split(" ");

// loop through each button and add a click event listener
buttons.forEach(addEvent);
function addEvent(button) {
    button.addEventListener("click", function () {
        // console.log(eval(q[0] + q[1] + q[2]));
        if (parseInt(button.innerHTML) == eval(q[0] + q[1] + q[2])) {
            score++;
            nextQuestion();
        }
    });
}
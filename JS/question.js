// select all the buttons with the class name "button"
total_answer = 0;
const buttons = document.querySelectorAll(".button");
const question = document.querySelector("#question");

// loop through each button and add a click event listener
buttons.forEach(addEvent);

function addEvent (button) {
    button.addEventListener("click", function() {      
        buttons.forEach(function (button) {
            if (document.URL.includes("q1.html")) {
                if (button.id == "ans1") {
                    total_answer++;
                }
            }
        })
    });
}

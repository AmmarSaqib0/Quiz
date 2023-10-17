let score = 0;
let q = document.querySelector('#question');
const buttons = document.querySelectorAll(".button");
const question = document.querySelector("#question");

let questions = [
   {
       question: "2 + 2",
       answer: "ans4"
   },
   {
    question: "5 + 9",
    answer: "ans3"
    },
    {
        question: "4 + 2",
        answer: "ans2"
    },
]

// loop through each button and add a click event listener
buttons.forEach(addEvent);
question.innerHTML = questions[0].question
function addEvent (button) {
    button.addEventListener("click", function() {        
        if (button.id == questions[0].answer) {            
            question.innerHTML = questions[1].question
        }
        else {
            question.innerHTML = questions[1].question
            if (button.id == questions[1].answer) {                
                question.innerHTML = questions[2].question
            }
            else {                
                if (button.id == questions[2].answer) {                    
                    question.innerHTML = questions[3].question                    
                }
                else {                    
                    
                }
            }
        }                        
        // page_number = page_number + 1;  
        // page_name = "q" + page_number + ".html";                    
        // window.location.assign(page_name);         
    });
}
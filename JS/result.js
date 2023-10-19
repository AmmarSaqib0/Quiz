let time = document.querySelector(".rtime");
let score1 = document.querySelector(".score");
let button = document.querySelector(".button");
score = localStorage.getItem('score') || 0;

score1.innerHTML = `${score}`;
time.innerHTML = `10`;

button.addEventListener("click", function () {
    window.location.href = `index.html`;
});

localStorage.setItem("score", 0);
localStorage.setItem("filenum", 1);
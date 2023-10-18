score = localStorage.getItem('score');
const button = document.querySelector("#stq");
filenum = localStorage.getItem('filenum');

button.addEventListener("click", function () {
    localStorage.setValue('filenum', 1);
    localStorage.setValue('score', 1);
});
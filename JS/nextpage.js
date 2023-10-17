const nextPageButton = document.querySelector("#next-page");
let filenum = localStorage.getItem('filenum') || 0;

nextPageButton.addEventListener("click", function () {
    if (filenum < 3) {
        filenum++;
        localStorage.setItem('filenum', filenum);
        window.location.href = `q${filenum}.html`;
    } else {
        alert("This is the last question");
    }
});
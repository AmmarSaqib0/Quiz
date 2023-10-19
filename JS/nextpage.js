const nextPageButton = document.querySelector("#next-page");
let filenum = localStorage.getItem('filenum') || 0;

nextPageButton.addEventListener("click", function () {
    if (filenum < 3) {
        localStorage.setItem('filenum', filenum);
        window.location.href = `q${filenum}.html`;
    } else {
        window.location.href = `result.html`;
    }
});
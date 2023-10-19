const previousbutton = document.querySelector("#previous-page");

previousbutton.addEventListener("click", function () {
    if (filenum > 1) {
        filenum--;
        localStorage.setItem('filenum', filenum);
        window.location.href = `q${filenum}.html`;
    } else {
        alert("This is the first question");
        localStorage.key(filenum);
    }
});
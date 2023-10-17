const button = document.querySelector("#next-page");
let filenum = localStorage.getItem('filenum') || 0; // Retrieve the value from localStorage or set it to 0

button.addEventListener("click", function () {
    if (filenum < 3) {
        filenum++;
        localStorage.setItem('filenum', filenum); // Store the updated value in localStorage
        window.location.href = `q${filenum}.html`;
    }
    else {
        alert("This is the last question");
        // filenum = 0;
    }
});
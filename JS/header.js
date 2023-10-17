document.addEventListener("DOMContentLoaded", function () {
    const questionnumber = document.querySelector("#header-num");
    let filenum = localStorage.getItem('filenum');

    if (filenum === null) {
        // Handle the case when 'filenum' is not in localStorage, and set a default value.
        filenum = 1;
        localStorage.setItem('filenum', filenum);
    }

    questionnumber.innerHTML = `Question ${filenum}`;
});
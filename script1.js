// JavaScript (script1.js)

document.addEventListener("DOMContentLoaded", function () {
    const applyButton = document.getElementById("apply");
    const payButton = document.getElementById("pay");
    const homeButton = document.getElementById("home");
    const mainForm = document.querySelector(".main");
    const loanForm = document.querySelector(".content1");
    const billsForm = document.querySelector(".content2");

    applyButton.addEventListener("click", function () {
        loanForm.style.display = "block";
        billsForm.style.display = "none";
        mainForm.style.display = "none";
    });

    payButton.addEventListener("click", function () {
        loanForm.style.display = "none";
        billsForm.style.display = "block";
        mainForm.style.display = "none";
    });
    homeButton.addEventListener("click", function () {
        loanForm.style.display = "none";
        billsForm.style.display = "none";
        mainForm.style.display = "block";
    })
});
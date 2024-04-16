function newCap() {
    const captchaInput = document.getElementById("captchaa").value.trim();
    const space = document.querySelector(".space");
    let char = '';
    const str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

    for (let i = 0; i < 5; i++) {
        char += str.charAt(Math.floor(Math.random() * str.length));
    }
    space.innerHTML = char;
    return char;
}

function save() {
    const captchaInput = document.getElementById("captchaa").value.trim();
    const space = document.querySelector(".space");
    const char = space.innerHTML;

    if (captchaInput === char) {
        window.location.href = "first.html";
    } else {
        alert("Captcha wasn't Same :( ");
    }
}
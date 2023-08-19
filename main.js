const form = document.querySelector(".form");
const email = document.getElementById("email");
const errMsg = document.querySelector(".error");
const label = document.querySelector(".imgErr");
const btn = document.querySelector(".submit");

form.addEventListener("submit", validEmail);
btn.addEventListener("click", validEmail);


function validEmail(e) {
    e.preventDefault();

    let emailValue = email.value;

    if (!isValid(emailValue)) {
        errMsg.style.display = "inline-block";
        label.style.display = "inline-block";
    } else {
        errMsg.style.display = "none";
        label.style.display = "none";
    }
}


function isValid(email) {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regEx.test(email);
}



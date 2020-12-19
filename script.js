const form = document.querySelector(".form")
const exclamationIcon = document.querySelector(".caution-icon")
const cautionParagraph = document.querySelector(".caution");
const btn = document.querySelector(".send-btn")

// on clicking 'submit button'
btn.addEventListener('click', function (event) {
    event.preventDefault();

    let isEmailValid = validateEmail();
    if (isEmailValid) {
        form.classList.remove("show-text");
        document.querySelector("input").classList.remove("border")
        window.location.reload();
    } else {
        form.classList.add("show-text");
        document.querySelector("input").classList.remove("border");
    }
}) 

function validateEmail() {
    let email = document.getElementById("email-input").value;
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

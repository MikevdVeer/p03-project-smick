const submitBtn = document.querySelector(".submit-btn");

const nameField = document.querySelector(".form-name");
const emailField = document.querySelector(".form-email");
const textField = document.querySelector(".form-subject");

// start

submitBtn.style.display = "none";

function checkForm() {
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (emailRegex.test(emailField.value)) {
        submitBtn.style.display = "block";
    }
    else {
        submitBtn.style.display = "none";
    }
}
const formData = {
    email: " ",
    message: " ",
};
const form = document.querySelector('.feedback-form');
const input = document.querySelector('[type="email"]');
const textarea = document.querySelector('[name="message"]');

const savedData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

input.value = savedData.email || "";
textarea.value = savedData.message || "";

form.addEventListener("input", (evt)=> {
    formData.email = input.value;
    formData.message = textarea.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

form.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    if (textarea.value !== "" && input.value !== "") {
        console.log({email: input.value, message: textarea.value});
        form.reset();
        localStorage.removeItem("feedback-form-state");
    } else {
        alert("Fill please all fields");
    };
})
const form = document.getElementById("contact-form");
const overlay = document.getElementById("overlay");
const numOfContactForms = document.createElement("p");
const notiDiv = document.getElementsByClassName("numOfNoti")[0];
let numOfContacts = 0;

function openContactForm() {
  if (form.style.display === "none" || form.style.display === "") {
    form.style.display = "flex";
    form.classList.add("showedForm");
    overlay.style.display = "block";
  }
}

function closeContactForm() {
  if (form.style.display === "flex") {
    form.style.display = "none";
    form.classList.remove("showedForm");
    overlay.style.display = "none";
  }
}

let isSubmitted = false;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  closeContactForm();
  alert("Thank for contacting me! I will call you back");
  isSubmitted = true;
  if (isSubmitted) {
    numOfContacts++;
  }
  numOfContactForms.textContent = numOfContacts;
  console.log(numOfContacts);
});

notiDiv.appendChild(numOfContactForms);

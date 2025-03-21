'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const langButton = document.querySelectorAll(".lang-button");
  const langText = document.querySelectorAll(".lang-text");

  let currentLang = localStorage.getItem("language") || "UA";
  langText.forEach(span => span.textContent = currentLang);

  langButton.forEach(button => {
    button.addEventListener("click", () => {
      currentLang = currentLang === "UA" ? "EN" : "UA";

      langText.forEach(span => span.textContent = currentLang);
      localStorage.setItem("language", currentLang);
    });
  });
});

document.getElementById("subscribeForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const emailInput = document.getElementById("subscribeInput");
  const emailError = document.getElementById("email-error");
  const successMassage = document.getElementById("successMessage");

  let isValid = true;

  const emailPattern = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;
  const emailValue = emailInput.value.trim().replace(/\s+/g, "");

  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Please enter a valid email without spaces.";
    emailError.style.display = "block";
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailError.style.display = "none";
    emailInput.classList.remove("error");
  }

  if (isValid) {
    successMassage.classList.add("show");
    form.reset();
  }

  setTimeout(() => {
    successMassage.classList.remove("show");
  }, 3000);
})



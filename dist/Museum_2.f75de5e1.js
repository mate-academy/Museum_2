'use strict';
document.addEventListener("DOMContentLoaded", ()=>{
    const langButton = document.querySelectorAll(".lang-button");
    const langText = document.querySelectorAll(".lang-text");
    let currentLang = localStorage.getItem("language") || "UA";
    langText.forEach((span)=>span.textContent = currentLang);
    langButton.forEach((button)=>{
        button.addEventListener("click", ()=>{
            currentLang = currentLang === "UA" ? "EN" : "UA";
            langText.forEach((span)=>span.textContent = currentLang);
            localStorage.setItem("language", currentLang);
        });
    });
    const form = document.getElementById("subscribeForm");
    if (form) form.addEventListener("submit", function(event) {
        event.preventDefault();
        const emailInput = document.getElementById("subscribeInput");
        const emailError = document.getElementById("email-error");
        const successMessage = document.getElementById("successMessage");
        if (!emailInput || !emailError || !successMessage) return;
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
            successMessage.classList.add("show");
            form.reset();
            setTimeout(()=>{
                successMessage.classList.remove("show");
            }, 3000);
        }
    });
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    const body = document.body;
    const menuLinks = document.querySelectorAll(".menu a[href^='#']");
    if (menuToggle && menu) menuToggle.addEventListener('click', (event)=>{
        event.preventDefault();
        menu.classList.toggle("menu-open");
        body.classList.toggle("no-scroll");
    });
    menuLinks.forEach((link)=>{
        link.addEventListener("click", ()=>{
            menu.classList.remove("menu-open");
            body.classList.remove("no-scroll");
        });
    });
});

//# sourceMappingURL=Museum_2.f75de5e1.js.map

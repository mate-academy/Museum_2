document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('.wrapper').classList.add('_loaded');
});

const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");

const navLinks = document.querySelectorAll('.nav__link');

iconMenu.addEventListener("click", function (e) {
	iconMenu.classList.toggle("_active");
	menuBody.classList.toggle("_active");
	body.classList.toggle("_lock");
})

navLinks.forEach((link) => {
	link.addEventListener('click', () => {
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
		body.classList.remove('_lock');
	})
});

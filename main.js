const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("menu-ul");

function toggleButton() {
	navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);
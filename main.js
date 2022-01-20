// Menu hamburgr responsivo
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("menu-ul");

function toggleButton() {
	navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

// Seta voltar pra cima
const btnScrollToTop = document.getElementById("btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
	window.scrollTo(0, 0);
});

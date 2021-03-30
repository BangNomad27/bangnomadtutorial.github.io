// ! ===== Header =====
window.addEventListener('scroll', function() {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

// ! ===== Button Toggle =====
const toggleBtn = document.querySelector('.toggle');
const nav = document.querySelector('.navbar');

function toggleButton() {
	toggleBtn.classList.toggle('active');
	nav.classList.toggle('active');
}

toggleBtn.onclick = toggleButton;
nav.onclick = toggleButton;
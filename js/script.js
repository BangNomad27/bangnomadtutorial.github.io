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

// ! ===== Intro JS =====
const introBtn = document.getElementById('intro-btn');

introBtn.addEventListener('click', () => {
	introJs().setOptions({
		tooltipClass: 'tooltip',
		showBullets: false,
		steps: [
		{
			element: document.querySelector('.opening .titleBx .version'),
			intro: "Versi saat ini",
			position: "left"
		},
		{
			element: document.querySelector('header .navbar ul'),
			intro: "Navbar",
			position: "bottom"
		},
		{
			element: document.querySelector('header .navbar ul li:last-child'),
			intro: "Menu help",
			position: "left"
		},
		{
			element: document.querySelector('.opening .textBx .button a:nth-child(2)'),
			intro: "Untuk bermain game",
			position: "right"
		},
		{
			element: document.querySelector('.opening .textBx .button a:last-child'),
			intro: "Untuk mengoding (masih dalam tahap pengembangan)",
			position: "right"
		},
		{
			element: document.querySelector('.opening .update .title'),
			intro: "Pemberitahuan update",
			position: "right"
		},
		{
			element: document.querySelector('.opening .tableBx .table'),
			intro: "Tabel Tutorial",
			position: "left"
		},
		{
			element: document.querySelector('.about .heading .head'),
			intro: "Tentang saya",
			position: "bottom"
		},
		{
			element: document.querySelector('.notice'),
			intro: "Catatan tambahan",
			position: "bottom"
		},
		{
			element: document.querySelector('footer ul'),
			intro: "Media sosial saya",
			position: "top"
		},
		{
			intro: "Sekian intronya, terima kasih",
			position: "center"
		}]
	}).start();
});
introJs().addHints();

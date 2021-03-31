// ! ===== Front-End =====
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const content4 = document.getElementById('content4');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

function openHTML() {
	content1.style.transform = 'translateX(0)';
	content2.style.transform = 'translateX(100%)';
	content3.style.transform = 'translateX(100%)';
	content4.style.transform = 'translateX(100%)';
	btn1.style.color = '#ff7846';
	btn2.style.color = '#111';
	btn3.style.color = '#111';
	btn4.style.color = '#111';
	content1.style.transitionDelay = '0.3s';
	content2.style.transitionDelay = '0s';
	content3.style.transitionDelay = '0s';
	content4.style.transitionDelay = '0s';
}
function openCSS() {
	content1.style.transform = 'translateX(100%)';
	content2.style.transform = 'translateX(0)';
	content3.style.transform = 'translateX(100%)';
	content4.style.transform = 'translateX(100%)';
	btn1.style.color = '#111';
	btn2.style.color = '#2196f3';
	btn3.style.color = '#111';
	btn4.style.color = '#111';
	content1.style.transitionDelay = '0s';
	content2.style.transitionDelay = '0.3s';
	content3.style.transitionDelay = '0s';
	content4.style.transitionDelay = '0s';
}	
function openJS() {
	content1.style.transform = 'translateX(100%)';
	content2.style.transform = 'translateX(100%)';
	content3.style.transform = 'translateX(0)';
	content4.style.transform = 'translateX(100%)';
	btn1.style.color = '#111';
	btn2.style.color = '#111';
	btn3.style.color = '#ffd700';
	btn4.style.color = '#111';
	content1.style.transitionDelay = '0s';
	content2.style.transitionDelay = '0s';
	content3.style.transitionDelay = '0.3s';
	content4.style.transitionDelay = '0s';
}
function openReact() {
  content1.style.transform = 'translateX(100%)';
	content2.style.transform = 'translateX(100%)';
	content3.style.transform = 'translateX(100%)';
	content4.style.transform = 'translateX(0)';
	btn1.style.color = '#111';
	btn2.style.color = '#111';
	btn3.style.color = '#111';
	btn4.style.color = '#0000ff';
	content1.style.transitionDelay = '0s';
	content2.style.transitionDelay = '0s';
	content3.style.transitionDelay = '0s';
	content4.style.transitionDelay = '0.3s';
}

// ! ===== Back-End =====
const content5 = document.getElementById('content5');
const content6 = document.getElementById('content6');
const content7 = document.getElementById('content7');
const content8 = document.getElementById('content8');
const content9 = document.getElementById('content9');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

function openCPlus() {
  content5.style.transform = 'translateX(0)';
	content6.style.transform = 'translateX(100%)';
	content7.style.transform = 'translateX(100%)';
	content8.style.transform = 'translateX(100%)';
	content9.style.transform = 'translateX(100%)';
	btn5.style.color = '#0b0ba2';
	btn6.style.color = '#111';
	btn7.style.color = '#111';
	btn8.style.color = '#111';
	btn9.style.color = '#111';
	content5.style.transitionDelay = '0.3s';
	content6.style.transitionDelay = '0s';
	content7.style.transitionDelay = '0s';
	content8.style.transitionDelay = '0s';
	content9.style.transitionDelay = '0s';
}
function openPHP() {
  content5.style.transform = 'translateX(100%)';
  content6.style.transform = 'translateX(0)';
	content7.style.transform = 'translateX(100%)';
	content8.style.transform = 'translateX(100%)';
	content9.style.transform = 'translateX(100%)';
	btn5.style.color = '#111';
	btn6.style.color = '#9c88ff';
	btn7.style.color = '#111';
	btn8.style.color = '#111';
	btn9.style.color = '#111';
	content5.style.transitionDelay = '0s';
	content6.style.transitionDelay = '0.3s';
	content7.style.transitionDelay = '0s';
	content8.style.transitionDelay = '0s';
	content9.style.transitionDelay = '0s';
}
function openPy() {
	content5.style.transform = 'translateX(100%)';
  content6.style.transform = 'translateX(100%)';
  content7.style.transform = 'translateX(0)';
	content8.style.transform = 'translateX(100%)';
	content9.style.transform = 'translateX(100%)';
	btn5.style.color = '#111';
	btn6.style.color = '#111';
	btn7.style.color = '#273c75';
	btn8.style.color = '#111';
	btn9.style.color = '#111';
	content5.style.transitionDelay = '0s';
	content6.style.transitionDelay = '0s';
	content7.style.transitionDelay = '0.3s';
	content8.style.transitionDelay = '0s';
	content9.style.transitionDelay = '0s';
}
function openNode() {
	content5.style.transform = 'translateX(100%)';
  content6.style.transform = 'translateX(100%)';
	content7.style.transform = 'translateX(100%)';
  content8.style.transform = 'translateX(0)';
	content9.style.transform = 'translateX(100%)';
	btn5.style.color = '#111';
	btn6.style.color = '#111';
	btn7.style.color = '#111';
	btn8.style.color = '#049c04';
	btn9.style.color = '#111';
	content5.style.transitionDelay = '0s';
	content6.style.transitionDelay = '0s';
	content7.style.transitionDelay = '0s';
	content8.style.transitionDelay = '0.3s';
	content9.style.transitionDelay = '0s';
}
function openJava() {
	content5.style.transform = 'translateX(100%)';
  content6.style.transform = 'translateX(100%)';
	content7.style.transform = 'translateX(100%)';
	content8.style.transform = 'translateX(100%)';
  content9.style.transform = 'translateX(0)';
	btn5.style.color = '#111';
	btn6.style.color = '#111';
	btn7.style.color = '#111';
	btn8.style.color = '#111';
	btn9.style.color = '#d44';
	content5.style.transitionDelay = '0s';
	content6.style.transitionDelay = '0s';
	content7.style.transitionDelay = '0s';
	content8.style.transitionDelay = '0s';
	content9.style.transitionDelay = '0.3s';
}

// ! ===== Database =====
const content10 = document.getElementById('content10');
const content11 = document.getElementById('content11');
const content12 = document.getElementById('content12');
const content13 = document.getElementById('content13');
const content14 = document.getElementById('content14');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const btn13 = document.getElementById('btn13');
const btn14 = document.getElementById('btn14');

function openMysql() {
  content10.style.transform = 'translateX(0)';
  content11.style.transform = 'translateX(100%)';
  content12.style.transform = 'translateX(100%)';
  content13.style.transform = 'translateX(100%)';
  content14.style.transform = 'translateX(100%)';
  btn10.style.color = '#ff8c00';
  btn11.style.color = '#111';
  btn12.style.color = '#111';
  btn13.style.color = '#111';
  btn14.style.color = '#111';
  content10.style.transitionDelay = '0.3s';
  content11.style.transitionDelay = '0s';
  content12.style.transitionDelay = '0s';
  content13.style.transitionDelay = '0s';
  content14.style.transitionDelay = '0s';
}
function openNosql() {
  content10.style.transform = 'translateX(100%)';
	content11.style.transform = 'translateX(0)';
  content12.style.transform = 'translateX(100%)';
  content13.style.transform = 'translateX(100%)';
  content14.style.transform = 'translateX(100%)';
  btn10.style.color = '#111';
  btn11.style.color = '#48dbfb';
  btn12.style.color = '#111';
  btn13.style.color = '#111';
  btn14.style.color = '#111';
  content10.style.transitionDelay = '0s';
  content11.style.transitionDelay = '0.3s';
  content12.style.transitionDelay = '0s';
  content13.style.transitionDelay = '0s';
  content14.style.transitionDelay = '0s';
}
function openApi() {
  content10.style.transform = 'translateX(100%)';
  content11.style.transform = 'translateX(100%)';
  content12.style.transform = 'translateX(0)';
  content13.style.transform = 'translateX(100%)';
  content14.style.transform = 'translateX(100%)';
  btn10.style.color = '#111';
  btn11.style.color = '#111';
  btn12.style.color = '#800000';
  btn13.style.color = '#111';
  btn14.style.color = '#111';
  content10.style.transitionDelay = '0s';
  content11.style.transitionDelay = '0s';
  content12.style.transitionDelay = '0.3s';
  content13.style.transitionDelay = '0s';
  content14.style.transitionDelay = '0s';
}
function openMongo() {
	content10.style.transform = 'translateX(100%)';
  content11.style.transform = 'translateX(100%)';
  content12.style.transform = 'translateX(100%)';
  content13.style.transform = 'translateX(0)';
  content14.style.transform = 'translateX(100%)';
  btn10.style.color = '#111';
  btn11.style.color = '#111';
  btn12.style.color = '#111';
  btn13.style.color = '#4cd137';
  btn14.style.color = '#111';
  content10.style.transitionDelay = '0s';
  content11.style.transitionDelay = '0s';
  content12.style.transitionDelay = '0s';
  content13.style.transitionDelay = '0.3s';
  content14.style.transitionDelay = '0s';
}
function openLaragon() {
	content10.style.transform = 'translateX(100%)';
  content11.style.transform = 'translateX(100%)';
  content12.style.transform = 'translateX(100%)';
  content13.style.transform = 'translateX(100%)';
  content14.style.transform = 'translateX(0)';
  btn10.style.color = '#111';
  btn11.style.color = '#111';
  btn12.style.color = '#111';
  btn13.style.color = '#111';
  btn14.style.color = '#00a8ff';
  content10.style.transitionDelay = '0s';
  content11.style.transitionDelay = '0s';
  content12.style.transitionDelay = '0s';
  content13.style.transitionDelay = '0s';
  content14.style.transitionDelay = '0.3s';
}

// ! ===== Multimedia =====
const content15 = document.getElementById('content15');
const content16 = document.getElementById('content16');
const content17 = document.getElementById('content17');
const content18 = document.getElementById('content18');
const content19 = document.getElementById('content19');
const btn15 = document.getElementById('btn15');
const btn16 = document.getElementById('btn16');
const btn17 = document.getElementById('btn17');
const btn18 = document.getElementById('btn18');
const btn19 = document.getElementById('btn19');

function openAndro() {
	content15.style.transform = 'translateX(0)';
  content16.style.transform = 'translateX(100%)';
  content17.style.transform = 'translateX(100%)';
  content18.style.transform = 'translateX(100%)';
  content19.style.transform = 'translateX(100%)';
  btn15.style.color = '#55efc4';
  btn16.style.color = '#111';
  btn17.style.color = '#111';
  btn18.style.color = '#111';
  btn19.style.color = '#111';
  content15.style.transitionDelay = '0.3s';
  content16.style.transitionDelay = '0s';
  content17.style.transitionDelay = '0s';
  content18.style.transitionDelay = '0s';
  content19.style.transitionDelay = '0s';
}
function openWord() {
  content15.style.transform = 'translateX(100%)';
	content16.style.transform = 'translateX(0)';
  content17.style.transform = 'translateX(100%)';
  content18.style.transform = 'translateX(100%)';
  content19.style.transform = 'translateX(100%)';
  btn15.style.color = '#111';
  btn16.style.color = '#0984e3';
  btn17.style.color = '#111';
  btn18.style.color = '#111';
  btn19.style.color = '#111';
  content15.style.transitionDelay = '0s';
  content16.style.transitionDelay = '0.3s';
  content17.style.transitionDelay = '0s';
  content18.style.transitionDelay = '0s';
  content19.style.transitionDelay = '0s';
}
function openXd() {
  content15.style.transform = 'translateX(100%)';
  content16.style.transform = 'translateX(100%)';
	content17.style.transform = 'translateX(0)';
  content18.style.transform = 'translateX(100%)';
  content19.style.transform = 'translateX(100%)';
  btn15.style.color = '#111';
  btn16.style.color = '#111';
  btn17.style.color = '#fc427b';
  btn18.style.color = '#111';
  btn19.style.color = '#111';
  content15.style.transitionDelay = '0s';
  content16.style.transitionDelay = '0s';
  content17.style.transitionDelay = '0.3s';
  content18.style.transitionDelay = '0s';
  content19.style.transitionDelay = '0s';
}
function openPoto() {
  content15.style.transform = 'translateX(100%)';
  content16.style.transform = 'translateX(100%)';
  content17.style.transform = 'translateX(100%)';
	content18.style.transform = 'translateX(0)';
  content19.style.transform = 'translateX(100%)';
  btn15.style.color = '#111';
  btn16.style.color = '#111';
  btn17.style.color = '#111';
  btn18.style.color = '#192a56';
  btn19.style.color = '#111';
  content15.style.transitionDelay = '0s';
  content16.style.transitionDelay = '0s';
  content17.style.transitionDelay = '0s';
  content18.style.transitionDelay = '0.3s';
  content19.style.transitionDelay = '0s';
}
function openObs() {
  content15.style.transform = 'translateX(100%)';
  content16.style.transform = 'translateX(100%)';
  content17.style.transform = 'translateX(100%)';
  content18.style.transform = 'translateX(100%)';
	content19.style.transform = 'translateX(0)';
  btn15.style.color = '#111';
  btn16.style.color = '#111';
  btn17.style.color = '#111';
  btn18.style.color = '#111';
  btn19.style.color = '#353b48';
  content15.style.transitionDelay = '0s';
  content16.style.transitionDelay = '0s';
  content17.style.transitionDelay = '0s';
  content18.style.transitionDelay = '0s';
  content19.style.transitionDelay = '0.3s';
}

// ! ===== More =====
const content20 = document.getElementById('content20');
const content21 = document.getElementById('content21');
const content22 = document.getElementById('content22');
const btn20 = document.getElementById('btn20');
const btn21 = document.getElementById('btn21');
const btn22 = document.getElementById('btn22');

function openGithub() {
	content20.style.transform = 'translateX(0)';
  content21.style.transform = 'translateX(100%)';
  content22.style.transform = 'translateX(100%)';
  btn20.style.color = '#1b1c1d';
  btn21.style.color = '#111';
  btn22.style.color = '#111';
  content20.style.transitionDelay = '0.3s';
  content21.style.transitionDelay = '0s';
  content22.style.transitionDelay = '0s';
}
function openGit() {
  content20.style.transform = 'translateX(100%)';
	content21.style.transform = 'translateX(0)';
  content22.style.transform = 'translateX(100%)';
  btn20.style.color = '#111';
  btn21.style.color = '#f00';
  btn22.style.color = '#111';
  content20.style.transitionDelay = '0s';
  content21.style.transitionDelay = '0.3s';
  content22.style.transitionDelay = '0s';
}
function openLaravel() {
  content20.style.transform = 'translateX(100%)';
  content21.style.transform = 'translateX(100%)';
	content22.style.transform = 'translateX(0)';
  btn20.style.color = '#111';
  btn21.style.color = '#111';
  btn22.style.color = '#e74c3c';
  content20.style.transitionDelay = '0s';
  content21.style.transitionDelay = '0s';
  content22.style.transitionDelay = '0.3s';
}
window.addEventListener('DOMContentLoaded', function () {
  this.window.scrollTo(0,0);
})

/* ---------------------------- MENÚ HAMBURGUESA ---------------------------- */

const menuBurger = document.getElementById('menu-burger');
const navMenu = document.getElementById('nav-menu');

menuBurger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});



/* ----------------------------- GALERÍA ANIMADA ---------------------------- */

const galeria = document.querySelectorAll('.gallery-grid img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

galeria.forEach(img => {
  observer.observe(img);
});



/* -------------------------------------------------------------------------- */
/*                         GATITO ALEATORIO EN EL HERO                        */
/* -------------------------------------------------------------------------- */

const catRImg = document.getElementById('random-cat-r');
const changeBtn = document.getElementById('cat-change');
const catLImg = document.getElementById('random-cat-l');

// Gatitos de la esquina superior derecha
const kittensR = [
  './assets/img/gatitor1.png',
  './assets/img/gatitor2.png',
  './assets/img/gatitor3.png',
  './assets/img/gatitor4.png',
  './assets/img/gatitor5.png'
];

// Gatitos de la esquina inferior izquierda
const kittensL = [
  './assets/img/gatitol1.png',
  './assets/img/gatitol2.png',
  './assets/img/gatitol3.png',
  './assets/img/gatitol4.png',
  './assets/img/gatitol5.png'
];

// Gatitos actuales (para evitar repetidos al randomizar)
let actualIndexR = 0;
let actualIndexL = 0;

/* ------------- Función para randomizar al gatito de la derecha ------------ */
function getRandomCatR() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * kittensR.length);
  } while (newIndex === actualIndexR && kittensR.length > 1);

  actualIndexR = newIndex;
  catRImg.src = kittensR[newIndex];
}

/* ------------- Función para randomizar al gatito de la izquierda ------------ */
function getRandomCatL() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * kittensL.length);
  } while (newIndex === actualIndexL && kittensL.length > 1);

  actualIndexL = newIndex;
  catLImg.src = kittensL[newIndex];
}

// Cambiar gatitos con el botón
changeBtn.addEventListener('click', getRandomCatR);
changeBtn.addEventListener('click', getRandomCatL);

// Cambiar párrafo
changeBtn.addEventListener('click', () => {
  const heroText = document.getElementById('hero-text');
  if (heroText) {
    heroText.textContent = '¡Te esperamos en Av. Gonzalo Ramírez 1473!';
  }
});
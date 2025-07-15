// --- Menú hamburguesa ---
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('activo');
});



// --- Galería animada (fade-in) ---
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



// --- Gatito aleatorio en el hero ---
const gatitoImg = document.getElementById('gatito-random');
const cambiarBtn = document.getElementById('cambiar-gatito');

// Lista de imágenes disponibles
const gatitos = [
  './assets/img/gatitor1.png',
  './assets/img/gatitor2.png',
  './assets/img/gatitor3.png',
  './assets/img/gatitor4.png',
  './assets/img/gatitor5.png'
];

// Gatito actual (para evitar repetidos)
let indiceActual = -1;

function obtenerGatitoAleatorio() {
  let nuevoIndice;
  do {
    nuevoIndice = Math.floor(Math.random() * gatitos.length);
  } while (nuevoIndice === indiceActual && gatitos.length > 1);

  indiceActual = nuevoIndice;
  gatitoImg.src = gatitos[nuevoIndice];
}

// Mostrar uno al cargar
window.addEventListener('DOMContentLoaded', obtenerGatitoAleatorio);

// Cambiar gatito con el botón
cambiarBtn.addEventListener('click', obtenerGatitoAleatorio);



const gatitoImgSecundario = document.getElementById('gatito-random-secundario');

// Gatitos de la esquina inferior izquierda
const gatitosInferiores = [
  './assets/img/gatitol1.png',
  './assets/img/gatitol2.png',
  './assets/img/gatitol3.png',
  './assets/img/gatitol4.png',
  './assets/img/gatitol5.png'
];

let indiceInferiorActual = -1;

function obtenerGatitoInferiorAleatorio() {
  let nuevoIndice;
  do {
    nuevoIndice = Math.floor(Math.random() * gatitosInferiores.length);
  } while (nuevoIndice === indiceInferiorActual && gatitosInferiores.length > 1);

  indiceInferiorActual = nuevoIndice;
  gatitoImgSecundario.src = gatitosInferiores[nuevoIndice];
}

// Mostrar uno al cargar
window.addEventListener('DOMContentLoaded', obtenerGatitoInferiorAleatorio);

// Cambiar al hacer clic
cambiarBtn.addEventListener('click', obtenerGatitoInferiorAleatorio);

// Cambiar párrafo
cambiarBtn.addEventListener('click', () => {
  const parrafoHero = document.getElementById('parrafo-hero');
  if (parrafoHero) {
    parrafoHero.textContent = '¡Donde podrás adoptar a nuestros gatitos!';
  }
});
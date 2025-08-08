/* -----------------------------------------
1. Función para mostrar cuenta regresiva
----------------------------------------- */
const targetDate = new Date("Dec 31, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").innerText = days.toString().padStart(2, "0");
  document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);

/* -----------------------------------------
2. Función para entrar a la página
----------------------------------------- */
function entrarPagina() {
  const bienvenida = document.getElementById('bienvenida');
  const contenido = document.getElementById('contenido-principal');

  const izquierda = document.querySelector('.triangulo.izquierda');
  const derecha = document.querySelector('.triangulo.derecha');

  if (!bienvenida || !contenido || !izquierda || !derecha) {
    console.error('Falta algún elemento');
    return;
  }

  izquierda.classList.add('animar');
  derecha.classList.add('animar');

 
  setTimeout(() => {
    bienvenida.style.display = 'none';
    contenido.style.display = 'block';
  }, 1000);
}


/* -----------------------------------------
3. Función para iniciar música y animación
----------------------------------------- */
function iniciarPagina() {
  const music = document.getElementById("bg-music");
  music.play().catch(e => console.log("Error al reproducir:", e));
  entrarPagina();
}


/* -----------------------------------------
4. Función para lanzar corazones bonitos
----------------------------------------- */
function lanzarCorazonesBonitos() {
tsParticles.load("corazones-local", {
  fullScreen: { enable: true, zIndex: 9998 },
  detectRetina: true,
  particles: {
    number: { value: 20, density: { enable: true, area: 800 } },
    shape: {
      type: "char",
      character: {
        value: ["❤️"],
        font: "Verdana",
        weight: "400"
      }
    },
    size: { value: 20, random: true },
    move: {
      enable: true,
      speed: 1,
      direction: "top",
      outMode: "out"
    },
    opacity: { value: 0.8 },
    position: {
      y: 90 
    }
  },
  background: { color: "transparent" }
});

setTimeout(() => {
  const container = tsParticles.domItem(0); 
  if (container) {
    container.stop(); 
    container.canvas.element.style.opacity = 0;
  }
}, 9000); 


}

  

/* -----------------------------------------
5. Evento principal del DOM
----------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const areaClick = document.getElementById("click-area");
  const music = document.getElementById("bg-music");

  if (areaClick && music) {
   areaClick.addEventListener("click", function () {
  music.play().catch((e) => console.log("Error al reproducir música:", e));
  entrarPagina(); 
  
  
  setTimeout(() => {
    lanzarConfeti();
  }, 1500);

  
  setTimeout(() => {
    lanzarCorazonesBonitos();
  }, 3000);
});

  }
});

function lanzarConfeti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#bb0000', '#ffffff']
  });
}

document.getElementById("boton").addEventListener("click", function () {
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("contenido-principal").style.display = "block";

  
  imageMapResize();


  setTimeout(() => {
    escribirTexto();

    setTimeout(() => {
      lanzarConfeti();

      setTimeout(() => {
        lanzarCorazones();
      }, 1500);
    }, 2000);
  }, 500);
});


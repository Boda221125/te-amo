// Reproducir música automáticamente al cargar la página (intentando con un retraso)
window.addEventListener('load', function() {
    const music = document.getElementById('background-music');

    // Intentamos reproducir la música con un pequeño retraso para ayudar a evitar bloqueos del navegador
    setTimeout(() => {
        music.play().catch(error => {
            console.log("La música no se pudo reproducir automáticamente debido a restricciones del navegador.");
        });
    }, 1000);  // Retraso de 1 segundo
});

// Función para crear múltiples corazones al hacer clic en una imagen
function createHearts(event) {
    const heartsContainer = document.getElementById('hearts-container');
    
    // Número de corazones a generar
    const numberOfHearts = 10;  // Cambia este número para ajustar la cantidad de corazones

    // Crear los corazones
    for (let i = 0; i < numberOfHearts; i++) {
        // Crear un nuevo elemento de corazón
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';

        // Posicionar el corazón sobre el lugar donde se hace clic
        const x = event.clientX;
        const y = event.clientY;

        // Ajuste para centrar el corazón en el clic
        heart.style.left = `${x - 20 + Math.random() * 40 - 20}px`;  // Aleatoriza la posición X
        heart.style.top = `${y - 20 + Math.random() * 40 - 20}px`;   // Aleatoriza la posición Y

        // Añadir el corazón al contenedor de corazones
        heartsContainer.appendChild(heart);

        // Eliminar el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 2000);  // Tiempo de duración de la animación (2 segundos)
    }
}

// Añadir el evento de clic a todas las imágenes del carrusel
const images = document.querySelectorAll('.carousel-item img');
images.forEach(image => {
    image.addEventListener('click', createHearts);
});

// Reproducir/pausar música al hacer clic en el botón
document.getElementById('playMusic').addEventListener('click', function() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();  // Reproducir la música
        this.textContent = 'Pausar Música';
    } else {
        music.pause();  // Pausar la música
        this.textContent = 'Reproducir Música';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    addApples(level);
});

function addApples(level) {
    const container = document.body;
    const numberOfApples = level; // Según el nivel actual, añade de 1 a 3 manzanas

    for (let i = 0; i < numberOfApples; i++) {
        const apple = document.createElement('img');
        apple.src = './apple.png';
        apple.className = 'apple';

        // Generar posición aleatoria
        const randomTop = Math.random() * (window.innerHeight - 50); // Ajustar para que la imagen no se salga de la pantalla
        const randomLeft = Math.random() * (window.innerWidth - 50);

        apple.style.position = 'fixed';
        apple.style.top = `${randomTop}px`;
        apple.style.left = `${randomLeft}px`;
        apple.style.width = '50px';
        apple.style.height = '50px';

        container.appendChild(apple);
    }
}

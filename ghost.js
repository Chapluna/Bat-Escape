const ghostImg = document.getElementById("ghost");
const ghostSpeed = 10;
let ghostSprite = 1;
let ghostLastDirection = "down";

function calculateGhostSpeed(){
    return ghostSpeed * level;
}

function ghostNextSprite(direction) {
    ghostSprite = ghostSprite === 1 ? 2 : 1;
    return `ghost/${direction}${ghostSprite}.png`;
}

function setRandomPosition(element) {
    const randomTop = Math.random() * (window.innerHeight - 50); // Ajustar para que la imagen no se salga de la pantalla
    const randomLeft = Math.random() * (window.innerWidth - 50);
    element.style.top = `${randomTop}px`;
    element.style.left = `${randomLeft}px`;
}

document.addEventListener("DOMContentLoaded", function() {
    setRandomPosition(ghostImg); // Establecer la posición inicial del ghost
});

function moveGhost() {
    const heroRect = heroImg.getBoundingClientRect();
    const ghostRect = ghostImg.getBoundingClientRect();

    let ghostTop = parseInt(ghostImg.style.top) || window.innerHeight / 2;
    let ghostLeft = parseInt(ghostImg.style.left) || window.innerWidth / 2;

    if (heroRect.top < ghostRect.top) {
        ghostTop -= calculateGhostSpeed();
        ghostImg.src = ghostNextSprite("up");
    } else if (heroRect.top > ghostRect.top) {
        ghostTop += calculateGhostSpeed();
        ghostImg.src = ghostNextSprite("down");
    }

    if (heroRect.left < ghostRect.left) {
        ghostLeft -= calculateGhostSpeed();
        ghostImg.src = ghostNextSprite("right");
    } else if (heroRect.left > ghostRect.left) {
        ghostLeft += calculateGhostSpeed();
        ghostImg.src = ghostNextSprite("left");
    }

    ghostImg.style.top = ghostTop + "px";
    ghostImg.style.left = ghostLeft + "px";
}

// Actualizar el sprite cada medio segundo en la última dirección utilizada
setInterval(function() {
    if (ghostLastDirection) {
        ghostImg.src = ghostNextSprite(ghostLastDirection);
    }
}, 250);

setInterval(moveGhost, 200);

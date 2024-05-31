const heroImg = document.getElementById("hero");
const speed = 10;
let speedAcceleration = 1;
let sprite = 1;
let lastDirection = "down";

function calculateSpeed(){
    return speed + speedAcceleration - level;
}

function nextSprite(direction) {
    sprite = sprite === 1 ? 2 : 1;
    return `hero/${direction}${sprite}.png`;
}

function moveHero(direction) {
    let currentTop = parseInt(heroImg.style.top) || window.innerHeight / 2;
    let currentLeft = parseInt(heroImg.style.left) || window.innerWidth / 2;

    heroImg.src = nextSprite(direction);

    if (direction === "up") {
        currentTop -= calculateSpeed();
        heroImg.style.top = currentTop + "px";
    } else if (direction === "down") {
        currentTop +=calculateSpeed();
        heroImg.style.top = currentTop + "px";
    } else if (direction === "left") {
        currentLeft -= calculateSpeed();
        heroImg.style.left = currentLeft + "px";
    } else if (direction === "right") {
        currentLeft += calculateSpeed();
        heroImg.style.left = currentLeft + "px";
    }

    lastDirection = direction;
    checkCollision();

}


document.addEventListener("keydown", function(event) {
    const direction = directions[event.key];
    moveHero(direction);
});

// Actualizar el sprite cada medio segundo en la última dirección utilizada
setInterval(function() {
    if (lastDirection) {
        heroImg.src = nextSprite(lastDirection);
    }
}, 250);

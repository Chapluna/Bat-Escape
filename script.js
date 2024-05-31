let level = 1

const directions = {
    "ArrowUp": "up",
    "ArrowDown": "down",
    "ArrowLeft": "left",
    "ArrowRight": "right"
}


function checkCollision() {
    const heroRect = heroImg.getBoundingClientRect();
    const ghostRect = ghostImg.getBoundingClientRect();

    if (
        heroRect.left < ghostRect.left + ghostRect.width &&
        heroRect.left + heroRect.width > ghostRect.left &&
        heroRect.top < ghostRect.top + ghostRect.height &&
        heroRect.top + heroRect.height > ghostRect.top
    ) {
        level = 1;
        alert("Game over");
        resetGame();
    }

    const apples = document.querySelectorAll('.apple');
    apples.forEach(apple => {
        const appleRect = apple.getBoundingClientRect();
        if (
            heroRect.left < appleRect.left + appleRect.width &&
            heroRect.left + heroRect.width > appleRect.left &&
            heroRect.top < appleRect.top + appleRect.height &&
            heroRect.top + heroRect.height > appleRect.top
        ) {
            apple.remove();
            checkLevelCompletion();
        }
    });
}


function checkLevelCompletion() {
    const apples = document.querySelectorAll('.apple');
    if (apples.length === 0) {
        const ghostImg = document.getElementById("ghost");
        setRandomPosition(ghostImg);
        level++;
        if (level > 3) {
            alert("Congratulations! You've won the game!");
            level = 1; // Reiniciar al nivel 1 si se excede el nivel 3
        }
        addApples(level);
        alert(`Nivel ${level} alcanzado`);
    }
}


function resetGame() {
    // Eliminar todas las manzanas existentes
    const apples = document.querySelectorAll('.apple');
    apples.forEach(apple => apple.remove());

    // Establecer la posición inicial del héroe y el ghost
    const ghostImg = document.getElementById("ghost");
    setRandomPosition(ghostImg);
    
    // Reiniciar el nivel y añadir las manzanas para el nivel 1
    addApples(level);
}
// Bryan animate the assetes moving by arrow keys and shoot by the space bar

const keyCodeLeft = 37;
const keyCodeRight = 39;
const keyCodeSpace = 32;

const gameWidth = 1450;
const gameHeight = 450;

const gameState = {
    leftPress: false,
    rightPress: false,
    spacePress: false,
    playerX: 0,
    playerY: 0
};

function setPosition($el, x, y) {
    $el.style.transform = `translate(${x}px, ${y}px)`;
}

function createPlayer($container) {
    gameState.playerX = gameWidth / 2;
    gameState.playerY = gameHeight - 50;
    const $player = document.createElement("img");
    $player.src = "cat.png";
    $player.className = "player";
    $container.appendChild($player);
    setPosition($player, gameState.playerX, gameState.playerY);
}

function init() {
    const $container = document.querySelector(".game");
    createPlayer($container);
}

function updatePlayer() {
    if (gameState.leftPress) {
        gameState.playerX -= 10;
    }

    if (gameState.rightPress) {
        gameState.playerX += 10;
    }

    const $player = document.querySelector(".player");
    setPosition($player, gameState.playerX, gameState.playerY);
}

//Game loop, checks the state of the game every frame
function update() {
    updatePlayer();
    window.requestAnimationFrame(update);
}

function onKeyDown(e) {
    if (e.keyCode === keyCodeLeft) {
        gameState.leftPress = true;

    } else if (e.keyCode === keyCodeRight) {
        gameState.rightPress = true;

    } else if (e.keyCode === keyCodeSpace) {
        gameState.spacePress = true;
    }
}

function onKeyUp(e) {
    if (e.keyCode === keyCodeLeft) {
        gameState.leftPress = false;

    } else if (e.keyCode === keyCodeRight) {
        gameState.rightPress = false;

    } else if (e.keyCode === keyCodeSpace) {
        gameState.spacePress = false;
    }
}
init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);


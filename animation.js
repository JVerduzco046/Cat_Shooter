// Bryan animate the assetes moving by arrow keys and shoot by the space bar

const gameWidth = 1450;
const gameHeight = 750;

const gameState = {
    playerX: 0,
    playerY: 0,
};

function setPosition($el,x ,y){
    $el.style.transform = `translate(${x}px, ${y}px)`;
}

function createPlayer($container){
gameState.playerX = gameWidth/2;
gameState.playerY = gameHeight-50;
const $player =document.createElement("img");
$player.src = "cat.png";
$player.className = "player";
$container.appendChild($player);
setPosition($player, gameState.playerX, gameState.playerY);
}

function init(){
    const $container = document.querySelector("game");
    createPlayer($container);
}


init();

window.addEventListener("keydown", onkeydown);
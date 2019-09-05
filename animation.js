

// const keyCodeLeft = 37;
// const keyCodeRight = 39;
// const keyCodeSpace = 32;

// const gameWidth = 800;
// const gameHeight = 600;

// const playerWidth = 100;
// const playerMaxSpeed = 1000;
// const laserMaxSpeed = 500;
// const laserFire = 0.5;

// const gameState = {
//     lastTime: Date.now(),
//     leftPress: false,
//     rightPress: false,
//     spacePress: false,
//     playerX: 0,
//     playerY: 0,
//     playerFire: 0,
//     lasers: []
// };

// function setPosition($el, x, y) {
//     $el.style.transform = `translate(${x}px, ${y}px)`;
// }

// function clamp(v, min, max) {
//     if (v < min) {
//         return min;
//     } else if (v > max) {
//         return max;
//     } else {
//         return v;
//     }
// }

// function createPlayer($container) {
//     gameState.playerX = gameWidth / 2;
//     gameState.playerY = gameHeight - 50;
//     const $player = document.createElement("img");
//     $player.src = "cat.png";
//     $player.className = "player";
//     $container.appendChild($player);
//     setPosition($player, gameState.playerX, gameState.playerY);
// }


// function updatePlayer(dt, $container) {
//     if (gameState.leftPress) {
//         gameState.playerX -= dt * playerMaxSpeed;
//     }

//     if (gameState.rightPress) {
//         gameState.playerX += dt * playerMaxSpeed;
//     }

//     gameState.playerX = clamp(
//         gameState.playerX,
//         playerWidth,
//         gameWidth - playerWidth
//     );

//     if (gameState.spacePress && gameState.playerFire <= 0) {
//         createLaser($container, gameState.playerX, gameState.playerY);
//         gameState.playerFire = laserFire;
//     }
//     if (gameState.playerFire > 0) {
//         gameState.playerFire -= dt;
//     }

//     const $player = document.querySelector(".player");
//     setPosition($player, gameState.playerX, gameState.playerY);
// }

// function createLaser($container) {
//     const $element = document.createElement("img");
//     $element.src = "pixel_cat.png";
//     $element.className = "laser";
//     $container.appendChild($element);
//     const laser = { x, y, $element };
//     gameState.lasers.push(laser);
//     setPosition($element, x, y);
// }

// function updateLasers(dt, $container) {
//     const lasers = gameState.lasers;
//     for (let i = 0; i < lasers.length; i++) {
//         const laser = laser[i];
//         laser.y -= dt * laserMaxSpeed;

//         setPosition(laser.$element, laser.x, laser.y);
//     }

//     if (laser.y < 0) {
//         destroyLaser($container, laser);
//     }
//     gameState.lasers = gameState.lasers.filter(e => !e.isDead);
// }

// function init() {
//     const $container = document.querySelector(".game");
//     createPlayer($container);
// }

// function destroyLaser($container, laser) {
//     $container.removeChild(laser.$element);
//     laser.isDead = true;
// }


// function update() {
//     const currentTime = Date.now();
//     const dt = (currentTime - gameState.lastTime) / 1000.0;

//     const $container = document.querySelector(".game");
//     updatePlayer(dt, $container);
//     updateLasers(dt, $container);

//     gameState.lastTime = currentTime;
//     window.requestAnimationFrame(update);
// }

// function onKeyDown(e) {
//     if (e.keyCode === keyCodeLeft) {
//         gameState.leftPress = true;

//     } else if (e.keyCode === keyCodeRight) {
//         gameState.rightPress = true;

//     } else if (e.keyCode === keyCodeSpace) {
//         gameState.spacePress = true;
//     }
// }

// function onKeyUp(e) {
//     if (e.keyCode === keyCodeLeft) {
//         gameState.leftPress = false;

//     } else if (e.keyCode === keyCodeRight) {
//         gameState.rightPress = false;

//     } else if (e.keyCode === keyCodeSpace) {
//         gameState.spacePress = false;
//     }
// }
// init();
// window.addEventListener("keydown", onKeyDown);
// window.addEventListener("keyup", onKeyUp);
// window.requestAnimationFrame(update);
const KEY_CODE_LEFT = 37;
const KEY_CODE_RIGHT = 39;
const KEY_CODE_SPACE = 32;

const GAME_WIDTH = 1400;
const GAME_HEIGHT = 700;

const PLAYER_WIDTH = 20;
const PLAYER_MAX_SPEED = 600.0;
const LASER_MAX_SPEED = 300.0;
const LASER_COOLDOWN = 0.4;

const GAME_STATE = {
    lastTime: Date.now(),
    leftPressed: false,
    rightPressed: false,
    spacePressed: false,
    playerX: 0,
    playerY: 0,
    playerCooldown: 0,
    lasers: [],
};

function setPosition($el, x, y) {
    $el.style.transform = `translate(${x}px, ${y}px)`;
}

function clamp(v, min, max) {
    if (v < min) {
        return min;
    } else if (v > max) {
        return max;
    } else {
        return v;
    }
}

function createPlayer($container) {
    GAME_STATE.playerX = GAME_WIDTH / 2;
    GAME_STATE.playerY = GAME_HEIGHT - 50;
    const $player = document.createElement("img");
    $player.src = "cat.png";
    $player.className = "player";
    $container.appendChild($player);
    setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}

function updatePlayer(dt, $container) {
    if (GAME_STATE.leftPressed) {
        GAME_STATE.playerX -= dt * PLAYER_MAX_SPEED;
    }
    if (GAME_STATE.rightPressed) {
        GAME_STATE.playerX += dt * PLAYER_MAX_SPEED;
    }

    GAME_STATE.playerX = clamp(
        GAME_STATE.playerX,
        PLAYER_WIDTH,
        GAME_WIDTH - PLAYER_WIDTH
    );

    if (GAME_STATE.spacePressed && GAME_STATE.playerCooldown <= 0) {
        createLaser($container, GAME_STATE.playerX, GAME_STATE.playerY);
        GAME_STATE.playerCooldown = LASER_COOLDOWN;
    }
    if (GAME_STATE.playerCooldown > 0) {
        GAME_STATE.playerCooldown -= dt;
    }

    const $player = document.querySelector(".player");
    setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY);
}

function createLaser($container, x, y) {
    const $element = document.createElement("img");
    $element.src = "pixel_cat.png";
    $element.className = "laser";
    $container.appendChild($element);
    const laser = { x, y, $element };
    GAME_STATE.lasers.push(laser);
    const audio = new Audio("sound/sfx-laser1.ogg");
    audio.play();
    setPosition($element, x, y);
}

function updateLasers(dt, $container) {
    const lasers = GAME_STATE.lasers;
    for (let i = 0; i < lasers.length; i++) {
        const laser = lasers[i];
        laser.y -= dt * LASER_MAX_SPEED;
        setPosition(laser.$element, laser.x, laser.y);
    }
}

function init() {
    const $container = document.querySelector(".game");
    createPlayer($container);
}

function update(e) {
    const currentTime = Date.now();
    const dt = (currentTime - GAME_STATE.lastTime) / 1000.0;

    const $container = document.querySelector(".game");
    updatePlayer(dt, $container);
    updateLasers(dt, $container);

    GAME_STATE.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

function onKeyDown(e) {
    if (e.keyCode === KEY_CODE_LEFT) {
        GAME_STATE.leftPressed = true;
    } else if (e.keyCode === KEY_CODE_RIGHT) {
        GAME_STATE.rightPressed = true;
    } else if (e.keyCode === KEY_CODE_SPACE) {
        GAME_STATE.spacePressed = true;
    }
}

function onKeyUp(e) {
    if (e.keyCode === KEY_CODE_LEFT) {
        GAME_STATE.leftPressed = false;
    } else if (e.keyCode === KEY_CODE_RIGHT) {
        GAME_STATE.rightPressed = false;
    } else if (e.keyCode === KEY_CODE_SPACE) {
        GAME_STATE.spacePressed = false;
    }
}

init();
window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);
window.requestAnimationFrame(update);


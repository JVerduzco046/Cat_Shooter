// Maria make the enemies appear in 4 rows(1 row is the same kind of enemy)
// document.getElementsByClassName("jumbotron-button").onclick = function(){
//     if{};
// }

// document.getElementsByClassName(enemy-area).style.transform = "translate(100px)";





// anthony makes the enemies (that maria makes move side to side) shoot at random intervals
function createEnemyLaser($container, x, y) {
    const $element = document.createElement("img");
    $element.src = "img/enemy-fire.png";
    $element.className = "enemy-laser";
    $container.appendChild($element);
    const laser = {x, y, $element};
    GAME_STATE.enemyLasers.push(laser);
    setPosition($element, x,y);
}
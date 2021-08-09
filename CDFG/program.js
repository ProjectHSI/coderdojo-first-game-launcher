/*
-------------
- CONSTANTS -
-------------
*/
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const NANNAUT_WIDTH = 181;
const NANONAUT_HEIGHT = 229;
const GROUND_Y = 540;
/*
---------
- SETUP -
---------
*/
var canvas = document.createElement('canvas');
var c2d = canvas.getContext("2d");
var c3d = canvas.getContext("webgl2");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

document.body.appendChild(canvas);

var nanonautImage = new Image();
nanonautImage.src = "/Images/nanonaut.png";

var nanonautX = 50;
var nanonautY = 40;

window.addEventListener('load', start);

function start() {
    window.requestAnimationFrame(mainLoop);
}
/*
-------------
- MAIN LOOP -
-------------
*/
function mainLoop() {
    update();
    draw();
    window.requestAnimationFrame(mainLoop);
}
/*
---------
- UPDATING -
---------
*/
function update() {
    // No update function yet lol
}
/*
-------------
- CONSTANTS -
-------------
*/
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const NANONAUT_WIDTH = 181;
const NANONAUT_HEIGHT = 229;
const GROUND_Y = 540;
const NANONAUT_Y_ACCELERATION = 1;
const SPACE_KEYCODE = 32;
const NANONAUT_JUMP_SPEED = 20;
const NANONAUT_X_SPEED = 5;
const BACKGROUND_WIDTH = 1000;
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
nanonautImage.src = "Images/nanonaut.png";

var backgroundImage = new Image();
backgroundImage.src = "Images/background.png";

var nanonautX = 50;
var nanonautY = 40;
var nanonautYSpeed = 0;
var spaceKeyIsPressed = false;
var nanonautIsInTheAir = false;
var cameraX = 0;
var cameraY = 0;

window.addEventListener('keydown', onKeyDown)

window.addEventListener('keyup', onKeyUp)

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
------------
- UPDATING -
------------
*/
function update() {
    // Update Nanonaut. - Book
    nanonautX = nanonautX + NANONAUT_X_SPEED;
    if (spaceKeyIsPressed && !nanonautIsInTheAir) {
        nanonautYSpeed = -NANONAUT_JUMP_SPEED;
        nanonautIsInTheAir = true;
    }
    nanonautY = nanonautY +  nanonautYSpeed
    nanonautYSpeed = nanonautYSpeed + NANONAUT_Y_ACCELERATION
    if (nanonautY > (GROUND_Y - NANONAUT_HEIGHT)) {
        nanonautY =  GROUND_Y - NANONAUT_HEIGHT;
        nanonautYSpeed = 0;
        nanonautIsInTheAir = false;
    }

    // Update camera. - Book
    cameraX = nanonautX - 150
}
/*
-----------
- DRAWING -
-----------
*/
function draw() {
    
    // Draw the sky. - Book
    c2d.fillStyle = "LightSkyBlue"
    c2d.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y - 40)

    // Draw the background. - Book
    var backgroundX = - (cameraX % BACKGROUND_WIDTH)
    c2d.drawImage(backgroundImage, backgroundX, -210)
    c2d.drawImage(backgroundImage, backgroundX + BACKGROUND_WIDTH, -210)

    // Draw the ground. - Book
    c2d.fillStyle = "ForestGreen"
    c2d.fillRect(0, GROUND_Y - 40, CANVAS_WIDTH, CANVAS_HEIGHT - GROUND_Y + 40)

    // Draw the Nanonaut. - Book
    c2d.drawImage(nanonautImage, nanonautX - cameraX, nanonautY - cameraY)
}
/*
----------------
- PLAYER INPUT -
----------------
*/
function onKeyDown(event) {
    if (event.keyCode == SPACE_KEYCODE) {
        spaceKeyIsPressed = true;
    }
}
function onKeyUp(event) {
    if (event.keyCode == SPACE_KEYCODE) {
        spaceKeyIsPressed = false;
    }
}
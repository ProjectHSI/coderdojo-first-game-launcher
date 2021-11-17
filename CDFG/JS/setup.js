export function setup () {
    window.canvas = document.createElement('canvas');
    window.c2d = canvas.getContext("2d");
    
    window.canvas.width = window.CANVAS_WIDTH;
    window.canvas.height = CANVAS_HEIGHT;
    
    document.body.appendChild(canvas);
    
    window.nanonautImage = new Image();
    window.nanonautImage.src = "Images/animatedNanonaut.png";
    
    window.backgroundImage = new Image();
    window.backgroundImage.src = "Images/background.png";
    
    window.bush1Image = new Image();
    window.bush2Image = new Image();
    bush1Image.src = "Images/bush1.png";
    bush2Image.src = "Images/bush2.png";
    
    window.nanonautX = CANVAS_WIDTH / 2;
    window.nanonautY = GROUND_Y - NANONAUT_HEIGHT;
    window.nanonautYSpeed = 0;
    window.spaceKeyIsPressed = false;
    window.nanonautIsInTheAir = false;
    window.nanonautFrameNr = 0;
    window.cameraX = 0;
    window.cameraY = 0;
    window.gameFrameCounter = 0;
    window.bushData = [{
        x: 550,
        y: 100,
        image: bush1Image
    }, {
        x: 750,
        y: 90,
        image: bush2Image
    }]
    
    window.addEventListener('keydown', window.onKeyDown)
    
    window.addEventListener('keyup', window.onKeyUp)
    
    window.requestAnimationFrame(window.mainLoop);
}
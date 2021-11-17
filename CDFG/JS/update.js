export function update () {
    window.update = function  () {
        window.gameFrameCounter = window.gameFrameCounter + 1

        // Update Nanonaut. - Book
        window.nanonautX = window.nanonautX + window.NANONAUT_X_SPEED;
        if (window.spaceKeyIsPressed && !window.nanonautIsInTheAir) {
            window.nanonautYSpeed = -window.NANONAUT_JUMP_SPEED;
            window.nanonautIsInTheAir = true;
        }
        window.nanonautY = window.nanonautY +  window.nanonautYSpeed
        window.nanonautYSpeed = window.nanonautYSpeed + window.NANONAUT_Y_ACCELERATION
        if (window.nanonautY > (window.GROUND_Y - window.NANONAUT_HEIGHT)) {
            window.nanonautY =  window.GROUND_Y - window.NANONAUT_HEIGHT;
            window.nanonautYSpeed = 0;
            window.nanonautIsInTheAir = false;
        }
    
        //  Update Animation. - Book
        if ((window.gameFrameCounter % window.NANONAUT_ANIMATION_SPEED) === 0) {
            window.nanonautFrameNr = window.nanonautFrameNr + 1;
            if (window.nanonautFrameNr >= window.NANONAUT_NR_ANIMATION_FRAMES) {
                window.nanonautFrameNr = 0
            }
        }
    
        // Update camera. - Book
        window.cameraX = window.nanonautX - 150
    }
}
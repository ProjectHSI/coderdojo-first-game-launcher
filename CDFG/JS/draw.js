export function draw () {
    window.draw = function () {
        // Draw the sky. - Book
        window.c2d.fillStyle = "LightSkyBlue"
        window.c2d.fillRect(0, 0, CANVAS_WIDTH, GROUND_Y - 40)

        // Draw the background. - Book
        window.backgroundX = - (window.cameraX % window.BACKGROUND_WIDTH)
        window.c2d.drawImage(window.backgroundImage, window.backgroundX, -210)
        window.c2d.drawImage(window.backgroundImage, window.backgroundX + window.BACKGROUND_WIDTH, -210)

        // Draw the ground. - Book
        window.c2d.fillStyle = "ForestGreen"
        window.c2d.fillRect(0, window.GROUND_Y - 40, window.CANVAS_WIDTH, window.CANVAS_HEIGHT - window.GROUND_Y + 40)

        for (var i=0; i<window.bushData.length; i++) {
            window.c2d.drawImage(window.bushData[i].image, window.bushData[i].x - window.cameraX, window.GROUND_Y - window.bushData[i].y - window.cameraY)
        }
        /*
        for (var i=0; i<bushXCoordinates.length; i++) {
            c2d.drawImage(bush2Image, bushXCoordinates[i] - cameraX, GROUND_Y - 90 - cameraY)
        }
        */

        // Draw the Nanonaut. - Book
        window.nanonautSpriteSheetRow = Math.floor(window.nanonautFrameNr / window.NANONAUT_NR_FRAMES_PER_ROW);
        window.nanonautSpriteSheetColumn = window.nanonautFrameNr % window.NANONAUT_NR_FRAMES_PER_ROW;
        window.nanonautSpriteSheetX = window.nanonautSpriteSheetColumn * window.NANONAUT_WIDTH;
        window.nanonautSpriteSheetY = window.nanonautSpriteSheetRow * window.NANONAUT_HEIGHT;
        window.c2d.drawImage(window.nanonautImage, window.nanonautSpriteSheetX, window.nanonautSpriteSheetY, window.NANONAUT_WIDTH, window.NANONAUT_HEIGHT, window.nanonautX - window.cameraX, window.nanonautY - window.cameraY, window.NANONAUT_WIDTH, window.NANONAUT_HEIGHT);
    }
}
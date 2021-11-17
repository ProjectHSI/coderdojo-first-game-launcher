export function ml () {
    window.mainLoop = function () {
        window.update();
        window.draw();
        window.requestAnimationFrame(mainLoop);
    }
} 
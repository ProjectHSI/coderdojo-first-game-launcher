export function pl () {
    window.onKeyDown = function (event) {
        if (event.keyCode == window.SPACE_KEYCODE) {
            window.spaceKeyIsPressed = true;
        }
    }

    window.onKeyUp = function (event) {
        if (event.keyCode == window.SPACE_KEYCODE) {
            window.spaceKeyIsPressed = false;
        }
    }
}
var canvas = document.createElement('canvas')
canvas.width = 1920
canvas.height = 1080

var c2d = canvas.getContext("2d")
var c3d = canvas.getContext("webgl2")

var image = new Image()
image.src = "Images/nanonaut.png"

window.addEventListener('load', start)

function start () {
    c2d.fillStyle = "yellow";
    c2d.fillRect(10,10,30,30)
    c2d.drawImage(image, 20, 40)
}

document.body.appendChild(canvas)
window.onload = draw;

function draw() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var context = canvas.getContext("2d");
        context.fillStyle = "rgba(0, 0, 255, .3)";
        context.fillRect(25, 25, 125, 125);
    }
    else {
        // Put code to execute if browser doesn't have canvas support here
    }
}
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let px = Math.floor(Math.random() * innerWidth);
let py = Math.floor(Math.random() * innerHeight);
let vx = Math.floor(2*Math.random()-1)*10;  // velocity
let vy = Math.floor(2*Math.random()-1)*10;
let radius = 40;


function bounce() {
    requestAnimationFrame(bounce);

    // to be a bouncy ball, not a repeating ball
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    // draw ball
    ctx.beginPath();
    ctx.arc(px, py, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'purple';
    ctx.fill();
    
    // for ball bouncing against wall
    if (radius + px > innerWidth)
        vx = 0 - vx;

    if (px - radius < 0)
        vx = 0 - vx;

    if (py + radius > innerHeight)
        vy = 0 - vy;

    if (py - radius < 0)
        vy = 0 - vy;

    // keep ball moving
    px = px + vx;
    py = py + vy;

    // gravity: a constant value we add to the ball's y-velocity each frame.
    vy += .8;
    // friction: multiplying its x-velocity and y-velocity by 0.99
    vx *= .99;
    vy *= .99;
}

bounce();
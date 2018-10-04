let canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');


let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let radius = 40;
let dx = (Math.random() - 0.5) * 20;
let dy = (Math.random() - 0.5) * 20;
let c = 1;

function createBall() {
    requestAnimationFrame(createBall)
    // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = `rgba(255, 223, 0, ${c})`;
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;

    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;

    }
    x += dx;
    y += dy;
}

createBall();

// setInterval(createBall, 30);
function bubbles() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < 100; i++) {
        let a = Math.random() * window.innerWidth;
        let b = Math.random() * window.innerHeight;
        let c = Math.random();
        ctx.beginPath();
        ctx.arc(a, b, 20, 0, Math.PI * 2, true);
        ctx.strokeStyle = `rgba(192, 192, 192, ${c})`;
        ctx.stroke();
    }
    for (let i = 0; i < 100; i++) {
        let a = Math.random() * window.innerWidth;
        let b = Math.random() * window.innerHeight;
        let c = Math.random();
        ctx.beginPath();
        ctx.arc(a, b, 20, 0, Math.PI * 2, true);
        ctx.strokeStyle = `rgba(0, 0, 0, ${c})`;
        ctx.stroke();
    }
}

// setInterval(bubbles, 1000);
let r = 10;
let cr = 0.8;

function grow() {
    //ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.beginPath();
    ctx.arc(window.innerWidth / 2, window.innerHeight / 2, r, 0, Math.PI * 2, true);
    ctx.strokeStyle = `rgba(255, 223, 0, ${cr})`;
    ctx.stroke();
    r += 10;
    cr -= 0.01;
}

// setInterval(grow, 1);
let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    // this.r = r;
    // this.g=g;
    // this.b=b;


    this.draw = function () {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(139,0,0,0.3)';
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.stroke();
        // let r = Math.random()*255;
        // let g = Math.random()*255;
        // let b = Math.random()*255;
        let a = 0.3;
        // ctx.fillStyle =`rgba(${r}, ${g}, ${b}, 1)`;
        ctx.fillStyle = `rgba(255, 233, 0, ${a})`;
        ctx.fill();
    };

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;

        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}


let circleArr = [];
for (let i = 0; i < 100; i++) {
    let radius = 50;
    let x = Math.random() * (window.innerWidth - 2 * radius) + radius;
    let y = Math.random() * (window.innerHeight - 2 * radius) + radius;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;

    // circleArr.push(new Circle(x, y, dx, dy, radius,Math.random()*255, Math.random()*255, Math.random()*255 ));
    circleArr.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circleArr.length; i++) {
        circleArr[i].update();
    }
}

animate();
/**
 * We mochten geen libraries gebruiken, dus heb ik deze tutorial gevolgd: (Volgen betekend dat ik heb nagedacht over wat de code doet en dat ik het zelf heb overgetypt)
 * https://www.youtube.com/watch?v=hotMX-pqjkQ
 */
var frameCount = 0;
var particlesSwitch = 1;

function particles() {
    if (particlesSwitch == 1) {
        document.getElementById("particles").innerHTML = "Zet particles aan";
        particlesSwitch = 0;
    } else {
        document.getElementById("particles").innerHTML = "Zet particles uit";
        particlesSwitch = 1;
        init();
        animate();
    }
}
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray;

function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}

Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
}

function init() {
    particleArray = [];
    for (let i = 0; i < 10; i++) {
        let size = Math.random() * 35;
        let x = Math.random() * (innerWidth - size * 2)
        let y = Math.random() * (innerHeight - size * 2)
        let directionX = (Math.random() * .6) - .3;
        let directionY = (Math.random() * .6) - .3;
        let color = 'rgba(255,255,255,' + (Math.random() * .3) + ')';
        particleArray.push(new Particle(x, y, directionX, directionY, size, color))
    }
}

function animate() {
    if (particlesSwitch) {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (i = 0; i < particleArray.length; i++) {
            particleArray[i].update();
        }
    }
}
init();
animate();
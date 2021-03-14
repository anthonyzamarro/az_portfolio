'use strict'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Ball {
	constructor(color, x_coord = 2, y_coord = 30, x_speed = 2, y_speed = -2, radius = 10) {
		this.color = color;
		this.canvas = document.querySelector('#canvas');
		this.ctx = this.canvas.getContext('2d');
		this.x = this.canvas.width / x_coord;
		this.y = this.canvas.height - y_coord;
		this.dx = x_speed;
		this.dy = y_speed;
		this.radius = radius;
		this.collide = false;
	}

	ball() {	
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, 15, 0, Math.PI*2);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
		this.ctx.closePath();
	}

	moveBall() {	
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ball();
		this.x += this.dx;
		this.y += this.dy;
		this.collision();
	}

	collision() {
		let dy = this.dy;
		let dx = this.dx
		if (this.y + this.dy < this.radius || this.y + this.dy > this.canvas.height - this.radius) {
			this.color = `#${Math.random().toString(16).substr(-6)}`;
			this.dy = -dy	
		}

		if (this.x + this.dx < this.radius || this.x + this.dx >this.canvas.width - this.radius) {
			this.color = `#${Math.random().toString(16).substr(-6)}`;
			this.dx = -dx;
		}
	}
}

class Paddle {
	constructor() {
		this.width = 75;
		this.height = 10;
		this.canvas = document.querySelector('#canvas');
		this.ctx = this.canvas.getContext('2d');
		this.x = 200;
		this.y = 280;

		this.left = false;
		this.right = false;
	}

	draw() {
		this.ctx.beginPath();
		this.ctx.rect(this.x, this.y, this.width, this.height);
		this.ctx.strokeStyle = 'tomato';
		this.ctx.stroke();
		this.ctx.closePath();

		
	}

	movePaddle() {
		document.addEventListener('keydown', e => {
			if (e.keyCode === 37) {
				this.x -= 1;	
			} else if (e.keyCode === 39) {	
				this.x += 1;	
			}

		});

		document.addEventListener('keyup', e => {
			if (e.keyCode === 37) {
				this.x -= 1;	
			} else if (e.keyCode === 39) {	
				this.x += 1;	
			}

		});
		
	}

}

// color, x, y, dx, dy, radius
const ball = new Ball('tomato', 2, 15, 1, -2, 10);
const paddle = new Paddle();
paddle.draw();
paddle.movePaddle();
//setInterval(() => {
//	console.log('running');
//	ball.moveBall()
//	}
// ,10)



//let x = canvas.width / 2,
//y = canvas.height - 30,
//dx = 2,
//dy = -2;
//
//function draw() {
//
//	ctx.beginPath();
//	ctx.arc(x, y, 10, 0, Math.PI*2);
//	ctx.fillStyle = 'green';
//	ctx.fill();
//	ctx.closePath();
//
//	x += dx;
//	y += dy;
//}
//
//
////setInterval(draw, 10)

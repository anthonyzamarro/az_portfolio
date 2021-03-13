'use strict'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Ball {
	constructor(color, x_coord = 2, y_coord = 30, x_speed = 2, y_speed = -2) {
		this.color = color;
		this.canvas = document.querySelector('#canvas');
		this.ctx = this.canvas.getContext('2d');
		this.x = this.canvas.width / x_coord;
		this.y = this.canvas.height - y_coord;
		this.dx = x_speed;
		this.dy = y_speed;
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
		let rightBound = this.canvas.width
		let ball = this;
		if (rightBound === ball.x) {
			this.dx -= 1;
		}
	}
}


const ball = new Ball('tomato', 1.25, -30, 1, -2);
//ball.moveBall();
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

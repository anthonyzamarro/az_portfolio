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

	collision(paddleWidth, paddleX) {
		let dy = this.dy;
		let dx = this.dx
		if (this.y + this.dy < this.radius) {
			this.color = `#${Math.random().toString(16).substr(-6)}`;
			this.dy = -dy;	
		} else if (this.y + this.dy > this.canvas.height - this.radius) {
			if (this.x > paddleX && this.x < paddleX + paddleWidth) {
				this.dy = -dy;
			} else {
				console.log(`out of bounds`);
				return true;
			}
		} 
		

		if (this.x + this.dx < this.radius || this.x + this.dx > this.canvas.width - this.radius) {
			this.color = `#${Math.random().toString(16).substr(-6)}`;
			this.dx = -dx;
		}
	}
}

class Paddle {
	constructor() {
		this.height = 10;
		this.width = 75;
		this.canvas = document.querySelector('#canvas');
		this.ctx = this.canvas.getContext('2d');
		this.x = (this.canvas.width - this.width) / 2;
		this.y = 280;

		this.rightPressed = false;
		this.leftPressed = false;
	}

	paddle() {
		if (this.rightPressed) {	
			this.x += 7;
			if (this.x + this.width > this.canvas.width) {
				this.x = this.canvas.width - this.width;
			}
		}
		if (this.leftPressed) {
			this.x -= 7;
			if (this.x < 0) {
				this.x = 0;
			}
		}
		this.ctx.beginPath();
		this.ctx.rect(this.x, this.canvas.height - this.height, this.width, this.height);
		this.ctx.strokeStyle = 'tomato';
		this.ctx.stroke();
		this.ctx.closePath();

	}

	movePaddle() {
		this.paddle();
		document.addEventListener('keydown', (e) => {
			if(e.key === "Right" || e.key === "ArrowRight") {
				this.rightPressed = true;
			} else if (e.key === "Left" || e.key === "ArrowLeft") {
				this.leftPressed = true;
			}
		}, false);

		document.addEventListener('keyup', (e) => {
			if(e.key === "Right" || e.key === "ArrowRight") {
				this.rightPressed = false;
			} else if (e.key === "Left" || e.key === "ArrowLeft") {
				this.leftPressed = false;
			}

		}, false);
	}

}

class Bricks {
	constructor() {
		this.height = 10;
		this.width = 75;
		this.padding = 10;
		this.offsetTop = 30;
		this.offsetLeft = 30;
		this.canvas = document.querySelector('#canvas');
		this.ctx = this.canvas.getContext('2d');
		//this.x = (this.canvas.width - this.width) / x;
		//this.y = (this.canvas.height - this.height) / y;

		this.bricks = [];
		this.brickRowCount = 3;
		this.brickColumnCount = 5;

	
	}

	buildBricks() {	
		for(let c = 0; c < this.brickColumnCount; c++) {
			this.bricks[c] = [];
			for(let r = 0; r < this.brickRowCount; r++) {
				this.bricks[c][r] = { x: 0, y: 0, status: 1 }
			}
		}
	}

	draw() {
		this.buildBricks();
		for(let c = 0; c < this.brickColumnCount; c++) {
			for (let r = 0; r < this.brickRowCount; r++) {
				let brickX = (c*(this.width + this.padding)) + this.offsetLeft;	
				let brickY = (r*(this.height + this.padding)) + this.offsetTop;	
				this.bricks[c][r].x = brickX;
				this.bricks[c][r].y = brickY;
				if (this.bricks[c][r].status == 1) {
					this.ctx.beginPath();
					this.ctx.rect(brickX, brickY, this.width, this.height);
					this.ctx.fillStyle = 'tomato';
					this.ctx.fill();
					this.ctx.closePath();
				}
			}
		}
	}

	collision(ball) {
		for(let c = 0; c < this.brickColumnCount; c++) {
			for(let r = 0; r < this.brickRowCount; r++) {
				let b = this.bricks[c][r];
					if (ball.x > b.x && ball.x < b.x + this.width && ball.y > b.y && ball.y < b.y + this.height) {
						ball.dy = -ball.dy;
						b.status = 0;
						console.log(b,'brick collision');
					}
			}
		}
	}
}

// color, x, y, dx, dy, radius
const ball = new Ball('tomato', 2, 15, 1, -2, 10);
const paddle = new Paddle();
const bricks = new Bricks();

let outOfBounds = false;


function start() {
	console.log('running');
	ball.moveBall();
	paddle.movePaddle();
	bricks.draw();
	bricks.collision(ball);


	outOfBounds = ball.collision(paddle.width, paddle.x);
	if (outOfBounds) {
		console.log('game over');
		clearInterval(game);
	}
}

//let game = setInterval(start, 10);



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
		this.lives = 3;
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

	drawLives() {
		this.ctx.font = "16px Arial";
		this.ctx.fillStyle = "#0095DD";
		this.ctx.fillText(`Lives: ${this.lives}`, this.canvas.width - 65, 20);
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
		document.addEventListener('keydown', e => {
			if(e.key === "Right" || e.key === "ArrowRight") {
				this.rightPressed = true;
			} else if (e.key === "Left" || e.key === "ArrowLeft") {
				this.leftPressed = true;
			}
		}, false);

		document.addEventListener('keyup', e => {
			if(e.key === "Right" || e.key === "ArrowRight") {
				this.rightPressed = false;
			} else if (e.key === "Left" || e.key === "ArrowLeft") {
				this.leftPressed = false;
			}

		}, false);

		// document.addEventListener('mousemove', e => {
		// 	this.x = e.screenX;
		// 	let relativeX = e.clientX - canvas.offsetLeft;
		// 	if (relativeX > 0 && relativeX < canvas.width) {
		// 		this.x = relativeX - this.width/2;
		// 	}
		// 	console.log(this.x, canvas.offsetLeft);
		// }, false);
	}
}

class Brick {
	constructor() {
		this.height = 20;
		this.width = 75;
		this.padding = 10;
		this.offsetTop = 30;
		this.offsetLeft = 30;
		this.canvas = document.querySelector('#canvas');
		this.ctx = this.canvas.getContext('2d');
		this.x = 0;
		this.y = 0;
		this.status = 1;
	}
}

class Score {
	constructor() {
		this.score = 0;
	}

	draw() {
		ctx.font = '24px Arial';
		ctx.fillText(`Score: ${this.score}`, 30, 300)
	}
}

// color, x, y, dx, dy, radius
const ball = new Ball('tomato', 2, 15, 2, -2, 10);
const paddle = new Paddle();
const brick = new Brick();
const score = new Score();

let outOfBounds = false;

var bricks = [];
var brickRowCount = 3;
var brickColumnCount = 5;

// build bricks
for(let c = 0; c < brickColumnCount; c++) {
	bricks[c] = [];
	for(let r = 0; r < brickRowCount; r++) {
		bricks[c][r] = new Brick();
	}
}


function buildBricks() {
	// draw bricks
	for(let c = 0; c < brickColumnCount; c++) {
		for (let r = 0; r < brickRowCount; r++) {
			let brickX = (c*(brick.width + brick.padding)) + brick.offsetLeft;	
			let brickY = (r*(brick.height + brick.padding)) + brick.offsetTop;	
			bricks[c][r].x = brickX;
			bricks[c][r].y = brickY;
			if (bricks[c][r].status == 1) {
				bricks[c][r].ctx.beginPath();
				bricks[c][r].ctx.rect(brickX, brickY, brick.width, brick.height);
				bricks[c][r].ctx.fillStyle = 'tomato';
				bricks[c][r].ctx.fill();
				bricks[c][r].ctx.closePath();
			} 
		}
	}
}

function collisionDetection(ball) {
	for (var c = 0; c < brickColumnCount; c++) {
		for (var r = 0; r < brickRowCount; r++) {
			var b = bricks[c][r];
			if (b.status === 1) {
				if (ball.x > b.x && ball.x < b.x + brick.width && ball.y > b.y && ball.y < b.y + brick.height) {
					ball.dy = -ball.dy;
					b.status = 0;
					score.score++
				}
			}
		}
	}
}
let game;
function start() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	console.log('running');
	ball.moveBall();
	paddle.movePaddle();
	buildBricks();
	collisionDetection(ball);
	score.draw();
	ball.drawLives();

	if(score.score >= 15) {
		alert('Winna Winna Chicken Dinna 🐓 🍗 🐔');
		document.location.reload();
		clearInterval(game);
	}

	console.log(ball.lives);
	outOfBounds = ball.collision(paddle.width, paddle.x);

	if (outOfBounds) {
		ball.lives -= 1;
		if (ball.lives < 1) {
			console.log('game over');
			// alert('Game over!');
			// document.location.reload();
			clearInterval(game);
		} else {
			ball.x = canvas.width / 2;
			ball.y = canvas.height - 30;
			ball.dx = 2;
			ball.dy = -2;
			paddle.x = (canvas.width - paddle.width) / 2;
			console.log(ball.lives);
		}
	}

}


document.querySelector('#btn').addEventListener('click', e => {
	console.log(e)
	setInterval(start, 10);
});

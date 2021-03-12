'use strict'

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//ctx.beginPath();
//ctx.rect(20, 40, 50, 50);
//ctx.fillStyle = '#FF0000';
//ctx.fill();
//ctx.closePath();
//
//
//
//ctx.beginPath();
//ctx.arc(240, 160, 20, 0, Math.PI*2, false);
//ctx.fillStyle = 'green';
//ctx.fill();
//ctx.closePath();
//
//
//
//ctx.beginPath();
//ctx.rect(160, 10, 100, 40);
//ctx.strokeStyle = 'rgba(0, 0, 255, .5)';
//ctx.stroke();
//ctx.closePath();


class Ball {
	constructor(color) {
		this.color = color;
	}

	drawBall() {	
		ctx.beginPath();
		ctx.arc(240, 250, 15, 0, Math.PI*2, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.closePath();
	}

	moveBall() {
		let x = 240;
		let y = 250;
		document.addEventListener('keyup', (e) => {
				if(e.keyCode === 75) {
					x += 1;
					y += 1;
					console.log(x, y)
					ctx.beginPath();
					ctx.arc(x, y, 15, 0, Math.PI*2, false);
					ctx.fillStyle = '#fff';
					ctx.fill();
					ctx.closePath();

					ctx.beginPath();
					ctx.fillStyle = 'green';
					ctx.fill();
					ctx.closePath();
				}				
		});	
	}
}


const ball = new Ball('tomato');
ball.drawBall();
ball.moveBall();

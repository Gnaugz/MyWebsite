function setup() {
	createCanvas(1000, 500);
}

var ball = new Ball();
var lp = new Paddle(20, 225);
var rp = new Paddle(973, 225);
var po = 0;
var pt = 0;

function draw() {
	background(0);
	ball.update();
	lp.update();
	rp.update();
	if (lp.type) {
		if (keyIsDown(87)) {
			lp.move(-1);
		}
		if (keyIsDown(83)) {
			lp.move(1);
		}
	}
	if (rp.type) {
		if (keyIsDown(UP_ARROW)) {
			rp.move(-1);
		}
		if (keyIsDown(DOWN_ARROW)) {
			rp.move(1);
		}
	}
	document.getElementById('po').innerHTML = po;
	document.getElementById('pt').innerHTML = pt;
	if (document.getElementById('sp').checked) {
		rp.type = false;
		lp.type = true;
	}
	if (document.getElementById('tp').checked) {
		rp.type = true;
		lp.type = true;
	}
	if (document.getElementById('np').checked) {
		rp.type = false;
		lp.type = false;
	}
}
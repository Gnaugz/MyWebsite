
function setup() {
	createCanvas(500, 500);
}

var ball = new Ball();
var bar = new Bar();

function draw() {
  	background(0);
  	ball.update();
  	bar.update();
  	if (keyIsDown(LEFT_ARROW)) {
		bar.move(-1);
	}
	if (keyIsDown(RIGHT_ARROW)) {
		bar.move(1);
	}
}
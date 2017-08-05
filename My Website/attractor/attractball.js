function Ball() {
	this.x = 250;
	this.y = 450;
	this.xs = 0;
	this.ys = 0;
	this.switched = false;
}

Ball.prototype.update = function() {
	if (this.x >= bar.x-25 && this.x <= bar.x+25) {
		this.ys = 0;
	}
	if (this.x < 500 || this.x > 0) {
		this.switched = false;
	}
	if (!this.switched) {	
		if (this.x > 500 || this.x < 0) {
			this.xspeed *= -1;
			this.switched = true;
		}
	}
	this.x += this.xs;
	this.y += this.ys;
	stroke(255);
	strokeWeight(10);
	point(this.x, this.y);
}

Ball.prototype.reset = function() {
	ball = null;
	ball = new Ball();
}
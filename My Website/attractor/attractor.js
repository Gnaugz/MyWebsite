function Bar() {
	this.x = 250;
	this.y = 470;
	this.xs;
	this.ys;
	this.w = 50;
	this.h = 7;
}

Bar.prototype.update = function() {
	fill(255);
	rect(this.x-25, this.y, this.w, this.h);
	stroke(0);
	strokeWeight(10);
	point(this.x, this.y);
}

Bar.prototype.move = function(s) {
	if (s == 1) {
		if (this.x+25 <= 500) {
			this.x += 2*s;
		}
	} else {
		if (this.x-25 >= 0) {
			this.x += 2*s;
		}
	}
}
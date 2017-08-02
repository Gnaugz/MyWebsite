function Paddle(x, ty) {
	this.x = x;
	this.ty = ty;
	this.y = ty + 25;
	this.xspeed;
	this.yspeed;
	this.type = true;
	this.w = 7;
	this.h = 100;
}

Paddle.prototype.update = function() {
	fill(255);
	rect(this.x, this.y-50, this.w, this.h);
	if (!this.type) {
		if (ball.y>this.y) {
			this.move(1);
		} else if (ball.y<this.y) {
			this.move(-1);
		}
	}
}

Paddle.prototype.move = function(s) {
	if (s == 1) {
		if (this.y+50 != 500) {
			this.y += 2*s;
		}
	} else {
		if (this.y-50 != 0) {
			this.y += 2*s;
		}
	}
}

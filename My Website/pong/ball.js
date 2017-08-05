function Ball() {
	this.x = 500;
	this.y = 250;
	this.speed = 2;
	this.angle = Math.random()*360;
	this.xspeed = Math.cos(this.angle)*this.speed;
	this.yspeed = Math.sin(this.angle)*this.speed;
	this.switched = false;
	this.lxd;
	this.rxd;
}

Ball.prototype.update = function() {
	if (this.y < 500 || this.y > 0) {
		this.switched = false;
	}
	if (!this.switched) {	
		if (this.y > 500 || this.y < 0) {
			this.yspeed *= -1;
			this.switched = true;
		}
	}
	if (this.x < 0) {
		this.reset();
		pt += 1;
	}
	if (this.x > 1000) {
		this.reset();
		po += 1;
	}
	this.lxd = (lp.x+14) - this.x;
	this.rxd = (rp.x-7) - this.x;
	if (this.lxd >= 0) {
		if (lp.y-50 <= this.y  && this.y <= lp.y+50) {
			this.xspeed *= -1;
		}
	}
	if (this.rxd <= 0) {
		if (rp.y-50 <= this.y  && this.y <= rp.y+50) {
			this.xspeed *= -1;
		}
	}
	this.x = this.x + this.xspeed;
	this.y = this.y + this.yspeed;
	stroke(255);
	strokeWeight(10);
	point(this.x, this.y);
}

Ball.prototype.reset = function() {
	ball = null;
	ball = new Ball();
}

Ball.prototype.setSpeed = function() {
	this.xspeed*= document.getElementById("speed").value / this.speed;
	this.yspeed*= document.getElementById("speed").value / this.speed;
	this.speed = document.getElementById("speed").value / this.speed;
}
function Cell(x, y, w) {
	this.p = 2;
	this.x = x;
	this.y = y;
	this.w = w;
	this.clicked = false;
}
Cell.prototype.show = function() {
	stroke(0);
	strokeWeight(1);
	noFill();
	rect(this.x, this.y, this.w, this.w);
	if (this.p == 0) {
		stroke(0, 0, 255);
		strokeWeight(7);
		ellipse(this.x+this.w*0.5, this.y+this.w*0.5, this.w*0.5);
	}
	if (this.p == 1) {
		stroke(255, 0, 0);
		strokeWeight(5);
		line(this.x+this.w*0.2, this.y+this.w*0.2, this.x+this.w*0.8, this.y+this.w*0.8);
		line(this.x+this.w*0.2, this.y+this.w*0.8, this.x+this.w*0.8, this.y+this.w*0.2);
	}
}

Cell.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}
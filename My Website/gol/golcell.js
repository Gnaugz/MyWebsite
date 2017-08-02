function Cell(x, y, w) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.clicked = false;
	this.neighbors = 0;
}
Cell.prototype.show = function() {
	stroke(0);
	if (!this.clicked) {
		noFill();
	} else {
		fill(0);
	}
	rect(this.x, this.y, this.w, this.w);
}

Cell.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}
function Cell(x, y, w, i, j) {
	this.x = x;
	this.y = y;
	this.w = w;
	this.o;
	if (((i+j)%2)==0) {
		this.c = true;
	} else {
		this.c = false;
	}
}
Cell.prototype.show = function() {
	stroke(0);
	if (this.c) {
		fill(102, 51, 0);
	} else {
		fill(255, 212, 128);
	}
	rect(this.x, this.y, this.w, this.w);
}

Cell.prototype.contains = function(x, y) {
	return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}
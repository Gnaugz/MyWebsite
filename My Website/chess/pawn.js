function Pawn(r, c, p) {
	this.rx = r;
	this.cy = c;
	this.p = p;
}

Pawn.prototype.update = function() {
	stroke(255);
	circle();
}
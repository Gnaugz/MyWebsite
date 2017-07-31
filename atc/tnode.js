function Tnode(x, y, p) {
	this.x = x;
	this.y = y;
	this.parent = p;
}

Tnode.prototype.show = function() {
	stroke(0);
	strokeWeight(10);
	point(this.x, this.y);
}
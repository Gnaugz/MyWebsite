function Pawn(r, c, p) {
	this.rx = r;
	this.cy = c;
	this.p = grid[this.rx][this.yc];
	this.x = this.p.x;
	this.y = this.p.y;
}

Pawn.prototype.update = function() {
	fill(255);
	ellipse(this.x+this.w*0.5, this.y+this.w*0.5, this.w*0.5);
}
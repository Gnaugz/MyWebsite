function Taxiway(n, xo, xt, yo, yt, c, t, n) {
	this.name = n;
	this.xo = xo;
	this.xt = xt;
	this.yo = yo;
	this.yt = yt; 
	this.color = c;
	this.type = t;
	this.nodes = n;
}

Taxiway.prototype.show = function() {
	stroke(this.color);
	strokeWeight(10);
	line(this.xo, this.yo, this.xt, this.yt);
}
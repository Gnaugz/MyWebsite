function Plane(x, y, s, p) {
	this.callsign = callcodes[Math.floor(Math.random(0, 6))] + Math.floor(Math.random(1, 9999));
	this.state = s;
	this.x = x;
	this.y = y;
	this.currentpos = p;
	this.xspeed = 0;
	this.yspeed = 0;
	this.angle = 0;
	this.dx;
	this.dy;
	this.moves = [];
	this.nextmove = [0];
	this.tempmove = [];
	this.tempxspeed;
	this.tempyspeed;
}

Plane.prototype.update = function() {
	for (var i = 0; i < nodes.length; i++) {
	 	if (nodes[i]!=);
	 (nodes[6].x - this.x < 5) 
		console.log("hey");
	}
	if (this.moves.length!=0) {
		this.tempmove = this.moves[0];
		this.nextmove = this.tempmove.split(" ");
	} 
	if (this.nextmove!=null) {
		//this.checkNode();
	}
	this.x = this.x + this.xspeed;
	this.y = this.y + this.yspeed;
	stroke(0, 0, 255);
	strokeWeight(10);
	point(this.x, this.y);
	this.moveTo();
}

Plane.prototype.moveTo = function(turn) {
	if (turn) {
		if (this.nextmove[0] == "left") {
			this.dx = this.currentpos.xo - this.x;
			this.dy = this.currentpos.yo - this.y;
			this.angle = atan2(this.dy, this.dx);
			this.xspeed = cos(this.angle);
			this.yspeed = sin(this.angle);
			this.nextmove.shift();
			this.moves.shift();
			this.nextmove.shift();
			this.moves.shift();
		}
		if (this.nextmove[0] == "right") {
			this.dx = this.currentpos.xt - this.x;
			this.dy = this.currentpos.yt - this.y;
			this.angle = atan2(this.dy, this.dx);
			this.xspeed = cos(this.angle);
			this.yspeed = sin(this.angle);
			this.nextmove.shift();
			this.moves.shift();
			this.nextmove.shift();
			this.moves.shift();
		}
	} else {
		if (this.x == this.currentpos.xo && this.y == this.currentpos.yo) {
			this.dx = this.currentpos.xt - this.x;
			this.dy = this.currentpos.yt - this.y;
			this.angle = atan2(this.dy, this.dx);
			this.xspeed = cos(this.angle);
			this.yspeed = sin(this.angle);
		}
		if (this.x == this.currentpos.xt && this.y == this.currentpos.yt) {
			this.dx = this.currentpos.xo - this.x;
			this.dy = this.currentpos.yo - this.y;
			this.angle = atan2(this.dy, this.dx);
			this.xspeed = cos(this.angle);
			this.yspeed = sin(this.angle);
		}
	}
}

/*Plane.prototype.checkNode = function(turning) {
	for (var i = 0; i < nodes.length; i++) {
		if (nodes[i].x - this.x < 5) {
			//console.log("hey");
		}
	}
}*/

function start() {
	if (floor(examplep.x) == examplep.currentpos.xo && floor(examplep.y) == examplep.currentpos.yo) {
		examplep.dx = examplep.currentpos.xt - examplep.x;
		examplep.dy = examplep.currentpos.yt - examplep.y;
		examplep.angle = atan2(examplep.dy, examplep.dx);
		examplep.xspeed = cos(examplep.angle);
		examplep.yspeed = sin(examplep.angle); 
	} 
	if (floor(examplep.x) == examplep.currentpos.xt && floor(examplep.y) == examplep.currentpos.yt) {
		examplep.dx = examplep.currentpos.xo - examplep.x;
		examplep.dy = examplep.currentpos.yo - examplep.y;
		examplep.angle = atan2(examplep.dy, examplep.dx);
		examplep.xspeed = cos(examplep.angle);
		examplep.yspeed = sin(examplep.angle);
	}
}
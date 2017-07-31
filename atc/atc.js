var callcodes = ["VRX", "F9", "UAL", "BA", "DAL"];
var ways = [];
var planes = [];
var nodes = [];
var switched = false;

function setup() {
	createCanvas(500, 500);
}

var aa = new Tnode(100, 100, "A");
var ab = new Tnode(400, 100, "A");
var ba = new Tnode(100, 400, "B");
var bb = new Tnode(400, 400, "B");
var ca = new Tnode(100, 100, "C");
var cb = new Tnode(100, 400, "C");
var da = new Tnode(400, 100, "D");
var db = new Tnode(400, 400, "D");
var taxiA = new Taxiway("A", 100, 400, 100, 100, "white", "runway");
var taxiB = new Taxiway("B", 100, 400, 400, 400, "white", "runway");
var taxiC = new Taxiway("C", 100, 100, 100, 400, "white", "runway");
var taxiD = new Taxiway("D", 400, 400, 100, 400, "white", "runway");

ways.push(taxiA);
ways.push(taxiB);
ways.push(taxiC);
ways.push(taxiD);
nodes.push(aa);
nodes.push(ab);
nodes.push(ba);
nodes.push(bb);
nodes.push(ca);
nodes.push(cb);
nodes.push(da);
nodes.push(db);

var examplep = new Plane(100, 100, 1, taxiA);

/*var aa = new Tnode(100, 100, "A");
var ab = new Tnode(300, 100, "A");
var ac = new Tnode(500, 100, "A");
var ad = new Tnode(700, 100, "A");
var ae = new Tnode(900, 100, "A");
var taxiA = new Taxiway("A", 100, 900, 100, 100, "white", "runway");
var ba = new Tnode(100, 200, "B");
var bb = new Tnode(150, 200, "B");
var bc = new Tnode(500, 200, "B");
var bd = new Tnode(850, 200, "B");
var be = new Tnode(900, 200, "B");
var taxiB = new Taxiway("B", 100, 900, 200, 200, "yellow", "taxiway");
var ca = new Tnode(100, 100, "C");
var cb = new Tnode(100, 200, "C");
var taxiC = new Taxiway("C", 100, 100, 100, 200, "yellow", "taxiway");
var da = new Tnode(500, 100, "D");
var db = new Tnode(500, 200, "D");
var taxiD = new Taxiway("D", 500, 500, 100, 200, "yellow", "taxiway");
var ea = new Tnode(900, 100, "E");
var eb = new Tnode(900, 200, "E");
var taxiE = new Taxiway("E", 900, 900, 100, 200, "yellow", "taxiway");
var fa = new Tnode(300, 100, "F");
var fb = new Tnode(150, 200, "F");
var taxiF = new Taxiway("F", 150, 300, 200, 100, "green", "taxiway");
var taxiG = new Taxiway("G", 700, 850, 100, 200, "yellow", "taxiway");
var taxiH = new Taxiway("H", 250, 250, 300, 400, "lightblue", "ramp", ["M"]);
var taxiI = new Taxiway("I", 500, 500, 300, 400, "lightblue", "ramp", ["M"]);
var taxiJ = new Taxiway("J", 750, 750, 300, 400, "lightblue", "ramp", ["M"]);
var taxiK = new Taxiway("K", 150, 250, 200, 300, "yellow", "taxiway");
var taxiL = new Taxiway("L", 750, 850, 300, 200, "yellow", "taxiway");
var taxiM = new Taxiway("M", 250, 750, 300, 300, "yellow", "taxiway");
var taxiN = new Taxiway("N", 500, 500, 200, 300, "yellow", "taxiway");
ways.push(taxiA);
ways.push(taxiB);
ways.push(taxiC);
ways.push(taxiD);
ways.push(taxiE);
ways.push(taxiF);
ways.push(taxiG);
ways.push(taxiH);
ways.push(taxiI);
ways.push(taxiJ);
ways.push(taxiK);
ways.push(taxiL);
ways.push(taxiM);
ways.push(taxiN);
nodes.push(aa);
nodes.push(ab);
nodes.push(ac);
nodes.push(ad);
nodes.push(ae);
nodes.push(ba);
nodes.push(bb);
nodes.push(bc);
nodes.push(bd);
nodes.push(be);
nodes.push(ca);
nodes.push(cb);
nodes.push(da);
nodes.push(db);
nodes.push(ea);
nodes.push(eb);
nodes.push(fa);
nodes.push(fb);*/

function draw() {
  	background(0);
  	for (var i = 0; i < ways.length; i++) {
        ways[i].show();
    }
    for (var i = 0; i < nodes.length; i++) {
    	nodes[i].show();
    }
  	examplep.update();
}
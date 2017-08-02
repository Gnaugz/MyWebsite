function rounda(arr) {
	var narr = [];
	for (var i=0;i<=arr.length;i++) {
		narr.push((Math.floor(arr[i]*10000))/10000);
	}
	return narr;
}
function rounds(val) {
	var nval = (Math.floor(val*10000))/10000;
	return nval;
}
function calculate() {
	if (document.getElementById("ra").checked) {calculater();}
	if (document.getElementById("an").checked) {calculatea();}
	if (document.getElementById("vo").checked) {calculatev();}
	if (document.getElementById("bv").checked) {calculateb();}
}
function calculater() {
	var a = document.getElementById("angle").value;
	var v = rounds(document.getElementById("volume").value);
	var r = 0;
	for (var i=0;tt!=v;i++) {
		var t = Math.pow(((((2*i*Math.PI)*((360-a)/360))/Math.PI)/2),2)*Math.PI*((Math.sqrt(Math.pow(i,2)-Math.pow(((((2*i*Math.PI)*((360-a)/360))/Math.PI)/2),2)))/3); 
		var tt = rounds(t);
		r = i;
		console.log(r);
	}
	document.getElementById("radius").value = r;
}
function calculatea() {
	var r = document.getElementById("radius").value;
	var v = 0;
	var vals = [];
	for (var i=0;i<=180;i++) {
		v = Math.pow(((((2*r*Math.PI)*((360-i)/360))/Math.PI)/2),2)*Math.PI*((Math.sqrt(Math.pow(r,2)-Math.pow(((((2*r*Math.PI)*((360-i)/360))/Math.PI)/2),2)))/3);
		vals.push(v); 
	}
	var valsn = rounda(vals);
	v = document.getElementById("volume").value;
	v = rounds(v);
	var ind = valsn.indexOf(v);
	document.getElementById("angle").value = ind;
}
function calculatev() {
	var r = document.getElementById("radius").value;
	var a = document.getElementById("angle").value;
	if (a<360) {
	var v = Math.pow(((((2*r*Math.PI)*((360-a)/360))/Math.PI)/2),2)*Math.PI*((Math.sqrt(Math.pow(r,2)-Math.pow(((((2*r*Math.PI)*((360-a)/360))/Math.PI)/2),2)))/3); 
	document.getElementById("volume").value = rounds(v);
	}
	else {
		alert("Please Enter A Angle Value Of Less Than 360")
	}
}
function calculateb() {
	var r = document.getElementById("radius").value;
	var v = 0;
	var vals = [];
	for (var i=0;i<=180;i++) {
		v = Math.pow(((((2*r*Math.PI)*((360-i)/360))/Math.PI)/2),2)*Math.PI*((Math.sqrt(Math.pow(r,2)-Math.pow(((((2*r*Math.PI)*((360-i)/360))/Math.PI)/2),2)))/3);
		vals.push(v); 
	}
	v = (Math.max.apply(null, vals));
	var ind = vals.indexOf(v);
	document.getElementById("volume").value = rounds(v);
	document.getElementById("angle").value = ind;
}

function reset() {
    setup();
    p = 1;
    reseted = true;
    document.getElementById('xwin').style.display = 'hidden'; 
    document.getElementById('owin').style.display = 'hidden';
}

function makeGrid(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

var grid;
var cols = 3;
var rows = 3;
var w = 100;
var p = 1;
var unclicked = 0;
var reseted = false;
var tempwin = false;
var tmptmpwin = false;

function setup() {
	createCanvas(301, 301);
    grid = makeGrid(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i*w, j*w, w);
        }   
    }
}

function screenPressed() {
    mousePressed();
}

function mousePressed() {
    reseted = false;
    if (!tempwin) {
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                if (grid[i][j].contains(mouseX, mouseY)) {
                    if (!grid[i][j].clicked) {    
                        if (p == 1) {
                            grid[i][j].p = 1;
                            p = 0;
                            grid[i][j].clicked = true;
                        } else {
                            grid[i][j].p = 0;
                            p = 1;
                            grid[i][j].clicked = true;
                        }
                        checkwin(i, j);
                        checktie();
                    }
                }
            }   
        }
    }
}

function draw() {
  	background(255);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].show();
        }   
    }
}
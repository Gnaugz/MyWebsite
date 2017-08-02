function makeGrid(cols, rows) {
    var arr = new Array(cols);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function rancells() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j].clicked = false;
            if (Math.random() > 0.5) {
            grid[i][j].clicked = true;
            }
        }   
    }
}

var grid;
var cols = 10;
var rows = 10;
var w = 50;
var seed;
var alive = 1;
var refresh;

function setup() {
    createCanvas(501, 501);
    grid = makeGrid(cols, rows);
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i*w, j*w, w);
        }   
    }
}

function mousePressed() {
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {    
                if (!grid[i][j].clicked) {
                    grid[i][j].clicked = true;
                } else {
                    grid[i][j].clicked = false;
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
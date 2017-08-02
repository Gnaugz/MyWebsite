function oneGen() {
    if (alive == 1) {
        alive = 0;
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                grid[i][j].neighbors = 0;
                if (j == 0 && i!=0 && i!=9) {
                    checkt(i);
                } else if (i == 0 && j == 0) {
                    checklt();
                } else if (i == 0 && j!=0 && j!=9) {
                    checkl(j);
                } else if (i == 0 && j == 9) {
                    checklb(j);
                } else if (j == 9 && i!=0 && i!=9) {
                    checkb(i, j);
                } else if (i == 9 && j == 9) {
                    checkrb(i, j);
                } else if (i == 9 && j!=0 && j!=9) {
                    checkr(i, j);
                } else if (i == 9 && j == 0) {
                    checkrt(i);
                } else {
                    checkn(i, j);
                }
            }
        }
        for (var i = 0; i < cols; i++) {
            for (var j = 0; j < rows; j++) {
                if (grid[i][j].clicked) {
                    if (grid[i][j].neighbors < 2) {
                        grid[i][j].clicked = false;
                    } else if (grid[i][j].neighbors > 3) {
                        grid[i][j].clicked = false;
                    }
                } else {
                    if (grid[i][j].neighbors == 3) {grid[i][j].clicked = true;}
                }
                grid[i][j].show();
                if (grid[i][j].clicked) {
                    alive = 1;
                }
            }
        }
    } else {
        clearInterval(refresh);
    }
}

function generateTillDead() {
    alive = 1;
    refresh = setInterval(oneGen, 500);
}

function checkt(i) {
    if (grid[i+1][0].clicked) {grid[i][0].neighbors += 1;}
    if (grid[i-1][0].clicked) {grid[i][0].neighbors += 1;}
    if (grid[i-1][1].clicked) {grid[i][0].neighbors += 1;}
    if (grid[i][1].clicked) {grid[i][0].neighbors += 1;}
    if (grid[i+1][1].clicked) {grid[i][0].neighbors += 1;} 
}
function checklt() {
    if (grid[0][1].clicked) {grid[0][0].neighbors += 1;}
    if (grid[1][0].clicked) {grid[0][0].neighbors += 1;}
    if (grid[1][1].clicked) {grid[0][0].neighbors += 1;}
}
function checkl(j) {
    if (grid[0][j-1].clicked) {grid[0][j].neighbors += 1;}
    if (grid[0][j+1].clicked) {grid[0][j].neighbors += 1;}
    if (grid[1][j-1].clicked) {grid[0][j].neighbors += 1;}
    if (grid[1][j].clicked) {grid[0][j].neighbors += 1;}
    if (grid[1][j+1].clicked) {grid[0][j].neighbors += 1;}
}
function checklb(j) {
    if (grid[0][j-1].clicked) {grid[0][j].neighbors += 1;}
    if (grid[1][j].clicked) {grid[0][j].neighbors += 1;}
    if (grid[1][j-1].clicked) {grid[0][j].neighbors += 1;}
}
function checkb(i, j) {
    if (grid[i+1][j].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i-1][j].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i-1][j-1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i][j-1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i+1][j-1].clicked) {grid[i][j].neighbors += 1;}
}
function checkrb(i, j) {
    if (grid[i-1][j].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i][j-1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i-1][j-1].clicked) {grid[i][j].neighbors += 1;}
}
function checkr(i, j) {
    if (grid[i][j-1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i][j+1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i-1][j-1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i-1][j].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i-1][j+1].clicked) {grid[i][j].neighbors += 1;}
}
function checkrt(i) {
    if (grid[i-1][0].clicked) {grid[i][0].neighbors += 1;}
    if (grid[i][1].clicked) {grid[i][0].neighbors += 1;}
    if (grid[i-1][1].clicked) {grid[i][0].neighbors += 1;}
}
function checkn(i, j) {
    if (grid[i-1][j-1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i][j-1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i+1][j-1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i+1][j].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i+1][j+1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i][j+1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i-1][j+1].clicked) {grid[i][j].neighbors += 1;}
    if (grid[i-1][j].clicked) {grid[i][j].neighbors += 1;}
}
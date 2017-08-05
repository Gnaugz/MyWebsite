function checkwin(i, j) {
    if (j == 0 && i!=0 && i!=2) {
        checkt(i);
    } else if (i == 0 && j == 0) {
        checklt();
    } else if (i == 0 && j!=0 && j!=2) {
        checkl(j);
    } else if (i == 0 && j == 2) {
        checklb(j);
    } else if (j == 2 && i!=0 && i!=2) {
        checkb(i, j);
    } else if (i == 2 && j == 2) {
        checkrb(i, j);
    } else if (i == 2 && j!=0 && j!=2) {
        checkr(i, j);
    } else if (i == 2 && j == 0) {
        checkrt(i);
    } else {
        checkn(i, j);
    } 
}

function checkt(i) {
    if (grid[0][0].p == grid[2][0].p && grid[1][0].p == grid[2][0].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}} 
    if (grid[1][1].p == grid[1][2].p && grid[1][0].p == grid[1][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checklt() {
    if (grid[0][1].p == grid[0][2].p && grid[0][0].p == grid[0][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[1][0].p == grid[2][0].p && grid[0][0].p == grid[2][0].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[1][1].p == grid[2][2].p && grid[0][0].p == grid[2][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checkl(j) {
    if (grid[1][1].p == grid[2][1].p && grid[0][1].p == grid[2][1].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[0][0].p == grid[0][2].p && grid[0][1].p == grid[0][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checklb(j) {
    if (grid[0][0].p == grid[0][1].p && grid[0][2].p == grid[0][1].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[1][2].p == grid[2][2].p && grid[0][2].p == grid[2][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[1][1].p == grid[2][0].p && grid[0][2].p == grid[2][0].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checkb(i, j) {
    if (grid[0][2].p == grid[2][2].p && grid[1][2].p == grid[2][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[1][0].p == grid[1][1].p && grid[1][2].p == grid[1][1].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checkrb(i, j) {
    if (grid[2][1].p == grid[2][0].p && grid[2][2].p == grid[2][0].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[0][2].p == grid[1][2].p && grid[2][2].p == grid[1][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[2][1].p == grid[0][0].p && grid[2][2].p == grid[0][0].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checkr(i, j) {
    if (grid[2][0].p == grid[2][2].p && grid[2][1].p == grid[2][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[0][1].p == grid[1][1].p && grid[2][1].p == grid[1][1].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checkrt(i) {
    if (grid[2][1].p == grid[2][2].p && grid[2][0].p == grid[2][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[1][0].p == grid[0][0].p && grid[2][0].p == grid[0][0].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[1][1].p == grid[0][2].p && grid[2][0].p == grid[0][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checkn(i, j) {
    if (grid[1][0].p == grid[1][2].p && grid[1][1].p == grid[1][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[0][1].p == grid[2][1].p && grid[1][1].p == grid[2][1].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[0][0].p == grid[2][2].p && grid[1][1].p == grid[2][2].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
    if (grid[0][2].p == grid[2][0].p && grid[1][1].p == grid[2][0].p) {if (!reseted) {if (p == 0) {showWin(p);} else if (p == 1) {showWin(p); p = 3;} reset();}}
}
function checktie() {
    unclicked = 0;
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {
            if (grid[i][j].clicked == false) {unclicked += 1;}
        }   
    }
    if (unclicked == 0) {
        alert("Draw");
        reset();
    }
}

function showWin(p) {
    if (p=0) {
        document.getElementById('xwin').style.display = "block";
    } else {
        document.getElementById('owin').style.display = "block";
    }
}
var grid = [];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var R = '82';


//As soon as webpage loads run these two functions
$(document).ready(function() {
  setUpBoard();
  printBoard();
  console.log("Loaded webpage");
});

function setUpBoard() {
  // initialize board to have no values
  for (var i = 0; i < 4; i++) {
    var innergrid = [];
    for (var j = 0; j < 4; j++) {
      innergrid.push("x");
    }
    grid.push(innergrid);
  }
  addTile();
}

function clearBoard() {
  for (var r = 0; r < grid.length - 1; r++) {
    for (var c = 0; c < grid.length - 1; c++) {
      grid[r][c] = "x";
    }
  }
}



function isFull() {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid.length; c++) {
      if (grid[r][c] == "x") {
        return false;
      }
    }
  }
  return true;
}

function addTile() {
  //place a 2 on a random spot in the board

  if (isFull() == false) {
    do {
      var x = Math.round(Math.random() * 3);
      var y = Math.round(Math.random() * 3);

    } while (grid[x][y] !== "x");

    grid[x][y] = "2";
  }
}

if (isFull()) {
  console.log("You lost!");
}

function printBoard() {
  var board = '<br/>' + "*--------------*" + '<br/>';
  for (var i = 0; i < grid.length; i++) {
    board += "|   ";
    for (var j = 0; j < grid[i].length; j++) {
      board += grid[i][j] + "   |   ";
    }
    board += '<br/>';
    board += "*--------------*";
    board += '<br/>';
  }

  //console.log(board);
  document.getElementById("container").innerHTML = board;
}


//function gets called anytime  a key is pressed
//e is a special variable
// that references the event obeject that reads if the user is interacting with
//the window
document.onkeydown = function(e) {

  //makes it work in internet explorer which uses window.event and not e
  e = e || window.event;

  //keyCode is actually a character value which we convert to a String
  //to use triple equals sign
  if (e.keyCode == UP_ARROW) {
    // up arrow
    moveTilesUp();
    combineTilesUp();
    addTile();
    console.log("Pressed up");
  } else if (e.keyCode == DOWN_ARROW) {
    // down arrow
    moveTilesDown();
    combineTilesDown();
    addTile();
    console.log("Pressed down");
  } else if (e.keyCode == RIGHT_ARROW) {
    // right arrow
    moveTilesRight();
    combineTilesRight();
    addTile();
    console.log("Pressed right");
  } else if (e.keyCode == LEFT_ARROW) {
    // left arrow
    moveTilesLeft();
    combineTilesLeft();
    addTile();
    console.log("Pressed left");
  } else if (e.keyCode == R) {
    //clearBoard();
    addTile();
  }
  printBoard(); //have to recall print board to get the board to update
};

function moveAndCombineTilesUp() {
  for (var c = 0; c < grid.length; c++) {
    for (var r = 0; r < grid[c].length; r++) {
      if (r !== 0 && grid[r][c] == "x") {
        grid[r - 1][c] = grid[r][c];
        grid[r][c] = "x";
        var sum = (parseInt(grid[r][c])) + (parseInt(grid[r][c]))
        if (sum / 2 == parseInt(grid[r][c])) {
          parseInt(grid[r][c]) = sum;
          for (var i = r; grid[i] < grid[c].length; i++) {
            grid[i - 1][c] = grid[i][c];
            grid[i][c] = "x";
          }
          r = 0;
        }
      }
    }
  }
}



function moveTilesUp() {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      if (r !== 0 && grid[r][c] !== "x" && grid[r - 1][c] === "x") {
        grid[r - 1][c] = grid[r][c];
        grid[r][c] = "x";
      }
    }
  }
}

function combineTilesUp() {
  for (var r = grid.length - 1; r > 0; r--) {
    for (var c = grid.length - 1; c >= 0; c--) {
      if (r !== 0 && grid[r][c] !== "x" && grid[r - 1][c] === grid[r][c]) {
        grid[r - 1][c] = (parseInt(grid[r][c]) + parseInt(grid[r - 1][c]));
        grid[r][c] = "x";
      }
    }
  }
}


function moveTilesDown() {

  for (var r = grid.length - 1; r >= 0; r--) {
    for (var c = grid.length - 1; c >= 0; c--) {
      if (r !== 3 && grid[r][c] !== "x" && grid[r + 1][c] === "x") {
        grid[r + 1][c] = grid[r][c];
        grid[r][c] = "x";
      }
    }
  }
}

function combineTilesDown() {
  for (var r = grid.length - 1; r >= 0; r--) {
    for (var c = grid.length - 1; c >= 0; c--) {
      if (r !== 3 && grid[r][c] !== "x" && grid[r + 1][c] === grid[r][c]) {
        grid[r + 1][c] = (parseInt(grid[r][c]) + parseInt(grid[r + 1][c]));
        grid[r][c] = "x";
      }
    }
  }
}


function moveTilesRight() {
  for (var r = grid.length - 1; r > 0; r--) {
    for (var c = grid.length - 1; c >= 0; c--) {
      if (c !== 3 && grid[r][c] !== "x" && grid[r][c + 1] === "x") {
        grid[r][c + 1] = grid[r][c];
        grid[r][c] = "x";
      }
    }
  }
}

function combineTilesRight() {
  for (var r = grid.length - 1; r > 0; r--) {
    for (var c = grid.length - 1; c >= 0; c--) {
      if (c !== 3 && grid[r][c] !== "x" && grid[r][c + 1] === grid[r][c]) {
        grid[r][c + 1] = (parseInt(grid[r][c]) + parseInt(grid[r][c + 1]));
        grid[r][c] = "x";
      }
    }
  }
}


function moveTilesLeft() {

  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      if (c !== 0 && grid[r][c] !== "x" && grid[r][c - 1] === "x") {
        grid[r][c - 1] = grid[r][c];
        grid[r][c] = "x";
      }
    }
  }
}

function combineTilesLeft() {
  for (var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[r].length; c++) {
      if (c !== 0 && grid[r][c] !== "x" && grid[r][c - 1] === grid[r][c]) {
        grid[r][c - 1] = (parseInt(grid[r][c]) + parseInt(grid[r][c - 1]));
        grid[r][c] = "x";
      }
    }
  }
}


//2D array initialized with sample values. To get a blank board initialize all the values to zero
var board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var R = '82';

//As soon as webpage loads run these two functions
$(document).ready(function(){
	addTile();
	printBoard();
	console.log("Loaded webpage"); //how you do print statements in javascript
});

function printBoard(){

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 4; j++){
			var boardID = "r"+i+"c"+j;
			// if the tile is not zero, put it on the board
			// else set it to be empty
			if(board[i][j]!=0){
				document.getElementById(boardID).innerHTML = board[i][j];
			}
			else {
				document.getElementById(boardID).innerHTML = "";
			}
			//Change the different number tiles to different colors
			switch(board[i][j]){
				case 2:
					document.getElementById(boardID).style.background = "#f0e5da";
					break;//similar to an else if. Makes sure none of the other cases executes if this one does
				case 4:
					document.getElementById(boardID).style.background = "#ede2c8";
					break;
				case 8:
					document.getElementById(boardID).style.background = "#feb578";
					break;
				case 16:
					document.getElementById(boardID).style.background = "#ff9962";
					break;
				case 32:
					document.getElementById(boardID).style.background = "#ff8060";
					break;
				case 64:
					document.getElementById(boardID).style.background = "#ff613c";
					break;
				case 128:
					document.getElementById(boardID).style.background = "#efd26d";
					break;
				case 256:
					document.getElementById(boardID).style.background = "#efd15c";
					break;
				case 512:
					document.getElementById(boardID).style.background = "#efcd4a";
					break;
				case 1024:
					document.getElementById(boardID).style.background = "#f0ca36";
					break;
				case 2048:
					document.getElementById(boardID).style.background = "#ccc0b3";
					break;
				default:
					//similar to the else statement. If none of the other cases execute, this statement will execute
					// in our game we'll default to the grey background
					document.getElementById(boardID).style.background = "rgba(238, 228, 218, 0.35)";
					break;

			}
		}
	}
}

//show students an ascii conversion tool.
document.onkeydown = function(e){
	console.log(e.keyCode);

	if (e.keyCode == UP_ARROW) {
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
		moveTilesRight();
		combineTilesRight();
		addTile();
		console.log("Pressed right");
	} else if (e.keyCode == LEFT_ARROW) {
		moveTilesLeft();
		combineTilesLeft();
		addTile();
		console.log("Pressed left");
	} else if (e.keyCode == R) {
		//clearBoard();
		//addTile();
	}
	printBoard();
	isGameOver();
};

function isFull() {
  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board.length; c++) {
      if (board[r][c] == 0) {
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

    } while (board[x][y] !== 0);

    board[x][y] = 2;
  }
}


function moveTilesUp() {
  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[r].length; c++) {
      while (r !== 0 && board[r][c] !== 0 && board[r - 1][c] === 0) {
        board[r - 1][c] = board[r][c];
        board[r][c] = 0;
				r--;
      }
    }
  }
 }

function combineTilesUp() {
  for (var r = board.length - 1; r > 0; r--) {
    for (var c = board.length - 1; c >= 0; c--) {
      if (r !== 0 && board[r][c] !== 0 && board[r - 1][c] === board[r][c]) {
        board[r - 1][c] = board[r][c] + board[r - 1][c];
        board[r][c] = 0;
				if (r !== 0) {
					moveTilesUp();
				}
      }
    }
  }
}

function moveTilesDown() {

  for (var r = board.length - 1; r >= 0; r--) {
    for (var c = board.length - 1; c >= 0; c--) {
      while (r !== 3 && board[r][c] !== 0 && board[r + 1][c] === 0) {
        board[r + 1][c] = board[r][c];
        board[r][c] = 0;
				r++;
      }
    }
  }
}

function combineTilesDown() {
  for (var r = board.length - 1; r >= 0; r--) {
    for (var c = board.length - 1; c >= 0; c--) {
      if (r !== 3 && board[r][c] !== 0 && board[r + 1][c] === board[r][c]) {
        board[r + 1][c] = board[r][c] + board[r + 1][c];
        board[r][c] = 0;
				if (r !== 3) {
					moveTilesDown();
				}
      }
    }
  }
}

function moveTilesRight() {
  for (var r = board.length - 1; r >= 0; r--) {
    for (var c = board.length - 1; c >= 0; c--) {
      while (c !== 3 && board[r][c] !== 0 && board[r][c + 1] === 0) {
        board[r][c + 1] = board[r][c];
        board[r][c] = 0;
				c++;
      }
    }
  }
}

function combineTilesRight() {
  for (var r = board.length - 1; r > 0; r--) {
    for (var c = board.length - 1; c >= 0; c--) {
      if (c !== 3 && board[r][c] !== 0 && board[r][c + 1] === board[r][c]) {
        board[r][c + 1] = board[r][c] + board[r][c + 1];
        board[r][c] = 0;
				if (c !== 0) {
					moveTilesRight();
				}
      }
    }
  }
}

function moveTilesLeft() {

  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[r].length; c++) {
      while (c !== 0 && board[r][c] !== 0 && board[r][c - 1] === 0) {
        board[r][c - 1] = board[r][c];
        board[r][c] = 0;
				c--;
      }
    }
  }
}

function combineTilesLeft() {
  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[r].length; c++) {
      if (c !== 0 && board[r][c] !== 0 && board[r][c - 1] === board[r][c]) {
        board[r][c - 1] = board[r][c] + board[r][c - 1];
        board[r][c] = 0;
				if (c !==0) {
					moveTilesLeft();
				}
      }
    }
  }
}

function cantCombineTilesUp() {
  for (var r = board.length - 1; r > 0; r--) {
    for (var c = board.length - 1; c >= 0; c--) {
      if (r !== 0 && board[r][c] !== 0 && board[r - 1][c] === board[r][c]) {
        return false;
      }
    }
  }
}

function cantCombineTilesDown() {
  for (var r = board.length - 1; r >= 0; r--) {
    for (var c = board.length - 1; c >= 0; c--) {
      if (r !== 3 && board[r][c] !== 0 && board[r + 1][c] === board[r][c]) {
        return false;
      }
    }
  }
}

function cantCombineTilesRight() {
  for (var r = board.length - 1; r > 0; r--) {
    for (var c = board.length - 1; c >= 0; c--) {
      if (c !== 3 && board[r][c] !== 0 && board[r][c + 1] === board[r][c]) {
        return false;
      }
    }
  }
}

function cantCombineTilesLeft() {
  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[r].length; c++) {
      if (c !== 0 && board[r][c] !== 0 && board[r][c - 1] === board[r][c]) {
        return false;
      }
    }
  }
}

function isGameOver() {
	if (cantCombineTilesUp && cantCombineTilesDown && cantCombineTilesRight && cantCombineTilesLeft) {
		console.log("You lost!")
	}
}

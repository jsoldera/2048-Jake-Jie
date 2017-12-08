
//2D array initialized with sample values. To get a blank board initialize all the values to zero
var board = [[2,4,8,16],[32,64,128,512],[1024,0,0,0],[0,0,0,0]];



//As soon as webpage loads run these two functions
$(document).ready(function(){
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
};

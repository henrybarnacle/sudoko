
                                               
function sudoku2(grid) {
  
  var isSudoku = true;
  
//first test if 1-9 are repeated horizontally 
for (var i = 0; i < grid.length; i++) {
  for (var j = 0; j < grid[i].length; j++) {
    for (var k = j+1; k < grid[i].length; k++) {

        if (grid[i][j] == grid[i][k] &&grid[i][j] != '.') {
          isSudoku = false;
        }
      }
    }
  }
  //next check if 1-9 are repeated vertically
  var l, m, p;
for (l = 0; l < grid.length; l++) {
  for ( m = 0; m < grid[l].length; m++) {
    for (p = l+1;p < grid.length; p++) {
      if(grid[l][m] == grid[p][m] && grid[p][m] !='.'){
        isSudoku = false;
      }
    }
 }
}
//finally check if 3x3 grids include 1-9 once each
var count;

function checkSquare(a,b,c,d,e,f) {
for (w = a; w < e; w++) {
  for (x = b; x < f; x++) {
    count = 0;
    for (y = c; y < e; y++) {
      for (z = d; z < f; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            
            isSudoku = false;
              }
            }
         }
      }
}}
checkSquare(0,0,0,0,3,3);
checkSquare(0,3,0,3,3,6);
checkSquare(0,6,0,6,3,9);
checkSquare(3,0,3,0,6,3);
checkSquare(3,3,3,3,6,6);
checkSquare(3,6,3,6,6,9);
checkSquare(6,0,6,0,9,3);
checkSquare(6,3,6,3,9,6);
checkSquare(6,9,6,9,9,9);

return isSudoku;
}


sudoku2([[".","4",".",".",".",".",".",".","."], 
 [".",".","4",".",".",".",".",".","."], 
 [".",".",".","1",".",".","7",".","."], 
 [".",".",".",".",".",".",".",".","."], 
 [".",".",".","3",".",".",".","6","."], 
 [".",".",".",".",".","6",".","9","."], 
 [".",".",".",".","1",".",".",".","."], 
 [".",".",".",".",".",".","2",".","."], 
 [".",".",".","8",".",".",".",".","."]]);
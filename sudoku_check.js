                                               
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


for (w = a; w < 3; w++) {
  for (x = b; x < 3; x++) {
    count = 0;
    for (y = c; y < 3; y++) {
      for (z = d; z < 3; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            
            isSudoku = false;
              }
            }
         }
      }
}

for (w = 0; w < 3; w++) {
  for (x = 3; x < 6; x++) {
    count = 0;
    for (y = 0; y < 3; y++) {
      for (z = 3; z < 6; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            isSudoku = false;
              }
            }
         }
      }
}

for (w = 0; w < 3; w++) {
  for (x = 6; x < 9; x++) {
    count = 0;
    for (y = 0; y < 3; y++) {
      for (z = 6; z < 9; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            isSudoku = false;
              }
            }
         }
      }
}

for (w = 3; w < 6; w++) {
  for (x = 0; x < 3; x++) {
    count = 0;
    for (y = 3; y < 6; y++) {
      for (z = 0; z < 3; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            isSudoku = false;
              }
            }
         }
      }
}

for (w = 3; w < 6; w++) {
  for (x = 3; x < 6; x++) {
    count = 0;
    for (y = 3; y < 6; y++) {
      for (z = 3; z < 6; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            isSudoku = false;
              }
            }
         }
      }
}

for (w = 3; w < 6; w++) {
  for (x = 6; x < 9; x++) {
    count = 0;
    for (y = 3; y < 6; y++) {
      for (z = 6; z < 9; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            isSudoku = false;
              }
            }
         }
      }
}

for (w = 6; w < 9; w++) {
  for (x = 0; x < 3; x++) {
    count = 0;
    for (y = 6; y < 9; y++) {
      for (z = 0; z < 3; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            isSudoku = false;
              }
            }
         }
      }
}

for (w = 6; w < 9; w++) {
  for (x = 3; x < 6; x++) {
    count = 0;
    for (y = 6; y < 9; y++) {
      for (z = 3; z < 6; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            isSudoku = false;
              }
            }
         }
      }
}

for (w = 6; w < 9; w++) {
  for (x = 6; x < 9; x++) {
    count = 0;
    for (y = 6; y < 9; y++) {
      for (z = 6; z < 9; z++) {
      
        if(grid[w][x] == grid[y][z] && grid[y][z] != '.') {
        count += 1;
          }
          if (count > 1) {
            isSudoku = false;
              }
            }
         }
      }
}


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
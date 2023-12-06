/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const [rows,cols] = [matrix.length,matrix[0].length];
  let [top,bot,left,right] = [0,(rows-1),0,(cols-1)];
  let output=[];

  while((left<=right) && (top<=bot)){
    //Add top elements      
    for(let col=left;col<=right;col++){/* Time O(COLS) */
        output.push(matrix[top][col]);
    }
    top+=1;
    //Add right elements
    for(let row=top;row<=bot;row++) {/* Time O(ROWS) */
        output.push(matrix[row][right]);
    }
    right-=1;
    //Add bottom elements
    if(top<=bot){
        for(let col=right;left<=col;col--) {/* Time O(COLS) */
            output.push(matrix[bot][col]);
        }
        bot-=1;
    }
    //Add left elements
    if(left<=right){
        for(let row=bot;top<=row;row--) {/* Time O(ROWS) */
            output.push(matrix[row][left]);
        }
        left+=1;
    }
  }
  return output;
};
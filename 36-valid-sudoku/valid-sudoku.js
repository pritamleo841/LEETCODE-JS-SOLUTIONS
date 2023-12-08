/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //We will use 3 sets for each case
    let [rows,cols,boxes]=[new Set(),new Set(),new Set()];
    //Traverse through the board
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            let value = board[r][c];
            if(value=="."){
                continue;
            }
            //create keys to store/check for duplicate
            let [rowKey,colKey,boxKey]=[
                r+'row'+value,
                c+'col'+value,
                Math.floor(r/3)+'box'+Math.floor(c/3)+'box'+value
            ]
            //check for duplicate
            if(rows.has(rowKey) || cols.has(colKey) || boxes.has(boxKey)){
                return false;
            }
            //otherwise add to sets
            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }
    return true;
};
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const col = board[0].length;
    const row = board.length;
    //recursive backtracking solution
    const dfs = (r,c,i)=>{
        //if index has reached to the end of word, return 
        if(i==word.length){
            return true;
        }
        //if out of bounds, return
        if(r<0 || c<0 || r>=row || c>=col || word[i]!=board[r][c]){
            return false;
        }
        const originalChar = board[r][c];
        board[r][c]='#'; //mark the character which is visited
        //call dfs for neighbouring cells
        const found = (
            dfs(r+1,c,i+1) || dfs(r-1,c,i+1) || dfs(r,c+1,i+1) || dfs(r,c-1,i+1)
            );
        //revert back the cell to its original state
        board[r][c]=originalChar;
        //if any of a matching/unmatching word found return 
        return found;
    }
    //run dfs for all the cells in the word matrix
    for(let r=0;r<=row;r++){
        for(let c=0;c<=col;c++){
            if(dfs(r,c,0)){
                return true;
            }
        }
    }
    //if not found return false
    return false;
};
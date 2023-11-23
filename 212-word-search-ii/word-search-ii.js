/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
/**
1.Create a trie with all the words 
2.Iterate through every letter and run DFS if it's in the first layer of the trie 
3.DFS backtracking
 */
class Trie{
    constructor(words){
        this.root={};
        this.isWord=false;
        //add each word to trie data structure
        words.forEach(word=>this.addWord(word));
    }

    addWord(word){
        let curr=this.root;
        for(const letter of word){
            if(!curr[letter]){
                curr[letter]={};
            }
            curr=curr[letter];
        }
        curr.isWord=true;
    }
};

var findWords = function(board, words) {
    const rows = board.length;
    const cols = board[0].length;
    const trie=new Trie(words);
    const result=new Set();
    const visited=new Set();

    const dfs = (i,j,node,subResult)=>{
        //base cases : 1. out of bounds, 
        //2. letter doesn't exist in next prefix
        //3. letter already visited
        if(
            (i<0 || j<0 || i>=rows || j>=cols) 
            || 
            (!node[board[i][j]] || visited.has(`${i}${j}`))){
            return;
        }
        //add to visited set
        visited.add(`${i}${j}`);
        //add to subresult
        subResult+=board[i][j];
        //visit the trie node
        node=node[board[i][j]];
        //if leaf node in trie, add subResult to result array
        if(node.isWord){
            result.add(subResult);
        }
        //run dfs for all the neighbours to find next letter in trie node
        dfs(i+1,j,node,subResult);
        dfs(i-1,j,node,subResult);
        dfs(i,j+1,node,subResult);
        dfs(i,j-1,node,subResult);
        //after running all the dfs simulations , delete the visited node
        visited.delete(`${i}${j}`);
    };
    //loop through all the letters in trie
    for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
            if(trie.root[board[i][j]]){
                dfs(i,j,trie.root,"");
            }
        }
    }

    return [...result];
};
class TrieNode{
    constructor(){
        this.children={};
        this.end=false;
    }
};

var WordDictionary = function() {
    this.root = new TrieNode();    
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    
    let curr = this.root;
    for(const char of word){
        if(!curr.children[char]){
            curr.children[char]=new TrieNode();
        }
        curr=curr.children[char];
    }
    curr.end=true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (curr,idx) =>{
        //base case: if idx reaches word end, return curr.end flag
        if(idx==word.length){
            return curr.end;
        }
        //pick a char
        const char = word[idx];
        //check if it's a dot
        if(char == "."){
            //we go through all of the children of the current node. why?
            //we don't know which, if any, of the children can use the dot to make the given string.
            //so we go through all of them and check if any of them can return true.
            for(const char of Object.keys(curr.children)){
                const child = curr.children[char];
                 //recursively go to next iteration
                if(dfs(child,idx+1)){
                    return true;
                }
            }
            return false;
        }else{
            //if not dot and not char belonging to curr node,return false
            if(!curr.children[char]){
                return false;
            }
            //else recursively go to next iteration
            return dfs(curr.children[char],idx+1);
        }
    };
    return dfs(this.root,0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
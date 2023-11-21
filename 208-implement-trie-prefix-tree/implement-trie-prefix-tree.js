//construct a trie node at first
class TrieNode{
    constructor(){
        //use hashmap to store children characters
        this.children={};
        //endOfWord should be false at first
        this.endOfWord=false;
    }
}

var Trie = function() {
    //inititalize root node
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    //hold the current root node
    let curr = this.root;
    //traverse through the word
    for(const char of word){
        //if not present, create a trienode
        if(!curr.children[char]){
            curr.children[char] = new TrieNode();
        }
        //else traverse through the children nodes
        curr = curr.children[char];
    }
    //set endOfWord = true for indicating leaf/last node
    curr.endOfWord=true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    //hold the root node
    let curr = this.root;
    for(const char of word){
        //pattern matching and traverse
        if(curr.children[char]){
            curr=curr.children[char];
        }else{
            //if any word doesn't match, return false
            return false;
        }
    }
    //else return leaf node value
    return curr.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    //traverse each word,
    //if it already exists,traverse it,if not return false
    for(const char of prefix){
        if(curr.children[char]){
            curr=curr.children[char];
        }else{
            return false;
        }
    }
    //if we made it so far , return true (means prefix exists)
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
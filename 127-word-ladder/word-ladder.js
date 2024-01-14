/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    /**
    Concept:
        -- The problem can be thought of as looking for neighbors of a word, wherein each neighbor
           differs by one character at each position of the word. This is similar to BFS.
        
        Approach:
        1. Push the beginWord to a queue
        2. For each element removed from queue, check if it's equivalent to endWord and exit if true
        3. If not, try replacing each character of the word with one of the possible characters derived
           from all words
           -- Push all unseen valid characters onto queue for consideration at next level
           -- Increment number of transitions
           
        Steps 2 and 3 can be very exhaustive and repetitive for invalid words.
        As on optimization, we can create a map of word roots for each word with 1 substitution and
        group all words that can lead up to that state. For example, the 3 states for word 'hot' are:
        ['*ot', 'h*t', 'ho*'] and valid words that map to those combinations are:
        '*ot' -> [hot, dot, lot]
        'h*t' -> [hot]
        'ho*' -> [hot]
        // Time Complexity: O(WordLength^2 * numWords)
	    // => WordLength * (substring ops = O(WordLength)) * numWords

	    // Space Complexity: O(WordLength^2 * numWords)
	    // => WordLength * (substring ops = O(WordLength)) * numWords
     */
     const combinations={};
     //mapping wordRoot to word.e.g., '*ot'=>[hot,dot,lot]
     wordList.forEach(word=>{
         for(let i=0;i<word.length;i++){
             let wordRoot=word.substring(0,i)+'*'+word.substring(i+1);
             if(combinations[wordRoot]==undefined){
                 combinations[wordRoot]=[];
             }
             combinations[wordRoot].push(word);
         }
     });
    
    let queue=[beginWord];
    let transitions=0;
    const visitedWords=new Set();
    while(queue.length>0){
        const neighbors=[];
        while(queue.length>0){
            let word=queue.pop();
            if(word==endWord){
                return transitions+1;
            }
            //consider all roots possible from this word
            for(let i=0;i<word.length;i++){
                let wordRoot=word.substring(0,i)+'*'+word.substring(i+1);
                //consider all words that have the same root
                for(const neighbor of (combinations[wordRoot] || [])){
                    //If this word has been visited before,continue
                    //else consider it
                    if(!visitedWords.has(neighbor)){
                        visitedWords.add(neighbor);
                        neighbors.push(neighbor);
                    }
                }
            }
        }
        queue=neighbors;
        transitions++;
    }
    return 0;
};
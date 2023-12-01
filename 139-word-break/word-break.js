/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/***
The Dynamic Programming approach provides an efficient way to solve the word break problem by building up a solution iteratively. Here's a step-by-step description:

Initialization: We initialize a boolean array dp of length (n+1), where (n) is the length of the string s. The entry dp[i] will be True if there exists a word in the dictionary that ends at index (i-1) in the string s. We set dp[0] to True since an empty string can always be segmented.

Determine Maximum Word Length: We find the maximum length of a word in the dictionary using max_len = max(map(len, wordDict)). This helps us in reducing unnecessary iterations.

Iterate Through the String: We iterate through the string from index 1 to (n) (inclusive) and for each index i, we iterate from index (i-1) down to (i - \text{max_len} - 1) (or -1, whichever is larger).

Check for Segmentation: For each j in the range, we check if dp[j] is True and if the substring s[j:i] is in wordDict. If both conditions are met, we set dp[i] to True and break out of the inner loop. This means that there exists a valid segmentation ending at index (i-1).

Result: Finally, we return dp[n], which will be True if the entire string can be segmented into words from the dictionary.
*/
// var wordBreak = function(s, wordDict) {
//     let n = s.length;
//     let dp = new Array(n+1).fill(false);
//     //Base case 1- we can make an empty string, so 0 would be true
//     dp[0]=true;
//     let maxLen = Math.max(...wordDict.map(word=>word.length));

//     for(let i=1;i<=n;i++){
//         for(let j=i-1;j>=Math.max(i-maxLen-1,0);j--){
//             if(dp[j] && wordDict.includes(s.substring(j,i))){
//                 dp[i]=true;
//                 break;
//             }
//         }
//     }
//     return dp[n];
// };
const wordBreak = (s, wordDict) => {
    // Tablulation
    // Init our table, this will be boolean values since return is boolean
    const table = Array(s.length + 1).fill(false);
    // Seed our simple case, this would be base case in recursive solution
    // Basically, we can make an empty string, so 0 would be true
    // In our table, each index refers to the letter before
    // So table[0] is "", table[1] is "l", table[2] is "e", if testcase is "leetcode"
    table[0] = true;
    
    // Loop table
    for(let i = 0; i < table.length; i++) {
        // We only want to process if current table position is true
        if(!table[i]) continue;
        
        // Loop all letters in wordDict
        for(let w of wordDict) {
            // We want to test if word matches where we are in s, and the word
            // We can slice from i to i + w.length and compare with the word
            if(s.slice(i, i + w.length) === w) {
                // If we pass the condition above, and the table index we are trying to update is in bounds, update to true
                if(i + w.length <= table.length) table[i + w.length] = true;
            }
        }
    }
    
    // The last item in our table can be returned, as it will be updated to true if we found a solution
    return table[s.length];
};
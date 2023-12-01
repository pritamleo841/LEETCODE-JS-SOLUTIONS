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
var wordBreak = function(s, wordDict) {
    let n = s.length;
    let dp = new Array(n+1).fill(false);
    dp[0]=true;
    let maxLen = Math.max(...wordDict.map(word=>word.length));

    for(let i=1;i<=n;i++){
        for(let j=i-1;j>=Math.max(i-maxLen-1,0);j--){
            if(dp[j] && wordDict.includes(s.substring(j,i))){
                dp[i]=true;
                break;
            }
        }
    }
    return dp[n];
};
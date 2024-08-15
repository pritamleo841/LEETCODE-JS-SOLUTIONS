/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    //Sliding Window Template
    let i = 0, j = 0; 
    const N = s.length;
    const count = new Array(128).fill(0);  // Array to store frequency of characters
    let dup = 0, ans = 0;

    while (j < N) {
        if(++count[s.charCodeAt(j++)] == 2) { //any char more than two in a window
            dup++;
        }
        while (dup > 0) {
            if (--count[s.charCodeAt(i++)] == 1) {
                dup--;
            }
        }
        ans = Math.max(ans, j - i);
    }

    return ans;

    /**
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;   
    
    
     */
};
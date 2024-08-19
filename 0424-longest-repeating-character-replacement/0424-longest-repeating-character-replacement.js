/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let right = 0;
    let maxFreq = 0;
    const freqMap = new Array(26).fill(0); // Frequency map for 'A' to 'Z'
    
    let maxLength = 0;
    
    while (right < s.length) {
        const charIndex = s.charCodeAt(right) - 'A'.charCodeAt(0);
        freqMap[charIndex]++;
        maxFreq = Math.max(maxFreq, freqMap[charIndex]);
        
        // Check if the current window is valid
        while (right - left + 1 - maxFreq > k) {
            const leftCharIndex = s.charCodeAt(left) - 'A'.charCodeAt(0);
            freqMap[leftCharIndex]--;
            left++;
        }
        
        // Update the maxLength if the current window is valid
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
    
    return maxLength;
};
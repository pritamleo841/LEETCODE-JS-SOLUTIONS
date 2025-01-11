/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {

    /**
    Count the frequency of each character in the string using a Counter.
    Determine how many characters have an odd frequency.
    If the number of odd frequencies is greater than k, constructing k palindromes is not possible.
    Otherwise, it is possible. 
     */
    if (s.length < k) return false;

    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) oddCount++;
    }

    return oddCount <= k;


    // if (s.length < k) return false;

    // let chars = [...s].sort();
    // let oddCount = 0;

    // for (let i = 0; i < chars.length; ) {
    //     let current = chars[i];
    //     let count = 0;
    //     while (i < chars.length && chars[i] === current) {
    //         count++;
    //         i++;
    //     }
    //     if (count % 2 !== 0) oddCount++;
    // }

    // return oddCount <= k;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if (s.length < k) return false;

    let chars = [...s].sort();
    let oddCount = 0;

    for (let i = 0; i < chars.length; ) {
        let current = chars[i];
        let count = 0;
        while (i < chars.length && chars[i] === current) {
            count++;
            i++;
        }
        if (count % 2 !== 0) oddCount++;
    }

    return oddCount <= k;
};
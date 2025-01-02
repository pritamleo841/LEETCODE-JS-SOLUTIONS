/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {

    //Using Prefix sum method
    const vowels = 'aeiou';
    const res = [];
    const prefix = Array(words.length+1).fill(0);

    for(let i=0;i<words.length;i++){
        if(vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length-1])){
            prefix[i+1]=prefix[i]+1;
        }else{
            prefix[i+1]=prefix[i];
        }
    }

    for(const [start,end] of queries){
        res.push(prefix[end+1]-prefix[start]);
    }

    return res;

    //Brute force solution with TLE

    // let res = [];

    // const isVowel = (char) => {
    //     const vowels = 'aeiou';
    //     return vowels.includes(char);
    // }

    // const startsAndEndsWithVowel = (word) => {
    //     if (word.length === 0) return false;
    //     return isVowel(word[0]) && isVowel(word[word.length - 1]);
    // }

    // const countVowelStartingAndEndingWords = (li, ri) => {
    //     let count = 0;
    //     for (let i = li; i <= ri; i++) {
    //         if (startsAndEndsWithVowel(words[i])) {
    //             count++;
    //         }
    //     }
    //     return count;
    // }

    // let sum = 0;
    // for (let r = 0; r < queries.length; r++) {
    //     let [left, right] = queries[r];
    //     res.push(countVowelStartingAndEndingWords(left, right));
    // }

    // return res;


};
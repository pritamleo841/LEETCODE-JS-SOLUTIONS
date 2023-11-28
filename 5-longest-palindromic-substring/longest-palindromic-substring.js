/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    //EFFICIENT TECHNIQUE - TC : O(n*n)
    //EXPAND AROUND MIDDLE TO FIND LONGEST PALINDROME SUBSTRING

    let longest = 0;    //stores longest subtring length
    let currLen = 0;    //stores current substring length
    let indexes = [];   //stores, left and right indices of substring
    //function to check for longest palindrome
    const findLongestPalindrome = (left,right)=>{
        while(left>=0 && right<=s.length && s[left]==s[right]){
            currLen = right-left+1;
            if(currLen>longest){
                longest = currLen;
                indexes = [left,right];
            }
            left--;
            right++;
        }
    };
    //loop through the string
    for(let i=0;i<s.length;i++){
        //for odd length string
        findLongestPalindrome(i,i);
        //for even length string
        findLongestPalindrome(i,i+1);
    }
    //simply take the indices and reconstruct the substring
    const [left,right] = indexes;
    return s.substring(left,right+1);
};
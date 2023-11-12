/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // //First convert all the characters into lower case
    // s = convertToLowerCase(s);
    // //Second remove all the special chars
    // s = removeSpecialChars(s);
    // //Now check for palindrome
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] != s[s.length - 1 - i])
    //         return false;
    // }
    // return true;

    //Using two pointer method 
    let left=0;right=s.length-1;
    while(left<right){
        if(!isAlphaNumeric(s[left]))left++;
        else if(!isAlphaNumeric(s[right]))right--;
        else if(s[left].toLowerCase()!=s[right].toLowerCase())return false;
        else{
            left++;
            right--;
        }
    }
    return true;
};
const isAlphaNumeric = (char) =>{
    const code  = char.charCodeAt(0);
    return ((code>=48 && code<=57) || (code>=65 && code<=90) || (code>=97 && code<=122));
}
const convertToLowerCase = (str) => {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        var code = str.charCodeAt(i);
        if (code > 64 && code < 91) {
            result += String.fromCharCode(code + 32);
        } else {
            result += str.charAt(i);
        }
    }
    return result;
}
const removeSpecialChars = (s) =>{
    let temp = "";
    for (let i = 0; i < s.length; i++) {
        if (isAlphabet(s[i]) || isNumeric(s[i])) {
            temp += s[i]
        }
    }
    return temp;
}
const isAlphabet = (char) => {
    if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        return true;
    }
    return false;
}
const isNumeric = (char) =>{
    let code = char.charCodeAt(0);
    if (code >=48 && code <= 57){
        return true;
    }
    return false;
}
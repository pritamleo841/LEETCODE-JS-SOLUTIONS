/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    //edge cases
    if(!s.length || !t.length || s.length<t.length) return '';
    if(s==t)return s;

    //get a frequency map of substring to be found in main string
    let frequencyMap = {};
    for (const char of t) {
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    let [left,right,neededLength,substring]=[0,0,Object.keys(frequencyMap).length,''];
    //loop through the right pointer of sliding window
    while(right<s.length){
        const rightChar = s[right];
        frequencyMap[rightChar]-=1;
        if(frequencyMap[rightChar]===0)neededLength--;
        while(neededLength==0){
            if(!substring || substring.length>right-left+1){
                substring = s.slice(left,right+1);
            }
            const leftChar = s[left];
            if(frequencyMap[leftChar]===0)neededLength++;

            frequencyMap[leftChar]+=1;
            left++;
        }
        right++;
    }
    return substring;

//      For most substring problem, 
//we are given a string and need to find a substring of it which satisfy some restrictions. 
//A general way is to use a hashmap assisted with two pointers. The template is given below.

// int findSubstring(string s){
//         vector<int> map(128,0);
//         int counter; // check whether the substring is valid
//         int begin=0, end=0; //two pointers, one point to tail and one  head
//         int d; //the length of substring

//         for() { /* initialize the hash map here */ }

//         while(end<s.size()){

//             if(map[s[end++]]-- ?){  /* modify counter here */ }

//             while(/* counter condition */){ 
                 
//                  /* update d here if finding minimum*/

//                 //increase begin to make it invalid/valid again
                
//                 if(map[s[begin++]]++ ?){ /*modify counter here*/ }
//             }  

//             /* update d here if finding maximum*/
//         }
//         return d;
//   }
//     }
};
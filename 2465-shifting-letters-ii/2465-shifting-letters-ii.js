/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {

    //TLE exceeded for Brute force method
    // const dir = {
    //     'a': {0: 'z', 1: 'b'},
    //     'b': {0: 'a', 1: 'c'},
    //     'c': {0: 'b', 1: 'd'},
    //     'd': {0: 'c', 1: 'e'},
    //     'e': {0: 'd', 1: 'f'},
    //     'f': {0: 'e', 1: 'g'},
    //     'g': {0: 'f', 1: 'h'},
    //     'h': {0: 'g', 1: 'i'},
    //     'i': {0: 'h', 1: 'j'},
    //     'j': {0: 'i', 1: 'k'},
    //     'k': {0: 'j', 1: 'l'},
    //     'l': {0: 'k', 1: 'm'},
    //     'm': {0: 'l', 1: 'n'},
    //     'n': {0: 'm', 1: 'o'},
    //     'o': {0: 'n', 1: 'p'},
    //     'p': {0: 'o', 1: 'q'},
    //     'q': {0: 'p', 1: 'r'},
    //     'r': {0: 'q', 1: 's'},
    //     's': {0: 'r', 1: 't'},
    //     't': {0: 's', 1: 'u'},
    //     'u': {0: 't', 1: 'v'},
    //     'v': {0: 'u', 1: 'w'},
    //     'w': {0: 'v', 1: 'x'},
    //     'x': {0: 'w', 1: 'y'},
    //     'y': {0: 'x', 1: 'z'},
    //     'z': {0: 'y', 1: 'a'}
    // };
    // //console.log(dir['a'][0],dir['z'][1]);
    // let sArray = s.split(''); // Convert string to array for easy manipulation
    // for (let i = 0; i < shifts.length; i++) {
    //     const [start, end, direction] = shifts[i];
    //     for (let j = start; j <= end; j++) {
    //         sArray[j] = dir[sArray[j]][direction]; // Update characters based on shift
    //     }
    // }
    // return sArray.join('');

    /**
    Formula for Marking the Range:
    If the direction is right:
         Diff[L] += 1 and Diff[R+1] -= 1
    If the direction is left:
         Diff[L] -= 1 and Diff[R+1] += 1
    */

    //Line sweep + Prefix sum algorithm
    const n = s.length;
    const prefix = Array(n+1).fill(0);

    for(const [start,end,dir] of shifts){
        const val = (dir===1)?1:-1;
        prefix[start]+=val;
        prefix[end+1]-=val;
    }

    //find prefix sum
    for(let i=1;i<n;i++){
        prefix[i]+=prefix[i-1];
    }

    //replace with the prefix index character
    let result = s.split('');
    for(let i=0;i<n;i++){
        let totalShift = prefix[i];
        totalShift = ((totalShift)%26+26)%26; //wrapping
        const newChar = ((s.charCodeAt(i)-97+totalShift)%26)+97;
        result[i]=String.fromCharCode(newChar);
    }
    return result.join('');
};
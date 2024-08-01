/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count=0;
    for(let person of details){
        let age = person.substring(11,13);
        if(age>60)count++;
    }
    return count;
};
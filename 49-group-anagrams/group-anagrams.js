/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let tempStrs = [...strs];
    //Sort the string elements of temp array
    for(let i=0;i<tempStrs.length;i++){
        tempStrs[i]=sortString(tempStrs[i]);
    }
    //Map unique string values wrt sorted keys
    for(let i=0;i<tempStrs.length;i++){
        map.set(tempStrs[i],map.get(tempStrs[i])?map.get(tempStrs[i]).concat(strs[i]):[].concat(strs[i]));
    }
    //Use map iterator to push map key values into result array
    const mapItr = map.values();
    let i=0;
    let result = [];
    while(i<map.size){
        result.push(mapItr.next().value);
        i++;
    }
    return result;

};
var sortString = (str) =>{
    return str.split('').sort().join('');
}
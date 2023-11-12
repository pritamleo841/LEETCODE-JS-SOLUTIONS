/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    //count frequency of each element
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i]) || 0)+1);
    }
    //iterate the entries map, get all the keys sorted by the highest to lowest of the values 
    let result = [...map.keys()].sort((a,b)=>map.get(b)-map.get(a)).slice(0,k);

    //THE LOWER METHOD TOOK MORE TIME AS I WAS CONVERTING MAP TO ARRAY OF OBJECTS
    //THEN SORT,THEN AGAIN LOOPING TO GET TOP K ELEMENTS
    
    //convert map into array of objects
    // let array = Array.from(map, ([key, value]) => ({ key, value }));

    //sort the array of objects into descending order
    // array.sort((a,b)=>b.value-a.value);

    //push top k elements into an array
    // let i=0;
    // let result = [];
    // while(i<k){
    //     result.push(array[i].key);
    //     i++;
    // }
    
    return result;
};
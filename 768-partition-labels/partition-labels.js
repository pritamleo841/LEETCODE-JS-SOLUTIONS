/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    //Map <char,lastIndex_Appearing>
    let map=new Map();
    for(let i=0;i<s.length;i++){
        map.set(s[i],i);
    }
    //store size of each partition 
    //maintain size and end positions of a partition
    let output=[];
    let [size,end]=[0,0];
    for(let i=0;i<s.length;i++){
        size+=1;
        //get max length of a end character
        end=Math.max(end,map.get(s[i]));
        if(i==end){
            //reset
            output.push(size);
            size=0;
        }
    }
    return output;
};
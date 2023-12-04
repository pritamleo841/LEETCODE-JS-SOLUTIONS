/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let [start,end]=newInterval;
    let left=[];
    let right=[];
    //<left interval>...[start,end]...<right interval>
    for(let interval of intervals){
        const [first,last]=interval;
        //current interval is smaller than newInterval
        if(last<start){
            left.push(interval);
        }
        //current interval is larger than newInterval
        else if(first>end){
            right.push(interval);
        }
        //if there is a overlap, merge and update boundary
        else{
            start = Math.min(start,first);
            end = Math.max(end,last);
        }
    }
    return [...left,[start,end],...right];
};
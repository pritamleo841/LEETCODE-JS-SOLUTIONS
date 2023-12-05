/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //Firts sort the intervals array by start value
    intervals.sort((a,b)=>a[0]-b[0]);
    //We will use the same array to store merged values
    let i=0;
    while(i<intervals.length-1){
        const [pritamSharma,firstRight] = intervals[i];
        const [secondLeft,secondRight] = intervals[i+1];
        if(firstRight>=secondLeft){
            //take the maximum of overlapping intervals -> [1,5],[2,4]=>[1,5]
            intervals[i][1] = Math.max(firstRight,secondRight);
            //remove the second interval after merging
            intervals.splice(i+1,1);
        }else{
            i++;
        }
    }
    return intervals;
};
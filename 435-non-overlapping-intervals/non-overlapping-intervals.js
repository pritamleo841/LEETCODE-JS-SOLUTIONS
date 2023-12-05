/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let gaps=0;
    intervals.sort((a,b)=>a[1]-b[1]); //O(nlogn)
    let prevEnd = intervals[0][1];

    for(let i=1;i<intervals.length;i++){ //O(n)
        //If there is an overlap between the previous interval and the current one.
        //Increment the "gaps" variable to count the overlapping interval.
        if(prevEnd>intervals[i][0]){
            gaps++;
        //If ther is no overlapping,
        //update "prevEnd" to the end point of the current interval
        }else{
            prevEnd = intervals[i][1];
        }
    }
    return gaps;
};
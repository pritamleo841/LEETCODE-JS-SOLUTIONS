/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    //we can use sorting to find k closest points
    return points.sort((a,b)=>(a[0]*a[0]+a[1]*a[1])-(b[0]*b[0]+b[1]*b[1])).slice(0,k);
};
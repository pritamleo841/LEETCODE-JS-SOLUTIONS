
var DetectSquares = function () {
    this.points = new Map();
};

/** 
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
    const savedPoint = this.points.has(`${point[0]}_${point[1]}`) ?
        this.points.get(`${point[0]}_${point[1]}`) :
        { x: point[0], y: point[1], count: 0 };;

    savedPoint.count = savedPoint.count + 1;

    this.points.set(`${point[0]}_${point[1]}`, savedPoint);
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
    let count = 0;

    for (const diagPoint of this.points.values()) {
        // if you are at the same x or y, you are not diagonal to me, and we cant form a square
        if (diagPoint.x === point[0] || diagPoint.y === point[1]) continue;

        // you might be diagonal to me, but do we form a square?
        if (Math.abs(diagPoint.x - point[0]) !== Math.abs(diagPoint.y - point[1])) continue;

        // we a 100% form a square
        const point1 = this.points.get(`${diagPoint.x}_${point[1]}`);
        const point2 = this.points.get(`${point[0]}_${diagPoint.y}`);

        // but do our missing points exist?
        if (!point1 || !point2) continue;

        count = count + point1.count * point2.count * diagPoint.count;
    }
    return count;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let count=0;
    let map = new Map();
    let lastTime = -1; //the time the last car reached target
    //store car postion and its speed
    for(let i=0;i<position.length;i++){
        map.set(position[i],speed[i]);
    }
    //sort cars with their position,first car closest to target(reverse order)
    const sortedPos = [...map.keys()].sort((a,b)=>b-a);

    for(let i=0;i<position.length;i++){
        let time = (target-sortedPos[i])/map.get(sortedPos[i]);
        //Case 1: If our curr car is fast and takes even less time to reach target then our last car, they will be merged
        //Case 2: Our current car takes more time to reach target, it cant merge with the last car it has to be a new fleet
        if(time>lastTime){
            count++;
            lastTime=time;
        }
    }
    return count;
};
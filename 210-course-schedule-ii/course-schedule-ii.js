/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const [order,queue]=[[],[]];
    const graph=new Map();
    const indegree=Array(numCourses).fill(0);
     //build graph map
    for(const [e,v] of prerequisites){
        if(graph.has(v)){
            graph.get(v).push(e);
        }else{
            graph.set(v,[e]);
        }
        //build indegree array
        indegree[e]++;
    }
    //If there in degrees is equal to 0, 
    //this means there are no prerequisites for these courses,
    //so we can add it to our queue
    for(let i=0;i<indegree.length;i++){
        if(indegree[i]==0)queue.push(i);
    }
    //perform topological sort by dequeu a course
    while(queue.length){
        let prereq = queue.shift();
        if(graph.has(prereq)){
            for(let course of graph.get(prereq)){
                //For each dequeued course, 
                //we want to decrement their in degrees of its dependent course.
                indegree[course]-=1;
                //prerequisites have been fulfilled, so we can enqueue it
                if(indegree[course]==0){
                    queue.push(course);
                }
            }
        }
        order.push(prereq);
    }
    return (numCourses==order.length)?order:[];
};
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

/**
Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u-v, vertex u comes before v in the ordering.

Note: Topological Sorting for a graph is not possible if the graph is not a DAG.
*/
var canFinish = function(numCourses, prerequisites) {
    //adjacency list to store course dependencies
    let graph = new Array(numCourses).fill(0).map(()=>[]);
    //indegree list to store number of prerequisites for each course
    let indegree = new Array(numCourses).fill(0);
    let queue=[];
    /**
    Adjacency list to represent the course dependencies of bi to ai 
    by traversing through prerequisites as 
    we also increment their in degree by 1 based on the current course
    */
    for(let [course,prereq] of prerequisites){
        graph[prereq].push(course);
        indegree[course]+=1;
    }
    // If there in degrees is equal to 0, 
    // this means there are no prerequisites for these courses,
    // so we can add it to our queue
    for(let course=0;course<numCourses;course++){
        if(indegree[course]==0){
            queue.push(course);
        }
    }
    //perform topological sort by dequeu a course
    while(queue.length){
        let prereq = queue.shift();
        numCourses-=1;
        for(let course of graph[prereq]){
            //For each dequeued course, 
            //we want to decrement their in degrees of its dependent course.
            indegree[course]-=1;
            //prerequisites have been fulfilled, so we can enqueue it
            if(indegree[course]==0){
                queue.push(course);
            }
        }
    }
    //after topological sorting,if there are any remaining courses-> numCourse != 0
    //means it is possible to finish all the courses as all the courses 
    //have been successfully ordered in a way that satisfies the prerequisites.
    return (numCourses===0);
    /**
    TC : O(V+E), SC : O(V+E)
    */
};
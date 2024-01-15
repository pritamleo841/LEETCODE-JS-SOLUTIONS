/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    // //Graph DFS+Map problem : TC : O(E*E) due to backtracking, SC : O(E)
    // // TIME LIMIT EXCEEDED
    // //first sort the tickets array to store adjacency list in sorted order
    // tickets.sort();
    // //build the graph
    // let graph=new Map();
    // for(const [source,dist] of tickets){
    //     const edges=(graph.get(source)||[]);
    //     edges.push(dist);
    //     graph.set(source,edges);
    // }
    // //dfs call 
    // let path=["JFK"]; //start from JFK
    // const dfs = (city)=>{
    //     //ticket+1 for JFK
    //     if(path.length==(tickets.length+1)){
    //         return true;
    //     }
    //     const queue=(graph.get(city)||[]);
    //     //if no more city to visit, return false
    //     if(queue.length==0){
    //         return false;
    //     }
    //     //traverse through the neighbors of current city
    //     //need a copy of queue array
    //     for(const nextCity of queue.slice()){
    //         path.push(nextCity);
    //         queue.shift();
    //         if(dfs(nextCity))return path;
    //         //if no next city found, backtrack here to the previous city
    //         path.pop();
    //         queue.push(nextCity);
    //     }
    //     return false;
    // };
    // return dfs("JFK");

    //construct a graph
    const graph={};
    for(const [src,dst] of tickets){
        if(!graph[src])graph[src]=[];
        graph[src].push(dst);
    }
    //sort the keys
    for(const key in graph){
        graph[key].sort().reverse();
    }
    //construct itinerary
    const path=[];
    const dfs = (airport)=>{
        while(graph[airport] && graph[airport].length>0){
            dfs(graph[airport].pop());
        }
        path.push(airport);
    };
    dfs("JFK");
    return path.reverse();
    

};
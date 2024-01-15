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
        //These lists of destinations are sorted in reverse lexical order. This allows us to pop the last element to ensure that we are choosing the smallest lexical order when there are multiple options.
        graph[key].sort().reverse();
    }
    //construct itinerary
    const path=[];
    const dfs = (airport)=>{
        //Inside this function, we enter a loop that continues until we find an airport that has no more destinations left to visit. This is done by checking the adjacency list for each airport and popping the last element (which is the smallest in lexical order).
        while(graph[airport] && graph[airport].length>0){
            dfs(graph[airport].pop());
        }
        path.push(airport);
    };
    dfs("JFK");
    //Since we constructed the itinerary in reverse, the final step is to reverse this list. This gives us the correct order of airports to visit, starting from JFK, and is our final solution.
    return path.reverse();
    

};
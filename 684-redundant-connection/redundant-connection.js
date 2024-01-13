/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    /**
    With Union-Find, we must define two functions:union and find. 
    1.  The find function will recursively trace a node's lineage 
    back to its ultimate parent and update its value in the
    parent array (par), providing a shortcut for the next link.
    2.  The union function merges two segments by assigning 
    the ultimate parent of one segment to another.
    */
    /*** TC: O(n) where n = no. of edges
    We can iterate through edges and find both vertices of 
    the edge to see if they belong to the same segment. 
        If so, we've located our redundant edge and can return it.
    If not, we should merge the two different segments with union
    */
    let par = Array.from({length:edges.length+1},(_,i)=>i);
    const find = (x) =>{
        return x===par[x]?par[x]:par[x]=find(par[x])
    };
    const union =(x,y) =>{
        par[find(y)]=find(x);
    };
    //loop through the edges
    for(let [e1,e2] of edges){
        if(find(e1)===find(e2))return [e1,e2];
        else union(e1,e2);
    }
};
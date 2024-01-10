/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    //we need to visit each island and count the area
    let [maxArea,n,m]=[0,grid.length,grid[0].length];
    const dfs=(r,c)=>{
        //out of bounds check
        if((r<0 || c<0) || (r>=n || c>=m) || !grid[r][c])return 0;
        //if visit land, make it 0(water) to reduce calls
        grid[r][c]=0;
        //count 1 for present land
        return 1 + dfs(r+1,c)+dfs(r-1,c)+dfs(r,c+1)+dfs(r,c-1);
    };
    //go through each cell and find max area
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(grid[i][j]){
                maxArea=Math.max(maxArea,dfs(i,j));
            }
        }
    }
    return maxArea;
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   
    let n = height.length;
    let maxArea=0;
    let currArea=0;
    //BRUTE FORCE (Time Limit Exceeded)
    //Check every possible combinations [(i,i+1),(i,i+2),....,(n-1,n)]
    // for(let i=0;i<n-1;i++){
    //     for(let j=i+1;j<n;j++){
    //         //Take minimum height as pouring more water than minimum height will outpour
    //         // Rectangular Area, Height = Math.min(h(i),h(j)), Width = (j-i)
    //         currArea = Math.min(height[i],height[j])*(j-i);
    //         //Store the maximum rectangular area
    //         maxArea = Math.max(maxArea,currArea);
    //     }
    // }
    //TWO POINTER METHOD
    let left=0,right=n-1;
    while(left<right){
        currArea = Math.min(height[left],height[right])*(right-left);
        maxArea = Math.max(maxArea,currArea);
        //Check only which side heigth is maximum, move the pointer opposite to your
        //maximum height pointer
        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return maxArea;
    
};
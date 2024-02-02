/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    /**
    1. Iterate through starting digits from 1 to 9.
    2. For each starting digit, build a sequential number by adding consecutive digits until reaching 9 or exceeding the high value.
    3. Add valid sequential numbers to a vector (a).
    4. Sort the vector.
    */
    let output=[];
    for(let i=1;i<=9;i++){
        let num=i;
        let nextDigit=i+1;
        while(num<=high && nextDigit<=9){
            num=num*10+nextDigit;
            if(low<=num && num<=high)output.push(num);
            nextDigit++;
        }
    }
    output.sort((a,b)=>a-b);
    return output;

    //BRUTE-FORCE ------------------
    // let output=[];
    // const isSequential=(n)=>{
    //     let temp=n;
    //     let res=-1,prevRes=-1;
    //     while(temp!=0){
    //         prevRes=res;
    //         res=temp%10;
    //         temp=Math.floor(temp/10);
    //         if(prevRes==-1)continue;
    //         if(prevRes!==res+1){
    //             return false;
    //         }
    //     }
    //     return true;
    // };
    // for(let i=low;i<=high;i++){
    //     if(!isSequential(i))continue;
    //     output.push(i);
    // }
    // return output;
};
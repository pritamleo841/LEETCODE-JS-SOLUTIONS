//GOOD FOR LEARNING PURPOSE OF HEAP DATA STRUCTURE
//SOLUTION BY theesoteric Jun 01, 2021

var MedianFinder = function() {
    this.left = new Heap("max");
    this.right = new Heap("min");
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
   if(this.left.getSize()===0){//Lets's put first element in left only
        this.left.insert(num);
        return ;
    }
    if(this.left.getSize()>this.right.getSize()){
        if(num<=this.left.getTop()){//As 'left' was already having more values and the new value is also going to the left part, so after insertion, we will remove a value from left part and insert it to the right part, so the values in both the parts become equal
            this.left.insert(num);
            this.right.insert(this.left.removeTop());
        }else{
            this.right.insert(num);
        }
    }else if(this.right.getSize()>this.left.getSize()){//As 'right' was already having more values and the new value is also going to the right part, so after insertion, we will remove a value from right part and insert it to the left part, so the values in both the parts become equal.
        if(num>=this.right.getTop()){
            this.right.insert(num);
            this.left.insert(this.right.removeTop());
        }else{
            this.left.insert(num);
        }
    }else {//If both the parts were having the same number of values, then we will just check and insert the new num in the relevant part. After this  insertion the part where we inserted the new num will have 1 element more than the other part, having a difference of 1 element is fine. 
        if(num<=this.left.getTop()){
            this.left.insert(num);
        }else{
            this.right.insert(num);
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
     if(this.left.getSize()>this.right.getSize()){
        return this.left.getTop();
    }else if(this.right.getSize()>this.left.getSize()){
        return this.right.getTop();
    }else{
        return (this.left.getTop()+this.right.getTop())/2;
    }
};
class Heap{
        constructor(type){
            this.type = type;
            this.data = [];
            this.data[0] = undefined;
        }

        getSize(){
            return this.data.length-1;
        }

        insert(value){
            this.data.push(value);
            if(this.data.length==2){
                return ;
            }
            let lastIndex = this.data.length-1;
            while(this.data[Math.floor(lastIndex/2)]!==undefined && this.compare(this.data[lastIndex],this.data[Math.floor(lastIndex/2)])>0){
                let temp = this.data[Math.floor(lastIndex/2)];
                this.data[Math.floor(lastIndex/2)] = this.data[lastIndex];
                this.data[lastIndex] = temp;
                lastIndex = Math.floor(lastIndex/2);
            }
        }
        //This returns a positive number if a is greater than b. Here meaning of being greater depends on the type of heap. For max heap it will return positive number if a>b and for min heap it will return positive number if a<b . 
        compare(a,b){
            if(this.type==="min"){
                return b-a;
            }else{
                return a-b;
            }
        }
        removeTop(){
            let max = this.data[1];
            if(this.getSize()>1){
                this.data[1] = this.data.pop();
                this.heapify(1);
            }else{//If the size is 0 then just remove the element, no shifting and hipify will be applicable
                this.data.pop();
            }
            return max;
        }
        getTop(){
            let max = null;
            if(this.getSize()>=1){
                max = this.data[1];
            }
            return max;
        }
        heapify(pos){
            if(pos*2>this.data.length-1){
                //That means element at index 'pos' is not having any child
                return;
            }
            if(
                (this.data[pos*2]!==undefined && this.compare(this.data[pos*2],this.data[pos])>0)
              || (this.data[pos*2+1]!==undefined && this.compare(this.data[pos*2+1],this.data[pos])>0)
              ){
                if(this.data[pos*2+1]===undefined || this.compare(this.data[pos*2+1],this.data[pos*2])<=0){
                    let temp = this.data[pos*2];
                    this.data[pos*2] = this.data[pos];
                    this.data[pos] = temp;
                    this.heapify(pos*2);
                }else{
                    let temp = this.data[pos*2+1];
                    this.data[pos*2+1] = this.data[pos];
                    this.data[pos] = temp;
                    this.heapify(pos*2+1);
                }
            }
        }
}
/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
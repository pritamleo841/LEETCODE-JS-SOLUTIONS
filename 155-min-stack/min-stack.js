class Node{
    //Create a node with <curr_value,minimum_value,next_ptr>
    constructor(val,min,next){
        this.val=val;
        this.min=min;
        this.next=next;
    }
}
var MinStack = function() {
    this.head=null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    //Stack : add at beginning
    this.head = (!this.head)? new Node(val,val,null) : new Node(val,Math.min(this.head.min,val),this.head);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    //Stack : remove from beginning
    this.head = this.head.next;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.head.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.head.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
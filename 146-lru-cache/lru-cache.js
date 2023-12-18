class Node{
    constructor(key,val){
        this.key=key;
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}
class DLL{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    //insert at right end
    push(key,val){
        const newNode = new Node(key,val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return newNode;
    }
    //remove node from any position
    remove(node){
        if(!node.next && !node.prev){ //if only 1 node
            this.head=null;
            this.tail=null;
        }
        else if(!node.next){    //if node is tail node
            this.tail=node.prev;
            this.tail.next=null;
        }
        else if(!node.prev){    //if node is head node
            this.head=node.next;
            this.head.prev=null;
        }
        else{   //if node is in between
            const prv=node.prev;
            const nxt = node.next;
            prv.next=nxt;
            nxt.prev=prv;
        }
        this.length--;
    }
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.dll = new DLL();
    this.map={}; //store pairs as <key,pointer>
    this.capacity=capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map[key]){
        return -1;
    }
    //remove the key and add at right end as most recently used
    const val = this.map[key].val;
    this.dll.remove(this.map[key]);
    this.map[key]=this.dll.push(key,val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //if already a key, remove it
    if(this.map[key]){
        this.dll.remove(this.map[key]);
    }
    //push at right end
    this.map[key]=this.dll.push(key,value);
    //if capacity overflows
    if(this.dll.length>this.capacity){
        const currKey=this.dll.head.key;
        delete this.map[currKey];
        this.dll.remove(this.dll.head);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
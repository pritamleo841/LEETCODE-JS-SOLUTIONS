
var TimeMap = function() {
    //We store as <key,[[v1,t1],..[vn,tn]]>
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    //if not key preset, set [] list in key
    const list = this.map[key] || [];
    this.map[key] = list;
    //we push new value into list
    list.push([value,timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let list = this.map[key] || [];
    let res = '';
    let [left,right] = [0,list.length-1];
    //Binary Search - O(logn)
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        const [v,t] = list[mid];
        if(timestamp==t){
            return v;
        }
        //if t<=timestamp, we store v to return
        if(timestamp>=t){
            left=mid+1;
            res=v;
        //else we shrink
        }else{
            right=mid-1;
        }
    }
    return res;

};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

var Twitter = function() {
    this.tweetsByUser=new Map();
    this.followList=new Map();
    this.time=0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    let tweet=this.tweetsByUser.get(userId)||[];
    tweet.push([tweetId,++this.time]);
    this.tweetsByUser.set(userId,tweet);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let feed=[],final=[],count=0;
    let heap=new MaxPriorityQueue();

    for(let [key,value] of this.tweetsByUser){
        for(v of value){
            heap.enqueue([key,v],v[1]);
        }
    }
    while(heap.size()>0){
        let tweet=heap.dequeue();
        let list=String(this.followList.get(userId)).split(',').map(Number);
        if((list.includes(tweet.element[0]) || tweet.element[0]==userId) && count<10){
            feed.push(tweet.element[1][0]);
            count++;
        }
    }
    return feed;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    let following=this.followList.get(followerId)||[];
    if(!following.includes(followeeId)){
        following.push(followeeId);
    }
    this.followList.set(followerId,following);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    let userFollowId=this.followList.get(followerId);
    if(!userFollowId)return;
    this.followList.delete(followerId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
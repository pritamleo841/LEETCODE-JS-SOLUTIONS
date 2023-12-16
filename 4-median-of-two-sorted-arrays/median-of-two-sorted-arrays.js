/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    //TC : O(log(min(m,n))) , SC : O(1)

    /***
    Swap nums1 and nums2 if nums1 is larger. This ensures we always binary search the smaller array, 
    */
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    //Initialize low to 0 and high to the size of the smaller array.
    let low = 0, high = m;

    while (low <= high) {
        /**
        partitionX and partitionY: To store the partition indices nums1 and nums2 respectively.
        maxX, minX, maxY, minY: To store the values around the partition in both arrays
        */
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
        const maxY = (partitionY === 0) ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];

        const minX = (partitionX === m) ? Number.MAX_SAFE_INTEGER : nums1[partitionX];
        const minY = (partitionY === n) ? Number.MAX_SAFE_INTEGER : nums2[partitionY];
        /**
        If we have L1 > R2, it means there are too many large numbers on the left half of A1, 
        then we must move C1 to the left (i.e. move C2 to the right);

        If L2 > R1, then there are too many large numbers on the left half of A2,
        and we must move C2 to the left.

        Otherwise, this cut is the right one.After we find the cut,
        the medium can be computed as (max(L1, L2) + min(R1, R2)) / 2;
        */
        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
};
/***
Key points:: 

1. We want to make two cuts, separating nums1 into [. . . . L1 | R1 . . . ] and nums2 into [. . . . L2 | R2 . . . ] respectively, so that [. . . . L1] + [. . . . L2] has equal number of elements as [R1 . . . ] + [R2 . . . ]. Our goal is to find such cutting positions that give us the median values.

2. For an array of length N, there are 2*N + 1 different cutting positions.

3. Cutting on a gap is simple. Cutting on a number means both left half and right half get the number.

4. With two arrays, a valid cutting position that gives the median can be ANY cutting position of the shorter array. This is not true for the longer array. Therefore, we always cut the shorter array, and then calculate the cutting position of longer array directly(by using the fact that each half has the same number of cutting positions). We want to make nums1 always point to the shorter array for convenience.

5. Using binary search, If L1 > R2, we know current cutting position is incorrect. A valid cutting position for median should be on the left half of nums1.

6. If L2 > R1, we know current cutting position is incorrect. A valid cutting position for median should be on the right half of nums1.

7. If L1 < R2 and L2 < R1, we are good. median = (max(L1, L2) + min(R1, R2)) / 2
**/
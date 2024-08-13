/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    // Get the lengths of the two arrays
    const len1 = nums1.length;
    const len2 = nums2.length;

    // Set the range for binary search on nums1
    let left = 0;
    let right = len1;

    while (left <= right) {
        // Partition nums1 and nums2
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = Math.floor((len1 + len2 + 1) / 2) - partition1;

        // Find the maximum elements on the left of the partition
        const maxLeft1 = partition1 > 0 ? nums1[partition1 - 1] : Number.NEGATIVE_INFINITY;
        const maxLeft2 = partition2 > 0 ? nums2[partition2 - 1] : Number.NEGATIVE_INFINITY;
        const maxLeft = Math.max(maxLeft1, maxLeft2);

        // Find the minimum elements on the right of the partition
        const minRight1 = partition1 < len1 ? nums1[partition1] : Number.POSITIVE_INFINITY;
        const minRight2 = partition2 < len2 ? nums2[partition2] : Number.POSITIVE_INFINITY;
        const minRight = Math.min(minRight1, minRight2);

        // Check if the partition is correct
        if (maxLeft <= minRight) {
            // If the total length is even, return the average of the two middle elements
            if ((len1 + len2) % 2 === 0) {
                return (maxLeft + minRight) / 2;
            }
            // If the total length is odd, return the middle element
            else {
                return maxLeft;
            }
        } else if (maxLeft1 > minRight2) {
            right = partition1 - 1;
        } else {
            left = partition1 + 1;
        }
    }
};